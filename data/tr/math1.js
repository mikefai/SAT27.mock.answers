/* Matematik — Modül 1: Türkçe çözümler.
   Sayılar sınavdaki gibi ondalık nokta ile yazılır (ör. 10.25). */
(function () {
  const F = (a, b) => `<span class="frac"><span>${a}</span><span>${b}</span></span>`;
  const R = a => `<span class="sqrt">√<span>${a}</span></span>`;
  const calc = s => `<span class="calc">${s}</span>`;
  window.SAT = window.SAT || { modules: [] };
  SAT.tr = SAT.tr || {};
  SAT.tr.math1 = {
    1: {
      steps: [`Grafikteki en düşük noktayı ara.`, `En düşük nokta <b>2014</b> etiketinin üzerinde, yaklaşık %4.`, `Diğer tüm yıllar %8 veya üzerinde, dolayısıyla en küçük yüzde 2014'te.`],
      why: `<p>En küçük yüzde, çizgi grafiğindeki <b>en düşük noktaya</b> karşılık gelir. Çizgi <b>2014</b>'te yaklaşık <b>%4</b>'e keskin biçimde iniyor; bu, diğer tüm yıllardan düşük (bir sonraki en düşük değer 2013'te yaklaşık %8).</p>`,
      wrong: { A: `2012 yaklaşık %12; en yüksek değerlerden biri.`, B: `2013 yaklaşık %8; düşüşte ama en düşük değil.`, D: `2015 yaklaşık %9; çizgi yeniden yükselmeye başlamış.` },
      tip: `Önce eksen başlıklarını oku; hangi eksenin sorulan niceliği gösterdiğini bil.`,
      vocab: { 'model year': `model yılı (bir otomobil modelinin ait sayıldığı yıl)` }
    },
    2: {
      steps: [`Grafikte iki doğrunun kesişimini bul.`, `<i>x</i> eksenine in: <i>x</i> = 4. <i>y</i> eksenine git: <i>y</i> = −5.`, `Grafikten okunan denklemlerle kontrol et: dik doğru <i>y</i> = −2<i>x</i> + 3 → −2(4) + 3 = −5 ✓; diğer doğru <i>y</i> = −0.75<i>x</i> − 2 → −3 − 2 = −5 ✓.`],
      why: `<p>Bir sistemin çözümü <b>iki</b> denklemi de sağlamalıdır; grafikte bu, iki doğrunun <b>kesiştiği</b> noktadır. Doğrular <b>(4, −5)</b> noktasında kesişiyor.</p>`,
      wrong: { B: `(0, 3) yalnızca dik doğrunun <i>y</i>-kesişimidir; diğer doğru bu noktadan geçmez.`, C: `(0, −2) yalnızca daha yatık doğrunun <i>y</i>-kesişimidir.`, D: `(−2, 3) iki doğrunun da üzerinde değil.` },
      tip: `Grafik sorularında eksen kesişimleri cazip çeldiricilerdir. Çözüm <i>iki</i> doğrunun da üzerinde olmalı.`,
      vocab: { 'system of equations': `denklem sistemi: aynı değişkenleri paylaşan iki veya daha fazla denklem`, solution: `çözüm; sistem için tüm denklemleri aynı anda sağlayan nokta` }
    },
    3: {
      steps: [`Tek seferlik hizmet ücreti: 25 $ (bir kez alınır, <i>t</i> yok).`, `Saatlik ücret: <i>t</i> saatin her biri için 10 $ → 10<i>t</i>.`, `Toplam maliyet: 25 + 10<i>t</i>.`, `"En fazla 75 $" → toplam ≤ 75, yani ${calc('25 + 10<i>t</i> ≤ 75')}`],
      why: `<p>Toplam maliyet = tek seferlik ücret + saatlik ücret × saat = <b>25 + 10<i>t</i></b>. "A maximum of $75" toplamın en fazla 75 olabileceği anlamına gelir, dolayısıyla maliyet <b>≤ 75</b> olmalı: 25 + 10<i>t</i> ≤ 75.</p>`,
      wrong: { A: `25 $ hizmet ücretini dışarıda bırakıyor; toplam maliyeti değil yalnızca kiralama ücretini sınırlıyor.`, B: `Sayıların yerini değiştiriyor: saat başı 25 $ ve 10 $ ücret alıyor.`, C: `25 $'ı saatlik ücret gibi kullanıyor ve gerçek 10 $ saatlik ücreti yok sayıyor.` },
      tip: `Maliyet modellerinde değişkenle çarpılan sayı birim ücrettir; sabit terim tek seferlik ücrettir.`,
      vocab: { 'service fee': `hizmet bedeli (tek seferlik ek ücret)`, maximum: `azami, en fazla`, inequality: `eşitsizlik: iki değeri <, >, ≤ veya ≥ ile karşılaştıran ifade` }
    },
    4: {
      steps: [`Orijinal tepe noktasını oku: (2, −2). (Kontrol: (0, 2) ve (4, 2) noktalarından geçiyor.)`, `4 birim yukarı → <i>y</i>'ye 4 ekle: (2, −2 + 4) = (2, 2).`, `Tepe noktası (2, 2) olan grafiği seç: <b>A</b>.`],
      why: `<p>Orijinal parabolün tepe noktası (en alt noktası) <b>(2, −2)</b>. Grafiği <b>4 birim yukarı</b> ötelemek her <i>y</i> değerine 4 ekler ve <i>x</i> değerlerini değiştirmez; yeni tepe noktası (2, −2 + 4) = <b>(2, 2)</b> olur. Şekil ve genişlik aynı kalır. A grafiğinin tepe noktası (2, 2).</p>`,
      wrong: { B: `Tepe (2, −6): bu 4 birim <b>aşağı</b> öteleme.`, C: `Tepe (−2, −2): bu 4 birim <b>sola</b> öteleme.`, D: `Tepe (6, −2): bu 4 birim <b>sağa</b> öteleme.` },
      tip: `Yukarı/aşağı ötelemeler <i>y</i>'yi, sola/sağa ötelemeler <i>x</i>'i değiştirir. Ötelemeyi hızla görmek için tepe noktasını takip et.`,
      vocab: { translated: `ötelenmiş (şekli bozulmadan kaydırılmış)`, vertex: `tepe noktası (parabolün en alt ya da en üst noktası)`, parabola: `parabol (ikinci dereceden fonksiyonun U biçimli grafiği)` }
    },
    5: {
      steps: [`Girdiyi belirle: <i>t</i> = 5 saniye.`, calc('<i>s</i> = 40 + 3(5)'), calc('<i>s</i> = 40 + 15 = 55')],
      why: `<p>Denklemde <i>t</i> = 5 yaz: <i>s</i> = 40 + 3(5) = 40 + 15 = <b>55</b> mil/saat.</p>`,
      wrong: { A: `40, <i>t</i> = 0'daki (hızlanmanın başladığı andaki) hızdır.`, B: `43, yalnızca 1 saniye sonraki hızdır.`, C: `45, 3 × 5 = 15 yerine 5 ekliyor.` },
      tip: `Doğrusal bir modelde sabit (40) başlangıç değeri, katsayı (3) birim zamandaki değişimdir.`,
      vocab: { accelerate: `hızlanmak` }
    },
    6: {
      steps: [calc('<i>f</i>(2) = (2)<sup>2</sup> + (2) + 71'), calc('= 4 + 2 + 71'), calc('= 77')],
      why: `<p>Her <i>x</i> yerine 2 yazarak hesapla: <i>f</i>(2) = 2<sup>2</sup> + 2 + 71 = 4 + 2 + 71 = <b>77</b>.</p>`,
      mistakes: [`<i>x</i><sup>2</sup>'yi 2<i>x</i> gibi işlemek. <i>x</i> = 2'de tesadüfen aynı sonucu verir (çünkü 2<sup>2</sup> = 2 · 2) ama başka her girdide yanlıştır; ör. 3<sup>2</sup> = 9, 6 değil.`, `Ortadaki terimi (+ <i>x</i>) unutmak 75 verir.`],
      tip: `Yerine koyarken özellikle negatif sayılarda parantez kullan: (−2)<sup>2</sup> = 4, ama −2<sup>2</sup> = −4.`,
      vocab: { function: `fonksiyon: her girdiye tam bir çıktı atayan kural` }
    },
    7: {
      steps: [calc('35 + 10.25<i>n</i> ≤ 300'), `35 çıkar: ${calc('10.25<i>n</i> ≤ 265')}`, `10.25'e böl: ${calc('<i>n</i> ≤ 25.85...')}`, `En büyük tam sayı: <b>25</b>. Kontrol: 35 + 10.25(25) = 291.25 $ ≤ 300 $ ✓, ama 35 + 10.25(26) = 301.50 $ > 300 $ ✗.`],
      why: `<p><i>n</i> katılımcı sayısı olsun. Toplam maliyet 35 + 10.25<i>n</i> ve 300'ü aşmamalı. Çözüm <i>n</i> ≤ 25.85... verir. Bir insanın parçası olamaz ve 26'ya yuvarlamak bütçeyi aşar; dolayısıyla mümkün olan en büyük sayı <b>25</b>.</p>`,
      mistakes: [`25.85'i 26'ya yuvarlamak; bu bütçeyi aşar.`, `35 $'ı unutmak: 300 ÷ 10.25 ≈ 29.`],
      tip: `"Aşmadan en fazla" sorularında her zaman <i>aşağı</i> yuvarla, sonra emin olmak için bir sonraki tam sayıyı kontrol et.`,
      vocab: { venue: `mekân, etkinlik yeri`, attendee: `katılımcı`, budget: `bütçe`, exceeding: `aşarak, sınırı geçerek` }
    },
    8: {
      steps: [`İstenen durumlar: Lion toplamı = 9 + 2 + 9 = 20.`, `Tüm durumlar: 80 öğrencinin tamamı.`, calc(`P(Lion) = ${F(20, 80)} = ${F(1, 4)}`)],
      why: `<p>Olasılık = istenen ÷ toplam. Lion satırının toplamı <b>20</b> öğrenci ve toplam öğrenci sayısı <b>80</b>. Olasılık 20/80 = <b>1/4</b>.</p>`,
      wrong: { A: `1/9, yalnızca tek bir sınıftaki 9 Lion oyunu 80'e bölmek gibi hatalı bir orandan (≈ 0.11) gelebilir; tek bir sınıfı kullanıyor.`, B: `1/5 = 16/80; tabloda böyle bir sayı yok.`, D: `2/3'ün tabloda dayanağı yok; Lion satırının yanlış okunmasından gelebilir.` },
      tip: `Hesaplamadan önce paydanın hangi grup olduğunu belirle. "One of these students" = 80 öğrencinin tamamı.`,
      vocab: { probability: `olasılık: istenen durum sayısı ÷ tüm durum sayısı`, 'at random': `rastgele, her seçeneğin eşit şansla`, distribution: `dağılım` }
    },
    9: {
      steps: [`Köşeleri eşle: A→D, B→E, dolayısıyla C→F.`, `ABC üçgeninde açı toplamı: ${calc('18° + 90° + ∠C = 180°')}`, calc('∠C = 72°'), `Karşılık gelen açılar eşittir: ∠F = ∠C = 72°.`],
      why: `<p>Eş üçgenlerde karşılık gelen açılar eşittir. A ↔ D, B ↔ E, dolayısıyla <b>C ↔ F</b>. ABC üçgeninde A = 18°, B = 90°, yani C = 180° − 90° − 18° = <b>72°</b>. Bu yüzden F = 72°.</p>`,
      wrong: { A: `18°, A (ve D) açısıdır, F değil.`, C: `90°, B ve E'deki dik açıdır.`, D: `162°, E ve F açılarının <i>toplamıdır</i> (90° + 72°), tek başına F değil. (Aynı zamanda dik açıyı unutan 180° − 18° işlemine de eşit.)` },
      tip: `Eşlemeyi yaz (ABC ↔ DEF) ve harfleri sıralarına göre eşleştir. Üçüncü harfler (C ve F) birbirine karşılık gelir.`,
      vocab: { congruent: `eş (şekli ve boyutu tamamen aynı)`, corresponds: `karşılık gelir`, 'right angle': `dik açı (tam 90°)` }
    },
    10: {
      steps: [`Çarpanlara ayır: ${calc('16<i>x</i> + 8 = 4(4<i>x</i> + 2)')}`, `Yerine koy: ${calc('4(12) = 48')}`, `Çözerek kontrol: 4<i>x</i> = 10, <i>x</i> = 2.5; 16(2.5) + 8 = 40 + 8 = 48 ✓.`],
      why: `<p>16<i>x</i> + 8 = <b>4(4<i>x</i> + 2)</b> olduğuna dikkat et. 4<i>x</i> + 2 = 12 olduğundan ifade 4 × 12 = <b>48</b> eder. <i>x</i>'i bulmaya gerek yok.</p>`,
      wrong: { A: `40, + 8'i unutup yalnızca 16<i>x</i>'i (16 × 2.5) hesaplar.`, C: `56, 4 × 12 + 8 ile 8'i iki kez eklemekten gelebilir.`, D: `60, yanlış çarpanla 5 × 12'den gelebilir.` },
      tip: `<i>x</i> yerine bir ifade soruluyorsa önce verilen ifadenin katını ara; zaman kazandırır ve kesir hatalarını önler.`,
      vocab: { expression: `ifade (eşittir işareti olmayan sayı, değişken ve işlem bileşimi)` }
    },
    11: {
      steps: [`Aynı tabanları grupla: (<i>m</i><sup>4</sup> · <i>m</i><sup>1</sup>)(<i>q</i><sup>4</sup> · <i>q</i><sup>5</sup>)(<i>z</i><sup>−1</sup> · <i>z</i><sup>3</sup>).`, `Üsleri topla: <i>m</i><sup>5</sup>, <i>q</i><sup>9</sup>, <i>z</i><sup>2</sup>.`, calc('<i>m</i><sup>5</sup><i>q</i><sup>9</sup><i>z</i><sup>2</sup>')],
      why: `<p>Her taban için çarpım kuralını kullan: <i>a</i><sup>p</sup> · <i>a</i><sup>q</sup> = <i>a</i><sup>p+q</sup>.</p><ul><li><i>m</i>: 4 + 1 = 5</li><li><i>q</i>: 4 + 5 = 9</li><li><i>z</i>: −1 + 3 = 2</li></ul><p>Sonuç: <b><i>m</i><sup>5</sup><i>q</i><sup>9</sup><i>z</i><sup>2</sup></b>.</p>`,
      wrong: { A: `<i>q</i> (4 × 5 = 20) ve <i>z</i> (−1 × 3 = −3) için üsleri toplamak yerine çarpıyor ve <i>m</i>'nin ikinci çarpanını atlıyor.`, C: `Tutarsız toplama: üsler aynı tabanların toplanmasından gelmiyor.`, D: `Üsleri baştan sona çarpıyor; çarpma, bir kuvvetin kuvveti için kullanılır, çarpım için değil.` },
      tip: `Kuvvetlerin çarpımı: topla. Kuvvetin kuvveti: çarp. Görünmeyen 1 üslerini unutma.`,
      vocab: { equivalent: `denk (izin verilen tüm girdiler için eşit)`, exponent: `üs (tekrarlı çarpmayı gösteren küçük sayı)` }
    },
    12: {
      steps: [`Her dakika aynı miktarda değişim → doğrusal.`, `Zaman geçtikçe irtifa azalıyor → azalan.`, `Model: <i>A</i>(<i>t</i>) = 9,500 − 400<i>t</i>, azalan doğrusal bir fonksiyon.`],
      why: `<p>Cevabı iki özellik belirler. <b>Sabit hız</b> (her dakika aynı 400 fit), değişimin sabit bir <i>miktar</i> olduğu anlamına gelir; bu <b>doğrusal</b>dır (üstel değişim sabit bir <i>yüzde</i> iledir). Uçak <b>alçalıyor</b>, yani irtifa zamanla azalıyor: <b>azalan</b>. Model: irtifa = 9,500 − 400<i>t</i>.</p>`,
      wrong: { A: `Üstel azalma her dakika aynı fit sayısıyla değil, aynı <i>yüzdeyle</i> küçülür.`, C: `İrtifa azalıyor ve değişim yüzdesel değil.`, D: `Doğrusal doğru ama irtifa artmıyor, azalıyor.` },
      tip: `Doğrusal = her adımda aynı miktarı ekle/çıkar. Üstel = her adımda aynı çarpanla çarp.`,
      vocab: { descends: `alçalır, iner`, altitude: `irtifa, yükseklik`, 'constant rate': `sabit hız (her birim zamanda aynı miktarda değişim)`, exponential: `üstel (her dönem aynı oranda değişen)` }
    },
    13: {
      steps: [`1. denklemden 2. denklemi çıkar: ${calc('(3<i>x</i> + 6) − (3<i>x</i> + 4) = 4<i>y</i> − 2<i>y</i>')}`, calc('2 = 2<i>y</i>'), calc('<i>y</i> = 1'), `Kontrol: 3<i>x</i> + 4 = 2(1) → <i>x</i> = −2/3. Sonra 3(−2/3) + 6 = 4 = 4(1) ✓.`],
      why: `<p>İki denklemde de aynı 3<i>x</i> terimi var; çıkarınca <i>x</i> hemen yok olur:</p><p>(3<i>x</i> + 6) − (3<i>x</i> + 4) = 4<i>y</i> − 2<i>y</i> → 2 = 2<i>y</i> → <b><i>y</i> = 1</b>.</p>`,
      mistakes: [`<i>x</i>'i (−2/3) bulup <i>y</i> yerine onu yazmak.`, `Çıkarırken işaret hatası: 6 − 4 = 2, 10 değil.`],
      tip: `Yerine koymadan önce aynı terimleri ara. Yok etme yöntemi çoğu zaman tek adımlık çözümdür.`,
      vocab: { elimination: `yok etme yöntemi: bir değişkeni sadeleştirmek için denklemleri toplama/çıkarma` }
    },
    14: {
      steps: [calc('<i>f</i>(0) = (−6)(−2)(6)'), calc('(−6)(−2) = 12, 12 × 6 = 72'), `4 yukarı: ${calc('<i>g</i>(0) = 72 + 4 = 76')}`],
      why: `<p>Grafiği 4 birim yukarı kaydırmak her çıktıya 4 ekler: <i>g</i>(<i>x</i>) = <i>f</i>(<i>x</i>) + 4. <i>f</i>(0) = (0 − 6)(0 − 2)(0 + 6) = (−6)(−2)(6) = 72. Dolayısıyla <i>g</i>(0) = 72 + 4 = <b>76</b>.</p>`,
      mistakes: [`İşaret hatası: (−6)(−2) = +12'dir, −12 değil. Bu hata −72 + 4 = −68 verir.`, `Girdiyi kaydırmak: <i>f</i>(0 + 4) ya da <i>f</i>(0 − 4) yatay öteleme demektir, "yukarı" değil.`],
      tip: `Dikey öteleme: çıktıya ekle, <i>f</i>(<i>x</i>) + <i>k</i>. Yatay öteleme: girdiyi değiştir, <i>f</i>(<i>x</i> − <i>h</i>).`,
      vocab: { translating: `öteleme (grafiği şeklini bozmadan kaydırma)` }
    },
    15: {
      steps: [`Girdi (parantez içi): 14 = fit cinsinden genişlik.`, `Çıktı: 1,176 = fit kare cinsinden alan.`, `Doğrula: 6(14)<sup>2</sup> = 6(196) = 1,176 ✓.`],
      why: `<p><i>f</i>'nin girdisi <i>w</i>, yani <b>genişlik</b>; çıktısı <b>alan</b>. Dolayısıyla <i>f</i>(14) = 1,176 şu demektir: genişlik 14 ft → alan 1,176 ft<sup>2</sup>. Kontrol: uzunluk = 6 × 14 = 84 ft ve 14 × 84 = 1,176 ✓.</p>`,
      wrong: { B: `Çıktı alandır, uzunluk değil. Uzunluk 6 × 14 = 84 ft olurdu.`, C: `Girdi ile çıktının yerini değiştiriyor ve çıktıyı uzunluk sanıyor.`, D: `Girdi ile çıktının yerini değiştiriyor: <i>f</i>(<i>w</i>)'yi, genişlik <i>w</i> iken alan olarak değil, alan <i>w</i> iken genişlik olarak yorumluyor.` },
      tip: `<i>f</i>(girdi) = çıktı. Fonksiyon gösterimini doğru yorumlamak için her birinin birimini adlandır.`,
      vocab: { interpretation: `yorum, bir şeyin bağlamdaki anlamı` }
    },
    16: {
      steps: [`Başlangıç değeri <i>a</i> = 44,000.`, `İkiye katlanma → büyüme çarpanı <i>b</i> = 2.`, calc('<i>y</i> = 44,000(2)<sup><i>t</i></sup>')],
      why: `<p>Üstel modeller <i>y</i> = <i>a</i>(<i>b</i>)<sup><i>t</i></sup> biçimindedir; <i>a</i> başlangıç miktarı, <i>b</i> her dönemdeki çarpandır. Başlangıç <b>44,000</b> ve "doubles every day" her gün <b>2</b> ile çarpmak demek. Dolayısıyla <b><i>y</i> = 44,000(2)<sup><i>t</i></sup></b>. Kontrol: <i>t</i> = 0'da <i>y</i> = 44,000 ✓; <i>t</i> = 1'de <i>y</i> = 88,000 ✓.</p>`,
      wrong: { A: `44,000'i <i>t</i>. kuvvete yükseltiyor (saçma derecede hızlı büyür) ve yarıya bölüyor.`, B: `Yine 44,000'i <i>t</i>. kuvvete yükseltiyor; <i>t</i> = 0'da 44,000 değil 2 verir.`, C: `1/2 çarpanı nüfusun her gün yarıya indiği anlamına gelir (azalma); ikiye katlanma değil.` },
      tip: `Başlangıç değerini kontrol etmek için <i>t</i> = 0 yaz; A ve B anında elenir.`,
      vocab: { medium: `besiyeri (bakterilerin üredüğü ortam)`, doubles: `iki katına çıkar` }
    },
    17: {
      steps: [`<i>x</i> = 0: ${calc('<i>h</i>(0) = <i>a</i>(<i>b</i>)<sup>0</sup> = <i>a</i> = 1.23')}`, `2 yıllık büyüme çarpanı: 1.54 ÷ 1.23 ≈ 1.252, yani yıllık <i>b</i> = √1.252 ≈ 1.12.`, `<i>x</i> = 4 kontrolü: 1.23(1.12)<sup>4</sup> = 1.23(1.5735) ≈ 1.94 ✓.`],
      why: `<p><i>h</i>(<i>x</i>) = <i>a</i>(<i>b</i>)<sup><i>x</i></sup> için <i>x</i> = 0 yazınca <i>h</i>(0) = <i>a</i> olur. Tabloya göre <i>h</i>(0) = 1.23, yani <b><i>a</i> = 1.23</b> (A ve B elenir). Değerler artıyor, yani <b><i>b</i> > 1</b> (C elenir). D'yi kontrol et: 1.23(1.12)<sup>2</sup> = 1.23(1.2544) ≈ 1.54 ✓ ve 1.23(1.12)<sup>4</sup> ≈ 1.94 ✓.</p>`,
      wrong: { A: `<i>x</i> = 0'da 1.23 değil 1.12 verir ve 0.23 < 1 tabanı artış değil azalma demektir.`, B: `<i>x</i> = 0'da 1.23 değil 1.12 verir.`, C: `0.12 < 1 tabanı yüksekliğin hızla azalmasını sağlar; tablo ise artış gösteriyor.` },
      tip: `Üstel şıklar için iki hızlı süzgeç: <i>f</i>(0) katsayıyı verir; büyüme için taban > 1, azalma için 0 < taban < 1 olmalı.`,
      vocab: { 'exponential relationship': `üstel ilişki: girdideki eşit adımlarda çıktının aynı çarpanla çarpıldığı örüntü` }
    },
    18: {
      steps: [`<i>b</i>: ${calc('<i>h</i>(0) = 4(0) + 28 = 28')}`, `<i>a</i>: ${calc('4<i>a</i> + 28 = 0 → <i>a</i> = −7')}`, calc('<i>a</i> + <i>b</i> = −7 + 28 = 21')],
      why: `<p><b><i>y</i>-kesişimi:</b> <i>h</i>(0) = 28, yani <i>b</i> = 28.<br><b><i>x</i>-kesişimi:</b> 4<i>a</i> + 28 = 0 → <i>a</i> = −7.<br>Dolayısıyla <i>a</i> + <i>b</i> = −7 + 28 = <b>21</b>.</p>`,
      wrong: { B: `28 yalnızca <i>b</i>; <i>a</i>'yı eklemeyi unutuyor.`, C: `32, <i>x</i>-kesişimi yerine eğimi (<i>a</i> = 4) kullanıyor.`, D: `35, <i>a</i> + <i>b</i> değil −<i>a</i> + <i>b</i>'dir; 4<i>a</i> = −28'i çözerken işaret hatası.` },
      tip: `Kesişimler: <i>diğer</i> değişkeni sıfır yap. <i>x</i>-kesişimi → <i>y</i> = 0; <i>y</i>-kesişimi → <i>x</i> = 0.`,
      vocab: { 'x-intercept': `x-kesişimi (grafiğin x eksenini kestiği yer, y = 0)`, 'y-intercept': `y-kesişimi (grafiğin y eksenini kestiği yer, x = 0)`, constants: `sabitler` }
    },
    19: {
      steps: [`Sınır değerleri: 5(3) + 6 = 21, 5(5) + 6 = 31, 5(7) + 6 = 41.`, `A tablosu: 17 < 21, 27 < 31, 37 < 41 → hepsi doğru ✓.`, `B, <i>x</i> = 5'te bozuluyor (35, 31'den küçük değil); C her yerde bozuluyor; D'de <i>y</i> sınıra eşit (21 = 21), bu da "<" değildir.`],
      why: `<p>Her <i>x</i> için 5<i>x</i> + 6 sınırını hesapla: <i>x</i> = 3 → 21; <i>x</i> = 5 → 31; <i>x</i> = 7 → 41. Her <i>y</i> bunlardan <b>kesinlikle küçük</b> olmalı. A tablosu: 17 < 21 ✓, 27 < 31 ✓, 37 < 41 ✓. Üçü de sağlıyor.</p>`,
      wrong: { B: `<i>x</i> = 5'te <i>y</i> = 35, 31'den küçük değil.`, C: `Her <i>y</i> sınırdan büyük: 25 > 21, 35 > 31, 45 > 41.`, D: `Bu noktalar tam olarak <i>y</i> = 5<i>x</i> + 6 doğrusunun <i>üzerinde</i>. Eşitsizlik kesin (<) olduğu için eşitlik sayılmaz.` },
      tip: `Kesin eşitsizlikler (< veya >) sınırı içermez. Tam doğru üzerindeki noktalar tuzaktır.`,
      vocab: { inequality: `eşitsizlik` }
    },
    20: {
      steps: [calc('4(4<i>x</i> + 1) = 15<i>x</i> − 8'), calc('16<i>x</i> + 4 = 15<i>x</i> − 8'), calc('<i>x</i> = −12'), calc('<i>y</i> = 4(−12) + 1 = −47'), calc('<i>x</i> − <i>y</i> = −12 + 47 = 35')],
      why: `<p><i>y</i> = 4<i>x</i> + 1'i 4<i>y</i> = 15<i>x</i> − 8'de yerine koy: 4(4<i>x</i> + 1) = 15<i>x</i> − 8 → 16<i>x</i> + 4 = 15<i>x</i> − 8 → <i>x</i> = −12. Sonra <i>y</i> = 4(−12) + 1 = −47. Dolayısıyla <i>x</i> − <i>y</i> = −12 − (−47) = <b>35</b>.</p>`,
      mistakes: [`İşaret hatası: −12 − (−47) = −12 + 47 = 35'tir, −59 değil.`, `Dağılmada hata: 4(4<i>x</i> + 1) = 16<i>x</i> + 4'tür, 16<i>x</i> + 1 değil.`],
      tip: `Negatif bir sayıyı çıkarmak toplamaktır. Hata yapmamak için çift eksiyi açıkça yaz.`,
      vocab: { substitution: `yerine koyma yöntemi` }
    },
    21: {
      steps: [calc('<i>c</i><sup>2</sup> = 24<sup>2</sup> + 21<sup>2</sup> = 576 + 441 = 1,017'), calc('1,017 = 9 × 113'), calc(`<i>c</i> = ${R('9 × 113')} = 3${R('113')}`), `<i>d</i> = 113.`],
      why: `<p>Pisagor teoremine göre <i>c</i><sup>2</sup> = 24<sup>2</sup> + 21<sup>2</sup> = 576 + 441 = 1,017. Yani <i>c</i> = √1,017. Bir tam kare ayır: 1,017 = 9 × 113, dolayısıyla √1,017 = √9 · √113 = 3√113. Buradan <b><i>d</i> = 113</b>.</p>`,
      mistakes: [`3'ü dışarı çıkarmayı unutup 1,017 yazmak.`, `Karelerini değil dik kenarların kendisini toplamak (45).`],
      tip: `İki dik kenar da 3'ün katı (24 = 3·8, 21 = 3·7), dolayısıyla hipotenüs 3√(8² + 7²) = 3√113. Ortak çarpanları görmek zaman kazandırır.`,
      vocab: { legs: `dik kenarlar (dik açıyı oluşturan iki kenar)`, hypotenuse: `hipotenüs (dik açının karşısındaki en uzun kenar)`, integer: `tam sayı` }
    },
    22: {
      steps: [`Uzunluk çarpanı: <i>k</i> = 1/10.`, `Alan çarpanı: ${calc(`<i>k</i><sup>2</sup> = ${F(1, 100)}`)}`, calc(`600 × ${F(1, 100)} = 6`)],
      why: `<p>Her uzunluk <i>k</i> ile ölçeklendiğinde alan <b><i>k</i><sup>2</sup></b> ile ölçeklenir (alan iki boyutludur). Burada <i>k</i> = 1/10, yani alan (1/10)<sup>2</sup> = 1/100 ile çarpılır. Maketin alanı 600 × 1/100 = <b>6</b> metrekare.</p>`,
      wrong: { B: `10'un doğrudan bir bağlantısı yok; ölçek çarpanının yanlış uygulanmasından gelebilir.`, C: `60, alanı 1/10 ile çarpıyor; alanı uzunluk gibi işliyor.`, D: `150, 4'e bölmekten gelebilir; ölçek çarpanıyla ilgisi yok.` },
      tip: `Ölçek kuralı: uzunluklar × <i>k</i>, alanlar × <i>k</i><sup>2</sup>, hacimler × <i>k</i><sup>3</sup>.`,
      vocab: { 'scale model': `ölçekli maket (tüm uzunlukları aynı çarpanla küçültülmüş/büyütülmüş kopya)`, corresponding: `karşılık gelen` }
    },
    23: {
      steps: [`Her çemberin yarıçapı: √16 = 4.`, `Merkezin <i>y</i> eksenine uzaklığı = |<i>h</i>|: A: 8, B: 8, C: 4, D: 0.`, `|<i>h</i>| = 4 = <i>r</i> → <i>y</i> eksenine teğet → tam bir kesişim noktası: <b>C</b>. ((0, 9)'da değer.)`],
      why: `<p>(<i>x</i> − <i>h</i>)<sup>2</sup> + (<i>y</i> − <i>k</i>)<sup>2</sup> = <i>r</i><sup>2</sup> denkleminde merkez (<i>h</i>, <i>k</i>) ve yarıçap <i>r</i>'dir. Her şıkta <i>r</i><sup>2</sup> = 16, yani <i>r</i> = 4. Bir çember <i>y</i> eksenini tam bir noktada ancak merkezden <i>y</i> eksenine uzaklık (|<i>h</i>|) yarıçapa eşitse keser, yani <b>teğet</b>tir. Yalnızca C'de |<i>h</i>| = 4: merkez (4, 9).</p>`,
      wrong: { A: `Merkez (8, 8), <i>y</i> eksenine 8 birim uzakta; yarıçaptan fazla, çember eksene hiç ulaşmaz (0 nokta).`, B: `Merkez (8, 4), <i>y</i> eksenine 8 birim uzakta; ona ulaşmaz. <i>x</i> ekseninin tam 4 birim üstünde olduğu için bu çember <b><i>x</i> eksenine</b> tek noktada değer. Tuzak eksenleri karıştırmak.`, D: `Merkez (0, 9) <i>y</i> ekseninin üzerinde; çember ekseni iki kez keser: (0, 5) ve (0, 13).` },
      tip: `Merkezin eksene uzaklığı ile yarıçapı karşılaştır: büyükse → 0 nokta, eşitse → 1 nokta, küçükse → 2 nokta.`,
      vocab: { intersects: `keser`, radius: `yarıçap`, tangent: `teğet (bir doğruya tek noktada değen)` }
    },
    24: {
      steps: [`Açı toplamı: ∠A = ∠D = 180° − 27° − 41° = 112°. Tüm açılar eşit → benzer üçgenler.`, `Benzer üçgenler ancak karşılık gelen bir kenar çifti eşitse eştir.`, `BC ↔ EF (ikisi de 27° ile 41° açıları arasında). İki uzunluğu da bilmek soruyu çözer.`],
      why: `<p>İki açı çifti eşit olduğundan üçüncü açılar da eşittir (A = D = 112°); yani üçgenler <b>benzerdir</b>: aynı şekil, belki farklı boyut. <b>Eş</b> olup olmadıklarını anlamak için <b>karşılık gelen bir kenar çiftini</b> karşılaştırmak gerekir. <i>BC</i> kenarı (B ve C açıları arasında) <i>EF</i> kenarına (E ve F açıları arasında) karşılık gelir. İki uzunluğu bilmek sonucu verir: eşitse eş (ASA); değilse eş değil.</p>`,
      wrong: { A: `A açısı zaten açı toplamından biliniyor (112°) ve açılar tek başına eşliği asla kanıtlayamaz.`, B: `Yalnızca <i>AB</i>'yi bilmek DEF üçgeninin boyutu hakkında bir şey söylemez; karşılaştırma yapılamaz.`, D: `Eşit açılar yalnızca benzerliği garanti eder; bir üçgen diğerinin büyütülmüş kopyası olabilir.` },
      tip: `AAA benzerliği kanıtlar, eşliği değil. En az bir eşit karşılık gelen kenar çiftine her zaman ihtiyaç var.`,
      vocab: { sufficient: `yeterli`, congruent: `eş (şekli ve boyutu aynı)`, similar: `benzer (aynı şekil, boyutu farklı olabilir)` }
    },
    25: {
      steps: [`%1,800 ondalık olarak: 18.`, `%1,800 artırma: ${calc('<i>x</i> + 18<i>x</i> = 19<i>x</i>')}`, calc('19<i>x</i> = 684 → <i>x</i> = 36'), `Kontrol: 36 + 18(36) = 36 + 648 = 684 ✓.`],
      why: `<p><i>x</i>'i %1,800 artırmak, <i>x</i>'in %1,800'ünü (yani 18<i>x</i>'i) asıl <i>x</i>'e eklemek demektir: <i>x</i> + 18<i>x</i> = <b>19<i>x</i></b>. 19<i>x</i> = 684 → <i>x</i> = <b>36</b>.</p>`,
      wrong: { A: `12,996 = 684 × 19: bölmek yerine çarpıyor. (12,996'yı %1,800 artırmak 246,924 eder, 684 değil.)`, B: `12,312 = 684 × 18: çözmek yerine yüzdeyle çarpıyor.`, C: `38 = 684 ÷ 18: sonucu <i>x</i>'in %1,800'ü (18<i>x</i>) sanıyor ve asıl <i>x</i>'i eklemeyi unutuyor. (38'i %1,800 artırmak 722 eder.)` },
      tip: `"%<i>p</i> artır" (1 + <i>p</i>/100) ile çarpar. "%<i>p</i>'si" <i>p</i>/100 ile çarpar. C'deki tuzak bu fark.`,
      vocab: { 'increasing by a percent': `yüzde oranında artırmak: aslının o yüzdesini aslına eklemek` }
    },
    26: {
      steps: [`5 saatlik işte ek saat: 5 − 2 = 3.`, `Bu 3 saatin maliyeti: 400 − 220 = 180 → 180 ÷ 3 = saat başı 60 $.`, calc('<i>f</i>(<i>x</i>) = 220 + 60(<i>x</i> − 2) = 60<i>x</i> + 100'), `Kontrol: <i>f</i>(2) = 220 ✓, <i>f</i>(5) = 400 ✓.`],
      why: `<p>5 saat için 400 $ − 220 $ = 180 $, 3 ek saati karşılıyor; saatlik ücret 180 $ ÷ 3 = <b>60 $</b>. <i>x</i> saat için (<i>x</i> − 2) ek saat vardır: <i>f</i>(<i>x</i>) = 220 + 60(<i>x</i> − 2) = 220 + 60<i>x</i> − 120 = <b>60<i>x</i> + 100</b>.</p>`,
      wrong: { B: `60<i>x</i> + 220, <i>f</i>(2) = 340 verir; ilk iki saat için 220 $ değil 340 $ demektir. <i>f</i>(5) = 520, 400 değil.`, C: `80<i>x</i>, <i>f</i>(5) = 400'ü tutturuyor ama <i>f</i>(2) = 160 veriyor (220 değil) ve saatlik ücreti 60 $ yerine 80 $ yapıyor.`, D: `80<i>x</i> + 220, <i>f</i>(2) = 380 (220 yerine) ve <i>f</i>(5) = 620 (400 yerine) veriyor.` },
      tip: `Şıkları iki bilinen noktayla test et (burada <i>x</i> = 2 → 220 ve <i>x</i> = 5 → 400). Yalnızca doğru model ikisini de sağlar.`,
      vocab: { additional: `ek, ilave` }
    },
    27: {
      answerText: `29/3 (veya 9.666, 9.667)`,
      steps: [`Sol taraf: ${calc('<i>x</i><sup>2</sup> + <i>x</i> − 56')}`, `Sağ taraf: ${calc('4<i>x</i><sup>2</sup> − 28<i>x</i>')}`, `Sıfıra eşitle: ${calc('3<i>x</i><sup>2</sup> − 29<i>x</i> + 56 = 0')}`, `Kökler toplamı: ${calc(`−${F('<i>b</i>', '<i>a</i>')} = ${F(29, 3)} ≈ 9.667`)}`, `Çarpanlarla kontrol: (3<i>x</i> − 8)(<i>x</i> − 7) = 0 → <i>x</i> = 8/3, 7.`],
      why: `<p>Aç: <i>x</i><sup>2</sup> + <i>x</i> − 56 = 4<i>x</i><sup>2</sup> − 28<i>x</i>. Her şeyi sağ tarafa taşı: 0 = 3<i>x</i><sup>2</sup> − 29<i>x</i> + 56. <i>ax</i><sup>2</sup> + <i>bx</i> + <i>c</i> = 0 için köklerin toplamı <b>−<i>b</i>/<i>a</i></b> = −(−29)/3 = <b>29/3</b>.</p><p>Çarpanlara ayırarak kontrol: 3<i>x</i><sup>2</sup> − 29<i>x</i> + 56 = (3<i>x</i> − 8)(<i>x</i> − 7), yani <i>x</i> = 8/3 veya 7; 8/3 + 7 = 29/3 ✓.</p>`,
      mistakes: [`Terimleri taşırken işaret hatası: <i>x</i>'li terimler −28<i>x</i> − <i>x</i> = −29<i>x</i> verir, −27<i>x</i> değil.`, `9.67 yazmak: yeterince uzun değil. 29/3, 9.666 veya 9.667 yaz.`, `Denklemi sıfıra eşitlemeden −<i>b</i>/<i>a</i> kullanmak.`],
      tip: `Kökler toplamı = −<i>b</i>/<i>a</i>, kökler çarpımı = <i>c</i>/<i>a</i>. Bu kısayollar çözmeyi tamamen atlatır.`,
      vocab: { solutions: `çözümler, kökler (denklemi doğru yapan değerler)`, quadratic: `ikinci dereceden (en büyük üssü 2 olan)` }
    }
  };
})();
