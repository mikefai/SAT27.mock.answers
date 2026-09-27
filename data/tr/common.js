/* Turkish language setup: marks the page as Turkish and maps English
   skill / domain / part-of-speech labels to Turkish. Per-question Turkish
   explanations live in data/tr/rw1.js, rw2.js, math1.js, math2.js. */
window.SAT = window.SAT || { modules: [] };
SAT.lang = 'tr';
SAT.tr = SAT.tr || {};

SAT.tr.domains = {
  'Craft and Structure': 'Üslup ve Yapı',
  'Information and Ideas': 'Bilgi ve Fikirler',
  'Standard English Conventions': 'Standart İngilizce Kuralları',
  'Expression of Ideas': 'Fikirlerin İfadesi',
  'Algebra': 'Cebir',
  'Advanced Math': 'İleri Matematik',
  'Problem-Solving and Data Analysis': 'Problem Çözme ve Veri Analizi',
  'Geometry and Trigonometry': 'Geometri ve Trigonometri'
};

SAT.tr.skills = {
  'Words in Context': 'Bağlamda Kelime Anlamı',
  'Text Structure and Purpose': 'Metnin Yapısı ve Amacı',
  'Cross-Text Connections': 'Metinler Arası Bağlantılar',
  'Central Ideas and Details': 'Ana Fikir ve Ayrıntılar',
  'Command of Evidence (Textual)': 'Kanıt Kullanımı (Metinsel)',
  'Command of Evidence (Quantitative)': 'Kanıt Kullanımı (Sayısal)',
  'Inferences': 'Çıkarım',
  'Boundaries': 'Cümle Sınırları ve Noktalama',
  'Form, Structure, and Sense': 'Biçim, Yapı ve Anlam',
  'Transitions': 'Geçiş İfadeleri',
  'Rhetorical Synthesis': 'Retorik Sentez',
  'One-variable data: distributions': 'Tek değişkenli veri: dağılımlar',
  'Systems of two linear equations': 'İki bilinmeyenli doğrusal denklem sistemleri',
  'Linear inequalities in one or two variables': 'Bir veya iki değişkenli doğrusal eşitsizlikler',
  'Nonlinear functions: transformations': 'Doğrusal olmayan fonksiyonlar: dönüşümler',
  'Linear equations in context': 'Bağlam içinde doğrusal denklemler',
  'Nonlinear functions': 'Doğrusal olmayan fonksiyonlar',
  'Probability and conditional probability': 'Olasılık ve koşullu olasılık',
  'Lines, angles, and triangles': 'Doğrular, açılar ve üçgenler',
  'Linear equations in one variable': 'Bir değişkenli doğrusal denklemler',
  'Equivalent expressions': 'Denk ifadeler',
  'Linear functions': 'Doğrusal fonksiyonlar',
  'Nonlinear functions in context': 'Bağlam içinde doğrusal olmayan fonksiyonlar',
  'Nonlinear functions: exponential models': 'Doğrusal olmayan fonksiyonlar: üstel modeller',
  'Right triangles and the Pythagorean theorem': 'Dik üçgenler ve Pisagor teoremi',
  'Area and volume': 'Alan ve hacim',
  'Circles': 'Çemberler',
  'Percentages': 'Yüzdeler',
  'Nonlinear equations: quadratics': 'Doğrusal olmayan denklemler: ikinci dereceden',
  'Units and rates': 'Birimler ve oranlar',
  'Two-variable data: models and scatterplots': 'İki değişkenli veri: modeller ve serpilme grafikleri',
  'Linear equations in two variables': 'İki değişkenli doğrusal denklemler',
  'Equivalent expressions and equations': 'Denk ifadeler ve denklemler',
  'One-variable data: center': 'Tek değişkenli veri: merkezi eğilim',
  'Linear functions in context': 'Bağlam içinde doğrusal fonksiyonlar',
  'Systems of equations: linear and quadratic': 'Denklem sistemleri: doğrusal ve ikinci dereceden',
  'Similarity and scale factor': 'Benzerlik ve ölçek çarpanı',
  'Nonlinear functions: exponential': 'Doğrusal olmayan fonksiyonlar: üstel',
  'Right triangle trigonometry': 'Dik üçgende trigonometri',
  'Equivalent expressions: rational': 'Denk ifadeler: rasyonel',
  'Linear equations: perpendicular lines': 'Doğrusal denklemler: dik doğrular',
  'Nonlinear equations: absolute value': 'Doğrusal olmayan denklemler: mutlak değer',
  'Nonlinear functions: exponential forms': 'Doğrusal olmayan fonksiyonlar: üstel biçimler',
  'Equivalent expressions: factoring': 'Denk ifadeler: çarpanlara ayırma',
  'One-variable data: mean': 'Tek değişkenli veri: aritmetik ortalama',
  'Right triangles: special triangles': 'Dik üçgenler: özel üçgenler'
};

SAT.tr.pos = { 'noun': 'isim', 'verb': 'fiil', 'adj.': 'sıfat', 'adv.': 'zarf', 'prep.': 'edat', 'phrase': 'kalıp' };
