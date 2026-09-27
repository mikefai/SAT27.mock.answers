/* Reading and Writing — Module 2 (33 questions). Same schema as rw1.js. */
window.SAT = window.SAT || { modules: [] };
SAT.modules.push({
  id: 'rw2',
  section: 'rw',
  short: 'Reading and Writing · Module 2',
  minutes: 39,
  directions: '<p>The questions in this section address a number of important reading and writing skills. Each question includes one or more passages, which may include a table or graph. Read each passage and question carefully, and then choose the best answer to the question based on the passage(s).</p><p style="margin:0">All questions in this section are multiple-choice with four answer choices. Each question has a single best answer.</p>',
  questions: [
    {
      n: 1, skill: 'Words in Context', domain: 'Craft and Structure',
      passage: '<p>In the early 1800s, the Cherokee scholar Sequoyah created the first script, or writing system, for an Indigenous language in the United States. Because it represented the sounds of spoken Cherokee so accurately, his script was easy to learn and thus quickly achieved _______ use: by 1830, over 90 percent of the Cherokee people could read and write it.</p>',
      prompt: 'Which choice completes the text with the most logical and precise word or phrase?',
      choices: ['widespread', 'careful', 'unintended', 'infrequent'],
      answer: 'A',
      vocab: [['script', 'a system of written characters for a language', 'noun'], ['Indigenous', 'originating in a particular place; relating to the original inhabitants', 'adj.'], ['widespread', 'found or used over a large area or by many people', 'adj.'], ['infrequent', 'not happening often', 'adj.']],
      hint: 'Read what comes after the colon: "over 90 percent of the Cherokee people could read and write it." How would you describe use that reaches 90 percent of people?',
      why: '<p>The colon introduces the evidence for the blank: "by 1830, over 90 percent of the Cherokee people could read and write it." When nearly everyone uses something, its use is <b>widespread</b>. The earlier clue also fits: the script was "easy to learn," which explains how it spread so quickly.</p>',
      wrong: {
        B: '<b>Careful</b> use describes caution, but the passage emphasizes how many people used the script, not how cautiously.',
        C: '<b>Unintended</b> means not planned. Sequoyah created the script for exactly this purpose.',
        D: '<b>Infrequent</b> (rare) contradicts "over 90 percent."'
      },
      tip: 'A colon often means "here is the proof." Let the information after the colon define the blank.'
    },
    {
      n: 2, skill: 'Words in Context', domain: 'Craft and Structure',
      passage: '<p>Researchers have struggled to pinpoint specific causes for hiccups, which happen when a person\'s diaphragm contracts _______. However, neuroscientist Kimberley Whitehead has found that these uncontrollable contractions may play an important role in helping infants regulate their breathing.</p>',
      prompt: 'Which choice completes the text with the most logical and precise word or phrase?',
      choices: ['involuntarily', 'beneficially', 'strenuously', 'smoothly'],
      answer: 'A',
      vocab: [['pinpoint', 'find or identify exactly', 'verb'], ['diaphragm', 'the dome-shaped muscle under the lungs that helps you breathe', 'noun'], ['contracts', 'tightens and shortens (of a muscle)', 'verb'], ['involuntarily', 'without conscious control; not on purpose', 'adv.'], ['strenuously', 'with great effort or force', 'adv.'], ['regulate', 'control or keep steady', 'verb']],
      hint: 'The next sentence describes these same contractions with a synonym: "these <b>uncontrollable</b> contractions."',
      why: '<p>The second sentence refers back to the contractions as "<b>these uncontrollable contractions</b>." "Uncontrollable" restates the blank, so the diaphragm must contract <b>involuntarily</b>, meaning without conscious control.</p>',
      wrong: {
        B: '<b>Beneficially</b> (helpfully) jumps ahead. The benefit to infants is presented later as a new finding introduced by "However," so it cannot already be part of the definition.',
        C: '<b>Strenuously</b> means with great effort. Nothing in the passage describes the force of the contractions.',
        D: '<b>Smoothly</b> does not match "uncontrollable" and does not describe the sudden spasms of hiccups.'
      },
      tip: 'Look for a synonym elsewhere in the passage. "These [adjective] contractions" often repeats the idea of the blank in different words.'
    },
    {
      n: 3, skill: 'Words in Context', domain: 'Craft and Structure',
      passage: '<p>The province of Xoconochco was situated on the Pacific coast, hundreds of kilometers southeast of Tenochtitlan, the capital of the Aztec Empire. Because Xoconochco\'s location within the empire was so _______, cacao and other trade goods produced there could reach the capital only after a long overland journey.</p>',
      prompt: 'Which choice completes the text with the most logical and precise word or phrase?',
      choices: ['unobtrusive', 'concealed', 'approximate', 'peripheral'],
      answer: 'D',
      vocab: [['province', 'a region of a country or empire', 'noun'], ['situated', 'located', 'adj.'], ['cacao', 'the bean used to make chocolate', 'noun'], ['overland', 'traveling by land', 'adj.'], ['unobtrusive', 'not noticeable; not attracting attention', 'adj.'], ['concealed', 'hidden', 'adj.'], ['approximate', 'close but not exact', 'adj.'], ['peripheral', 'located on the outer edge, far from the center', 'adj.']],
      hint: 'The province was "hundreds of kilometers" from the capital, on the coast. What word means "at the edge, far from the center"?',
      why: '<p>Xoconochco was on the Pacific coast, "hundreds of kilometers" from the capital, and goods needed "a long overland journey" to reach the center. A location on the <b>outer edge</b> of an empire, far from its center, is <b>peripheral</b>. The word also fits the cause-and-effect: because it was at the periphery, goods took a long time to arrive.</p>',
      wrong: {
        A: '<b>Unobtrusive</b> means inconspicuous. Being unnoticeable would not explain a long journey.',
        B: '<b>Concealed</b> means hidden. Nothing suggests the province was hidden, and hiddenness is not about distance.',
        C: '<b>Approximate</b> means roughly estimated. The location was known; it was just far away.'
      },
      tip: 'Check that the word explains the effect in the sentence. Only distance from the center explains "a long overland journey."'
    },
    {
      n: 4, skill: 'Words in Context', domain: 'Craft and Structure',
      passage: '<p>Proposals to raise the age at which retirees begin receiving government transfers of funds are generally discussed in terms of the effects on transfer recipients, but Andria Smythe has argued that delaying such transfers could _______ wealth creation among working adults by lengthening the period in which they are providing financial support to their nonworking parents.</p>',
      prompt: 'Which choice completes the text with the most logical and precise word or phrase?',
      choices: ['stymie', 'compound', 'disparage', 'outstrip'],
      answer: 'A',
      vocab: [['retirees', 'people who have stopped working, usually because of age', 'noun'], ['recipients', 'people who receive something', 'noun'], ['stymie', 'block or hinder the progress of', 'verb'], ['compound', 'make larger or worse; add to', 'verb'], ['disparage', 'speak about something as unimportant or bad; belittle', 'verb'], ['outstrip', 'exceed; go faster or farther than', 'verb']],
      hint: 'If working adults must support their parents for longer, is it easier or harder for them to build their own wealth?',
      why: '<p>Delaying transfers means working adults spend a <b>longer period</b> financially supporting their nonworking parents. That money goes to parents instead of into savings, so it would <b>hinder</b> the working adults\' own wealth creation. <b>Stymie</b> means to block or hinder, which fits precisely.</p>',
      wrong: {
        B: '<b>Compound</b> means to increase or add to. Supporting parents longer would reduce, not increase, wealth creation.',
        C: '<b>Disparage</b> means to speak badly of. A policy delay cannot "speak badly of" wealth creation; the word applies to people\'s words.',
        D: '<b>Outstrip</b> means to exceed or surpass, which does not describe a negative effect on wealth creation.'
      },
      tip: 'Hard vocabulary choices are easier if you first decide the direction: here you need a negative, "hinder" word. Then eliminate positives and words that do not fit grammatically in meaning.'
    },
    {
      n: 5, skill: 'Words in Context', domain: 'Craft and Structure',
      passage: '<p>Political blogs with conspicuous ideological alignments became an integral component of US media in the early 2000s. While some commentators lauded this development, asserting that such blogs had a welcome transparency missing from traditional news, less _______ observers countered that such blogs tended to ideological extremes that exacerbated political polarization to problematic levels.</p>',
      prompt: 'Which choice completes the text with the most logical and precise word or phrase?',
      choices: ['sanguine', 'recalcitrant', 'misanthropic', 'earnest'],
      answer: 'A',
      vocab: [['conspicuous', 'very noticeable', 'adj.'], ['ideological', 'based on a set of political beliefs', 'adj.'], ['integral', 'essential; a necessary part', 'adj.'], ['lauded', 'praised highly', 'verb'], ['transparency', 'openness; being easy to see through or understand', 'noun'], ['exacerbated', 'made worse', 'verb'], ['polarization', 'division into sharply opposing groups', 'noun'], ['sanguine', 'optimistic, positive, hopeful', 'adj.'], ['recalcitrant', 'stubbornly uncooperative', 'adj.'], ['misanthropic', 'disliking humankind in general', 'adj.'], ['earnest', 'serious and sincere', 'adj.']],
      hint: 'Two groups: some "lauded" (praised) the blogs; others "countered" with worries. The worried group is <i>less</i> ___ — less what? Less positive.',
      why: '<p>The sentence contrasts two groups. The first "lauded" the blogs (they were positive). The second "countered" with concerns about extremes and polarization. So the second group was <b>less optimistic</b>. <b>Sanguine</b> means optimistic or hopeful, so "less sanguine observers" names exactly the more pessimistic critics.</p>',
      wrong: {
        B: '"Less <b>recalcitrant</b>" would mean less stubborn or more cooperative, which has nothing to do with being less positive about blogs.',
        C: '"Less <b>misanthropic</b>" would mean kinder toward people in general. The critics\' concern is not about loving or hating humanity.',
        D: '"Less <b>earnest</b>" would mean less serious or sincere, but the critics make a serious, substantive objection.'
      },
      tip: 'When a blank has "less" or "more" in front of it, flip the logic: the critics are "less ___," so ___ must describe the <i>praisers</i>. The praisers were optimistic.'
    },
    {
      n: 6, skill: 'Text Structure and Purpose', domain: 'Craft and Structure',
      passage: '<p class="intro">The following text is adapted from Pam Muñoz Ryan\'s 2020 novel <i>Mañanaland</i>. In the village where Max lives, there is an old fortress called La Reina. Children in the village say that the fortress is haunted.</p><blockquote>For as long as he could remember, Max had begged Papá [his father] to take him to see La Reina and the ruins up close. He\'d be a hero among his friends if he was the first boy to cross the haunted gates! Just because Papá didn\'t believe in ghosts didn\'t mean they weren\'t there. Maybe this summer Papá would finally take him. He was almost twelve.</blockquote><p class="credit">©2020 by Pam Muñoz Ryan</p>',
      prompt: 'Which choice best describes the overall purpose of the text?',
      choices: ['To portray how proud Max\'s father is of Max', 'To explain why Max doesn\'t want to grow up yet', 'To criticize Max for disliking summer', 'To show how much Max wants to visit La Reina'],
      answer: 'D',
      vocab: [['fortress', 'a large, strongly protected building', 'noun'], ['ruins', 'the remains of a destroyed or decayed building', 'noun']],
      hint: 'What has Max "begged" for "as long as he could remember"? What is he hoping for this summer?',
      why: '<p>The whole excerpt centers on Max\'s desire to visit the haunted fortress: he has "begged" his father "for as long as he could remember," imagines being "a hero among his friends," and hopes "maybe this summer Papá would finally take him." Every sentence builds his <b>eagerness to visit La Reina</b>.</p>',
      wrong: {
        A: 'The father\'s feelings about Max are never described; we learn only that he does not believe in ghosts.',
        B: 'Max mentions being "almost twelve" as a reason he should be allowed to go, which suggests he wants to be treated as older, the opposite of not wanting to grow up.',
        C: 'Nothing suggests Max dislikes summer; he is hopeful about it.'
      },
      tip: 'Purpose questions: ask what the author is mostly doing across the whole text. Repeated longing ("begged," "maybe... finally") shows desire.'
    },
    {
      n: 7, skill: 'Text Structure and Purpose', domain: 'Craft and Structure',
      passage: '<p class="intro">The following text is adapted from George Bernard Shaw\'s 1912 play <i>Pygmalion</i>. Henry Higgins has just arrived at the house of his mother (Mrs. Higgins). She is expecting her friends to visit soon.</p><blockquote><p>MRS. HIGGINS: I\'m serious, Henry. You offend all my friends: they stop coming whenever they meet you.</p><p>HIGGINS: Nonsense! I know I have no small talk; but people don\'t mind.</p><p>MRS. HIGGINS: Oh! don\'t they? Small talk indeed! What about your large talk? Really, dear, you mustn\'t stay.</p></blockquote>',
      prompt: 'Which choice best states the main purpose of the text?',
      choices: ['To describe what Henry\'s mother does when she goes out with her friends', 'To show that Henry\'s mother wants him to leave', 'To present a detailed account of what Henry\'s home looks like', 'To explain why Henry often visits his mother'],
      answer: 'B',
      vocab: [['small talk', 'light, casual conversation about unimportant things', 'noun', ['small talk']]],
      hint: 'Read Mrs. Higgins\'s final line closely: "Really, dear, you mustn\'t stay."',
      why: '<p>Mrs. Higgins is expecting friends, tells Henry he offends them ("they stop coming whenever they meet you"), rejects his excuse, and ends with "Really, dear, <b>you mustn\'t stay</b>." The exchange\'s purpose is to show that his mother <b>wants him to leave</b> before her guests arrive.</p>',
      wrong: {
        A: 'The scene takes place at her house as she waits for friends; it says nothing about her going out.',
        C: 'The scene is at his mother\'s house, and no setting is described in detail.',
        D: 'No reason for his visits is given, and the mother is trying to get him to leave, not explaining why he comes.'
      },
      tip: 'In drama excerpts, the last line often carries the point. Here the joke about "large talk" leads straight to "you mustn\'t stay."'
    },
    {
      n: 8, skill: 'Text Structure and Purpose', domain: 'Craft and Structure',
      passage: '<p class="intro">The following text is from Charlotte Forten Grimké\'s 1888 poem "At Newport."</p><blockquote class="poem">Oh, deep delight to watch the gladsome waves\nExultant leap upon the rugged rocks;\n<u>Ever repulsed, yet ever rushing on—</u>\n<u>Filled with a life that will not know defeat;</u>\nTo see the glorious hues of sky and sea.\nThe distant snowy sails, glide spirit like,\nInto an unknown world, to feel the sweet\nEnchantment of the sea thrill all the soul,\nClearing the clouded brain, making the heart\nLeap joyous as it own bright, singing waves!</blockquote>',
      prompt: 'Which choice best describes the function of the underlined portion in the text as a whole?',
      choices: ['It portrays the surroundings as an imposing and intimidating scene.', 'It characterizes the sea\'s waves as a relentless and enduring force.', 'It conveys the speaker\'s ambivalence about the natural world.', 'It draws a contrast between the sea\'s waves and the speaker\'s thoughts.'],
      answer: 'B',
      vocab: [['gladsome', 'cheerful; joyful', 'adj.'], ['exultant', 'triumphantly happy', 'adj.'], ['rugged', 'rough and uneven', 'adj.'], ['repulsed', 'driven back; pushed away', 'verb'], ['hues', 'colors or shades', 'noun'], ['enchantment', 'a feeling of great delight, like being under a spell', 'noun'], ['relentless', 'never stopping or giving up', 'adj.'], ['ambivalence', 'having mixed or contradictory feelings', 'noun'], ['imposing', 'grand and impressive in a way that may intimidate', 'adj.']],
      hint: 'The waves are "ever repulsed" (always pushed back) "yet ever rushing on" and "will not know defeat." What quality is that?',
      why: '<p>The underlined lines say the waves are "<b>ever repulsed, yet ever rushing on</b>" (constantly pushed back by the rocks but always charging again) and "filled with a life that <b>will not know defeat</b>." This depicts the waves as a <b>relentless</b> (never stopping) and <b>enduring</b> (lasting, unbeaten) force.</p>',
      wrong: {
        A: 'The poem\'s tone is joyful ("deep delight," "gladsome," "glorious"). The waves are admired, not frightening.',
        C: 'Ambivalence means mixed feelings. The speaker\'s feelings about nature are purely positive throughout.',
        D: 'The poem ends by comparing the speaker\'s heart to the waves ("Leap joyous as its own bright, singing waves"), a similarity, not a contrast. The underlined portion does not mention the speaker\'s thoughts at all.'
      },
      tip: 'For poetry, paraphrase the underlined lines in everyday language first ("keeps getting knocked back but never quits"), then match.'
    },
    {
      n: 9, skill: 'Central Ideas and Details', domain: 'Information and Ideas',
      passage: '<p>Believing that living in an impractical space can heighten awareness and even improve health, conceptual artists Madeline Gins and Shusaku Arakawa designed an apartment building in Japan to be more fanciful than functional. A kitchen counter is chest-high on one side and knee-high on the other; a ceiling has a door to nowhere. The effect is disorienting but invigorating: after four years there, filmmaker Nobu Yamaoka reported significant health benefits.</p>',
      prompt: 'Which choice best states the main idea of the text?',
      choices: ['Although inhabiting a home surrounded by fanciful features such as those designed by Gins and Arakawa can be rejuvenating, it is unsustainable.', 'Designing disorienting spaces like those in the Gins and Arakawa building is the most effective way to create a physically stimulating environment.', 'As a filmmaker, Yamaoka has long supported the designs of conceptual artists such as Gins and Arakawa.', 'Although impractical, the design of the apartment building by Gins and Arakawa may improve the well-being of the building\'s residents.'],
      answer: 'D',
      vocab: [['impractical', 'not sensible or useful for everyday purposes', 'adj.'], ['conceptual', 'based on ideas rather than practical use', 'adj.'], ['fanciful', 'imaginative and unusual rather than practical', 'adj.'], ['disorienting', 'making you feel confused about where you are', 'adj.'], ['invigorating', 'giving energy and strength', 'adj.'], ['rejuvenating', 'making someone feel younger or more energetic', 'adj.'], ['unsustainable', 'not able to be kept up over time', 'adj.']],
      hint: 'Sum up the text in one sentence: the building is strange and impractical, but it may be good for your health. Which choice says that without adding extra claims?',
      why: '<p>The text describes a building designed to be "more fanciful than functional" (impractical) on the belief that such a space "can heighten awareness and even improve health," then supports that with a resident who "reported significant health benefits." Choice D captures both halves: <b>impractical design</b> and <b>possible improvement to residents\' well-being</b>. The word "may" matches the passage\'s cautious evidence (one resident\'s report).</p>',
      wrong: {
        A: 'The text never says living there is "unsustainable"; Yamaoka lived there for four years and benefited.',
        B: '"The most effective way" is an extreme claim that the text does not make or compare.',
        C: 'Yamaoka is a resident who reported benefits. The text says nothing about his long-standing support for conceptual artists.'
      },
      tip: 'Main-idea answers are usually modest. Eliminate choices with extreme words ("most effective," "always") or claims the passage never makes.'
    },
    {
      n: 10, skill: 'Central Ideas and Details', domain: 'Information and Ideas',
      passage: '<p class="intro">The following text is adapted from Lewis Carroll\'s 1889 satirical novel <i>Sylvie and Bruno</i>. A crowd has gathered outside a room belonging to the Warden, an official who reports to the Lord Chancellor.</p><blockquote><p>One man, who was more excited than the rest, flung his hat high into the air, and shouted (as well as I could make out) "Who roar for the Sub-Warden?" Everybody roared, but whether it was for the Sub-Warden, or not, did not clearly appear: some were shouting "Bread!" and some "Taxes!", but no one seemed to know what it was they really wanted.</p><p>All this I saw from the open window of the Warden\'s breakfast-saloon, looking across the shoulder of the Lord Chancellor.</p><p>"What can it all mean?" he kept repeating to himself. "I never heard such shouting before—and at this time of the morning, too! And with such unanimity!"</p></blockquote>',
      prompt: 'Based on the text, how does the Lord Chancellor respond to the crowd?',
      choices: ['He asks about the meaning of the crowd\'s shouting, even though he claims to know what the crowd wants.', 'He indicates a desire to speak to the crowd, even though the crowd has asked to speak to the Sub-Warden.', 'He expresses sympathy for the crowd\'s demands, even though the crowd\'s shouting annoys him.', 'He describes the crowd as being united, even though the crowd clearly appears otherwise.'],
      answer: 'D',
      vocab: [['satirical', 'using humor or exaggeration to criticize or mock', 'adj.'], ['flung', 'threw forcefully', 'verb'], ['unanimity', 'complete agreement among everyone', 'noun']],
      hint: 'The Lord Chancellor praises the crowd\'s "unanimity" (total agreement). Is the crowd actually in agreement? Check what they are shouting.',
      why: '<p>The Lord Chancellor exclaims about the crowd\'s "<b>unanimity</b>," meaning complete agreement. But the narrator has just shown the opposite: "some were shouting \'Bread!\' and some \'Taxes!\', but no one seemed to know what it was they really wanted." The humor (this is satire) comes from the Lord Chancellor calling the crowd <b>united</b> when it <b>clearly is not</b>.</p>',
      wrong: {
        A: 'He asks what it means, but he never claims to know what the crowd wants.',
        B: 'He never says he wants to speak to the crowd.',
        C: 'He expresses surprise, not sympathy, and never mentions their demands.'
      },
      tip: 'In two-part choices ("does X, even though Y"), both halves must be true. Check each half separately against the text.'
    },
    {
      n: 11, skill: 'Command of Evidence (Quantitative)', domain: 'Information and Ideas',
      figure: FIG.bars({
        title: ['Top Four Species of Wild Land', 'Mammals by Global Biomass'],
        cats: ['African bush elephant', 'eastern gray kangaroo', 'wild boar', 'white-tailed deer'],
        series: [{ vals: [1.3, 0.6, 1.9, 2.7], cls: 'bar1' }],
        ymin: 0, ymax: 3, ystep: 0.5, yfmt: v => v.toFixed(1), rotate: true, w: 340, h: 330, mb: 120, ml: 64,
        yTitle: ['Global biomass (millions', 'of metric tons)'],
        alt: 'Bar graph: African bush elephant about 1.3, eastern gray kangaroo about 0.6, wild boar about 1.9, white-tailed deer about 2.7 million metric tons'
      }),
      passage: '<p>Global biomass is the total mass of living material, such as animals and plants, on Earth. A team of scientists estimated the global biomass, by species, of various wild land mammals. The team found that the species with the highest global biomass is the _______</p>',
      prompt: 'Which choice most effectively uses data from the graph to complete the sentence?',
      choices: ['wild boar.', 'eastern gray kangaroo.', 'African bush elephant.', 'white-tailed deer.'],
      answer: 'D',
      vocab: [['biomass', 'the total mass of living things in an area or group', 'noun'], ['metric tons', 'units of weight, each equal to 1,000 kilograms', 'noun', ['metric tons']]],
      hint: 'Find the tallest bar.',
      why: '<p>The tallest bar belongs to the <b>white-tailed deer</b>, at about <b>2.7 million metric tons</b>. That is higher than the wild boar (about 1.9), the African bush elephant (about 1.3), and the eastern gray kangaroo (about 0.6). So the white-tailed deer has the highest global biomass.</p>',
      wrong: {
        A: 'The wild boar (about 1.9) has the second-highest biomass, not the highest.',
        B: 'The eastern gray kangaroo (about 0.6) has the lowest biomass of the four.',
        C: 'The African bush elephant is the largest individual animal, but its total biomass (about 1.3) is third. Don\'t let real-world knowledge override the data.'
      },
      tip: 'Answer data questions from the graph only. Your sense that elephants are "biggest" is exactly the trap in choice C.'
    },
    {
      n: 12, skill: 'Command of Evidence (Quantitative)', domain: 'Information and Ideas',
      figure: FIG.table({
        caption: 'Number and Origin of Clamshell Tools Found at Different Levels Below the Surface in Neanderthal Cave',
        head: [['Depth of tools found below surface in cave (meters)', 'Clamshells that Neanderthals collected from the beach', 'Clamshells that Neanderthals harvested from the seafloor']],
        rows: [['3–4', 99, 33], ['6–7', 1, 0], ['4–5', 2, 0], ['2–3', 7, 0], ['5–6', 18, 7]]
      }),
      passage: '<p>Studying tools unearthed at a cave site on the western coast of Italy, archaeologist Paola Villa and colleagues have determined that prehistoric Neanderthal groups fashioned them from shells of clams that they harvested from the seafloor while wading or diving or that washed up on the beach. Clamshells become thin and eroded as they wash up on the beach, while those on the seafloor are smooth and sturdy, so the research team suspects that Neanderthals prized the tools made with seafloor shells. However, the team also concluded that those tools were likely more challenging to obtain, noting that ______</p>',
      prompt: 'Which choice most effectively uses data from the table to support the research team\'s conclusion?',
      choices: ['at each depth below the surface in the cave, the difference in the numbers of tools of each type suggests that shells were easier to collect from the beach than to harvest from the seafloor.', 'the highest number of tools were at a depth of 3–4 meters below the surface, which suggests that the Neanderthal population at the site was highest during the related period of time.', 'at each depth below the surface in the cave, the difference in the numbers of tools of each type suggests that Neanderthals preferred to use clamshells from the beach because of their durability.', 'the higher number of tools at depths of 5–6 meters below the surface in the cave than at depths of 4–5 meters below the surface suggests that the size of clam populations changed over time.'],
      answer: 'A',
      vocab: [['unearthed', 'dug up from the ground', 'verb'], ['Neanderthal', 'an extinct species of human that lived in Europe and Asia', 'noun', ['Neanderthal', 'Neanderthals']], ['eroded', 'worn away gradually', 'adj.'], ['sturdy', 'strong and solid', 'adj.'], ['prized', 'valued highly', 'verb'], ['durability', 'the ability to last without wearing out', 'noun']],
      hint: 'The conclusion: seafloor tools were harder to get. If something is harder to get, you would expect to find fewer of them. Compare the two columns at each depth.',
      why: '<p>The claim to support is that seafloor-shell tools were "more challenging to obtain." At <b>every</b> depth, beach-shell tools outnumber seafloor-shell tools: 99 vs. 33, 1 vs. 0, 2 vs. 0, 7 vs. 0, and 18 vs. 7. Even though the seafloor shells were better (smooth, sturdy, prized), the Neanderthals ended up with far fewer of them, which suggests they were <b>harder to get</b>. Choice A draws exactly that inference from the data.</p>',
      wrong: {
        B: 'Population size has nothing to do with the claim that seafloor tools were harder to obtain.',
        C: 'The passage says seafloor shells were the durable ones; beach shells were "thin and eroded." This choice gets the durability backward.',
        D: 'Changes in clam population size do not address how difficult each type of shell was to obtain.'
      },
      tip: 'Before reading the choices, restate the exact claim you need to support ("seafloor tools were harder to obtain"). Then pick the choice that connects the data to <i>that</i> claim.'
    },
    {
      n: 13, skill: 'Command of Evidence (Quantitative)', domain: 'Information and Ideas',
      figure: FIG.bars({
        title: ['Power Conversion Efficiency of', 'Lowest and Highest Performing', 'Spin-coated and Spray-coated', 'Electron Transport Layers'],
        cats: ['lowest performing', 'highest performing'],
        series: [{ vals: [15.5, 17.2], cls: 'bar1' }, { vals: [11.7, 13.6], cls: 'bar2' }],
        ymin: 0, ymax: 18, ystep: 2, w: 320, h: 340, ml: 50, mb: 96,
        yTitle: ['Power conversion efficiency (%)'], xTitle: 'Thickness', rotate: true,
        alt: 'Grouped bar graph: lowest performing spray coating about 15.5 percent, spin coating about 11.7 percent; highest performing spray coating about 17.2 percent, spin coating about 13.6 percent'
      }) + '<div style="margin-top:6px">' + FIG.legend([{ label: 'spray coating', bar: 'bar1' }, { label: 'spin coating', bar: 'bar2' }]) + '</div>',
      passage: '<p>Perovskite solar cells convert light into electricity more efficiently than earlier kinds of solar cells, and manufacturing advances have recently made them commercially attractive. One limitation of the cells, however, has to do with their electron transport layer (ETL), through which absorbed electrons must pass. Often the ETL is applied through a process called spin coating, but such ETLs are fairly inefficient at converting input power to output power. André Taylor and colleagues tested a novel spray coating method for applying the ETL. The team produced ETLs of various thicknesses and concluded that spray coating holds promise for improving the power conversion efficiency of ETLs in perovskite solar cells.</p>',
      prompt: 'Which choice best describes data from the graph that support Taylor and colleagues\' conclusion?',
      choices: ['Both the ETL applied through spin coating and the ETL applied through spray coating showed a power conversion efficiency greater than 10% at their lowest performing thickness.', 'The lowest performing ETL applied through spray coating had a higher power conversion efficiency than the highest performing ETL applied through spin coating.', 'The highest performing ETL applied through spray coating showed a power conversion efficiency of approximately 13%, while the highest performing ETL applied through spin coating showed a power conversion efficiency of approximately 11%.', 'There was a substantial difference in power conversion efficiency between the lowest and highest performing ETLs applied through spray coating.'],
      answer: 'B',
      vocab: [['perovskite', 'a type of crystal structure used in newer solar cells', 'noun'], ['commercially', 'in terms of being sold for profit', 'adv.'], ['novel', 'new and original (as an adjective)', 'adj.'], ['efficiency', 'how much useful output you get from a given input', 'noun']],
      hint: 'To show spray coating is better, compare spray against spin. Look at the <i>worst</i> spray bar and the <i>best</i> spin bar.',
      why: '<p>The conclusion is that spray coating could <b>improve</b> efficiency compared with the usual spin coating. The strongest possible evidence: even the <b>worst</b> spray-coated ETL (lowest performing, about <b>15.5%</b>) beat the <b>best</b> spin-coated ETL (highest performing, about <b>13.6%</b>). If spray coating\'s worst beats spin coating\'s best, spray coating clearly holds promise. Choice B states this accurately.</p>',
      wrong: {
        A: 'True (both above 10%), but it shows no advantage for spray coating over spin coating.',
        C: 'The numbers are wrong: the best spray-coated ETL was about 17%, and the best spin-coated was about 13.6%.',
        D: 'The spray-coated values (about 15.5% and 17.2%) are fairly close, and in any case a difference <i>within</i> spray coating says nothing about spray vs. spin.'
      },
      tip: 'A claim that "X improves on Y" is best supported by a comparison between X and Y, ideally one that holds even in X\'s worst case.'
    },
    {
      n: 14, skill: 'Command of Evidence (Quantitative)', domain: 'Information and Ideas',
      figure: FIG.table({
        caption: 'Employment by Sector in France and the United States, 1800–2012 (% of total employment)',
        head: [['Year', 'Agriculture in France', 'Manufacturing in France', 'Services in France', 'Agriculture in US', 'Manufacturing in US', 'Services in US']],
        rows: [[1800, 64, 22, 14, 68, 18, 13], [1900, 43, 29, 28, 41, 28, 31], [1950, 32, 33, 35, 14, 33, 53], [2012, 3, 21, 76, 2, 18, 80]],
        note: 'Rows in table may not add up to 100 due to rounding.'
      }),
      passage: '<p>Over the past two hundred years, the percentage of the population employed in the agricultural sector has declined in both France and the United States, while employment in the service sector (which includes jobs in retail, consulting, real estate, etc.) has risen. However, this transition happened at very different rates in the two countries. This can be seen most clearly by comparing the employment by sector in both countries in _______</p>',
      prompt: 'Which choice most effectively uses data from the table to complete the statement?',
      choices: ['1900 with the employment by sector in 1950.', '1800 with the employment by sector in 2012.', '1900 with the employment by sector in 2012.', '1800 with the employment by sector in 1900.'],
      answer: 'A',
      vocab: [['sector', 'a distinct part of the economy (e.g., agriculture, services)', 'noun'], ['transition', 'a change from one state to another', 'noun']],
      hint: 'You want a time span where the two countries start in about the same place but end up far apart. Compare agriculture: 1900 France 43, US 41. Then 1950?',
      why: '<p>To show the transition happened at <b>different rates</b>, you want a period where the countries started similarly but changed by very different amounts.</p><ul><li><b>1900 → 1950:</b> Agriculture: France 43 → 32 (down 11 points), US 41 → 14 (down 27 points). Services: France 28 → 35 (up 7), US 31 → 53 (up 22). They started nearly equal in 1900 and were far apart by 1950, so the US changed much faster.</li></ul><p>This is the clearest evidence of different rates, so the answer is A.</p>',
      wrong: {
        B: '1800 → 2012: both countries start similar (64 vs. 68 agriculture) and end similar (3 vs. 2; services 76 vs. 80). The overall change looks almost the same, hiding the rate difference.',
        C: '1900 → 2012: both start similar and end similar again, so this comparison does not reveal different rates.',
        D: '1800 → 1900: France dropped 21 points and the US 27, similar changes (and services rose 14 vs. 18). This shows similar rates, not very different ones.'
      },
      tip: 'For "rate" claims, compute the change over each interval for both groups. The interval with the biggest gap between the two changes is the answer.'
    },
    {
      n: 15, skill: 'Command of Evidence (Textual)', domain: 'Information and Ideas',
      passage: '<p>The linguistic niche hypothesis (LNH) posits that the exotericity of languages (how prevalent non-native speakers are) and grammatical complexity are inversely related, which the LNH ascribes to attrition of complex grammatical rules as more non-native speakers adopt the language but fail to acquire those rules. Focusing on two characteristics that are positive indices of grammatical complexity, fusion (when new phonemes arise from the merger of previously distinct ones) and informativity (languages\' capacity for meaningful variation), Olena Shcherbakova and colleagues conducted a quantitative analysis for more than 1,300 languages and claim the outcome is inconsistent with the LNH.</p>',
      prompt: 'Which finding, if true, would most directly support Shcherbakova and colleagues\' claim?',
      choices: ['Shcherbakova and colleagues\' analysis showed a slightly negative correlation between grammatical complexity and fusion and between grammatical complexity and informativity.', 'Shcherbakova and colleagues\' analysis showed a slightly negative correlation between grammatical complexity and exotericity.', 'Shcherbakova and colleagues\' analysis showed a slightly positive correlation between grammatical complexity and fusion.', 'Shcherbakova and colleagues\' analysis showed a slightly positive correlation between fusion and exotericity and between informativity and exotericity.'],
      answer: 'D',
      vocab: [['hypothesis', 'a proposed explanation to be tested', 'noun'], ['posits', 'puts forward as a basic fact or idea', 'verb'], ['exotericity', 'how common non-native speakers are in a language community', 'noun'], ['prevalent', 'widespread; common', 'adj.'], ['inversely related', 'when one goes up, the other goes down', 'adj.', ['inversely related']], ['ascribes', 'attributes; credits as the cause', 'verb'], ['attrition', 'gradual wearing down or loss', 'noun'], ['indices', 'measures or signs (plural of index)', 'noun'], ['phonemes', 'the smallest units of sound in a language', 'noun'], ['correlation', 'a relationship in which two things change together', 'noun']],
      hint: 'LNH predicts: more non-native speakers → <i>less</i> complexity. Fusion and informativity are signs of <i>more</i> complexity. What result would break the LNH\'s prediction?',
      why: '<p>Set up the logic:</p><ul><li><b>LNH predicts:</b> exotericity (more non-native speakers) and complexity are <b>inversely</b> related. As exotericity rises, complexity should fall.</li><li><b>Fusion and informativity</b> are "positive indices" of complexity: more fusion or informativity = more complexity.</li></ul><p>So if the LNH were right, fusion and informativity should go <i>down</i> as exotericity goes <i>up</i> (a negative correlation). Choice D reports the opposite: a <b>positive</b> correlation between each complexity measure and exotericity. That directly contradicts the LNH, supporting the researchers\' claim that their results are inconsistent with it.</p>',
      wrong: {
        A: 'This relates complexity to its own indicators and says nothing about exotericity, which is the key variable in the LNH.',
        B: 'A negative correlation between complexity and exotericity is exactly what the LNH predicts, so it would <i>support</i> the LNH, not contradict it.',
        C: 'A positive link between complexity and fusion is expected by definition (fusion is an index of complexity) and does not involve exotericity at all.'
      },
      tip: 'For hypothesis questions, write the prediction as an arrow ("more A → less B"). Evidence against it shows the arrow going the other way.'
    },
    {
      n: 16, skill: 'Inferences', domain: 'Information and Ideas',
      passage: '<p>Archaeologist Christiana Kohler and her team excavated the Egyptian tomb of Queen Merneith, the wife of a First Dynasty pharaoh. Some scholars claim that she also ruled Egypt on her own and was actually the first female pharaoh. The team found a tablet in Merneith\'s tomb with writing suggesting that she was in charge of the country\'s treasury and other central offices. Whether Merneith was a pharaoh or not, this discovery supports the idea that Merneith likely _______</p>',
      prompt: 'Which choice most logically completes the text?',
      choices: ['had an important role in Egypt\'s government.', 'lived after rather than before the First Dynasty of Egypt.', 'traveled beyond Egypt\'s borders often.', 'created a new form of writing in Egypt.'],
      answer: 'A',
      vocab: [['excavated', 'dug up carefully to find remains', 'verb'], ['dynasty', 'a series of rulers from the same family', 'noun'], ['treasury', 'the government department that manages money', 'noun']],
      hint: 'The tablet says she was "in charge of the country\'s treasury and other central offices." What does that tell you, even if she was not pharaoh?',
      why: '<p>The tablet suggests Merneith "was in charge of the country\'s treasury and other central offices." Running the treasury and central offices means holding real power in the state, so regardless of whether she was pharaoh, she <b>had an important role in Egypt\'s government</b>.</p>',
      wrong: {
        B: 'The passage says she was the wife of a First Dynasty pharaoh, placing her during the First Dynasty, not after it.',
        C: 'Nothing in the passage mentions travel.',
        D: 'The tablet contains writing <i>about</i> her; nothing suggests she invented a writing system.'
      },
      tip: '"Whether X or not" tells you the answer must be true in either case. Pick the conclusion that the evidence supports on its own.'
    },
    {
      n: 17, skill: 'Inferences', domain: 'Information and Ideas',
      passage: '<p>In a study of the cognitive abilities of white-faced capuchin monkeys (<i>Cebus imitator</i>), researchers neglected to control for the physical difficulty of the tasks they used to evaluate the monkeys. The cognitive abilities of monkeys given problems requiring little dexterity, such as sliding a panel to retrieve food, were judged by the same criteria as were those of monkeys given physically demanding problems, such as unscrewing a bottle and inserting a straw. The results of the study, therefore, ______</p>',
      prompt: 'Which choice most logically completes the text?',
      choices: ['could suggest that there are differences in cognitive ability among the monkeys even though such differences may not actually exist.', 'are useful for identifying tasks that the monkeys lack the cognitive capacity to perform but not for identifying tasks that the monkeys can perform.', 'should not be taken as indicative of the cognitive abilities of any monkey species other than <i>C. imitator</i>.', 'reveal more about the monkeys\' cognitive abilities when solving artificial problems than when solving problems encountered in the wild.'],
      answer: 'A',
      vocab: [['cognitive', 'relating to thinking, learning, and understanding', 'adj.'], ['neglected', 'failed to do something', 'verb'], ['control for', 'account for a factor so it doesn\'t distort the results', 'verb', ['control for']], ['dexterity', 'skill in using the hands', 'noun'], ['criteria', 'standards used to judge something', 'noun'], ['indicative', 'serving as a sign of', 'adj.']],
      hint: 'If a monkey fails the bottle-and-straw task, was it because it could not <i>think</i> of the solution, or because the task was physically hard? What problem does that create?',
      why: '<p>The flaw: monkeys with easy physical tasks and monkeys with hard physical tasks were judged by the <b>same</b> standard. A monkey might fail the bottle-and-straw task because it lacks <b>dexterity</b>, not intelligence. The study would then wrongly record it as less cognitively able. So the results <b>could show differences in cognitive ability that don\'t actually exist</b>; the apparent differences may just reflect physical difficulty.</p>',
      wrong: {
        B: 'The flaw affects failures and successes alike; there is no reason the results would be reliable only for tasks monkeys cannot do.',
        C: 'The problem described is about physical difficulty, not about generalizing to other species.',
        D: 'The passage does not compare artificial problems with problems in the wild.'
      },
      tip: 'When a passage names a methodological flaw, the conclusion is usually "so the results may be misleading in this specific way." Identify the confounding factor (here, physical difficulty).'
    },
    {
      n: 18, skill: 'Form, Structure, and Sense', domain: 'Standard English Conventions',
      passage: '<p>Public-awareness campaigns about the need to reduce single-use plastics can be successful, says researcher Kim Borg of Monash University in Australia, when these campaigns give consumers a choice: for example, Japan achieved a 40 percent reduction in plastic-bag use after cashiers were instructed to ask customers whether _______ wanted a bag.</p>',
      prompt: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices: ['they', 'one', 'you', 'it'],
      answer: 'A',
      vocab: [['single-use', 'designed to be used once and then thrown away', 'adj.']],
      hint: 'Who is being asked whether they want a bag? Find that noun and check whether it is singular or plural.',
      why: '<p>The pronoun refers to "<b>customers</b>" (the people the cashiers ask), which is plural. The plural pronoun is <b>they</b>: "ask customers whether they wanted a bag."</p>',
      wrong: {
        B: '"one" is a singular, generic pronoun and does not agree with the plural "customers."',
        C: '"you" shifts to second person, but the sentence is in third person and refers to customers.',
        D: '"it" is singular and used for things, not people.'
      },
      tip: 'Pronoun questions: find the antecedent, check number (singular or plural) and person (third person for people being described).'
    },
    {
      n: 19, skill: 'Boundaries', domain: 'Standard English Conventions',
      passage: '<p>Lucía Michel of the University of Chile observed that alkaline soils contain an insoluble form of iron that blueberry plants cannot absorb, thus inhibiting blueberry growth. If these plants were grown in alkaline soil alongside grasses that aid in iron solubilization, _______ Michel was determined to find out.</p>',
      prompt: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices: ['could the blueberries thrive.', 'the blueberries could thrive.', 'the blueberries could thrive?', 'could the blueberries thrive?'],
      answer: 'D',
      vocab: [['alkaline', 'having a pH above 7 (the opposite of acidic)', 'adj.'], ['insoluble', 'unable to dissolve', 'adj.'], ['solubilization', 'making something able to dissolve', 'noun'], ['thrive', 'grow strongly and healthily', 'verb']],
      hint: 'The next sentence says Michel "was determined to find out." Find out what? That means the previous sentence is asking a question.',
      why: '<p>The sentence that follows ("Michel was determined to find out") shows the preceding sentence is a <b>direct question</b> Michel wanted answered. A direct question in English uses <b>inverted word order</b> (verb before subject: "could the blueberries") and ends with a <b>question mark</b>. Only D has both.</p>',
      wrong: {
        A: 'Question word order but a period. A direct question needs a question mark.',
        B: 'Statement word order and a period make this a claim that the blueberries <i>could</i> thrive, which contradicts "determined to find out."',
        C: 'Statement word order with a question mark mixes forms; standard written English uses inverted order for a direct question.'
      },
      tip: 'Direct questions need both inverted order ("could the blueberries...") and a question mark. Indirect questions ("She wondered whether the blueberries could thrive.") use normal order and a period.'
    },
    {
      n: 20, skill: 'Form, Structure, and Sense', domain: 'Standard English Conventions',
      passage: '<p>Atoms in a synchrotron, a type of circular particle accelerator, travel faster and faster until they ______ a desired energy level, at which point they are diverted to collide with a target, smashing the atoms.</p>',
      prompt: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices: ['will reach', 'reach', 'had reached', 'are reaching'],
      answer: 'B',
      vocab: [['synchrotron', 'a circular machine that speeds up particles', 'noun'], ['accelerator', 'a machine that makes particles move very fast', 'noun'], ['diverted', 'turned aside to a different path', 'verb']],
      hint: 'The sentence describes a general process that always happens, using the simple present ("travel," "are diverted"). Match that tense.',
      why: '<p>The sentence explains how a synchrotron works in general, using the <b>simple present</b>: atoms "<b>travel</b>" faster "until they ___ a desired energy level," after which they "<b>are diverted</b>." To keep the tense consistent for a general truth, the blank should also be simple present: "<b>reach</b>." (After "until," English uses the present tense even for future-feeling events.)</p>',
      wrong: {
        A: '"will reach" uses the future tense after "until," which is not standard in a time clause, and it breaks the present-tense pattern.',
        C: '"had reached" is past perfect, which clashes with the present-tense description of an ongoing process.',
        D: '"are reaching" is progressive, suggesting an action in progress, not the single moment when a level is reached.'
      },
      tip: 'Scientific processes are described in the simple present. Keep all verbs in the same tense unless the time frame changes.'
    },
    {
      n: 21, skill: 'Form, Structure, and Sense', domain: 'Standard English Conventions',
      passage: '<p>In his 1963 exhibition <i>Exposition of Music—Electronic Television</i>, Korean American artist Nam June Paik showed how television images could be manipulated to express an artist\'s perspective. Today, Paik _______ considered the first video artist.</p>',
      prompt: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices: ['will be', 'had been', 'was', 'is'],
      answer: 'D',
      vocab: [['exhibition', 'a public display of art', 'noun'], ['manipulated', 'changed or controlled skillfully', 'verb'], ['perspective', 'a particular point of view', 'noun']],
      hint: 'The sentence starts with "Today." Which tense matches?',
      why: '<p>"<b>Today</b>" signals the present. Paik is <i>currently</i> considered the first video artist, so the present tense "<b>is</b>" is correct: "Today, Paik is considered the first video artist."</p>',
      wrong: {
        A: '"will be" is future, which conflicts with "Today."',
        B: '"had been" is past perfect, used for an action before another past action, which conflicts with "Today."',
        C: '"was" is past tense, which conflicts with "Today."'
      },
      tip: 'Time words ("today," "in 1963," "currently," "by then") usually decide the tense. Spot them first.'
    },
    {
      n: 22, skill: 'Form, Structure, and Sense', domain: 'Standard English Conventions',
      passage: '<p>Former First Lady of the United States Eleanor Roosevelt and Indian activist and educator Hansa Mehta were instrumental in drafting the United Nations\' Universal Declaration of Human Rights, a document that ______ the basic freedoms to which all people are entitled.</p>',
      prompt: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices: ['have outlined', 'were outlining', 'outlines', 'outline'],
      answer: 'C',
      vocab: [['instrumental', 'playing an important role in making something happen', 'adj.'], ['drafting', 'writing the first version of a document', 'verb'], ['entitled', 'having a right to something', 'adj.']],
      hint: 'What is the subject of the blank? "a document that ___." Is "a document" singular or plural?',
      why: '<p>The blank\'s subject is "<b>that</b>," which refers to "<b>a document</b>" (singular). A singular subject needs a singular verb. The document still exists and still does this, so the present tense fits. "a document that <b>outlines</b> the basic freedoms" is correct.</p>',
      wrong: {
        A: '"have outlined" is plural. It incorrectly agrees with "Roosevelt and Mehta" instead of "document."',
        B: '"were outlining" is plural (and progressive), again agreeing with the wrong noun.',
        D: '"outline" is the plural present form and does not agree with the singular "document."'
      },
      tip: 'In "a [noun] that ___," the verb agrees with that noun. Don\'t be pulled toward a plural subject earlier in the sentence.'
    },
    {
      n: 23, skill: 'Boundaries', domain: 'Standard English Conventions',
      passage: '<p>In February 1919, following the end of the First World War, women from ten countries around the world convened the Inter-Allied Women\'s Conference in Paris. The conference\'s goals were _______ ensure women\'s participation in the proceedings of the Paris Peace Conference, to secure the right of women to serve in the League of Nations, and to advocate for human rights.</p>',
      prompt: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices: ['threefold: to', 'threefold. To', 'threefold to', 'threefold; to'],
      answer: 'A',
      vocab: [['convened', 'brought together for a meeting', 'verb'], ['threefold', 'having three parts', 'adj.'], ['proceedings', 'the events and discussions of a meeting', 'noun'], ['advocate', 'publicly support or argue for', 'verb']],
      hint: '"The conference\'s goals were threefold" is a complete sentence, and a list of the three goals follows. Which punctuation introduces a list?',
      why: '<p>"The conference\'s goals were threefold" is a <b>complete independent clause</b>, and what follows is a <b>list</b> of the three goals (to ensure..., to secure..., to advocate...). A <b>colon</b> is the standard mark to introduce a list or explanation after a complete clause.</p>',
      wrong: {
        B: 'A period makes "To ensure... and to advocate for human rights." a fragment (no subject or main verb).',
        C: 'No punctuation runs "threefold" into the list, making it read as "threefold to ensure...," which is confusing and ungrammatical.',
        D: 'A semicolon must join two independent clauses. The list after it is not an independent clause.'
      },
      tip: 'Colon rule: complete sentence first, then a list or explanation. Semicolon rule: complete sentence on both sides.'
    },
    {
      n: 24, skill: 'Form, Structure, and Sense', domain: 'Standard English Conventions',
      passage: '<p>Mathematician Grigori Perelman, sometimes in conjunction with mathematicians Richard S. Hamilton and Shing-Tung Yau, _______ credited with proving the Poincaré conjecture. Having built on Hamilton\'s previous work to solve the proof, Perelman has insisted that Hamilton receive credit. Yau later found and closed gaps in Perelman\'s proof, persuading some mathematicians that he deserves credit as well.</p>',
      prompt: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices: ['are', 'have been', 'are being', 'is'],
      answer: 'D',
      vocab: [['in conjunction with', 'together with', 'phrase', ['in conjunction with']], ['conjecture', 'a mathematical statement believed true but not yet proven', 'noun']],
      hint: 'Remove the phrase set off by commas ("sometimes in conjunction with..."). What is left as the subject?',
      why: '<p>Remove the interrupting phrase between the commas: "Mathematician Grigori <b>Perelman</b>, <s>sometimes in conjunction with mathematicians Richard S. Hamilton and Shing-Tung Yau</s>, ___ credited..." The subject is "Perelman," a single person. "In conjunction with" does <b>not</b> make the subject plural (unlike "and"). So the verb must be singular: "<b>is</b> credited."</p>',
      wrong: {
        A: '"are" is plural; it wrongly treats the phrase in commas as part of the subject.',
        B: '"have been" is plural, the same error.',
        C: '"are being" is plural and also awkwardly progressive.'
      },
      tip: 'Phrases like "along with," "as well as," "together with," and "in conjunction with" never make a singular subject plural.'
    },
    {
      n: 25, skill: 'Boundaries', domain: 'Standard English Conventions',
      passage: '<p>Researchers studying magnetosensation have determined why some soil-dwelling roundworms in the Southern Hemisphere move in the opposite direction of Earth\'s magnetic field when searching for _______ in the Northern Hemisphere, the magnetic field points down, into the ground, but in the Southern Hemisphere, it points up, toward the surface and away from worms\' food sources.</p>',
      prompt: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices: ['food:', 'food,', 'food while', 'food'],
      answer: 'A',
      vocab: [['magnetosensation', 'the ability to sense magnetic fields', 'noun'], ['hemisphere', 'half of the Earth (Northern/Southern)', 'noun']],
      hint: 'The first part says researchers figured out <i>why</i> the worms do something. The second part gives the reason. What punctuation introduces an explanation?',
      why: '<p>The first clause is complete: researchers "have determined why some... roundworms... move in the opposite direction of Earth\'s magnetic field when searching for food." The second clause is also complete and <b>explains the "why"</b>: the field points up in the Southern Hemisphere, away from food. A <b>colon</b> is the right mark to introduce an explanation after an independent clause.</p>',
      wrong: {
        B: 'A comma alone between two independent clauses is a comma splice.',
        C: '"while" makes the second part a contrast clause and blurs the explanation; it also creates a confusing, run-on style sentence ("food while in the Northern Hemisphere... but in the Southern...").',
        D: 'No punctuation fuses the two independent clauses into a run-on.'
      },
      tip: 'When a sentence promises something ("determined why...") and the next clause delivers it, a colon is usually the answer.'
    },
    {
      n: 26, skill: 'Transitions', domain: 'Expression of Ideas',
      passage: '<p>Most conifers (trees belonging to the phylum Coniferophyta) are evergreen. That is, they keep their green leaves or needles year-round. However, not all conifer species are evergreen. Larch trees, _______ lose their needles every fall.</p>',
      prompt: 'Which choice completes the text with the most logical transition?',
      choices: ['for instance,', 'nevertheless,', 'meanwhile,', 'in addition,'],
      answer: 'A',
      vocab: [['conifers', 'trees that produce cones, like pines and firs', 'noun'], ['phylum', 'a major category in the classification of living things', 'noun'], ['evergreen', 'keeping green leaves all year', 'adj.']],
      hint: 'Sentence 3 says "not all conifers are evergreen." Sentence 4 names one conifer that loses its needles. That relationship is...?',
      why: '<p>Sentence 3 makes a claim: "not all conifer species are evergreen." Sentence 4 names <b>larch trees</b>, conifers that lose their needles every fall. Larches are an <b>example</b> of a non-evergreen conifer, so "<b>for instance</b>" is the logical transition.</p>',
      wrong: {
        B: '"nevertheless" signals contrast (despite that). But larches support sentence 3 rather than contrast with it.',
        C: '"meanwhile" signals simultaneous events or a shift in topic, which does not fit.',
        D: '"in addition" signals a new, separate point, but the larch is an illustration of the previous point.'
      },
      tip: 'Always compare the new sentence with the sentence immediately before it, not with the first sentence of the paragraph. Here, larch is an example of sentence 3, not a contrast with sentence 1.'
    },
    {
      n: 27, skill: 'Transitions', domain: 'Expression of Ideas',
      passage: '<p>Neuroscientist Karen Konkoly wanted to determine whether individuals can understand and respond to questions during REM sleep. She first taught volunteers eye movements they would use to respond to basic math problems while asleep (a single left-right eye movement indicated the number one). _______ she attached electrodes to the volunteers\' faces to record their eye movements during sleep.</p>',
      prompt: 'Which choice completes the text with the most logical transition?',
      choices: ['Specifically,', 'Next,', 'For instance,', 'In sum,'],
      answer: 'B',
      vocab: [['REM sleep', 'the stage of sleep with rapid eye movement, when most dreaming happens', 'noun', ['REM sleep']], ['electrodes', 'small conductors attached to the body to record electrical activity', 'noun']],
      hint: 'The previous sentence says "She <b>first</b> taught volunteers..." What word signals the following step?',
      why: '<p>The passage describes the steps of Konkoly\'s experiment in order. The previous sentence begins "She <b>first</b> taught volunteers eye movements..." The blank introduces the following step (attaching electrodes), so a sequence word is needed: "<b>Next</b>."</p>',
      wrong: {
        A: '"Specifically" introduces more detail about the previous point, but attaching electrodes is a new step, not a detail of teaching eye movements.',
        C: '"For instance" introduces an example, but attaching electrodes is not an example of teaching.',
        D: '"In sum" introduces a summary or conclusion, but this sentence continues the procedure.'
      },
      tip: 'Sequence words ("first," "then," "finally") earlier in a passage are strong clues that the transition should continue the sequence.'
    },
    {
      n: 28, skill: 'Transitions', domain: 'Expression of Ideas',
      passage: '<p>In his 1925 book <i>The Morphology of Landscape</i>, US geographer Carl Sauer challenged prevailing views about how natural landscapes influence human cultures. _______ Sauer argued that instead of being shaped entirely by their natural surroundings, cultures play an active role in their own development by virtue of their interactions with the environment.</p>',
      prompt: 'Which choice completes the text with the most logical transition?',
      choices: ['Similarly,', 'Finally,', 'Therefore,', 'Specifically,'],
      answer: 'D',
      vocab: [['morphology', 'the study of form and structure', 'noun'], ['prevailing', 'most common or widely accepted at a particular time', 'adj.'], ['by virtue of', 'because of; as a result of', 'phrase', ['by virtue of']]],
      hint: 'Sentence 1 says Sauer "challenged prevailing views." Sentence 2 tells us exactly <i>how</i> he challenged them. Which transition introduces the details of a general statement?',
      why: '<p>Sentence 1 makes a general statement: Sauer "challenged prevailing views" about landscapes and cultures. Sentence 2 spells out the <b>precise content</b> of that challenge: cultures are not "shaped entirely" by nature but play "an active role" in their own development. When a sentence gives the specific details of a general claim, the right transition is "<b>Specifically</b>."</p>',
      wrong: {
        A: '"Similarly" signals a new but comparable idea. Sentence 2 is the same idea in more detail, not a separate parallel one.',
        B: '"Finally" signals the last item in a sequence; there is no list of steps here.',
        C: '"Therefore" signals a conclusion drawn from evidence. Sentence 2 elaborates the challenge rather than following from it.'
      },
      tip: 'General claim → precise details of that same claim = "Specifically" or "In particular."'
    },
    {
      n: 29, skill: 'Transitions', domain: 'Expression of Ideas',
      passage: '<p>In her 2012 analysis of tree rings from Japan\'s Yaku Island, cosmic ray physicist Fusa Miyake noted an anomalous carbon-14 spike dating to 774–775 CE, indicating that a massive burst of radiation reached Earth during that time. _______ this unprecedented radiocarbon surge was dubbed a "Miyake event" in honor of its discoverer.</p>',
      prompt: 'Which choice completes the text with the most logical transition?',
      choices: ['Fittingly,', 'Similarly,', 'However,', 'In other words,'],
      answer: 'A',
      vocab: [['anomalous', 'unusual; different from what is normal', 'adj.'], ['unprecedented', 'never having happened before', 'adj.'], ['dubbed', 'given a name or nickname', 'verb'], ['in honor of', 'as a way of showing respect for', 'phrase', ['in honor of']]],
      hint: 'Miyake discovered the spike, and it was named after her. What word expresses that this outcome is appropriate?',
      why: '<p>The first sentence says Miyake discovered the carbon-14 spike. The second says the event was named a "Miyake event" <b>in honor of its discoverer</b>. Naming a discovery after the person who found it is <b>appropriate</b>, and "<b>Fittingly</b>" expresses exactly that judgment.</p>',
      wrong: {
        B: '"Similarly" signals a comparable second example, but the naming is a consequence of the discovery, not a similar event.',
        C: '"However" signals contrast, but naming it after her is consistent with her discovering it.',
        D: '"In other words" introduces a restatement, but the naming adds new information rather than rephrasing the discovery.'
      },
      tip: 'Evaluative transitions (fittingly, surprisingly, ironically) comment on how the second sentence relates to the first. Ask: is it expected, unexpected, or appropriate?'
    },
    {
      n: 30, skill: 'Transitions', domain: 'Expression of Ideas',
      passage: '<p>Researchers Helena Mihaljević-Brandt, Lucía Santamaría, and Marco Tullney report that while mathematicians may have traditionally worked alone, evidence points to a shift in the opposite direction. _______ mathematicians are choosing to collaborate with their peers—a trend illustrated by a rise in the number of mathematics publications credited to multiple authors.</p>',
      prompt: 'Which choice completes the text with the most logical transition?',
      choices: ['Similarly,', 'For this reason,', 'Furthermore,', 'Increasingly,'],
      answer: 'D',
      vocab: [['collaborate', 'work together', 'verb'], ['peers', 'people of the same group or level', 'noun']],
      hint: 'The passage describes a "shift" and a "trend" illustrated by a "rise." Which transition describes something growing over time?',
      why: '<p>The passage describes a <b>shift</b> from working alone toward working together, a <b>trend</b> shown by a <b>rise</b> in multi-author publications. All of these words describe change growing over time. "<b>Increasingly</b>, mathematicians are choosing to collaborate" captures that growing trend precisely.</p>',
      wrong: {
        A: '"Similarly" introduces a comparable but separate point, and nothing earlier is similar to collaboration.',
        B: '"For this reason" suggests the previous sentence causes collaboration, but the previous sentence only reports the shift; it does not explain it.',
        C: '"Furthermore" adds a new, separate point, but this sentence explains the shift itself.'
      },
      tip: 'Some transitions describe degree or trend (increasingly, gradually). Words like "shift," "trend," and "rise" in the passage are your clue.'
    },
    {
      n: 31, skill: 'Rhetorical Synthesis', domain: 'Expression of Ideas',
      passage: '<p class="intro">While researching a topic, a student has taken the following notes:</p><ul class="notes"><li>Shaun Tan is an Australian author.</li><li>In 2008, he published <i>Tales from Outer Suburbia</i>, a book of fifteen short stories.</li><li>The stories describe surreal events occurring in otherwise ordinary suburban neighborhoods.</li><li>In 2018, he published <i>Tales from the Inner City</i>, a book of twenty-five short stories.</li><li>The stories describe surreal events occurring in otherwise ordinary urban settings.</li></ul>',
      prompt: 'The student wants to emphasize a similarity between the two books by Shaun Tan. Which choice most effectively uses relevant information from the notes to accomplish this goal?',
      choices: ['Shaun Tan\'s book <i>Tales from Outer Suburbia</i>, which describes surreal events occurring in otherwise ordinary places, contains fewer short stories than <i>Tales from the Inner City</i> does.', '<i>Tales from Outer Suburbia</i> was published in 2008, and <i>Tales from the Inner City</i> was published in 2018.', 'Unlike <i>Tales from the Inner City</i>, Shaun Tan\'s book <i>Tales from Outer Suburbia</i> is set in suburban neighborhoods.', 'Shaun Tan\'s books <i>Tales from Outer Suburbia</i> and <i>Tales from the Inner City</i> both describe surreal events occurring in otherwise ordinary places.'],
      answer: 'D',
      vocab: [['surreal', 'strange and dreamlike; not realistic', 'adj.'], ['suburban', 'relating to residential areas at the edge of a city', 'adj.'], ['urban', 'relating to a city', 'adj.']],
      hint: 'Look for the word "both."',
      why: '<p>Both books describe "surreal events occurring in otherwise ordinary" settings (suburban neighborhoods and urban settings are both "ordinary places"). Choice D states this shared feature and uses "<b>both</b>" to emphasize the similarity.</p>',
      wrong: {
        A: 'The main point is a <i>difference</i> (fewer short stories).',
        B: 'This gives two different publication dates; it states facts but emphasizes no similarity.',
        C: '"Unlike" signals a difference in setting.'
      },
      tip: 'Signal words reveal the emphasis: "both," "like," "similarly" for similarity; "unlike," "while," "whereas" for difference.'
    },
    {
      n: 32, skill: 'Rhetorical Synthesis', domain: 'Expression of Ideas',
      passage: '<p class="intro">While researching a topic, a student has taken the following notes:</p><ul class="notes"><li>Started in 1925, the Scripps National Spelling Bee is a US-based spelling competition.</li><li>The words used in the competition have diverse linguistic origins.</li><li>In 2008, Sameer Mishra won by correctly spelling the word "guerdon."</li><li>"Guerdon" derives from the Anglo-French word "guerdun."</li><li>In 2009, Kavya Shivashankar won by correctly spelling the word "Laodicean."</li><li>"Laodicean" derives from the ancient Greek word "Laodíkeia."</li></ul>',
      prompt: 'The student wants to emphasize a difference in the origins of the two words. Which choice most effectively uses relevant information from the notes to accomplish this goal?',
      choices: ['"Guerdon," the final word of the 2008 Scripps National Spelling Bee, is of Anglo-French origin, while the following year\'s final word, "Laodicean," derives from ancient Greek.', 'In 2008, Sameer Mishra won the Scripps National Spelling Bee by correctly spelling the word "guerdon"; however, the following year, Kavya Shivashankar won based on spelling the word "Laodicean."', 'Kavya Shivashankar won the 2009 Scripps National Spelling Bee by correctly spelling "Laodicean," which derives from the ancient Greek word "Laodíkeia."', 'The Scripps National Spelling Bee uses words from diverse linguistic origins, such as "guerdon" and "Laodicean."'],
      answer: 'A',
      vocab: [['linguistic', 'relating to language', 'adj.'], ['derives', 'comes from; originates in', 'verb'], ['origins', 'where something comes from', 'noun']],
      hint: 'The difference must be about <b>origins</b>, and it needs <b>both</b> words\' origins stated.',
      why: '<p>To show a difference in <b>origins</b>, the sentence must state both origins and contrast them. Choice A does: "guerdon" is "of <b>Anglo-French</b> origin, <b>while</b>... \'Laodicean\' derives from <b>ancient Greek</b>." The word "while" marks the contrast.</p>',
      wrong: {
        B: 'This contrasts the winners and years but never mentions either word\'s origin.',
        C: 'This gives only one word\'s origin, so no difference can be shown.',
        D: 'This notes that origins are "diverse" but does not state either origin or emphasize a specific difference.'
      },
      tip: 'A comparison needs both sides. If a choice only describes one item, it cannot show a difference or similarity.'
    },
    {
      n: 33, skill: 'Rhetorical Synthesis', domain: 'Expression of Ideas',
      passage: '<p class="intro">While researching a topic, a student has taken the following notes:</p><ul class="notes"><li>In 1851, German American artist Emanuel Leutze painted <i>Washington Crossing the Delaware</i>.</li><li>His huge painting (149 × 255 inches) depicts the first US president crossing a river with soldiers in the Revolutionary War.</li><li>In 2019, Cree artist Kent Monkman painted <i>mistikôsiwak (Wooden Boat People): Resurgence of the People</i>.</li><li>Monkman\'s huge painting (132 × 264 inches) was inspired by Leutze\'s.</li><li>It portrays Indigenous people in a boat rescuing refugees.</li></ul>',
      prompt: 'The student wants to emphasize a similarity between the two paintings. Which choice most effectively uses relevant information from the notes to accomplish this goal?',
      choices: ['Monkman, a Cree artist, finished his painting in 2019; Leutze, a German American artist, completed his in 1851.', 'Although Monkman\'s painting was inspired by Leutze\'s, the people and actions the two paintings portray are very different.', 'Leutze\'s and Monkman\'s paintings are both huge, measuring 149 × 255 inches and 132 × 264 inches, respectively.', 'Leutze\'s painting depicts Revolutionary War soldiers, while Monkman\'s depicts Indigenous people and refugees.'],
      answer: 'C',
      vocab: [['depicts', 'shows or represents in a picture', 'verb'], ['resurgence', 'a rise again after a period of decline', 'noun'], ['refugees', 'people forced to leave their homes, often because of danger', 'noun'], ['respectively', 'in the same order as the things just mentioned', 'adv.']],
      hint: 'Which choice says "both"?',
      why: '<p>Choice C highlights a shared quality: both paintings are <b>huge</b>, and it gives the measurements as support (149 × 255 inches and 132 × 264 inches). The word "<b>both</b>" signals the similarity.</p>',
      wrong: {
        A: 'This contrasts the artists and dates; it emphasizes differences.',
        B: 'This explicitly emphasizes that the paintings are "very different."',
        D: '"while" contrasts what the paintings depict, a difference.'
      },
      tip: 'Three of four choices here are about differences. Scan for the similarity signal word and verify it is supported by the notes.'
    }
  ]
});
