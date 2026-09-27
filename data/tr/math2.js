/* Matematik — Modül 2: Türkçe çözümler. */
(function () {
  const F = (a, b) => `<span class="frac"><span>${a}</span><span>${b}</span></span>`;
  const R = a => `<span class="sqrt">√<span>${a}</span></span>`;
  const calc = s => `<span class="calc">${s}</span>`;
  window.SAT = window.SAT || { modules: [] };
  SAT.tr = SAT.tr || {};
  SAT.tr.math2 = {
    1: {
      steps: [calc(`64 ${F('yd', 's')} × ${F('3 ft', '1 yd')} = 192 ${F('ft', 's')}`), `Mantık kontrolü: fit yardadan küçüktür, dolayısıyla sayı büyümeli.`],
      why: `<p>Her yarda 3 fittir; fit cinsinden hız, yarda cinsinden hızın 3 katıdır: 64 × 3 = <b>192</b> fit/saniye.</p>`,
      wrong: { A: `61 = 64 − 3: çarpmak yerine çıkarıyor. (61 fit/s aslında 61/3 yarda/s'dir.)`, B: `67 = 64 + 3: çarpmak yerine topluyor.`, C: `94'ün dönüşümle geçerli bir bağlantısı yok.` },
      tip: `Birimleri kesir gibi yaz ve sadeleştir (yd üstte, yd altta). Birimler çarpman mı bölmen mi gerektiğini söyler.`,
      vocab: { conversion: `birim dönüştürme` }
    },
    2: {
      steps: [`Yön: sağa doğru yükseliyor → pozitif eğim.`, `<i>y</i>-kesişimi: doğru <i>y</i> ekseninde yaklaşık 3.4'ten başlıyor → +3.4.`, `İkisine de sahip tek denklem <i>y</i> = <i>x</i> + 3.4.`],
      why: `<p>Doğru soldan sağa <b>yükseliyor</b>, yani eğimi <b>pozitif</b> (C ve D elenir). <i>y</i> eksenini orijinin <b>üstünde</b>, yaklaşık 3.4'te kesiyor; <i>y</i>-kesişimi <b>pozitif</b> (B elenir). Geriye <b><i>y</i> = <i>x</i> + 3.4</b> kalıyor. Kontrol: <i>x</i> = 10'da doğru yaklaşık 13.4'te; grafikle uyumlu.</p>`,
      wrong: { B: `Eğim pozitif ama <i>y</i>-kesişimi −3.4 olurdu, orijinin altında.`, C: `Negatif eğim; doğru soldan sağa alçalırdı.`, D: `Negatif eğim ve negatif kesişim.` },
      tip: `"Hangi denklem" grafik sorularında önce eğimin ve kesişimin işaretine bak; genellikle tek şık kalır.`,
      vocab: { scatterplot: `serpilme grafiği (iki değişkenin ilişkisini gösteren nokta grafiği)`, 'line of best fit': `en uygun doğru (verinin eğilimini en iyi izleyen doğru)`, slope: `eğim` }
    },
    3: {
      steps: [`<i>y</i>-kesişimi: (0, −5).`, `Eğim: (0, −5)'ten (2.5, 0)'a, 2.5 ilerlemede 5 yükselme → 2.`, `Denklem: <i>y</i> = 2<i>x</i> − 5 → <i>x</i> = 1: −3; <i>x</i> = 2: −1.`, `D tablosu uyuyor: (0, −5), (1, −3), (2, −1).`],
      why: `<p>Doğru <i>y</i> eksenini <b>(0, −5)</b>'te kesiyor; yani <i>x</i> = 0 iken <i>y</i> = −5 (A ve B elenir). Doğru soldan sağa yükseliyor, sağa her 1 birimde 2 yukarı (eğim 2): <i>y</i> = 2<i>x</i> − 5. Bu da (1, −3) ve (2, −1) verir; <b>D</b> tablosu.</p>`,
      wrong: { A: `(0, 0) doğru üzerinde değil ve <i>y</i> değerleri azalıyor; oysa doğru yükseliyor.`, B: `(0, 0) doğru üzerinde değil.`, C: `Kesişim doğru ama <i>y</i> her adımda 2 azalıyor (eğim −2); doğru ise yükseliyor.` },
      tip: `Genellikle iki kontrol yeter: <i>x</i> = 0'daki nokta ve <i>y</i>'nin artıp azaldığı.`,
      vocab: { 'linear relationship': `doğrusal ilişki (grafiği düz bir doğru olan)`, corresponding: `karşılık gelen, eşleşen` }
    },
    4: {
      steps: [calc('<i>Ç</i> = 2ℓ + 2<i>w</i>'), calc('<i>Ç</i> = 2(4) + 2(9) = 8 + 18 = 26')],
      why: `<p>Çevre dört kenarın toplamıdır: 2(uzunluk) + 2(genişlik) = 2(4) + 2(9) = 8 + 18 = <b>26</b> inç.</p>`,
      wrong: { A: `13 = 4 + 9 yalnızca bir uzunluk ve bir genişlik sayıyor (çevrenin yarısı).`, B: `17 = 4 + 4 + 9, bir genişliği eksik bırakıyor.`, C: `22 = 4 + 9 + 9, bir uzunluğu eksik bırakıyor.` },
      tip: `Çevreyi (etrafındaki mesafe: kenarları topla) alanla (içindeki yer: çarp) karıştırma. Buradaki alan 36 olurdu.`,
      vocab: { perimeter: `çevre (bir şeklin etrafının toplam uzunluğu)` }
    },
    5: {
      steps: [calc('7<i>m</i> = 2(<i>n</i> + <i>p</i>)'), `İki tarafı 7'ye böl: ${calc(`<i>m</i> = ${F('2(<i>n</i> + <i>p</i>)', '7')}`)}`],
      why: `<p><i>m</i> 7 ile çarpılmış; onu yalnız bırakmak için iki tarafı 7'ye böl: <b><i>m</i> = 2(<i>n</i> + <i>p</i>)/7</b>.</p>`,
      wrong: { B: `7'yi tamamen yok sayıyor.`, C: `7'yi çıkarıyor; oysa 7 <i>m</i>'yi çarpıyor, bölmek gerekir. (Bu, 7 + <i>m</i> = 2(<i>n</i> + <i>p</i>) denklemine denktir.)`, D: `7'yi çıkarıyor ve dağılmayı da yanlış yapıyor.` },
      tip: `İşlemleri tersleriyle geri al: çarpma ↔ bölme, toplama ↔ çıkarma.`,
      vocab: { 'in terms of': `cinsinden (diğer değişkenlerle ifade edilmiş)` }
    },
    6: {
      steps: [`Sayı: 9 değer (tek).`, `Ortanca konum: (9 + 1) ÷ 2 = 5. değer.`, `5. değer = <b>79</b> (altında 4, üstünde 4 değer).`],
      why: `<p>9 değer zaten artan sırada. Değer sayısı tek olduğunda medyan (ortanca) ortadaki değerdir, yani 5. değer: 73, 74, 75, 77, <b>79</b>, 82, 84, 85, 91. Medyan <b>79</b>.</p>`,
      mistakes: [`Medyan yerine aritmetik ortalamayı hesaplamak (720 ÷ 9 = 80).`, `Verinin sıralı olup olmadığını kontrol etmemek (burada sıralı).`],
      tip: `Medyan: sırala, sonra ortadakini al (tek sayıda) ya da ortadaki iki değerin ortalamasını al (çift sayıda).`,
      vocab: { median: `medyan, ortanca (sıralı verinin ortasındaki değer)`, mean: `aritmetik ortalama (toplam ÷ sayı)` }
    },
    7: {
      steps: [calc('4<i>x</i> = 8'), calc('<i>x</i> = 8 ÷ 4 = 2')],
      why: `<p>Çıktısı 8 olan girdiyi arıyoruz: 4<i>x</i> = 8, yani <b><i>x</i> = 2</b>.</p>`,
      mistakes: [`<i>f</i>(<i>x</i>) = 8'i çözmek yerine <i>f</i>(8) = 32'yi hesaplamak.`],
      tip: `"<i>f</i>(<i>x</i>) = 8" çıktıyı verip girdiyi sorar. "<i>f</i>(8)" girdiyi verip çıktıyı sorar.`,
      vocab: { function: `fonksiyon` }
    },
    8: {
      steps: [calc(`${F('234,000', '300,000')} = ${F(234, 300)} = 0.78`), calc('0.78 × 100 = %78')],
      why: `<p>Yüzde = parça ÷ bütün × 100 = 234,000 ÷ 300,000 × 100 = 0.78 × 100 = <b>%78</b>.</p>`,
      wrong: { A: `%22, büyük boy <i>olmayanların</i> yüzdesi (100 − 78).`, B: `%33'ün bu sayılarla bağlantısı yok.`, C: `%66, bir rakam karışıklığından gelebilir; 234/300 değil.` },
      tip: `Önce tahmin et: 300'de 234, 3/4'ten (300'de 225) fazla; cevap %75'in biraz üstünde.`,
      vocab: { percentage: `yüzde` }
    },
    9: {
      steps: [calc('<i>f</i>(0) = 8(0) + 4 = 4'), `<i>x</i> = 0, ilk ölçümün yapıldığı ana karşılık gelir.`, `Yani 4 = ilk ölçümdeki fit cinsinden boy.`],
      why: `<p><i>f</i>(<i>x</i>) = 8<i>x</i> + 4'te sabit 4, <i>x</i> = 0'daki değerdir: <i>f</i>(0) = 8(0) + 4 = 4. <i>x</i> = 0 "ilk ölçümden 0 yıl sonra" demek olduğundan ağaç <b>ilk ölçüldüğünde 4 fit boyundaydı</b>. (8 ise yıllık büyümedir.)</p>`,
      wrong: { A: `Fonksiyonda yıl sayısına bir sınır yok; 4 bir ölçüm sayısı değil.`, B: `Eğimi pozitif doğrusal bir fonksiyonun maksimumu yoktur; bu modelde ağaç uzamaya devam eder.`, C: `Yıllık artış eğimdir, yani yılda 8 fit; 4 değil.` },
      tip: `<i>y</i> = <i>mx</i> + <i>b</i> modellerinde: <i>b</i> = başlangıç değeri (<i>x</i> = 0'da), <i>m</i> = <i>x</i>'teki her birimlik değişim.`,
      vocab: { interpretation: `yorum`, estimated: `tahmini` }
    },
    10: {
      steps: [calc('<i>x</i><sup>2</sup> − 5 = 76'), calc('<i>x</i><sup>2</sup> = 81'), calc('<i>x</i> = ±9'), `Kontrol: (−9)<sup>2</sup> − 5 = 81 − 5 = 76 ✓.`],
      why: `<p>Kesişim noktasında iki denklemin <i>y</i> değeri aynıdır: <i>x</i><sup>2</sup> − 5 = 76 → <i>x</i><sup>2</sup> = 81 → <i>x</i> = 9 veya <i>x</i> = −9. Şıklarda yalnızca <b>−9</b> var.</p>`,
      wrong: { A: `−76/5, denklemi doğrusal gibi işleyip (−5<i>x</i> = 76) kareyi yok saymaktan geliyor.`, C: `5, çıkarılan sabit; çözüm değil: 5<sup>2</sup> − 5 = 20 ≠ 76.`, D: `76, <i>x</i> değil <i>y</i> değeri.` },
      tip: `Karenin iki kökü vardır. Şıklarda yalnızca biri varsa onu seç; ama soru "tüm" çözümleri ya da "çözümlerin toplamını" sorarsa ±'yı unutma.`,
      vocab: { intersect: `kesişmek` }
    },
    11: {
      steps: [`Yeni kenar = <i>k</i> × eski kenar.`, `Daha uzun olması için <i>k</i> > 1 gerekir.`, `29/28 ≈ 1.036 > 1 ✓; 1 boyutu aynı bırakır; 28/29 < 1 küçültür; 0 üçgeni yok eder.`],
      why: `<p>Bir uzunluğu <i>k</i> ile çarpmak onu ancak <b><i>k</i> > 1</b> ise uzatır. Şıklardan yalnızca 29/28 (≈ 1.036) 1'den büyük.</p>`,
      wrong: { B: `<i>k</i> = 1 eş bir üçgen üretir: kenarlar büyümez, aynı kalır.`, C: `28/29 ≈ 0.966 < 1 her kenarı kısaltır.`, D: `<i>k</i> = 0 her kenarı 0 yapar; ortada üçgen kalmaz.` },
      tip: `Payı paydasından büyük kesirler 1'den büyüktür. Pay ile paydayı bir bakışta karşılaştır.`,
      vocab: { equilateral: `eşkenar`, 'scale factor': `ölçek çarpanı (şekli yeniden boyutlandırmak için tüm uzunlukların çarpıldığı sayı)` }
    },
    12: {
      steps: [calc('66<i>x</i> − 66<i>x</i> = 0'), calc('0 = 0 (her zaman doğru)'), `Her gerçek sayı bir çözüm → sonsuz çözüm.`],
      why: `<p>İki taraf birebir aynı ifade; denklem <i>x</i>'in <b>her</b> değeri için doğru. İki taraftan 66<i>x</i> çıkarınca 0 = 0 elde edilir, bu her zaman doğrudur. Her zaman doğru olan bir denklem <b>özdeşliktir</b> ve <b>sonsuz sayıda</b> çözümü vardır.</p>`,
      wrong: { A: `İki tarafı 66<i>x</i>'e bölmek tek bir çözüm varmış izlenimi verebilir; ama bu adım <i>x</i> = 0 için geçersizdir ve her <i>x</i>'in çalıştığını gizler.`, B: `Doğrusal denklemlerin asla tam olarak iki çözümü olmaz.`, D: `Çözümsüzlük, sadeleştirince 0 = 5 gibi yanlış bir ifade çıktığında olur. Burada 0 = 0 çıkıyor.` },
      tip: `Sonuna kadar sadeleştir: doğru ifade (0 = 0) → sonsuz çözüm; yanlış ifade (0 = 3) → çözüm yok; <i>x</i> = sayı → tek çözüm.`,
      vocab: { identity: `özdeşlik (değişkenin her değeri için doğru olan denklem)` }
    },
    13: {
      steps: [calc('3(10) + <i>c</i> = 71'), calc('30 + <i>c</i> = 71'), calc('<i>c</i> = 41')],
      why: `<p>Parti şapkaları 10 × 3 $ = 30 $ tuttu. Kalan 71 $ − 30 $ = 41 $, tanesi 1 $ olan kekçiklere harcandı; yani <b>41</b> kekçik aldı. Denklem olarak: 3(10) + 1<i>c</i> = 71 → <i>c</i> = 41.</p>`,
      mistakes: [`30 cevabını vermek (şapkaların maliyeti).`, `Denklem kurmak yerine 71'i 3'e ya da 4'e bölmek.`],
      tip: `Toplam = (fiyat × adet) + (fiyat × adet) yaz, sonra bildiklerini yerine koy.`,
      vocab: { package: `paket` }
    },
    14: {
      steps: [calc('19<i>a</i><sup>3</sup> = 2,375'), calc('<i>a</i><sup>3</sup> = 125 → <i>a</i> = 5'), calc('<i>g</i>(4) = 19 · 5<sup>4</sup> = 19 · 625 = 11,875'), `Kısayol: <i>g</i>(4) = <i>g</i>(3) · <i>a</i> = 2,375 · 5.`],
      why: `<p><i>g</i>(3) = 19<i>a</i><sup>3</sup> = 2,375'ten, 19'a bölünce <i>a</i><sup>3</sup> = 125, yani <i>a</i> = 5. <i>x</i>'teki her 1 birimlik artış <i>g</i>'yi <i>a</i> ile çarpar; <i>g</i>(4) = <i>g</i>(3) × 5 = 2,375 × 5 = <b>11,875</b> (11875 olarak yaz).</p>`,
      mistakes: [`<i>a</i> = 5'te durup 5 yazmak.`, `Virgül koymak (11,875). Virgülsüz yaz: 11875.`],
      tip: `Üstel fonksiyonlarda <i>x</i>'ten <i>x</i> + 1'e geçmek çıktıyı tabanla çarpar.`,
      vocab: { 'exponential function': `üstel fonksiyon (değişkenin üste olduğu fonksiyon)`, constant: `sabit` }
    },
    15: {
      steps: [`R + S = 90° → dik açı T'de; R ve S tümler açılar.`, `R'nin karşısındaki kenar = S'nin komşu kenarı; hipotenüs ortak.`, calc(`cos(<i>S</i>) = ${F('S\'ye komşu', 'hipotenüs')} = ${F('R\'nin karşısı', 'hipotenüs')} = sin(<i>R</i>) = ${F(R(15), 4)}`)],
      why: `<p><i>R</i> + <i>S</i> = 90° olduğundan açılar <b>tümlerdir</b>. Tümler açılar için <b>sin(<i>R</i>) = cos(<i>S</i>)</b>: <i>R</i>'nin karşısındaki kenar, <i>S</i>'nin komşu kenarıyla aynıdır ve iki oran da aynı hipotenüsü kullanır. Dolayısıyla cos(<i>S</i>) = sin(<i>R</i>) = <b>√15/4</b>.</p>`,
      wrong: { A: `sin(<i>R</i>) = √15/4 olduğundan R'nin karşısı √15, hipotenüs 4 ve üçüncü kenar √(16 − 15) = 1. Dolayısıyla √15/15 = 1/√15, <b>tan(<i>S</i>)</b>'dir (S'nin karşısı ÷ S'nin komşusu), cos(<i>S</i>) değil.`, C: `4√15/15 = 4/√15, <b>1/cos(<i>S</i>)</b>'dir; doğru cevabın tersi.`, D: `√15, <b>1/tan(<i>S</i>)</b>'dir. Ayrıca 1'den büyüktür; bir açının kosinüsü için imkânsız.` },
      tip: `Tümler fonksiyon kuralı: sin(θ) = cos(90° − θ). SOH CAH TOA bunu doğrular: bir kenar dar açılardan biri için "karşı", diğeri için "komşu"dur.`,
      vocab: { complementary: `tümler (toplamı 90° olan açılar)`, sine: `sinüs (karşı kenar ÷ hipotenüs)`, cosine: `kosinüs (komşu kenar ÷ hipotenüs)` }
    },
    16: {
      steps: [`Grafikten kesişimler: (0, 40) ve (60, 0).`, `B'yi (0, 40)'ta test et: 8(0) + 12(40) = 480 ✓.`, `B'yi (60, 0)'da test et: 8(60) + 12(0) = 480 ✓.`],
      why: `<p>Doğru (0, 40)'tan (60, 0)'a <b>alçalıyor</b>. Kesişimleri test et:</p><ul><li><b>B:</b> <i>x</i> = 0 → 12<i>y</i> = 480 → <i>y</i> = 40 ✓. <i>y</i> = 0 → 8<i>x</i> = 480 → <i>x</i> = 60 ✓.</li><li><b>D:</b> <i>x</i> = 0 → 8<i>y</i> = 480 → <i>y</i> = 60 ✗.</li></ul><p>Denklem <b>8<i>x</i> + 12<i>y</i> = 480</b>. Bağlamda: A şirketinin hissesi 8 $, B şirketinin hissesi 12 $ ve Simone toplam 480 $ harcıyor.</p>`,
      wrong: { A: `(0, 40) bu doğru üzerinde değil: 8(0) + 12 = 12 ≠ 40. Ayrıca eğim pozitif.`, C: `(0, 40) bu doğru üzerinde değil: 12(0) + 8 = 8 ≠ 40.`, D: `Katsayıların yeri değişmiş: 12(0) + 8(40) = 320 ≠ 480. Kesişimler grafiğin tersi olan (40, 0) ve (0, 60) olurdu.` },
      tip: `Standart biçimli denklemlerde en hızlı kontrol kesişimlerdir: <i>y</i>-kesişimi için <i>x</i> = 0, <i>x</i>-kesişimi için <i>y</i> = 0.`,
      vocab: { 'shares of stock': `hisse senetleri (bir şirketteki alınıp satılabilen sahiplik payları)`, intercept: `kesişim (grafiğin bir ekseni kestiği yer)` }
    },
    17: {
      steps: [`Pay: ${calc('(<i>x</i> − 7)(8<i>x</i> − 3)')}`, `Payda: ${calc('2(<i>x</i> − 7)')}`, `(<i>x</i> − 7)'yi sadeleştir (<i>x</i> > 7 olduğu için izinli): ${calc(F('8<i>x</i> − 3', '2'))}`],
      why: `<p>Payı çarpanlara ayır: 8<i>x</i>(<i>x</i> − 7) − 3(<i>x</i> − 7) = <b>(<i>x</i> − 7)(8<i>x</i> − 3)</b>. Paydayı ayır: 2<i>x</i> − 14 = <b>2(<i>x</i> − 7)</b>. <i>x</i> > 7 olduğundan <i>x</i> − 7 ≠ 0, dolayısıyla sadeleşir: sonuç <b>(8<i>x</i> − 3)/2</b>.</p>`,
      wrong: { A: `8<i>x</i> − 3'ü yanlışlıkla 5 gibi birleştirip kesri ters çevirmekten geliyor.`, C: `Payın açılımı: 8<i>x</i><sup>2</sup> − 56<i>x</i> − 3<i>x</i> + 21 = 8<i>x</i><sup>2</sup> − 59<i>x</i> + 21; 8<i>x</i><sup>2</sup> − 3<i>x</i> − 14 değil.`, D: `Yine payın yanlış açılımı (doğrusu 8<i>x</i><sup>2</sup> − 59<i>x</i> + 21).` },
      tip: `Açmadan önce ortak bir iki terimli çarpan ara. "<i>x</i> > 7" koşulu (<i>x</i> − 7)'nin sadeleşeceğinin ipucudur.`,
      vocab: { equivalent: `denk`, factor: `çarpan (bir ifadeyi kalansız bölen ifade)` }
    },
    18: {
      steps: [calc('<i>f</i>(0) = (−8)(2)<sup>0</sup> + 22'), calc('= (−8)(1) + 22 = 14'), `<i>y</i>-kesişimi: (0, 14).`],
      why: `<p><i>y</i>-kesişimi <i>f</i>(0)'dır. 2<sup>0</sup> = 1 olduğundan <i>f</i>(0) = (−8)(1) + 22 = 14. <i>y</i>-kesişimi <b>(0, 14)</b>.</p>`,
      wrong: { B: `(0, 2), taban olan 2'yi kesişim sanıyor.`, C: `(0, 22), <i>x</i> = 0'da −8'e eşit olan üstel terimi yok sayıyor.`, D: `(0, −8), + 22'yi yok sayıyor; <i>f</i>(<i>x</i>) = (−8)(2)<sup><i>x</i></sup> olsaydı kesişim bu olurdu.` },
      tip: `Sıfır olmayan her sayının 0. kuvveti 1'dir. <i>a</i>(<i>b</i>)<sup><i>x</i></sup> + <i>c</i> için <i>y</i>-kesişimi <i>a</i> + <i>c</i>'dir.`,
      vocab: { 'y-intercept': `y-kesişimi (grafiğin y eksenini kestiği nokta, x = 0)` }
    },
    19: {
      steps: [`32'nin birimi: bardak.`, `<i>y</i> = büyük kavanoz sayısı; 5 = her büyük kavanozdaki bardak.`, `5<i>y</i> = bardak/kavanoz × kavanoz = büyük kavanozlardaki toplam bardak.`],
      why: `<p>Toplam 32, <b>bardak</b> cinsinden çorba; dolayısıyla soldaki her terim de bardak sayısıdır. <i>y</i> büyük kavanoz sayısı, 5 de <b>büyük kavanoz başına bardak</b> olmalı. Yani 5<i>y</i> = (kavanoz başına 5 bardak) × (büyük kavanoz sayısı) = <b>büyük kavanozlardaki toplam bardak</b>.</p>`,
      wrong: { A: `Büyük kavanoz sayısı 5<i>y</i> değil, tek başına <i>y</i>'dir.`, B: `Küçük kavanoz sayısı <i>x</i>'tir.`, D: `Küçük kavanozlardaki bardak sayısı 3<i>x</i>'tir.` },
      tip: `Yorum sorularının çoğunu birim analizi çözer: denklemdeki her terimin birimi toplamla aynı olmalı.`,
      vocab: { broth: `et/sebze suyu, çorba suyu`, interpretation: `bağlamdaki anlam` }
    },
    20: {
      steps: [`Çap uzunluğu: |14 − 4| = 10.`, calc('<i>r</i> = 10 ÷ 2 = 5'), `Kontrol: merkez (2, 9)'dan (2, 4)'e uzaklık = 5 ✓.`],
      why: `<p>Uç noktaların ikisinde de <i>x</i> = 2, dolayısıyla çap dikey ve uzunluğu 14 − 4 = 10. Yarıçap çapın yarısıdır: <i>r</i> = <b>5</b>. (Kontrol: merkez (2, 9) orta nokta ve (2, 14) ona 5 birim uzakta.)</p>`,
      mistakes: [`Çapı (10) yazmak.`, `<i>r</i><sup>2</sup>'yi (25) yazmak.`],
      tip: `(<i>x</i> − <i>h</i>)<sup>2</sup> + (<i>y</i> − <i>k</i>)<sup>2</sup> = <i>r</i><sup>2</sup> denkleminde sağ taraf <i>r</i><sup>2</sup>'dir. Sorunun <i>r</i>'yi mi <i>r</i><sup>2</sup>'yi mi istediğini dikkatle oku.`,
      vocab: { diameter: `çap (merkezden geçen, iki ucu çember üzerinde olan doğru parçası)`, radius: `yarıçap (çapın yarısı)` }
    },
    21: {
      answerText: `1/4 (veya .25)`,
      steps: [calc('3<i>y</i> = −12<i>x</i> + 5'), calc(`<i>y</i> = −4<i>x</i> + ${F(5, 3)}`), `ℓ'nin eğimi: −4. Negatif tersi: ${calc(`−${F(1, '−4')} = ${F(1, 4)}`)}`, `Kontrol: (−4)(1/4) = −1 ✓.`],
      why: `<p>ℓ doğrusunu eğim-kesişim biçimine getir: 3<i>y</i> = −12<i>x</i> + 5 → <i>y</i> = −4<i>x</i> + 5/3. Eğimi <b>−4</b>. Dik doğruların eğimleri birbirinin <b>negatif tersidir</b> (çarpımları −1); <i>n</i> doğrusunun eğimi <b>1/4</b>.</p>`,
      mistakes: [`3'e bölmeden eğimi 12 ya da −12 almak.`, `Yalnızca tersini alıp (−1/4) işareti değiştirmeyi unutmak.`, `4 yazmak (tersi değil, zıttı).`],
      tip: `<i>Ax</i> + <i>By</i> = <i>C</i> için eğim −<i>A</i>/<i>B</i>'dir: burada −12/3 = −4.`,
      vocab: { perpendicular: `dik (90° açıyla kesişen)`, 'negative reciprocal': `negatif ters (kesri ters çevir ve işaretini değiştir, ör. −4 → 1/4)` }
    },
    22: {
      steps: [`1. durum: ${calc('−5<i>x</i> + 13 = 73 → <i>x</i> = −12')}`, `2. durum: ${calc(`−5<i>x</i> + 13 = −73 → <i>x</i> = ${F(86, 5)}`)}`, `Toplam: ${calc(`−12 + ${F(86, 5)} = ${F(26, 5)}`)}`, `Kısayol: iki çözüm, −5<i>x</i> + 13 = 0 olan noktaya (<i>x</i> = 13/5) göre simetrik; toplam 2 × 13/5 = 26/5.`],
      why: `<p>|<i>A</i>| = 73, <i>A</i> = 73 veya <i>A</i> = −73 demektir.</p><ul><li>−5<i>x</i> + 13 = 73 → −5<i>x</i> = 60 → <i>x</i> = −12</li><li>−5<i>x</i> + 13 = −73 → −5<i>x</i> = −86 → <i>x</i> = 86/5</li></ul><p>Toplam: −12 + 86/5 = −60/5 + 86/5 = <b>26/5</b>.</p>`,
      wrong: { A: `−146/5 iki durumdaki işaret hatalarından geliyor.`, B: `−12 çözümlerden yalnızca biri; toplam değil.`, C: `0, iki çözümün zıt (<i>x</i> ve −<i>x</i>) olduğunu varsayıyor; bu yalnızca mutlak değerin içinde sabit terim yoksa doğrudur.` },
      tip: `Mutlak değer denklemleri genellikle iki çözüm verir. Orta noktaları içeriğin sıfır olduğu yerdir; toplam o değerin iki katıdır.`,
      vocab: { 'absolute value': `mutlak değer (bir sayının 0'a uzaklığı; her zaman negatif değil)` }
    },
    23: {
      steps: [calc('<i>k</i> = <i>f</i>(1) = 80(1.6) = 128'), `C biçimi: ${calc('<i>f</i>(1) = 128(1.6)<sup>0</sup> = 128')}`, `C'deki katsayı (128) <i>k</i>'ye eşit. Tüm şıklarda taban 1.6, 128 değil.`],
      why: `<p>Önce <i>k</i> = <i>f</i>(1)'i bul. B'yi kullanarak: 80(1.6)<sup>1</sup> = 128. Yani <i>k</i> = 128. C şıkkında, <i>f</i>(<i>x</i>) = 128(1.6)<sup><i>x</i>−1</sup>, <i>x</i> = 1 yazınca üs 0 olur; <i>f</i>(1) = 128 × 1 = 128. Katsayı olan <b>128</b> tam olarak <i>f</i>(1) = <i>k</i>'dir.</p>`,
      wrong: { A: `Katsayı 50, <i>f</i>(−1)'dir; çünkü üs <i>x</i> = −1'de 0 olur.`, B: `Katsayı 80, <i>f</i>(0)'dır.`, D: `Katsayı 204.8, <i>f</i>(2)'dir.` },
      tip: `<i>a</i>(<i>b</i>)<sup><i>x</i> − <i>h</i></sup> biçiminde katsayı <i>a</i>, <i>f</i>(<i>h</i>)'ye eşittir. <i>h</i>'yi ilgilendiğin girdiyle eşleştir.`,
      vocab: { coefficient: `katsayı (öne çarpan olarak yazılan sayı)`, base: `taban (üssü alınan sayı)` }
    },
    24: {
      steps: [calc('<i>b</i><sup>2</sup> − 4<i>ac</i> = 0'), calc('30<sup>2</sup> − 4(−9)(<i>c</i>) = 0'), calc('900 + 36<i>c</i> = 0 → <i>c</i> = −25'), `Doğrula: −(3<i>x</i> − 5)<sup>2</sup> = −9<i>x</i><sup>2</sup> + 30<i>x</i> − 25 ✓.`],
      why: `<p><i>ax</i><sup>2</sup> + <i>bx</i> + <i>c</i> = 0 denkleminin tam bir gerçek çözümü olması için <b>diskriminant</b> <i>b</i><sup>2</sup> − 4<i>ac</i> sıfır olmalı. Burada <i>a</i> = −9, <i>b</i> = 30: 30<sup>2</sup> − 4(−9)(<i>c</i>) = 900 + 36<i>c</i> = 0 → <i>c</i> = <b>−25</b>.</p><p>Kontrol: −9<i>x</i><sup>2</sup> + 30<i>x</i> − 25 = −(3<i>x</i> − 5)<sup>2</sup>, tek kökü <i>x</i> = 5/3 olan tam kare.</p>`,
      wrong: { A: `<i>c</i> = 3 ile diskriminant 900 + 108 = 1,008 > 0 (iki çözüm).`, B: `<i>c</i> = 0 ile denklem −3<i>x</i>(3<i>x</i> − 10) = 0 olur: iki çözüm.`, D: `<i>c</i> = −53 ile diskriminant 900 − 1,908 < 0 (gerçek çözüm yok).` },
      tip: `Diskriminant > 0: iki çözüm; = 0: bir çözüm; < 0: gerçek çözüm yok. Negatif <i>a</i>'ya dikkat: −4(−9) = +36.`,
      vocab: { discriminant: `diskriminant (b² − 4ac; ikinci dereceden denklemin kaç gerçek çözümü olduğunu söyler)`, constant: `sabit` }
    },
    25: {
      steps: [`Diğer çarpan: (3<i>x</i> + 7); çünkü 3<i>x</i> · <i>x</i> = 3<i>x</i><sup>2</sup> ve 7 · 2<i>b</i> = 14<i>b</i>.`, calc('(<i>x</i> + 2<i>b</i>)(3<i>x</i> + 7) = 3<i>x</i><sup>2</sup> + (6<i>b</i> + 7)<i>x</i> + 14<i>b</i>'), `Ortadaki katsayı 6<i>b</i> + 7 olmalı ve <i>b</i> pozitif bir tam sayı olmalı.`, calc('6<i>b</i> + 7 = 49 → <i>b</i> = 7 ✓'), `Kontrol: (<i>x</i> + 14)(3<i>x</i> + 7) = 3<i>x</i><sup>2</sup> + 49<i>x</i> + 98 ✓.`],
      why: `<p><i>x</i> + 2<i>b</i> bir çarpansa ve ifade 3<i>x</i><sup>2</sup> + <i>kx</i> + 14<i>b</i> ise diğer çarpan (3<i>x</i> + 7) olmalı (3<i>x</i><sup>2</sup> ve 2<i>b</i> · 7 = 14<i>b</i> elde etmek için). Açınca: (<i>x</i> + 2<i>b</i>)(3<i>x</i> + 7) = 3<i>x</i><sup>2</sup> + (7 + 6<i>b</i>)<i>x</i> + 14<i>b</i>. Ortadaki katsayı pozitif bir tam sayı <i>b</i> için <b><i>k</i> = 6<i>b</i> + 7</b> olmalı:</p><ul><li>7 → <i>b</i> = 0 ✗ (pozitif değil)</li><li>28 → <i>b</i> = 3.5 ✗</li><li>42 → <i>b</i> = 35/6 ✗</li><li><b>49 → <i>b</i> = 7 ✓</b></li></ul>`,
      wrong: { A: `6<i>b</i> + 7 = 7, <i>b</i> = 0 verir; ama <i>b</i> pozitif olmalı.`, B: `6<i>b</i> + 7 = 28, <i>b</i> = 3.5 verir; tam sayı değil.`, C: `6<i>b</i> + 7 = 42, <i>b</i> = 35/6 verir; tam sayı değil.` },
      tip: `Çarpan teoremi: (<i>x</i> − <i>r</i>), ancak <i>x</i> = <i>r</i> yazınca ifade 0 oluyorsa çarpandır. Burada 12<i>b</i><sup>2</sup> − 2<i>kb</i> + 14<i>b</i> = 0 → <i>k</i> = 6<i>b</i> + 7.`,
      vocab: { factor: `çarpan`, integer: `tam sayı` }
    },
    26: {
      steps: [`Her B değeri en fazla 19, 29, 39 veya 49 olabilir (tam sayı, üst sınırdan kesinlikle küçük).`, `Her A değeri en az 20, 30, 40 veya 50 olabilir.`, `Değer başına en küçük fark 20 − 19 = 1 (her aralık için aynı).`, `23 değerin hepsi bu şekilde eşlenince tam 1 fark eder; ortalamalar en az ${calc(`${F('23 × 1', '23')} = 1`)} farklıdır.`],
      why: `<p>A veri kümesi: [20, 30)'da 3, [30, 40)'ta 4, [40, 50)'de 7, [50, 60)'ta 9 değer. B veri kümesi <b>aynı sayıları</b> 10 aşağıdaki aralıklarda içeriyor. Yani A'nın ortalaması daha büyük. Farkı <b>en küçük</b> yapmak için A'nın değerlerini her aralığın <b>altına</b>, B'ninkileri <b>üstüne</b> (izin verilen en büyük tam sayılara) it.</p><ul><li>En küçük A toplamı: 3(20) + 4(30) + 7(40) + 9(50) = 60 + 120 + 280 + 450 = <b>910</b></li><li>En büyük B toplamı: 3(19) + 4(29) + 7(39) + 9(49) = 57 + 116 + 273 + 441 = <b>887</b></li></ul><p>Ortalamalar farkı = (910 − 887) ÷ 23 = 23 ÷ 23 = <b>1</b>.</p>`,
      wrong: { A: `0, ortalamaların değil <i>açıklıkların</i> (range) mümkün olan en küçük farkıdır. Ortalamalar eşit olamaz, çünkü her A değeri eşleştiği B değerinden en az 1 fazladır.`, C: `10, A'nın mümkün olan <i>en büyük</i> ortalaması ile B'nin en büyük ortalaması arasındaki farktır (ya da değerler aralıklarında aynı konumdaysa); mümkün olan en küçük fark değil.`, D: `23, ortalamaların değil toplamların farkıdır (yine 23'e bölünmesi gerekir).` },
      tip: `Gruplanmış verilerde "mümkün olan en küçük/en büyük" sorularında değerleri aralıklarının kenarlarına it ve uç noktaların dahil olup olmadığına dikkat et.`,
      vocab: { histogram: `histogram (her aralığa düşen veri sayısını gösteren sütun grafiği)`, frequency: `frekans, sıklık`, interval: `aralık (ör. 20 dahil, 30 hariç)`, mean: `aritmetik ortalama` }
    },
    27: {
      steps: [calc('kenar = 624 ÷ 3 = 208'), `Tabanın yarısı (kısa dik kenar): ${calc('208 ÷ 2 = 104')}`, `Yükseklik (uzun dik kenar) = kısa kenar × √3: ${calc(`104${R(3)}`)}`, `Formülle kontrol: yükseklik = ${F(R(3), 2)} × kenar = ${F(R(3), 2)} × 208 = 104√3 ✓.`],
      why: `<p>Her kenar 624 ÷ 3 = <b>208</b> cm. Yükseklik üçgeni, hipotenüsü 208 ve kısa dik kenarı 208 ÷ 2 = 104 olan iki 30°-60°-90° dik üçgene böler. Uzun dik kenar (yükseklik) kısa kenar × √3 = <b>104√3</b>'tür. Dolayısıyla <b><i>k</i> = 104</b>.</p>`,
      mistakes: [`Çevreyi (624) kenar uzunluğu sanmak.`, `Yarısı yerine kenarı (208) yazmak.`, `Yüksekliği ondalık olarak (≈ 180.1) hesaplayıp onu yazmak; soru <i>k</i>'yi istiyor.`],
      tip: `Kenarı <i>s</i> olan eşkenar üçgen: yükseklik = (<i>s</i>√3)/2, alan = (<i>s</i><sup>2</sup>√3)/4. Formül sayfasındaki 30°-60°-90° üçgeni bunu verir.`,
      vocab: { equilateral: `eşkenar (üç kenarı eşit, tüm açıları 60°)`, height: `yükseklik (bir köşeden karşı kenara dik uzaklık)`, '30-60-90 triangle': `30-60-90 üçgeni (kenarları 1 : √3 : 2 oranında olan dik üçgen)` }
    }
  };
})();
