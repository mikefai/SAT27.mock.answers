/* SVG figure builders. Every figure is redrawn from data (not scanned
   images) so it stays crisp and follows the light/dark theme via CSS
   classes defined in styles.css. */
(function () {
  'use strict';
  let uid = 0;
  const r = v => Math.round(v * 100) / 100;
  const fmtNeg = v => (v < 0 ? '−' + Math.abs(v) : String(v));

  /* Coordinate plane.
     o: {xmin,xmax,ymin,ymax, gx,gy (grid), lx,ly (label step), w,h,
         xlabel,ylabel, showO, alt, firstQuadrant, xTitle, yTitle}
     draw(api) returns inner SVG; api = {X,Y,fn,seg,dot,poly} */
  function plane(o, draw) {
    const id = 'clip' + (++uid);
    const W = o.w || 300, H = o.h || 300;
    const m = { l: o.ml != null ? o.ml : 16, r: o.mr != null ? o.mr : 16, t: o.mt != null ? o.mt : 16, b: o.mb != null ? o.mb : 16 };
    const gx = o.gx || 1, gy = o.gy || 1, lx = o.lx || gx, ly = o.ly || gy;
    const sx = (W - m.l - m.r) / (o.xmax - o.xmin);
    const sy = (H - m.t - m.b) / (o.ymax - o.ymin);
    const X = x => r(m.l + (x - o.xmin) * sx);
    const Y = y => r(m.t + (o.ymax - y) * sy);
    const ax0 = Math.min(Math.max(0, o.ymin), o.ymax); // y value where the x-axis sits
    const ay0 = Math.min(Math.max(0, o.xmin), o.xmax);
    let s = '<svg viewBox="0 0 ' + W + ' ' + H + '" width="' + W + '" role="img" aria-label="' + (o.alt || 'Coordinate graph') + '">';
    s += '<defs><clipPath id="' + id + '"><rect x="' + X(o.xmin) + '" y="' + Y(o.ymax) + '" width="' + r(X(o.xmax) - X(o.xmin)) + '" height="' + r(Y(o.ymin) - Y(o.ymax)) + '"/></clipPath>' +
      '<marker id="ar' + id + '" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L8,4 L0,8 z" fill="currentColor"/></marker></defs>';
    // grid
    for (let x = Math.ceil(o.xmin / gx) * gx; x <= o.xmax + 1e-9; x += gx) s += '<line class="gl" x1="' + X(x) + '" y1="' + Y(o.ymin) + '" x2="' + X(x) + '" y2="' + Y(o.ymax) + '"/>';
    for (let y = Math.ceil(o.ymin / gy) * gy; y <= o.ymax + 1e-9; y += gy) s += '<line class="gl" x1="' + X(o.xmin) + '" y1="' + Y(y) + '" x2="' + X(o.xmax) + '" y2="' + Y(y) + '"/>';
    // axes
    const arrow = o.firstQuadrant ? '' : ' marker-end="url(#ar' + id + ')" marker-start="url(#ar' + id + ')"';
    const arrowEnd = ' marker-end="url(#ar' + id + ')"';
    s += '<g style="color:var(--ink-2)">';
    s += '<line class="ax" x1="' + X(o.xmin) + '" y1="' + Y(ax0) + '" x2="' + X(o.xmax) + '" y2="' + Y(ax0) + '"' + (o.firstQuadrant ? arrowEnd : arrow) + '/>';
    s += '<line class="ax" x1="' + X(ay0) + '" y1="' + Y(o.ymin) + '" x2="' + X(ay0) + '" y2="' + Y(o.ymax) + '"' + (o.firstQuadrant ? arrowEnd.replace('end', 'end') : arrow) + '/>';
    s += '</g>';
    // tick labels
    for (let x = Math.ceil(o.xmin / lx) * lx; x <= o.xmax + 1e-9; x += lx) {
      if (Math.abs(x) < 1e-9 || (o.skipX && o.skipX.includes(x))) continue;
      s += '<text class="tk" x="' + X(x) + '" y="' + (Y(ax0) + 13) + '" text-anchor="middle">' + fmtNeg(r(x)) + '</text>';
    }
    for (let y = Math.ceil(o.ymin / ly) * ly; y <= o.ymax + 1e-9; y += ly) {
      if (Math.abs(y) < 1e-9 || (o.skipY && o.skipY.includes(y))) continue;
      s += '<text class="tk" x="' + (X(ay0) - 4) + '" y="' + (Y(y) + 4) + '" text-anchor="end">' + fmtNeg(r(y)) + '</text>';
    }
    if (o.showO !== false) s += '<text class="lbl" x="' + (X(ay0) - 4) + '" y="' + (Y(ax0) + 13) + '" text-anchor="end">O</text>';
    s += '<text class="lbl" x="' + (X(o.xmax) + 2) + '" y="' + (Y(ax0) + 4) + '">' + (o.xlabel || 'x') + '</text>';
    s += '<text class="lbl" x="' + X(ay0) + '" y="' + (Y(o.ymax) - 5) + '" text-anchor="middle">' + (o.ylabel || 'y') + '</text>';
    if (o.xTitle) s += '<text class="lbl2" x="' + r((X(o.xmin) + X(o.xmax)) / 2) + '" y="' + (H - 2) + '" text-anchor="middle">' + o.xTitle + '</text>';
    if (o.yTitle) s += '<text class="lbl2" transform="translate(12 ' + r((Y(o.ymin) + Y(o.ymax)) / 2) + ') rotate(-90)" text-anchor="middle">' + o.yTitle + '</text>';

    const api = {
      X, Y,
      fn(f, a, b, cls) {
        a = a == null ? o.xmin : a; b = b == null ? o.xmax : b;
        const n = 240; let d = '';
        for (let i = 0; i <= n; i++) {
          const x = a + (b - a) * i / n, y = f(x);
          if (!isFinite(y)) continue;
          const yc = Math.max(o.ymin - 50, Math.min(o.ymax + 50, y));
          d += (d ? 'L' : 'M') + X(x) + ',' + Y(yc);
        }
        return '<path class="' + (cls || 'curve') + '" d="' + d + '"/>';
      },
      seg(x1, y1, x2, y2, cls) { return '<line class="' + (cls || 'curve') + '" x1="' + X(x1) + '" y1="' + Y(y1) + '" x2="' + X(x2) + '" y2="' + Y(y2) + '"/>'; },
      dot(x, y, rad) { return '<circle class="dot" cx="' + X(x) + '" cy="' + Y(y) + '" r="' + (rad || 3.2) + '"/>'; }
    };
    s += '<g clip-path="url(#' + id + ')">' + (draw ? draw(api) : '') + '</g>';
    return s + '</svg>';
  }

  /* Category line chart (evenly spaced categories). */
  function catLine(o) {
    const W = o.w || 360, H = o.h || 280;
    const m = { l: o.ml || 58, r: 14, t: o.title ? 40 : 14, b: o.mb || 56 };
    const n = o.cats.length;
    const X = i => r(m.l + (W - m.l - m.r) * (i / (n - 1)));
    const Y = v => r(m.t + (H - m.t - m.b) * (1 - (v - o.ymin) / (o.ymax - o.ymin)));
    let s = '<svg viewBox="0 0 ' + W + ' ' + H + '" width="' + W + '" role="img" aria-label="' + (o.alt || o.title || 'Line graph') + '">';
    if (o.title) s += '<text class="lbl2" x="' + (W / 2) + '" y="16" text-anchor="middle" style="font-weight:600">' + o.title[0] + '</text>' + (o.title[1] ? '<text class="lbl2" x="' + (W / 2) + '" y="31" text-anchor="middle" style="font-weight:600">' + o.title[1] + '</text>' : '');
    if (o.minor) for (let v = o.ymin; v <= o.ymax + 1e-9; v += o.minor) s += '<line class="gl2" x1="' + m.l + '" x2="' + (W - m.r) + '" y1="' + Y(v) + '" y2="' + Y(v) + '"/>';
    for (let v = o.ymin; v <= o.ymax + 1e-9; v += o.ystep) {
      s += '<line class="gl" x1="' + m.l + '" x2="' + (W - m.r) + '" y1="' + Y(v) + '" y2="' + Y(v) + '"/>';
      s += '<text class="tk" x="' + (m.l - 6) + '" y="' + (Y(v) + 4) + '" text-anchor="end">' + (o.yfmt ? o.yfmt(v) : v) + '</text>';
    }
    for (let i = 0; i < n; i++) {
      s += '<line class="gl" x1="' + X(i) + '" x2="' + X(i) + '" y1="' + Y(o.ymin) + '" y2="' + Y(o.ymax) + '"/>';
      if (o.rotate) s += '<text class="tk" transform="translate(' + (X(i) + 4) + ' ' + (Y(o.ymin) + 12) + ') rotate(40)">' + o.cats[i] + '</text>';
      else s += '<text class="tk" x="' + X(i) + '" y="' + (Y(o.ymin) + 15) + '" text-anchor="middle">' + o.cats[i] + '</text>';
    }
    s += '<line class="ax" x1="' + m.l + '" x2="' + (W - m.r) + '" y1="' + Y(o.ymin) + '" y2="' + Y(o.ymin) + '"/>';
    s += '<line class="ax" x1="' + m.l + '" x2="' + m.l + '" y1="' + Y(o.ymin) + '" y2="' + Y(o.ymax) + '"/>';
    o.series.forEach(se => {
      s += '<polyline class="' + (se.cls || 's-a') + '" points="' + se.vals.map((v, i) => X(i) + ',' + Y(v)).join(' ') + '"/>';
      se.vals.forEach((v, i) => { s += marker(se.marker || 'dot', X(i), Y(v)); });
    });
    if (o.xTitle) s += '<text class="lbl2" x="' + r((m.l + W - m.r) / 2) + '" y="' + (H - 6) + '" text-anchor="middle">' + o.xTitle + '</text>';
    if (o.yTitle) s += '<text class="lbl2" transform="translate(14 ' + r((Y(o.ymin) + Y(o.ymax)) / 2) + ') rotate(-90)" text-anchor="middle">' + o.yTitle + '</text>';
    return s + '</svg>';
  }

  function marker(kind, x, y) {
    if (kind === 'tri') return '<path class="m-a" d="M' + x + ',' + (y - 5) + ' L' + (x + 5) + ',' + (y + 4) + ' L' + (x - 5) + ',' + (y + 4) + ' z"/>';
    if (kind === 'sq') return '<rect class="m-ab" x="' + (x - 4) + '" y="' + (y - 4) + '" width="8" height="8"/>';
    if (kind === 'circ') return '<circle class="m-b" cx="' + x + '" cy="' + y + '" r="4.2"/>';
    return '<circle class="dot" cx="' + x + '" cy="' + y + '" r="3"/>';
  }

  /* Legend (SVG) rows: [{label, cls, marker}] */
  function legend(rows) {
    const W = 170, H = rows.length * 22 + 10;
    let s = '<svg viewBox="0 0 ' + W + ' ' + H + '" width="' + W + '" role="img" aria-label="Legend"><rect class="leg" x="0.5" y="0.5" width="' + (W - 1) + '" height="' + (H - 1) + '"/>';
    rows.forEach((row, i) => {
      const y = 16 + i * 22;
      if (row.bar) s += '<rect class="' + row.bar + '" x="10" y="' + (y - 7) + '" width="14" height="12"/>';
      else s += '<line class="' + row.cls + '" x1="8" x2="44" y1="' + y + '" y2="' + y + '"/>' + marker(row.marker, 26, y);
      s += '<text class="lbl2" x="' + (row.bar ? 32 : 52) + '" y="' + (y + 4) + '">' + row.label + '</text>';
    });
    return s + '</svg>';
  }

  /* Bar chart with optional groups. o.series: [{vals, cls, name}] */
  function bars(o) {
    const W = o.w || 360, H = o.h || 300;
    const m = { l: o.ml || 60, r: 12, t: o.title ? 44 : 14, b: o.mb || 90 };
    const n = o.cats.length, k = o.series.length;
    const band = (W - m.l - m.r) / n;
    const bw = Math.min(40, band * 0.62 / k);
    const Y = v => r(m.t + (H - m.t - m.b) * (1 - (v - o.ymin) / (o.ymax - o.ymin)));
    let s = '<svg viewBox="0 0 ' + W + ' ' + H + '" width="' + W + '" role="img" aria-label="' + (o.alt || 'Bar graph') + '">';
    if (o.title) o.title.forEach((t, i) => { s += '<text class="lbl2" x="' + (W / 2) + '" y="' + (16 + i * 15) + '" text-anchor="middle" style="font-weight:600">' + t + '</text>'; });
    for (let v = o.ymin; v <= o.ymax + 1e-9; v += o.ystep) {
      s += '<line class="gl" x1="' + m.l + '" x2="' + (W - m.r) + '" y1="' + Y(v) + '" y2="' + Y(v) + '"/>';
      s += '<text class="tk" x="' + (m.l - 6) + '" y="' + (Y(v) + 4) + '" text-anchor="end">' + (o.yfmt ? o.yfmt(v) : v) + '</text>';
    }
    for (let i = 0; i < n; i++) {
      const cx = m.l + band * (i + 0.5);
      o.series.forEach((se, j) => {
        const x = cx - (k * bw) / 2 + j * bw;
        s += '<rect class="' + (se.cls || 'bar1') + '" x="' + r(x) + '" y="' + Y(se.vals[i]) + '" width="' + r(bw) + '" height="' + r(Y(o.ymin) - Y(se.vals[i])) + '"/>';
      });
      if (o.rotate) s += '<text class="tk" transform="translate(' + r(cx - 6) + ' ' + (Y(o.ymin) + 10) + ') rotate(-45)" text-anchor="end" style="font-style:italic">' + o.cats[i] + '</text>';
      else s += '<text class="tk" x="' + r(cx) + '" y="' + (Y(o.ymin) + 15) + '" text-anchor="middle">' + o.cats[i] + '</text>';
    }
    s += '<line class="ax" x1="' + m.l + '" x2="' + (W - m.r) + '" y1="' + Y(o.ymin) + '" y2="' + Y(o.ymin) + '"/>';
    s += '<line class="ax" x1="' + m.l + '" x2="' + m.l + '" y1="' + Y(o.ymin) + '" y2="' + Y(o.ymax) + '"/>';
    if (o.yTitle) o.yTitle.forEach((t, i) => { s += '<text class="lbl2" transform="translate(' + (14 + i * 14) + ' ' + r((Y(o.ymin) + Y(o.ymax)) / 2) + ') rotate(-90)" text-anchor="middle">' + t + '</text>'; });
    if (o.xTitle) s += '<text class="lbl2" x="' + r((m.l + W - m.r) / 2) + '" y="' + (H - 4) + '" text-anchor="middle">' + o.xTitle + '</text>';
    return s + '</svg>';
  }

  /* Histogram with bins [edges[i], edges[i+1]) */
  function hist(o) {
    const W = o.w || 220, H = o.h || 200;
    const m = { l: 40, r: 12, t: 22, b: 40 };
    const x0 = o.edges[0], x1 = o.edges[o.edges.length - 1];
    const X = v => r(m.l + (W - m.l - m.r) * (v - x0) / (x1 - x0));
    const Y = v => r(m.t + (H - m.t - m.b) * (1 - v / o.ymax));
    let s = '<svg viewBox="0 0 ' + W + ' ' + H + '" width="' + W + '" role="img" aria-label="' + (o.title || 'Histogram') + '">';
    s += '<text class="lbl2" x="' + r((m.l + W - m.r) / 2) + '" y="13" text-anchor="middle" style="font-weight:600">' + o.title + '</text>';
    for (let v = 0; v <= o.ymax; v += o.ystep) {
      s += '<line class="gl" x1="' + m.l + '" x2="' + (W - m.r) + '" y1="' + Y(v) + '" y2="' + Y(v) + '"/>';
      s += '<text class="tk" x="' + (m.l - 5) + '" y="' + (Y(v) + 4) + '" text-anchor="end">' + v + '</text>';
    }
    o.counts.forEach((c, i) => {
      if (c > 0) s += '<rect class="bar1" x="' + X(o.edges[i]) + '" y="' + Y(c) + '" width="' + r(X(o.edges[i + 1]) - X(o.edges[i])) + '" height="' + r(Y(0) - Y(c)) + '"/>';
    });
    o.edges.forEach(e => { s += '<text class="tk" x="' + X(e) + '" y="' + (Y(0) + 14) + '" text-anchor="middle">' + e + '</text>'; });
    s += '<line class="ax" x1="' + m.l + '" x2="' + (W - m.r) + '" y1="' + Y(0) + '" y2="' + Y(0) + '"/>';
    s += '<line class="ax" x1="' + m.l + '" x2="' + m.l + '" y1="' + Y(0) + '" y2="' + Y(o.ymax) + '"/>';
    s += '<text class="lbl2" x="' + r((m.l + W - m.r) / 2) + '" y="' + (H - 6) + '" text-anchor="middle">Integer</text>';
    s += '<text class="lbl2" transform="translate(11 ' + r((Y(0) + Y(o.ymax)) / 2) + ') rotate(-90)" text-anchor="middle">Frequency</text>';
    return s + '</svg>';
  }

  /* HTML data table */
  function table(o) {
    let s = '';
    if (o.caption) s += '<div class="table-caption">' + o.caption + '</div>';
    s += '<div class="table-scroll"><table class="data">';
    (o.head || []).forEach(row => {
      s += '<tr>' + row.map(c => (typeof c === 'object' ? '<th colspan="' + (c.span || 1) + '" rowspan="' + (c.rows || 1) + '" class="' + (c.cls || '') + '">' + c.t + '</th>' : '<th>' + c + '</th>')).join('') + '</tr>';
    });
    (o.rows || []).forEach(row => {
      s += '<tr>' + row.map((c, i) => (i === 0 && o.rowHead ? '<th class="l">' + c + '</th>' : '<td>' + c + '</td>')).join('') + '</tr>';
    });
    s += '</table></div>';
    if (o.note) s += '<div class="table-note">' + o.note + '</div>';
    return s;
  }

  window.FIG = { plane, catLine, bars, hist, table, legend };
})();
