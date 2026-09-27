/* SAT Practice Test 10 — standalone answer key.
   Renders: (1) the answer key with a paper-test scorer, (2) step-by-step
   explanations for every question. Reads SAT.modules and SAT.steps.
   Language: English by default. A page that sets SAT.lang = 'tr' and loads
   data/tr/*.js gets Turkish UI text and Turkish explanations (SAT.tr);
   question text itself always stays in English, as on the real SAT. */
(function () {
  'use strict';

  const MODULES = (window.SAT && SAT.modules) || [];
  const STEPS = (window.SAT && SAT.steps) || {};
  const LANG = (window.SAT && SAT.lang) || 'en';
  const TRC = (LANG === 'tr' && window.SAT && SAT.tr) || null;
  const LETTERS = ['A', 'B', 'C', 'D'];
  const STORE = 'sat10-key-answers';
  const PREFS = 'sat10-key-prefs';

  const UI = {
    en: {
      names: { rw1: 'R&W Module 1', rw2: 'R&W Module 2', math1: 'Math Module 1', math2: 'Math Module 2' },
      short: { rw1: 'Reading and Writing · Module 1', rw2: 'Reading and Writing · Module 2', math1: 'Math · Module 1', math2: 'Math · Module 2' },
      all: 'All', answer: 'Answer', yours: 'Yours', result: 'Result', questions: 'questions',
      yourAnswerTo: n => 'Your answer to question ' + n, yourAnswerToMc: n => 'Your answer to question ' + n + ' (A to D)',
      rwTotal: '/ 66 Reading and Writing', mathTotal: '/ 54 Math', total: '/ 120 total correct',
      clearConfirm: 'Clear all the answers you entered?',
      correctAnswer: 'Correct answer', yourAnswer: 'Your answer', skill: 'Skill', showQuestion: 'Show the full question',
      stepByStep: 'Step by step', whyChoice: L => 'Why choice ' + L + ' is correct', whyAnswer: a => 'Why the answer is ' + a,
      whyWrong: 'Why the other choices are wrong', mistakes: 'Common mistakes', words: 'Words worth knowing', takeaway: 'Takeaway: ',
      answerBadge: L => 'Answer ' + L, gotIt: '✓ You got it', youPicked: g => '✗ You: ' + g, yourPick: 'your pick',
      showingAll: n => 'Showing all ' + n + ' questions.', showingSome: (s, n) => 'Showing ' + s + ' of ' + n + ' questions.',
      enterFirst: ' Enter your answers in the key above to use this filter.'
    },
    tr: {
      names: { rw1: 'O&Y Modül 1', rw2: 'O&Y Modül 2', math1: 'Matematik Modül 1', math2: 'Matematik Modül 2' },
      short: { rw1: 'Okuma ve Yazma · Modül 1', rw2: 'Okuma ve Yazma · Modül 2', math1: 'Matematik · Modül 1', math2: 'Matematik · Modül 2' },
      all: 'Tümü', answer: 'Cevap', yours: 'Senin', result: 'Sonuç', questions: 'soru',
      yourAnswerTo: n => n + '. soruya cevabın', yourAnswerToMc: n => n + '. soruya cevabın (A–D)',
      rwTotal: '/ 66 Okuma ve Yazma', mathTotal: '/ 54 Matematik', total: '/ 120 toplam doğru',
      clearConfirm: 'Girdiğin tüm cevaplar silinsin mi?',
      correctAnswer: 'Doğru cevap', yourAnswer: 'Senin cevabın', skill: 'Beceri', showQuestion: 'Sorunun tamamını göster',
      stepByStep: 'Adım adım çözüm', whyChoice: L => 'Neden ' + L + ' şıkkı doğru', whyAnswer: a => 'Cevap neden ' + a,
      whyWrong: 'Diğer şıklar neden yanlış', mistakes: 'Sık yapılan hatalar', words: 'Bilinmesi gereken kelimeler', takeaway: 'Akılda tut: ',
      answerBadge: L => 'Cevap ' + L, gotIt: '✓ Doğru bildin', youPicked: g => '✗ Senin: ' + g, yourPick: 'senin seçimin',
      showingAll: n => 'Tüm ' + n + ' soru gösteriliyor.', showingSome: (s, n) => n + ' sorudan ' + s + ' tanesi gösteriliyor.',
      enterFirst: ' Bu filtreyi kullanmak için önce yukarıdaki anahtara cevaplarını gir.'
    }
  };
  const T = UI[LANG] || UI.en;

  /* Localized view of a question: English question text + translated explanation. */
  function loc(mod, q) {
    const base = Object.assign({}, q, { steps: q.steps && q.steps.length ? q.steps : ((STEPS[mod.id] || {})[q.n] || []) });
    if (!TRC) return base;
    const t = ((TRC[mod.id] || {})[q.n]) || {};
    const out = Object.assign(base, {
      skill: (TRC.skills && TRC.skills[q.skill]) || q.skill,
      domain: (TRC.domains && TRC.domains[q.domain]) || q.domain
    });
    ['why', 'tip', 'answerText'].forEach(k => { if (t[k]) out[k] = t[k]; });
    if (t.steps) out.steps = t.steps;
    if (t.mistakes) out.mistakes = t.mistakes;
    if (t.wrong) out.wrong = Object.assign({}, q.wrong || {}, t.wrong);
    if (q.vocab) out.vocab = q.vocab.map(v => [v[0], (t.vocab && t.vocab[v[0]]) || v[1], (TRC.pos && TRC.pos[v[2]]) || v[2]]);
    return out;
  }

  const load = (k, d) => { try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : d; } catch (e) { return d; } };
  const save = () => { try { localStorage.setItem(STORE, JSON.stringify(mine)); localStorage.setItem(PREFS, JSON.stringify(prefs)); } catch (e) { /* storage unavailable */ } };
  const mine = load(STORE, {});
  const prefs = Object.assign({ theme: null, hideKey: false }, load(PREFS, {}));
  MODULES.forEach(m => { mine[m.id] = mine[m.id] || {}; });

  const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const strip = html => { const d = document.createElement('div'); d.innerHTML = html; return (d.textContent || '').replace(/\s+/g, ' ').toLocaleLowerCase(LANG); };

  /* ---------- theme ---------- */
  function applyTheme() {
    if (prefs.theme) document.documentElement.setAttribute('data-theme', prefs.theme);
    else document.documentElement.removeAttribute('data-theme');
  }
  document.getElementById('themeToggle').addEventListener('click', () => {
    const dark = prefs.theme ? prefs.theme === 'dark' : matchMedia('(prefers-color-scheme: dark)').matches;
    prefs.theme = dark ? 'light' : 'dark';
    applyTheme(); save();
  });
  applyTheme();

  /* ---------- grading ---------- */
  function parseSpr(raw) {
    const s = String(raw == null ? '' : raw).trim().replace(/−/g, '-').replace(/[\s,]/g, '');
    if (!/^-?(\d+\.?\d*|\.\d+)(\/-?(\d+\.?\d*|\.\d+))?$/.test(s)) return NaN;
    if (s.includes('/')) { const [a, b] = s.split('/'); return parseFloat(a) / parseFloat(b); }
    return parseFloat(s);
  }
  function status(q, given) {
    if (given == null || given === '') return 'skip';
    if (q.type === 'spr') {
      const v = parseSpr(given);
      if (!isFinite(v)) return 'no';
      return q.accept.some(t => (Number.isInteger(t) ? Math.abs(v - t) < 1e-9 : Math.abs(v - t) <= 0.001)) ? 'ok' : 'no';
    }
    return given.toUpperCase() === q.answer ? 'ok' : 'no';
  }
  const correctText = q => (q.type === 'spr' ? q.answerText : q.answer);
  const shortAnswer = q => (q.type === 'spr' ? q.answerText.split(' ')[0] : q.answer);

  /* ---------- answer key + scorer ---------- */
  const keyGrid = document.getElementById('keyGrid');
  function renderKey() {
    keyGrid.classList.toggle('hide-key', prefs.hideKey);
    keyGrid.innerHTML = MODULES.map(mod => {
      const rows = mod.questions.map(q => {
        const g = mine[mod.id][q.n] || '';
        const st = status(q, g);
        const input = q.type === 'spr'
          ? '<input class="your spr-in" data-m="' + mod.id + '" data-n="' + q.n + '" value="' + esc(g) + '" inputmode="decimal" maxlength="7" aria-label="' + esc(T.yourAnswerTo(q.n)) + '" placeholder="—">'
          : '<input class="your mc-in" data-m="' + mod.id + '" data-n="' + q.n + '" value="' + esc(g) + '" maxlength="1" autocomplete="off" aria-label="' + esc(T.yourAnswerToMc(q.n)) + '" placeholder="—">';
        return '<tr class="r-' + st + '"><td><a href="#' + mod.id + '-' + q.n + '" data-open="' + mod.id + '-' + q.n + '" class="qlink">' + q.n + '</a></td>' +
          '<td class="ans"><span>' + esc(shortAnswer(q)) + '</span></td><td>' + input + '</td>' +
          '<td class="mark" aria-live="polite">' + (st === 'ok' ? '✓' : st === 'no' ? '✗' : '') + '</td></tr>';
      }).join('');
      return '<article class="key-card ' + mod.section + '"><header><h3>' + esc(T.names[mod.id]) + '</h3><span class="key-score" id="ks-' + mod.id + '"></span></header>' +
        '<table class="key-table"><thead><tr><th>#</th><th>' + T.answer + '</th><th>' + T.yours + '</th><th><span class="sr">' + T.result + '</span></th></tr></thead><tbody>' + rows + '</tbody></table></article>';
    }).join('');
    keyGrid.querySelectorAll('input.your').forEach(inp => {
      inp.addEventListener('input', () => onInput(inp));
      inp.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === 'ArrowDown') { e.preventDefault(); focusNext(inp, 1); }
        if (e.key === 'ArrowUp') { e.preventDefault(); focusNext(inp, -1); }
      });
    });
    updateScores();
  }
  function focusNext(inp, dir) {
    const all = [...keyGrid.querySelectorAll('input.your')];
    const nx = all[all.indexOf(inp) + dir];
    if (nx) { nx.focus(); nx.select(); }
  }
  function onInput(inp) {
    const m = inp.dataset.m, n = +inp.dataset.n;
    const q = MODULES.find(x => x.id === m).questions[n - 1];
    let v = inp.value;
    if (q.type !== 'spr') {
      v = v.toUpperCase().replace(/[^ABCD]/g, '');
      inp.value = v;
    }
    if (v) mine[m][n] = v.trim(); else delete mine[m][n];
    save();
    const st = status(q, mine[m][n]);
    const tr = inp.closest('tr');
    tr.className = 'r-' + st;
    tr.querySelector('.mark').textContent = st === 'ok' ? '✓' : st === 'no' ? '✗' : '';
    if (q.type !== 'spr' && v) focusNext(inp, 1);
    updateScores();
    refreshYours(m, n);
    applyFilters();
  }
  function scoreOf(mod) {
    let ok = 0, answered = 0;
    mod.questions.forEach(q => { const s = status(q, mine[mod.id][q.n]); if (s !== 'skip') answered++; if (s === 'ok') ok++; });
    return { ok, answered, total: mod.questions.length };
  }
  function updateScores() {
    let rw = 0, ma = 0, any = false;
    MODULES.forEach(mod => {
      const s = scoreOf(mod);
      if (s.answered) any = true;
      if (mod.section === 'rw') rw += s.ok; else ma += s.ok;
      const el = document.getElementById('ks-' + mod.id);
      if (el) el.textContent = s.answered ? s.ok + ' / ' + s.total : s.total + ' ' + T.questions;
    });
    document.getElementById('scoreSummary').innerHTML = any
      ? '<div class="stat good"><b>' + rw + '</b>' + T.rwTotal + '</div><div class="stat good"><b>' + ma + '</b>' + T.mathTotal + '</div><div class="stat"><b>' + (rw + ma) + '</b>' + T.total + '</div>'
      : '';
  }
  document.getElementById('hideKey').checked = prefs.hideKey;
  document.getElementById('hideKey').addEventListener('change', e => { prefs.hideKey = e.target.checked; save(); keyGrid.classList.toggle('hide-key', prefs.hideKey); });
  document.getElementById('clearAll').addEventListener('click', () => {
    if (!confirm(T.clearConfirm)) return;
    MODULES.forEach(m => { mine[m.id] = {}; });
    save(); renderKey(); renderExplanations(); applyFilters();
  });

  /* ---------- explanations ---------- */
  const expList = document.getElementById('expList');
  const STAR = '<svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2l2.9 6.9 7.1.6-5.4 4.7 1.7 7-6.3-3.9-6.3 3.9 1.7-7L2 9.5l7.1-.6z"/></svg>';
  const CHEV = '<svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M9 6l6 6-6 6-1.4-1.4L12.2 12 7.6 7.4z"/></svg>';
  const searchIndex = {};

  function card(mod, raw) {
    const q = loc(mod, raw);
    const id = mod.id + '-' + q.n;
    const isMath = mod.section === 'math';
    searchIndex[id] = strip((q.passage || '') + ' ' + q.prompt + ' ' + q.skill + ' ' + raw.skill + ' ' + q.domain + ' ' + (q.choices || []).join(' ') +
      ' ' + (q.why || '') + ' ' + q.steps.join(' ') + ' ' + (q.vocab || []).map(v => v[0] + ' ' + v[1]).join(' '));

    let recap = '';
    if (q.figure) recap += '<div class="figure">' + q.figure + '</div>';
    if (q.passage) recap += '<div class="passage" lang="en">' + q.passage + '</div>';
    recap += '<div class="prompt ' + (isMath ? 'math' : '') + '" lang="en">' + q.prompt + '</div>';
    if (q.type !== 'spr') {
      recap += '<div class="recap-choices' + (q.choiceLayout === 'grid' ? ' grid2' : '') + '" lang="en">' + q.choices.map((c, i) => {
        const L = LETTERS[i];
        return '<div class="recap-choice ' + (L === q.answer ? 'correct' : '') + '"><span class="letter">' + L + ')</span><span class="ctext">' + c + '</span>' + (L === q.answer ? '<span class="who">' + T.correctAnswer + '</span>' : '') + '</div>';
      }).join('') + '</div>';
    }

    let body = '<div class="answer-line"><span class="answer-pill correct">' + T.correctAnswer + '<b>' + correctText(q) + '</b></span>' +
      '<span class="answer-pill yours-slot" data-yours="' + id + '" hidden></span>' +
      '<span class="answer-pill">' + T.skill + '<b style="font-size:13px">' + esc(q.skill) + '</b></span></div>';
    body += '<details class="q-recap"><summary>' + T.showQuestion + '</summary><div>' + recap + '</div></details>';
    if (q.steps.length) body += '<h5>' + T.stepByStep + '</h5><ol class="steps">' + q.steps.map(s => '<li>' + s + '</li>').join('') + '</ol>';
    if (q.why) body += '<h5>' + (q.type === 'spr' ? T.whyAnswer(q.answerText) : T.whyChoice(q.answer)) + '</h5><div class="why">' + q.why + '</div>';
    if (q.wrong) body += '<h5>' + T.whyWrong + '</h5><div class="wrong-list">' + LETTERS.filter(L => q.wrong[L]).map(L =>
      '<div class="wrong-item" data-wl="' + L + '"><span class="wl">' + L + '</span><div>' + q.wrong[L] + '</div></div>').join('') + '</div>';
    if (q.mistakes && q.mistakes.length) body += '<h5>' + T.mistakes + '</h5><div class="wrong-list">' + q.mistakes.map(x => '<div class="wrong-item"><span class="wl">!</span><div>' + x + '</div></div>').join('') + '</div>';
    if (q.vocab && q.vocab.length) body += '<h5>' + T.words + '</h5><dl class="vocab-list">' + q.vocab.map(v => '<div><dt lang="en">' + esc(v[0]) + '</dt><dd>' + (v[2] ? '<span class="pos">' + esc(v[2]) + '</span>' : '') + esc(v[1]) + '</dd></div>').join('') + '</dl>';
    if (q.tip) body += '<div class="tip-box"><span class="ico">' + STAR + '</span><div><b>' + T.takeaway + '</b>' + q.tip + '</div></div>';

    return '<details class="exp-card" id="' + id + '" data-mod="' + mod.id + '" data-domain="' + esc(q.domain) + '">' +
      '<summary><span class="q-num">' + q.n + '</span><span class="sum-main"><b>' + esc(q.skill) + '</b><span>' + esc(T.names[mod.id]) + ' · ' + esc(q.domain) + '</span></span>' +
      '<span class="badge key-badge">' + (q.type === 'spr' ? esc(shortAnswer(q)) : T.answerBadge(q.answer)) + '</span><span class="badge your-badge" data-badge="' + id + '" hidden></span>' +
      '<span class="chev">' + CHEV + '</span></summary><div class="exp-body">' + body + '</div></details>';
  }

  function renderExplanations() {
    expList.innerHTML = MODULES.map(mod =>
      '<section class="exp-module" id="exp-' + mod.id + '" data-mod="' + mod.id + '"><h3 class="exp-module-title">' + esc(T.short[mod.id]) + ' <span>' + mod.questions.length + ' ' + T.questions + '</span></h3>' +
      mod.questions.map(q => card(mod, q)).join('') + '</section>').join('');
    MODULES.forEach(mod => mod.questions.forEach(q => refreshYours(mod.id, q.n)));
  }

  function refreshYours(m, n) {
    const id = m + '-' + n;
    const q = MODULES.find(x => x.id === m).questions[n - 1];
    const g = mine[m][n];
    const st = status(q, g);
    const pill = expList.querySelector('[data-yours="' + id + '"]');
    const badge = expList.querySelector('[data-badge="' + id + '"]');
    if (!pill) return;
    if (g) {
      pill.className = 'answer-pill yours-slot' + (st === 'no' ? ' yours wrong' : ' correct');
      pill.innerHTML = T.yourAnswer + '<b>' + esc(g) + '</b>';
      pill.hidden = false;
      badge.className = 'badge your-badge ' + st;
      badge.textContent = st === 'ok' ? T.gotIt : T.youPicked(g);
      badge.hidden = false;
    } else {
      pill.hidden = true; badge.hidden = true;
    }
    expList.querySelectorAll('#' + id + ' .wrong-item[data-wl]').forEach(w => {
      const picked = g && w.dataset.wl === g.toUpperCase();
      w.classList.toggle('picked', !!picked);
      const tag = w.querySelector('.you');
      if (picked && !tag) w.lastElementChild.insertAdjacentHTML('beforeend', '<span class="you">' + T.yourPick + '</span>');
      if (!picked && tag) tag.remove();
    });
  }

  /* ---------- filters ---------- */
  let modFilter = '';
  const modSeg = document.getElementById('modFilter');
  modSeg.innerHTML = [['', T.all]].concat(MODULES.map(m => [m.id, T.names[m.id]])).map(([v, t]) => '<button data-mf="' + v + '" class="' + (v === modFilter ? 'on' : '') + '">' + esc(t) + '</button>').join('');
  modSeg.addEventListener('click', e => {
    const b = e.target.closest('[data-mf]'); if (!b) return;
    modFilter = b.dataset.mf;
    modSeg.querySelectorAll('button').forEach(x => x.classList.toggle('on', x === b));
    applyFilters();
  });
  const domainOf = q => (TRC && TRC.domains && TRC.domains[q.domain]) || q.domain;
  const domainSel = document.getElementById('domainFilter');
  [...new Set(MODULES.flatMap(m => m.questions.map(domainOf)))].forEach(d => domainSel.insertAdjacentHTML('beforeend', '<option>' + esc(d) + '</option>'));
  const resultSel = document.getElementById('resultFilter');
  const searchIn = document.getElementById('search');
  [domainSel, resultSel].forEach(el => el.addEventListener('change', applyFilters));
  searchIn.addEventListener('input', applyFilters);

  function applyFilters() {
    const dom = domainSel.value, res = resultSel.value, term = searchIn.value.trim().toLocaleLowerCase(LANG);
    let shown = 0;
    MODULES.forEach(mod => {
      let modShown = 0;
      mod.questions.forEach(q => {
        const id = mod.id + '-' + q.n;
        const el = document.getElementById(id);
        const st = status(q, mine[mod.id][q.n]);
        const ok = (!modFilter || modFilter === mod.id) && (!dom || domainOf(q) === dom) && (!res || st === res) && (!term || searchIndex[id].includes(term) || String(q.n) === term);
        el.hidden = !ok;
        if (ok) { shown++; modShown++; }
      });
      document.getElementById('exp-' + mod.id).hidden = modShown === 0;
    });
    const total = MODULES.reduce((a, m) => a + m.questions.length, 0);
    document.getElementById('filterCount').textContent = shown === total ? T.showingAll(total) : T.showingSome(shown, total) + (shown === 0 && res ? T.enterFirst : '');
  }

  document.querySelectorAll('[data-expand]').forEach(b => b.addEventListener('click', () => {
    expList.querySelectorAll('.exp-card:not([hidden])').forEach(d => { d.open = b.dataset.expand === '1'; });
  }));

  function openCard(id, smooth) {
    const el = document.getElementById(id);
    if (!el) return;
    if (el.hidden) {
      modFilter = ''; domainSel.value = ''; resultSel.value = ''; searchIn.value = '';
      modSeg.querySelectorAll('button').forEach(x => x.classList.toggle('on', x.dataset.mf === ''));
      applyFilters();
    }
    el.open = true;
    el.scrollIntoView({ behavior: smooth ? 'smooth' : 'auto', block: 'start' });
  }
  document.addEventListener('click', e => {
    const a = e.target.closest('[data-open]');
    if (!a) return;
    e.preventDefault();
    history.replaceState(null, '', '#' + a.dataset.open);
    openCard(a.dataset.open, true);
  });

  /* ---------- print & back-to-top ---------- */
  let printOpen = [];
  window.addEventListener('beforeprint', () => {
    printOpen = [...expList.querySelectorAll('details')].filter(d => !d.open);
    printOpen.forEach(d => { d.open = true; });
  });
  window.addEventListener('afterprint', () => { printOpen.forEach(d => { d.open = false; }); printOpen = []; });
  document.getElementById('printBtn').addEventListener('click', () => window.print());
  const toTop = document.getElementById('toTop');
  window.addEventListener('scroll', () => { toTop.hidden = window.scrollY < 900; }, { passive: true });
  toTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  /* ---------- init ---------- */
  renderKey();
  renderExplanations();
  applyFilters();
  const h = location.hash.slice(1);
  if (/^(rw|math)[12]-\d+$/.test(h)) requestAnimationFrame(() => openCard(h, false));
})();
