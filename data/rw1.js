/* Reading and Writing — Module 1 (33 questions).
   Question fields: n, skill, domain, passage, prompt, choices[4], answer,
   vocab [[word, definition, part of speech, [forms to highlight]]],
   hint, why, wrong{letter: reason}, tip. */
window.SAT = window.SAT || { modules: [] };
SAT.modules.push({
  id: 'rw1',
  section: 'rw',
  short: 'Reading and Writing · Module 1',
  minutes: 39,
  directions: '<p>The questions in this section address a number of important reading and writing skills. Each question includes one or more passages, which may include a table or graph. Read each passage and question carefully, and then choose the best answer to the question based on the passage(s).</p><p style="margin:0">All questions in this section are multiple-choice with four answer choices. Each question has a single best answer.</p>',
  questions: [
    {
      n: 1, skill: 'Words in Context', domain: 'Craft and Structure',
      passage: '<p>The general store was essential to daily life in the rural United States during the 1800s because it provided the supplies that the people living in nearby communities needed. Also, the store was a _______ of information. People socializing at the general store would share news and help spread it throughout their communities.</p>',
      prompt: 'Which choice completes the text with the most logical and precise word or phrase?',
      choices: ['source', 'rival', 'condition', 'waste'],
      answer: 'A',
      vocab: [['essential', 'absolutely necessary; extremely important', 'adj.'], ['rural', 'relating to the countryside rather than a city', 'adj.'], ['socializing', 'spending time talking and mixing with other people', 'verb', ['socializing']], ['rival', 'a competitor; someone or something competing with another', 'noun']],
      hint: 'The sentence after the blank explains what happened with information at the store: people <i>shared news</i> there and <i>spread</i> it. What do you call a place that information comes <i>from</i>?',
      why: '<p>The blank describes the store\'s relationship to information. The next sentence tells us exactly what that relationship was: people gathered there, shared news, and then carried it out into their communities. In other words, information <b>came from</b> the store. A <b>source</b> is the place something originates or is obtained from, so "a source of information" is precisely what the passage describes.</p><p>Notice also the word "Also": the passage first says the store supplied goods, then adds that it supplied something else, namely information. "Source" keeps that parallel (the store was a provider of both).</p>',
      wrong: {
        B: 'A <b>rival</b> is a competitor. The store did not compete against information; it provided it. This word makes the sentence illogical.',
        C: 'A <b>condition</b> is a state of being or a requirement. "A condition of information" does not express the idea that news came from the store.',
        D: '<b>Waste</b> means something useless or thrown away, which contradicts the positive role the passage gives the store as a place where valuable news was shared.'
      },
      tip: 'For words-in-context blanks, find the sentence that <i>explains</i> the blank (here, the sentence right after it), then predict your own word before looking at the choices.'
    },
    {
      n: 2, skill: 'Words in Context', domain: 'Craft and Structure',
      passage: '<p>For painter Jacob Lawrence, being _______ was an important part of the artistic process. Because he paid close attention to all the details of his Harlem neighborhood, Lawrence\'s artwork captured nuances in the beauty and vitality of the Black experience during the Harlem Renaissance and the Great Migration.</p>',
      prompt: 'Which choice completes the text with the most logical and precise word or phrase?',
      choices: ['skeptical', 'observant', 'critical', 'confident'],
      answer: 'B',
      vocab: [['nuances', 'small, subtle differences in meaning, feeling, or appearance', 'noun'], ['vitality', 'energy and liveliness', 'noun'], ['skeptical', 'doubtful; not easily convinced', 'adj.'], ['observant', 'quick to notice things; paying close attention', 'adj.'], ['critical', 'expressing disapproval, or judging carefully', 'adj.']],
      hint: 'The second sentence starts with "Because he paid close attention to all the details..." Which choice is a one-word way of saying "pays close attention"?',
      why: '<p>The second sentence gives the evidence: Lawrence "paid close attention to all the details of his Harlem neighborhood," and that attention let his art capture subtle "nuances." Someone who notices details carefully is <b>observant</b>. The blank asks what quality was part of his process, and the text directly describes the habit of noticing.</p>',
      wrong: {
        A: '<b>Skeptical</b> means doubtful or questioning. Nothing in the passage says Lawrence doubted what he saw; he recorded it closely.',
        C: '<b>Critical</b> suggests judging or finding fault. The passage praises how he captured "beauty and vitality," not how he criticized.',
        D: '<b>Confident</b> describes self-assurance. The passage is about attention to detail, not about how sure of himself Lawrence was.'
      },
      tip: 'When a passage says "because he did X," the blank is usually a word that names X. Match the blank to the behavior described.'
    },
    {
      n: 3, skill: 'Words in Context', domain: 'Craft and Structure',
      passage: '<p>Former astronaut Ellen Ochoa says that although she doesn\'t have a definite idea of when it might happen, she _______ that humans will someday need to be able to live in other environments than those found on Earth. This conjecture informs her interest in future research missions to the moon.</p>',
      prompt: 'Which choice completes the text with the most logical and precise word or phrase?',
      choices: ['demands', 'speculates', 'doubts', 'establishes'],
      answer: 'B',
      vocab: [['definite', 'clearly known or decided; certain', 'adj.'], ['conjecture', 'an opinion or guess formed without complete evidence', 'noun'], ['informs', 'shapes or influences (in this sense)', 'verb'], ['speculates', 'forms a theory or guess without firm evidence', 'verb'], ['establishes', 'shows something to be true; proves or sets up', 'verb']],
      hint: 'Two clues: she "doesn\'t have a definite idea," and the next sentence calls her idea a "conjecture" (a guess). Which verb means making a guess?',
      why: '<p>The passage stresses uncertainty: Ochoa lacks "a definite idea" of when it will happen, and the following sentence labels her belief a <b>conjecture</b>, meaning a guess based on incomplete information. To <b>speculate</b> is exactly to form such a guess or theory. "She speculates that humans will someday need to live elsewhere" fits both clues.</p>',
      wrong: {
        A: '<b>Demands</b> means insists or requires forcefully. One cannot "demand that humans will someday need" something; it also clashes with the tentative tone.',
        C: '<b>Doubts</b> is the opposite of the meaning. Her conjecture drives her interest in moon missions, so she believes it rather than doubts it.',
        D: '<b>Establishes</b> means proves or firmly sets up. That contradicts "doesn\'t have a definite idea" and "conjecture."'
      },
      tip: 'Look for a later word that restates the blank. Here "This conjecture" refers back to what she does in the blank, so the blank must mean "guesses."'
    },
    {
      n: 4, skill: 'Words in Context', domain: 'Craft and Structure',
      passage: '<p>The parasitic dodder plant increases its reproductive success by flowering at the same time as the host plant it has latched onto. In 2020, Jianqiang Wu and his colleagues determined that the tiny dodder achieves this _______ with its host by absorbing and utilizing a protein the host produces when it is about to flower.</p>',
      prompt: 'Which choice completes the text with the most logical and precise word or phrase?',
      choices: ['synchronization', 'hibernation', 'prediction', 'moderation'],
      answer: 'A',
      vocab: [['parasitic', 'living on or in another organism and taking nourishment from it', 'adj.'], ['host', 'the organism that a parasite lives on', 'noun'], ['synchronization', 'making things happen at the same time', 'noun'], ['hibernation', 'a deep sleep-like state some animals enter during winter', 'noun'], ['moderation', 'avoiding extremes; keeping things within reasonable limits', 'noun']],
      hint: '"This _______" refers back to something already described in the first sentence. What does the dodder do "at the same time" as its host?',
      why: '<p>The word "this" points back to the first sentence: the dodder flowers <b>at the same time as</b> its host. The blank needs a noun meaning "timing things to happen together." <b>Synchronization</b> means exactly that. The dodder achieves synchronization with its host by using the host\'s own flowering protein as a timing signal.</p>',
      wrong: {
        B: '<b>Hibernation</b> is a dormant winter state in animals. Nothing in the passage involves dormancy.',
        C: '<b>Prediction</b> would suggest the dodder forecasts the host\'s flowering. The passage says it absorbs the host\'s protein, not that it forecasts anything, and "achieves this prediction with its host" is not logical.',
        D: '<b>Moderation</b> means restraint or avoiding extremes, which has nothing to do with matching flowering times.'
      },
      tip: 'Demonstrative words like "this," "such," and "these" signal that the blank summarizes an idea already stated. Go back and name that idea.'
    },
    {
      n: 5, skill: 'Words in Context', domain: 'Craft and Structure',
      passage: '<p>Barring major archaeological discoveries, we are unlikely to ever have _______ account of ancient Egypt under the female pharaoh Hatshepsut, as much of the evidence of her reign was deliberately destroyed by her successors.</p>',
      prompt: 'Which choice completes the text with the most logical and precise word or phrase?',
      choices: ['an imaginative', 'a superficial', 'an exhaustive', 'a questionable'],
      answer: 'C',
      vocab: [['barring', 'except if there is; unless there is', 'prep.'], ['archaeological', 'relating to the study of past human life through objects and remains', 'adj.'], ['pharaoh', 'a ruler of ancient Egypt', 'noun'], ['reign', 'the period during which a ruler rules', 'noun'], ['successors', 'people who come after someone and take their position', 'noun'], ['superficial', 'shallow; only on the surface', 'adj.'], ['exhaustive', 'complete and thorough, covering every part', 'adj.']],
      hint: 'Much of the evidence was destroyed, so what kind of account are we <i>unlikely</i> to ever have? Think "complete."',
      why: '<p>The reason clause explains the blank: much of the evidence of Hatshepsut\'s reign "was deliberately destroyed." With pieces missing, historians cannot produce a <b>complete, thorough</b> history. <b>Exhaustive</b> means covering every detail, so "we are unlikely to ever have an exhaustive account" is the logical conclusion from missing evidence.</p>',
      wrong: {
        A: 'An <b>imaginative</b> account would be creative or invented. Lost evidence would make an imaginative account <i>more</i> likely, not less.',
        B: 'A <b>superficial</b> (shallow) account is exactly what limited evidence can still produce, so we are not "unlikely" to have one.',
        D: 'A <b>questionable</b> (doubtful) account is also something missing evidence would tend to produce, so the sentence\'s logic would be reversed.'
      },
      tip: 'Watch for the negative framing ("unlikely to ever have"). The blank must be something the obstacle <i>prevents</i>, so pick the word that describes what is lost.'
    },
    {
      n: 6, skill: 'Text Structure and Purpose', domain: 'Craft and Structure',
      passage: '<p>Jazz tap is a dance form that was first developed in African American communities. Jazz tap was heavily influenced by jazz music, which became widely popular in the United States in the 1920s. Tap dancers were inspired by jazz music\'s quick rhythms and by the way jazz musicians would make up melodies as they played. As jazz music continued to develop in the 1930s and 1940s, jazz tap evolved with it. Because of jazz music\'s influence, jazz tap quickly developed into a dance form that was very different from earlier kinds of tap dance.</p>',
      prompt: 'Which choice best states the main purpose of the text?',
      choices: ['It explains why audiences prefer some kinds of music over others.', 'It discusses the development of a dance form.', 'It describes how to play a musical instrument.', 'It emphasizes the popularity of a famous dancer.'],
      answer: 'B',
      vocab: [['influenced', 'affected or shaped', 'verb'], ['evolved', 'developed gradually over time', 'verb']],
      hint: 'Every sentence mentions jazz tap and how it came to be or changed. Which choice summarizes the whole text rather than one detail?',
      why: '<p>Each sentence tracks how <b>jazz tap</b>, a dance form, came about and changed: where it started, what influenced it, how it evolved in the 1930s and 1940s, and how it became different from earlier tap. That is a discussion of the <b>development of a dance form</b>. The passage\'s repeated verbs ("developed," "evolved," "developed into") confirm the focus.</p>',
      wrong: {
        A: 'The passage never discusses audiences or their preferences. Jazz music\'s popularity is mentioned only as background for tap\'s development.',
        C: 'No instrument or instructions for playing one appear anywhere in the text.',
        D: 'No individual dancer is named. The subject is a dance form, not a person.'
      },
      tip: 'For "main purpose" questions, the right answer must cover every sentence. If a choice only fits one detail, or introduces something never mentioned, cross it out.'
    },
    {
      n: 7, skill: 'Text Structure and Purpose', domain: 'Craft and Structure',
      passage: '<p>The north celestial pole (NCP)—the fixed point around which stars in the Northern Hemisphere (including the Sun) appear to rotate—is discernible only at night. Inspired by the navigational strategies of some insects and birds, researchers devised a method for locating the NCP in daytime using skylight polarization, which occurs as atmospheric particles scatter sunlight. A polarimetric camera captures images of polarization patterns, which rotate as the Sun\'s position in the sky changes; temporal variances across images can then be used to determine an observer\'s latitude and bearing relative to the NCP.</p>',
      prompt: 'Which choice best describes the overall structure of the text?',
      choices: [
        'It illustrates how most navigational tools utilize the NCP, recounts how researchers discovered that certain animals are able to navigate without using the NCP, and then proposes that this discovery could be used to avoid problems in navigation associated with reliance on the NCP.',
        'It presents a celestial-based method of navigation, enumerates the comparative benefits of an alternative method used by certain animals that is based on an unrelated natural occurrence, and then indicates how researchers assessed the relative accuracy of the two methods.',
        'It explains how the NCP is typically located, emphasizes a key difference between how humans and certain animals use the NCP for navigation, and then suggests an alternative way of using the NCP to improve existing navigational instruments.',
        'It notes an obstacle to observing an astronomical phenomenon, mentions a navigational ability of certain animals that inspired a solution to that obstacle, and then explains how researchers used an optical device to mimic that ability.'
      ],
      answer: 'D',
      vocab: [['celestial', 'relating to the sky or outer space', 'adj.'], ['discernible', 'able to be seen or detected', 'adj.'], ['navigational', 'relating to finding one\'s way or direction', 'adj.'], ['polarization', 'the orientation of light waves in a particular direction; sunlight scattered by air becomes polarized in patterns', 'noun'], ['polarimetric', 'measuring the polarization of light', 'adj.'], ['temporal', 'relating to time', 'adj.'], ['bearing', 'direction or position relative to a fixed point', 'noun'], ['enumerates', 'lists one by one', 'verb']],
      hint: 'Label each sentence in a few words: Sentence 1 = a problem? Sentence 2 = inspiration and a new method? Sentence 3 = how a device works? Now find the choice with that same sequence.',
      why: '<p>Map the three sentences:</p><ol><li><b>Sentence 1:</b> The NCP "is discernible only at night." That is an <b>obstacle</b> to observing an astronomical feature.</li><li><b>Sentence 2:</b> Researchers, "inspired by the navigational strategies of some insects and birds," devised a daytime method. That is an <b>animal ability that inspired a solution</b>.</li><li><b>Sentence 3:</b> A "polarimetric camera" (an <b>optical device</b>) captures polarization patterns to find the NCP, <b>mimicking</b> the animals\' strategy.</li></ol><p>Choice D states that exact sequence.</p>',
      wrong: {
        A: 'The text never says "most navigational tools" use the NCP, never says researchers <i>discovered</i> animals navigate without the NCP, and never proposes avoiding reliance on the NCP. The new method still locates the NCP.',
        B: 'The text does not list "comparative benefits" of an animal method, and it never describes researchers assessing the relative accuracy of two methods.',
        C: 'The text does not describe a difference in how humans and animals "use the NCP," and it does not say the method improves "existing navigational instruments."'
      },
      tip: 'For structure questions with long choices, check each choice part by part against each sentence. One unsupported claim anywhere makes the whole choice wrong.'
    },
    {
      n: 8, skill: 'Text Structure and Purpose', domain: 'Craft and Structure',
      passage: '<p class="intro">The following text is adapted from Zora Neale Hurston\'s 1921 short story "John Redding Goes to Sea." John is a child who lives in a town in the woods.</p><blockquote>Perhaps ten-year-old John was puzzling to the folk there in the Florida woods for he was an imaginative child and fond of day-dreams. The St. John River flowed a scarce three hundred feet from his back door. On its banks at this point grow numerous palms, luxuriant magnolias and bay trees. On the bosom of the stream float millions of delicately colored hyacinths. <u>[John Redding] loved to wander down to the water\'s edge, and, casting in dry twigs, watch them sail away down stream to Jacksonville, the sea, the wide world and [he] wanted to follow them.</u></blockquote>',
      prompt: 'Which choice best describes the function of the underlined sentence in the text as a whole?',
      choices: ['It provides an extended description of a location that John likes to visit.', 'It reveals that some residents of John\'s town are confused by his behavior.', 'It illustrates the uniqueness of John\'s imagination compared to the imaginations of other children.', 'It suggests that John longs to experience a larger life outside the Florida woods.'],
      answer: 'D',
      vocab: [['puzzling', 'confusing; hard to understand', 'adj.'], ['folk', 'people, especially ordinary people of a community', 'noun'], ['scarce', 'barely; hardly (here: "a scarce three hundred feet" means barely 300 feet)', 'adj.'], ['luxuriant', 'growing thickly and richly', 'adj.'], ['bosom', 'the surface or center of something (poetic)', 'noun'], ['hyacinths', 'flowering plants; here, water hyacinths floating on the river', 'noun'], ['casting', 'throwing', 'verb']],
      hint: 'Follow the twigs in the underlined sentence: where do they go, and what does John want to do? The last few words matter most.',
      why: '<p>In the underlined sentence John watches the twigs travel "to Jacksonville, the sea, the wide world," each place bigger and farther away than the last, and the sentence ends with "[he] wanted to follow them." The twigs stand in for John himself: he <b>longs to leave</b> and experience a larger world beyond his small town in the woods. That is the sentence\'s function in the passage (and it fits the story\'s title, "John Redding Goes to Sea").</p>',
      wrong: {
        A: 'The extended description of the setting (palms, magnolias, hyacinths) appears in the sentences <i>before</i> the underlined one. The underlined sentence focuses on John\'s wish, not on describing a place.',
        B: 'The idea that the townspeople found John puzzling appears in the <i>first</i> sentence, not the underlined one.',
        C: 'The text never compares John\'s imagination to other children\'s. It says he was imaginative, but the underlined sentence reveals what he dreams about, not how he ranks against others.'
      },
      tip: 'For function questions, ask what the underlined part adds that the rest of the passage does not. Check whether a choice actually describes a <i>different</i> sentence.'
    },
    {
      n: 9, skill: 'Text Structure and Purpose', domain: 'Craft and Structure',
      passage: '<p>Astronomers are confident that the star Betelgeuse will eventually consume all the helium in its core and explode in a supernova. They are much less confident, however, about when this will happen, since that depends on internal characteristics of Betelgeuse that are largely unknown. Astrophysicist Sarafina El-Badry Nance and colleagues recently investigated whether acoustic waves in the star could be used to determine internal stellar states but concluded that this method could not sufficiently reveal Betelgeuse\'s internal characteristics to allow its evolutionary state to be firmly fixed.</p>',
      prompt: 'Which choice best describes the function of the second sentence in the overall structure of the text?',
      choices: ['It describes a serious limitation of the method used by Nance and colleagues.', 'It presents the central finding reported by Nance and colleagues.', 'It identifies the problem that Nance and colleagues attempted to solve but did not.', 'It explains how the work of Nance and colleagues was received by others in the field.'],
      answer: 'C',
      vocab: [['supernova', 'a huge explosion of a star', 'noun'], ['acoustic', 'relating to sound', 'adj.'], ['stellar', 'relating to stars', 'adj.'], ['sufficiently', 'enough for the purpose', 'adv.'], ['evolutionary state', 'the stage a star has reached in its life cycle', 'noun', ['evolutionary state']]],
      hint: 'Sentence 2 says astronomers do not know <i>when</i> the explosion will happen because Betelgeuse\'s internal characteristics are unknown. What did Nance\'s team try to do in sentence 3, and did it work?',
      why: '<p>Sentence 2 sets up a <b>problem</b>: astronomers cannot say when Betelgeuse will explode, because that "depends on internal characteristics... that are largely unknown." Sentence 3 then describes Nance\'s team trying to reveal those internal characteristics with acoustic waves, and concluding that the method "could not sufficiently reveal" them. So sentence 2 identifies the problem the team <b>attempted to solve but did not</b>.</p>',
      wrong: {
        A: 'The limitation of the acoustic-wave method is described in sentence 3, not sentence 2. Sentence 2 does not mention Nance\'s method at all.',
        B: 'The team\'s finding (the method is insufficient) appears in sentence 3. Sentence 2 describes general uncertainty among astronomers.',
        D: 'Nothing in the passage discusses how other scientists reacted to Nance\'s work.'
      },
      tip: 'When asked about one sentence\'s role, read the sentences right before and after it. Here the sentence after it only makes sense as an attempt to answer the question sentence 2 raises.'
    },
    {
      n: 10, skill: 'Cross-Text Connections', domain: 'Craft and Structure',
      passage: '<span class="text-label">Text 1</span><p>Astronomer Mark Holland and colleagues examined four white dwarfs—small, dense remnants of past stars—in order to determine the composition of exoplanets that used to orbit those stars. Studying wavelengths of light in the white dwarf atmospheres, the team reported that traces of elements such as lithium and sodium support the presence of exoplanets with continental crusts similar to Earth\'s.</p><span class="text-label">Text 2</span><p>Past studies of white dwarf atmospheres have concluded that certain exoplanets had continental crusts. Geologist Keith Putirka and astronomer Siyi Xu argue that those studies unduly emphasize atmospheric traces of lithium and other individual elements as signifiers of the types of rock found on Earth. The studies don\'t adequately account for different minerals made up of various ratios of those elements, and the possibility of rock types not found on Earth that contain those minerals.</p>',
      prompt: 'Based on the texts, how would Putirka and Xu (Text 2) most likely characterize the conclusion presented in Text 1?',
      choices: ['As unexpected, because it was widely believed at the time that white dwarf exoplanets lack continental crusts', 'As premature, because researchers have only just begun trying to determine what kinds of crusts white dwarf exoplanets had', 'As questionable, because it rests on an incomplete consideration of potential sources of the elements detected in white dwarf atmospheres', 'As puzzling, because it\'s unusual to successfully detect lithium and sodium when analyzing wavelengths of light in white dwarf atmospheres'],
      answer: 'C',
      vocab: [['remnants', 'remaining parts of something', 'noun'], ['exoplanets', 'planets that orbit stars other than our Sun', 'noun'], ['composition', 'what something is made of', 'noun'], ['unduly', 'more than is justified; excessively', 'adv.'], ['signifiers', 'signs that indicate something', 'noun'], ['premature', 'happening too early; hasty', 'adj.']],
      hint: 'Text 2 criticizes studies that treat lithium as proof of Earth-like rock, because the same elements could come from other minerals or non-Earth rocks. Which choice captures "you ignored other possible sources"?',
      why: '<p>Text 1 concludes that lithium and sodium traces "support the presence of exoplanets with continental crusts similar to Earth\'s." Text 2 argues that such studies "unduly emphasize" lithium and other elements as signs of Earth-type rock and "don\'t adequately account" for other minerals containing those elements or for rock types not found on Earth. In other words, the detected elements could have <b>other sources</b>. Putirka and Xu would therefore see Text 1\'s conclusion as <b>questionable</b> because it rests on an incomplete consideration of where those elements might come from.</p>',
      wrong: {
        A: 'Text 2 says past studies <i>have</i> concluded that some exoplanets had crusts, so the finding is not described as surprising or against a widely held belief.',
        B: 'Text 2 does not claim the research is brand new; it refers to "past studies." Its objection is about method, not about timing.',
        D: 'Text 2 does not question whether lithium can be detected. It questions what the detected lithium means.'
      },
      tip: 'For cross-text questions, first state Text 2\'s objection in your own words (here: "those elements don\'t prove Earth-like crust"), then apply it to Text 1\'s specific claim.'
    },
    {
      n: 11, skill: 'Central Ideas and Details', domain: 'Information and Ideas',
      passage: '<p class="intro">The following text is from David Barclay Moore\'s 2022 novel <i>Holler of the Fireflies</i>. The narrator has just arrived at summer camp, which is far away from his home.</p><blockquote>This place was different than I thought it would be. I\'d never been somewhere like this before. I did feel scared, but also excited.</blockquote><p class="credit">©2022 by David Barclay Moore</p>',
      prompt: 'According to the text, how does the narrator feel about being at summer camp?',
      choices: ['He feels overjoyed.', 'He feels peaceful.', 'He feels both scared and excited.', 'He feels both angry and jealous.'],
      answer: 'C',
      vocab: [['narrator', 'the person telling the story', 'noun']],
      hint: 'The answer is stated directly in the last sentence of the excerpt.',
      why: '<p>The narrator says it directly: "I did feel <b>scared</b>, but also <b>excited</b>." Choice C restates both emotions exactly. On "according to the text" questions, the correct answer is usually a close paraphrase of a specific line.</p>',
      wrong: {
        A: '<b>Overjoyed</b> ignores the fear he mentions and exaggerates "excited" into pure delight.',
        B: '<b>Peaceful</b> contradicts "scared" and the newness he describes ("never been somewhere like this").',
        D: 'Neither anger nor jealousy is mentioned anywhere in the excerpt.'
      },
      tip: '"According to the text" means the answer is written in the passage. Find the line and match it; do not infer beyond it.'
    },
    {
      n: 12, skill: 'Central Ideas and Details', domain: 'Information and Ideas',
      passage: '<p class="intro">The following text is adapted from Oscar Wilde\'s 1891 novel <i>The Picture of Dorian Gray</i>. Dorian Gray is taking his first look at a portrait that Hallward has painted of him.</p><blockquote>Dorian passed listlessly in front of his picture and turned towards it. When he saw it he drew back, and his cheeks flushed for a moment with pleasure. A look of joy came into his eyes, as if he had recognized himself for the first time. He stood there motionless and in wonder, dimly conscious that Hallward was speaking to him, but not catching the meaning of his words. The sense of his own beauty came on him like a revelation. He had never felt it before.</blockquote>',
      prompt: 'According to the text, what is true about Dorian?',
      choices: ['He wants to know Hallward\'s opinion of the portrait.', 'He is delighted by what he sees in the portrait.', 'He prefers portraits to other types of paintings.', 'He is uncertain of Hallward\'s talent as an artist.'],
      answer: 'B',
      vocab: [['listlessly', 'without energy or interest', 'adv.'], ['flushed', 'turned red, often from emotion', 'verb'], ['motionless', 'not moving', 'adj.'], ['dimly', 'faintly; only slightly', 'adv.'], ['revelation', 'a surprising and important discovery', 'noun']],
      hint: 'Collect the emotion words describing Dorian as he looks: "flushed... with pleasure," "a look of joy," "in wonder."',
      why: '<p>The text is full of evidence of Dorian\'s delight: his cheeks "flushed for a moment with <b>pleasure</b>," "a look of <b>joy</b> came into his eyes," he stood "in <b>wonder</b>," and his own beauty came to him "like a revelation." All of this shows he is <b>delighted by what he sees</b> in the portrait.</p>',
      wrong: {
        A: 'Dorian barely notices Hallward: he is "dimly conscious that Hallward was speaking" and doesn\'t catch the meaning. He shows no interest in Hallward\'s opinion.',
        C: 'The text never compares portraits with other kinds of paintings.',
        D: 'Nothing suggests Dorian doubts Hallward\'s skill; his joyful reaction implies the opposite.'
      },
      tip: 'Collect repeated emotional language. When three or more phrases point the same way, that shared meaning is the answer.'
    },
    {
      n: 13, skill: 'Central Ideas and Details', domain: 'Information and Ideas',
      passage: '<p>Choctaw/Cherokee artist Jeffrey Gibson turns punching bags used by boxers into art by decorating them with beadwork and elements of Native dressmaking. These elements include leather fringe and jingles, the metal cones that cover the dresses worn in the jingle dance, a women\'s dance of the Ojibwe people. Thus, Gibson combines an object commonly associated with masculinity (a punching bag) with art forms traditionally practiced by women in most Native communities (beadwork and dressmaking). In this way, he rejects the division of male and female gender roles.</p>',
      prompt: 'Which choice best describes Gibson\'s approach to art, as presented in the text?',
      choices: ['He draws from traditional Native art forms to create his original works.', 'He has been influenced by Native and non-Native artists equally.', 'He finds inspiration from boxing in designing the dresses he makes.', 'He rejects expectations about color and pattern when incorporating beadwork.'],
      answer: 'A',
      vocab: [['beadwork', 'decoration made by sewing small beads onto material', 'noun'], ['fringe', 'a decorative border of hanging threads or strips', 'noun'], ['masculinity', 'qualities traditionally associated with men', 'noun'], ['gender roles', 'social expectations about how men and women should behave', 'noun', ['gender roles']]],
      hint: 'What does Gibson add to the punching bags? Look at where those decorations come from.',
      why: '<p>Gibson decorates punching bags with "beadwork and elements of Native dressmaking," such as leather fringe and the metal jingles from Ojibwe jingle-dance dresses. The text calls these "art forms traditionally practiced by women in most Native communities." So his approach is to <b>draw from traditional Native art forms</b> to create new, original works.</p>',
      wrong: {
        B: 'Non-Native artists are never mentioned, so the text cannot support an "equal" influence.',
        C: 'Gibson decorates punching bags with dressmaking elements; he does not design dresses inspired by boxing. This reverses the relationship.',
        D: 'The text says he rejects divisions between gender roles, not expectations about color or pattern.'
      },
      tip: 'Beware of choices that reuse words from the passage (boxing, dresses, beadwork, rejects) but rearrange them into a claim the passage never makes.'
    },
    {
      n: 14, skill: 'Command of Evidence (Textual)', domain: 'Information and Ideas',
      passage: '<p><i>O Pioneers!</i> is a 1913 novel by Willa Cather. In the novel, Cather portrays Alexandra Bergson as having a deep emotional connection to her natural surroundings: _______</p>',
      prompt: 'Which quotation from <i>O Pioneers!</i> most effectively illustrates the claim?',
      choices: [
        '"She had never known before how much the country meant to her. The chirping of the insects down in the long grass had been like the sweetest music. She had felt as if her heart were hiding down there, somewhere, with the quail and the plover and all the little wild things that crooned or buzzed in the sun. Under the long shaggy ridges, she felt the future stirring."',
        '"Alexandra talked to the men about their crops and to the women about their poultry. She spent a whole day with one young farmer who had been away at school, and who was experimenting with a new kind of clover hay. She learned a great deal."',
        '"Alexandra drove off alone. The rattle of her wagon was lost in the howling of the wind, but her lantern, held firmly between her feet, made a moving point of light along the highway, going deeper and deeper into the dark country."',
        '"It was Alexandra who read the papers and followed the markets, and who learned by the mistakes of their neighbors. It was Alexandra who could always tell about what it had cost to fatten each steer, and who could guess the weight of a hog before it went on the scales closer than John Bergson [her father] himself."'
      ],
      answer: 'A',
      vocab: [['plover', 'a type of shorebird', 'noun'], ['crooned', 'sang or hummed softly', 'verb'], ['shaggy', 'rough and bushy', 'adj.'], ['poultry', 'chickens, ducks, and other farm birds', 'noun']],
      hint: 'You need two things at once: <b>emotion</b> (feelings, the heart) and <b>nature</b> (the land, wild creatures). Which quotation has both?',
      why: '<p>The claim has two parts: a <b>deep emotional</b> connection, and to her <b>natural surroundings</b>. Choice A delivers both vividly: the country "meant" so much to her, the insects\' chirping was "like the sweetest music," and she felt "as if her heart were hiding down there... with the quail and the plover and all the little wild things." Her heart is literally placed in nature.</p>',
      wrong: {
        B: 'This shows Alexandra learning about farming from neighbors. It is practical and social, not an emotional bond with nature.',
        C: 'This describes her driving alone through dark, windy country. It sets a scene but reveals nothing about her feelings toward the land.',
        D: 'This shows her business sense (markets, livestock costs). It demonstrates skill, not emotional connection to nature.'
      },
      tip: 'Break the claim into its key parts and demand that the quotation prove <i>every</i> part. B, C, and D each touch the land, but only A shows feeling.'
    },
    {
      n: 15, skill: 'Command of Evidence (Textual)', domain: 'Information and Ideas',
      passage: '<p>The novelist Toni Morrison was the first Black woman to work as an editor at the publishing company Random House, from 1967 to 1983. A scholar asserts that one of Morrison\'s likely aims during her time as an editor was to strengthen the presence of Black writers on the list of Random House\'s published authors.</p>',
      prompt: 'Which finding, if true, would most strongly support the scholar\'s claim?',
      choices: ['The percentage of authors published by Random House who were Black rose in the early 1970s and stabilized throughout the decade.', 'Black authors who were interviewed in the 1980s and 1990s were highly likely to cite Toni Morrison\'s novels as a principal influence on their work.', 'The novels written by Toni Morrison that were published after 1983 sold significantly more copies and received wider critical acclaim than the novels she wrote that were published before 1983.', 'Works that were edited by Toni Morrison during her time at Random House displayed stylistic characteristics that distinguished them from works that were not edited by Morrison.'],
      answer: 'A',
      vocab: [['asserts', 'states confidently', 'verb'], ['stabilized', 'became steady; stopped changing much', 'verb'], ['principal', 'main; most important', 'adj.'], ['acclaim', 'enthusiastic praise', 'noun'], ['stylistic', 'relating to style', 'adj.']],
      hint: 'The claim is about Morrison as an <i>editor</i> (1967–1983) increasing the number of Black authors Random House published. Which finding shows that number going up during those years?',
      why: '<p>The scholar claims Morrison, <b>as an editor from 1967 to 1983</b>, aimed to strengthen "the presence of Black writers" among Random House\'s published authors. Evidence for that would show more Black authors being published by Random House during her tenure. Choice A says exactly this: the percentage of Random House authors who were Black <b>rose in the early 1970s</b> (while she was an editor) and then held steady. That outcome is consistent with her pursuing that aim.</p>',
      wrong: {
        B: 'This concerns Morrison\'s influence as a <i>novelist</i> on other writers, not her work as an editor shaping Random House\'s list.',
        C: 'Sales of her own novels after she left Random House say nothing about her editorial aims.',
        D: 'Stylistic features of works she edited say nothing about whether she increased the number of Black authors published.'
      },
      tip: 'Pin down the claim\'s exact subject (her role as editor), time frame (1967–1983), and outcome (more Black authors on the list). The right evidence matches all three.'
    },
    {
      n: 16, skill: 'Command of Evidence (Textual)', domain: 'Information and Ideas',
      passage: '<p>Archaeologist Petra Vaiglova, anthropologist Xinyi Liu, and their colleagues investigated the domestication of farm animals in China during the Bronze Age (approximately 2000 to 1000 BCE). By analyzing the chemical composition of the bones of sheep, goats, and cattle from this era, the team determined that wild plants made up the bulk of sheep\'s and goats\' diets, while the cattle\'s diet consisted largely of millet, a crop cultivated by humans. The team concluded that cattle were likely raised closer to human settlements, whereas sheep and goats were allowed to roam farther away.</p>',
      prompt: 'Which finding, if true, would most strongly support the team\'s conclusion?',
      choices: ['Analysis of the animal bones showed that the cattle\'s diet also consisted of wheat, which humans widely cultivated in China during the Bronze Age.', 'Further investigation of sheep and goat bones revealed that their diets consisted of small portions of millet as well.', 'Cattle\'s diets generally require larger amounts of food and a greater variety of nutrients than do sheep\'s and goats\' diets.', 'The diets of sheep, goats, and cattle were found to vary based on what the farmers in each Bronze Age settlement could grow.'],
      answer: 'A',
      vocab: [['domestication', 'taming animals and raising them for human use', 'noun'], ['cultivated', 'grown by people (of crops)', 'verb'], ['settlements', 'places where people live together, such as villages', 'noun'], ['bulk', 'the greatest part', 'noun']],
      hint: 'The team\'s logic: cattle ate human-grown crops → cattle lived near people. Which finding adds <i>more</i> evidence that cattle ate human-grown food?',
      why: '<p>The team reasoned that because cattle ate mostly <b>millet, a human-cultivated crop</b>, they were probably kept close to where people lived and farmed. Choice A adds that cattle also ate <b>wheat</b>, another crop humans widely cultivated. A second human-grown crop in the cattle\'s diet strengthens the link between cattle and human settlements, directly reinforcing the conclusion.</p>',
      wrong: {
        B: 'If sheep and goats also ate millet, that would blur the contrast the conclusion depends on, which slightly <i>weakens</i> rather than supports it.',
        C: 'How much food cattle need does not show where they were raised or whether they ate human-grown crops.',
        D: 'If all three animals\' diets depended on what farmers grew, that undermines the claim that sheep and goats ate mostly wild plants far from settlements.'
      },
      tip: 'Supporting evidence usually strengthens the <i>reasoning link</i> in the argument (here: human crops → near humans), not just the topic in general.'
    },
    {
      n: 17, skill: 'Command of Evidence (Quantitative)', domain: 'Information and Ideas',
      figure: '<div class="cap">Average Survival of Fruit Flies following Infection</div>' + FIG.catLine({
        cats: ['0', '2', '6', '10', '14'], ymin: 0, ymax: 110, ystep: 10, w: 340, h: 280, ml: 50, mb: 44,
        xTitle: 'Days after infection', yTitle: 'Survival rate (% alive)', alt: 'Line graph: type A flies stay near 90 to 100 percent survival; type AB and type B flies drop to near zero by day 14',
        series: [
          { vals: [100, 99, 96, 92, 90], cls: 's-a', marker: 'tri' },
          { vals: [100, 99, 46, 12, 0], cls: 's-ab', marker: 'sq' },
          { vals: [100, 96, 41, 4, 0], cls: 's-b', marker: 'circ' }
        ]
      }) + '<div style="margin-top:6px">' + FIG.legend([{ label: 'type A flies', cls: 's-a', marker: 'tri' }, { label: 'type AB flies', cls: 's-ab', marker: 'sq' }, { label: 'type B flies', cls: 's-b', marker: 'circ' }]) + '</div>',
      passage: '<p>In a study of the evolution of <i>DptA</i> and <i>DptB</i>—<i>Diptericin</i> genes encoding antimicrobial peptides that combat pathogens and foster beneficial microbes in fruit flies (<i>Drosophila</i>)—researchers assessed <i>Drosophila melanogaster</i> resistance to pathogenic infections by <i>Providencia rettgeri</i> and <i>Acetobacter sicerae</i>, bacteria common in the flies\' environments. Subjects included flies identified by mutations silencing <i>DptA</i>, <i>DptB</i>, or both <i>DptA</i> and <i>DptB</i> (termed types A, B, and AB, respectively). In conjunction with the observation that resistance to <i>P. rettgeri</i> correlates with <i>DptA</i> activity but is not significantly affected by <i>DptB</i> activity, data in the graph of survival rates post–<i>A. sicerae</i> infection suggest that _______</p>',
      prompt: 'Which completion of the text is best supported by data in the graph?',
      choices: ['<i>DptA</i> confers defense against <i>A. sicerae</i> regardless of the presence of <i>DptB</i>.', '<i>DptB</i> protects against only one bacteria species, whereas <i>DptA</i> protects against multiple species.', '<i>DptB</i> may have developed as a specific defense against <i>A. sicerae</i>.', 'defense against <i>A. sicerae</i> is strongest when both <i>DptA</i> and <i>DptB</i> are present.'],
      answer: 'C',
      vocab: [['antimicrobial', 'destroying or stopping the growth of microorganisms like bacteria', 'adj.'], ['peptides', 'short chains of amino acids (small proteins)', 'noun'], ['pathogens', 'microorganisms that cause disease', 'noun', ['pathogens', 'pathogenic']], ['silencing', 'switching off a gene so it no longer works', 'verb'], ['correlates', 'has a relationship in which one thing changes along with another', 'verb'], ['confers', 'gives or grants', 'verb']],
      hint: 'Careful with the labels: type A means <i>DptA is silenced</i> (so only DptB works). Which flies survived <i>A. sicerae</i>? Which gene did they still have?',
      why: '<p>Decode the fly types first (this is the trap). The type name tells you which gene is <b>silenced</b>:</p><ul><li><b>Type A</b>: DptA off, <b>DptB still working</b> → about 90% survived by day 14.</li><li><b>Type B</b>: DptB off, DptA still working → about 0% survived.</li><li><b>Type AB</b>: both off → about 0% survived.</li></ul><p>Flies survived <i>A. sicerae</i> only when <b>DptB</b> was active. Having DptA alone (type B) did not help at all. Meanwhile, the passage says resistance to the other bacterium, <i>P. rettgeri</i>, depends on DptA, not DptB. So each gene defends against a different bacterium, and DptB appears to be a <b>specific defense against <i>A. sicerae</i></b>. That makes C the best-supported completion.</p>',
      wrong: {
        A: 'Type B flies still had working DptA, yet almost all died. DptA did <i>not</i> protect against <i>A. sicerae</i>.',
        B: 'This reverses the evidence. The data show DptA offers no protection against <i>A. sicerae</i>, so there is no support for DptA protecting against "multiple species."',
        D: 'No flies in the graph had both genes active, so the data cannot show what happens when both are present. Type A flies (DptB only) already survived at about 90%.'
      },
      tip: 'In data questions, translate every label before reading the graph. Here "type A" meant "A is silenced," which flips the meaning if you skim.'
    },
    {
      n: 18, skill: 'Inferences', domain: 'Information and Ideas',
      passage: '<p><i>Euphorbia esula</i> (leafy spurge) is a Eurasian plant that has become invasive in North America, where it displaces native vegetation and sickens cattle. <i>E. esula</i> can be controlled with chemical herbicides, but that approach can also kill harmless plants nearby. Recent research on introducing engineered DNA into plant species to inhibit their reproduction may offer a path toward exclusively targeting <i>E. esula</i>, consequently _______</p>',
      prompt: 'Which choice most logically completes the text?',
      choices: ['making individual <i>E. esula</i> plants more susceptible to existing chemical herbicides.', 'enhancing the ecological benefits of <i>E. esula</i> in North America.', 'enabling cattle to consume <i>E. esula</i> without becoming sick.', 'reducing invasive <i>E. esula</i> numbers without harming other organisms.'],
      answer: 'D',
      vocab: [['invasive', 'spreading harmfully into a new area where it is not native', 'adj.'], ['displaces', 'pushes out and takes the place of', 'verb'], ['herbicides', 'chemicals used to kill plants', 'noun'], ['inhibit', 'hold back; prevent', 'verb'], ['exclusively', 'only; excluding everything else', 'adv.'], ['susceptible', 'likely to be affected or harmed by something', 'adj.']],
      hint: 'What was the problem with herbicides? What does "exclusively targeting" solve? Combine those with "inhibit their reproduction."',
      why: '<p>Follow the logic: herbicides work but "can also kill harmless plants nearby." The new DNA technique would <b>inhibit reproduction</b> and target <b>only</b> <i>E. esula</i>. Stopping reproduction lowers the plant\'s numbers, and targeting it exclusively avoids the collateral damage herbicides cause. The logical consequence is <b>reducing <i>E. esula</i> numbers without harming other organisms</b>.</p>',
      wrong: {
        A: 'The new approach is presented as an alternative to herbicides, not a way to make herbicides work better.',
        B: 'The plant is invasive and harmful; the research aims to control it, not to increase its "benefits."',
        C: 'Inhibiting reproduction reduces the plant population; it does nothing to make the plant safe for cattle to eat.'
      },
      tip: 'Completion questions often combine the problem (harms nearby plants) with the solution\'s feature (exclusive targeting). The answer is the problem solved.'
    },
    {
      n: 19, skill: 'Inferences', domain: 'Information and Ideas',
      passage: '<p>A team of biologists led by Jae-Hoon Jung, Antonio D. Barbosa, and Stephanie Hutin investigated the mechanism that allows <i>Arabidopsis thaliana</i> (thale cress) plants to accelerate flowering at high temperatures. They replaced the protein ELF3 in the plants with a similar protein found in another species (stiff brome) that, unlike <i>A. thaliana</i>, displays no acceleration in flowering with increased temperature. A comparison of unmodified <i>A. thaliana</i> plants with the altered plants showed no difference in flowering at 22° Celsius, but at 27° Celsius, the unmodified plants exhibited accelerated flowering while the altered ones did not, which suggests that _______</p>',
      prompt: 'Which choice most logically completes the text?',
      choices: ['temperature-sensitive accelerated flowering is unique to <i>A. thaliana</i>.', '<i>A. thaliana</i> increases ELF3 production as temperatures rise.', 'ELF3 enables <i>A. thaliana</i> to respond to increased temperatures.', 'temperatures of at least 22° Celsius are required for <i>A. thaliana</i> to flower.'],
      answer: 'C',
      vocab: [['mechanism', 'the process by which something works', 'noun'], ['accelerate', 'speed up', 'verb'], ['unmodified', 'not changed; in the original form', 'adj.'], ['exhibited', 'showed', 'verb']],
      hint: 'This is a controlled experiment: the only difference between the two plant groups is the ELF3 protein. What does that one change cause at 27°C?',
      why: '<p>The two groups of plants differ in only one way: the altered plants lack their own <b>ELF3</b> (it was swapped for stiff brome\'s version). At 27°C, plants <b>with</b> their ELF3 flowered faster; plants <b>without</b> it did not. Since removing ELF3 removed the temperature response, ELF3 must be what <b>enables <i>A. thaliana</i> to respond to increased temperatures</b>.</p>',
      wrong: {
        A: 'The experiment compares A. thaliana with one other species. It cannot show that no other plant anywhere accelerates flowering with heat.',
        B: 'The study replaced ELF3; it never measured how much ELF3 the plant produces at different temperatures.',
        D: 'Both groups flowered at 22°C. Nothing tested lower temperatures, so no minimum temperature is shown.'
      },
      tip: 'In experiment passages, identify the single variable that was changed. The conclusion is almost always "that variable causes the difference observed."'
    },
    {
      n: 20, skill: 'Boundaries', domain: 'Standard English Conventions',
      passage: '<p>The Alvarez theory, developed in 1980 by physicist Luis Walter Alvarez and his geologist son Walter Alvarez, maintained that the secondary effects of an asteroid impact caused many dinosaurs and other animals to die _______ it left unexplored the question of whether unrelated volcanic activity might have also contributed to the mass extinctions.</p>',
      prompt: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices: ['out but', 'out, but', 'out', 'out,'],
      answer: 'B',
      vocab: [['secondary effects', 'results that follow from a main event rather than being caused directly by it', 'noun', ['secondary effects']], ['extinctions', 'the dying out of entire species', 'noun']],
      hint: 'Both halves could stand alone as sentences ("The Alvarez theory maintained..." / "it left unexplored..."). How do you join two independent clauses?',
      why: '<p>The sentence contains two <b>independent clauses</b>:</p><ul><li>"The Alvarez theory... maintained that the secondary effects... caused many dinosaurs and other animals to die out"</li><li>"it left unexplored the question..."</li></ul><p>Two independent clauses joined by a coordinating conjunction (FANBOYS: for, and, nor, <b>but</b>, or, yet, so) need a <b>comma before the conjunction</b>. "out, but" is the correct punctuation.</p>',
      wrong: {
        A: 'Missing the comma before "but" when joining two long independent clauses is a standard punctuation error.',
        C: 'No punctuation or conjunction creates a <b>run-on sentence</b> (fused sentence).',
        D: 'A comma alone between two independent clauses creates a <b>comma splice</b>.'
      },
      tip: 'Independent clause + independent clause = ", FANBOYS" or ";" or "." A lone comma is never enough.'
    },
    {
      n: 21, skill: 'Boundaries', domain: 'Standard English Conventions',
      passage: '<p>Typically, underlines, scribbles, and notes left in the margins by a former owner lower a book\'s _______ when the former owner is a famous poet like Walt Whitman, such markings, known as marginalia, can be a gold mine to literary scholars.</p>',
      prompt: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices: ['value, but', 'value', 'value,', 'value but'],
      answer: 'A',
      vocab: [['marginalia', 'notes written in the margins of a book', 'noun'], ['literary', 'relating to literature', 'adj.'], ['gold mine', 'a rich source of something valuable', 'noun', ['gold mine']]],
      hint: 'Is "when the former owner is a famous poet... such markings... can be a gold mine" its own complete idea? Then you are joining two independent clauses.',
      why: '<p>The first clause, "Typically, underlines... lower a book\'s value," is independent. The second, "when the former owner is a famous poet..., such markings... can be a gold mine to literary scholars," is also independent (its core is "such markings can be a gold mine"; the "when" clause is an introductory dependent clause attached to it). The two contrast with each other, so the correct join is <b>comma + "but"</b>: "value, but when the former owner..."</p>',
      wrong: {
        B: 'No punctuation and no conjunction fuses two independent clauses together (a run-on).',
        C: 'A comma alone between two independent clauses is a comma splice.',
        D: 'Standard convention places a comma before a coordinating conjunction joining two independent clauses, especially ones this long.'
      },
      tip: 'An introductory "when..." clause does not stop the main clause after it from being independent. Find the subject and verb ("such markings can be") to check.'
    },
    {
      n: 22, skill: 'Form, Structure, and Sense', domain: 'Standard English Conventions',
      passage: '<p>In winter, the diets of Japanese macaques, also known as snow monkeys, are influenced more by food availability than by food preference. Although the monkeys prefer to eat vegetation and land-dwelling invertebrates, those food sources may become unavailable because of extensive snow and ice cover, _______ the monkeys to hunt for marine animals in any streams that have not frozen over.</p>',
      prompt: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices: ['forces', 'to force', 'forcing', 'forced'],
      answer: 'C',
      vocab: [['macaques', 'a type of monkey found mainly in Asia', 'noun'], ['invertebrates', 'animals without a backbone, such as insects and worms', 'noun'], ['extensive', 'covering a large area', 'adj.'], ['marine', 'relating to the sea or water', 'adj.']],
      hint: 'The main clause already has its verb ("those food sources may become unavailable"). The blank starts a phrase describing the result. Which verb form can do that without being a second main verb?',
      why: '<p>The sentence already has a complete main clause: "those food sources may become unavailable because of extensive snow and ice cover." After the comma, the blank begins a phrase that explains the <b>result</b> of that situation. A <b>participial phrase</b> (an -ing verb form) is the standard way to attach such a result: "..., <b>forcing</b> the monkeys to hunt for marine animals." It modifies the whole preceding clause without creating a second independent clause.</p>',
      wrong: {
        A: '"forces" is a finite verb with no subject of its own. After a comma, it would create an ungrammatical structure (it cannot attach to "snow and ice cover" as a verb here).',
        B: '"to force" suggests purpose ("in order to force"), as if the snow intended to push the monkeys, which is illogical.',
        D: '"forced" would read as a past-tense verb lacking a subject, or as a past participle meaning the snow cover itself was forced. Neither fits.'
      },
      tip: 'When a main clause is complete and a comma is followed by a verb that describes a consequence, the -ing form ("forcing," "causing," "resulting") is usually right.'
    },
    {
      n: 23, skill: 'Boundaries', domain: 'Standard English Conventions',
      passage: '<p>While many video game creators strive to make their graphics ever more _______ others look to the past, developing titles with visuals inspired by the "8-bit" games of the 1980s and 1990s. (The term "8-bit" refers to a console whose processor could only handle eight bits of data at once.)</p>',
      prompt: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices: ['lifelike but', 'lifelike', 'lifelike,', 'lifelike, but'],
      answer: 'C',
      vocab: [['strive', 'try very hard', 'verb'], ['lifelike', 'looking like real life; realistic', 'adj.'], ['processor', 'the part of a computer that carries out instructions', 'noun']],
      hint: 'The sentence starts with "While," which makes the first part a dependent clause. How do you connect an introductory dependent clause to the main clause?',
      why: '<p>"While many video game creators strive to make their graphics ever more lifelike" is a <b>dependent (subordinate) clause</b> because it begins with "While." The main clause is "others look to the past." When a dependent clause comes first, it is followed by a <b>comma</b> and then the main clause, with no conjunction needed. So: "lifelike, others look to the past."</p>',
      wrong: {
        A: 'Adding "but" after a clause already starting with "While" double-links the ideas ("While X but Y"), which is ungrammatical.',
        B: 'Without a comma, the introductory clause runs into the main clause, making it unclear where one ends ("lifelike others").',
        D: '"While..., but..." uses two connecting words for one relationship. The subordinating "while" already does the job.'
      },
      tip: 'Subordinating words (while, although, because, when) plus a coordinating conjunction (but, and, so) in the same sentence is almost always an error.'
    },
    {
      n: 24, skill: 'Form, Structure, and Sense', domain: 'Standard English Conventions',
      passage: '<p>Food and the sensation of taste are central to Monique Truong\'s novels. In <i>The Book of Salt</i>, for example, the exiled character of Bình connects to his native Saigon through the food he prepares, while in <i>Bitter in the Mouth</i>, the character of Linda _______ a form of synesthesia whereby the words she hears evoke tastes.</p>',
      prompt: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices: ['experienced', 'had experienced', 'experiences', 'will be experiencing'],
      answer: 'C',
      vocab: [['exiled', 'forced to live away from one\'s native country', 'adj.'], ['synesthesia', 'a condition in which one sense triggers another (e.g., hearing a word and tasting something)', 'noun'], ['evoke', 'bring to mind; call up', 'verb']],
      hint: 'Check the tense of the parallel verb in the same sentence: "Bình <b>connects</b> to his native Saigon..."',
      why: '<p>The sentence describes what characters do in novels. The first half uses the present tense: "Bình <b>connects</b>... through the food he <b>prepares</b>." Writing about literature uses the <b>literary present</b>, and the two halves joined by "while" should be parallel. So Linda <b>experiences</b> synesthesia (and "the words she <b>hears</b>" confirms present tense).</p>',
      wrong: {
        A: 'Past tense breaks the parallel with "connects" and "hears."',
        B: 'Past perfect implies an action completed before another past event; no such past event exists here.',
        D: 'Future progressive makes no sense for describing what happens in an existing novel.'
      },
      tip: 'Tense questions: look for other verbs in the same sentence or paragraph. Match them unless the text signals a change in time.'
    },
    {
      n: 25, skill: 'Boundaries', domain: 'Standard English Conventions',
      passage: '<p>Along with carbon dioxide concentration and temperature, light intensity affects the chemical reaction rate of _______ as light intensity increases, so does the rate at which the reactants (water and carbon dioxide) are converted into their products (glucose and oxygen).</p>',
      prompt: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices: ['photosynthesis and', 'photosynthesis,', 'photosynthesis:', 'photosynthesis'],
      answer: 'C',
      vocab: [['intensity', 'strength or amount', 'noun'], ['photosynthesis', 'the process plants use to turn light, water, and carbon dioxide into glucose and oxygen', 'noun'], ['reactants', 'substances that take part in a chemical reaction', 'noun']],
      hint: 'The second part explains <i>how</i> light intensity affects the reaction rate. Which punctuation mark introduces an explanation of what came before?',
      why: '<p>The first clause, "light intensity affects the chemical reaction rate of photosynthesis," is independent. The second, "as light intensity increases, so does the rate...," is also independent and <b>explains or elaborates</b> exactly how light intensity affects that rate. A <b>colon</b> joins two independent clauses when the second explains the first, so "photosynthesis:" is correct.</p>',
      wrong: {
        A: '"and" without a comma fuses two independent clauses and also muddies the logic: the second clause explains the first rather than adding a separate point.',
        B: 'A comma alone between two independent clauses is a comma splice.',
        D: 'No punctuation creates a run-on sentence.'
      },
      tip: 'A colon works after a complete sentence when what follows explains, defines, or lists. Test: can you replace it with "namely" or "that is"?'
    },
    {
      n: 26, skill: 'Form, Structure, and Sense', domain: 'Standard English Conventions',
      passage: '<p>In Marisol\'s 1968 sculpture <i>Mi Mama y Yo</i>, gone are the types of pop culture references that made the Parisian-born Venezuelan American artist a star at the height of the pop art movement. In _______ place is a far more personal subject: a sculptural depiction of the artist as a young girl with her mother.</p>',
      prompt: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices: ['its', 'they\'re', 'their', 'it\'s'],
      answer: 'C',
      vocab: [['depiction', 'a representation or portrayal', 'noun'], ['pop art', 'an art movement (1950s–60s) using images from popular culture, like ads and comics', 'noun', ['pop art']]],
      hint: 'Whose place is being taken? The personal subject takes the place of the "pop culture references" (plural). You need a plural possessive.',
      why: '<p>The personal subject replaces the "<b>pop culture references</b>" mentioned in the previous sentence. The blank must be a <b>possessive</b> pronoun ("In ___ place" = in the place of something) that agrees with that <b>plural</b> antecedent. The plural possessive is <b>their</b>: "In their place is a far more personal subject."</p>',
      wrong: {
        A: '"its" is possessive but singular. The antecedent, "references," is plural.',
        B: '"they\'re" means "they are": "In they are place" is nonsense.',
        D: '"it\'s" means "it is," and it is also singular.'
      },
      tip: 'For pronoun blanks, find the noun the pronoun replaces (antecedent) and check number. Then check possessive vs. contraction: its/it\'s, their/they\'re.'
    },
    {
      n: 27, skill: 'Form, Structure, and Sense', domain: 'Standard English Conventions',
      passage: '<p>The ghazal, a poetic form originating in seventh-century Arabic poetry, has an intricate structure. The twentieth-century Kashmiri American poet Agha Shahid Ali explains that each one of a ghazal\'s couplets, while adhering to the patterns of rhyme (qafia) and refrain (radif) established in the poem\'s opening lines (matla), _______ thematically and logically autonomous, resulting in a poem with "a stringently formal disunity."</p>',
      prompt: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices: ['is', 'were', 'have been', 'are'],
      answer: 'A',
      vocab: [['intricate', 'very detailed and complicated', 'adj.'], ['couplets', 'pairs of lines of poetry', 'noun'], ['adhering', 'sticking to; following', 'verb'], ['refrain', 'a line or phrase repeated in a poem or song', 'noun'], ['autonomous', 'independent; self-governing', 'adj.'], ['stringently', 'strictly', 'adv.'], ['thematically', 'in terms of theme or subject', 'adv.']],
      hint: 'Strip away the interrupting phrases. What is the true subject: "each one" or "couplets"?',
      why: '<p>Remove the material between the subject and verb: "each <b>one</b> of a ghazal\'s couplets, <s>while adhering to the patterns...</s>, ___ thematically and logically autonomous." The subject is "<b>each one</b>," which is singular ("of a ghazal\'s couplets" is just a prepositional phrase). A singular subject takes a singular verb, and the surrounding text ("explains," "has") is in the present tense. So the answer is <b>is</b>.</p>',
      wrong: {
        B: '"were" is plural (and past tense). It agrees with "couplets," which is not the subject.',
        C: '"have been" is plural, again wrongly agreeing with "couplets."',
        D: '"are" is plural. "Each one" always takes a singular verb.'
      },
      tip: '"Each," "every," "one of," and "either" are singular subjects. Cross out prepositional phrases ("of the couplets") and interrupters to find the real subject.'
    },
    {
      n: 28, skill: 'Transitions', domain: 'Expression of Ideas',
      passage: '<p>Organisms have evolved a number of surprising adaptations to ensure their survival in adverse conditions. Tadpole shrimp (<i>Triops longicaudatus</i>) embryos, _______ can pause development for over ten years during extended periods of drought.</p>',
      prompt: 'Which choice completes the text with the most logical transition?',
      choices: ['in contrast,', 'for example,', 'meanwhile,', 'consequently,'],
      answer: 'B',
      vocab: [['adaptations', 'features that help an organism survive in its environment', 'noun'], ['adverse', 'harmful; unfavorable', 'adj.'], ['embryos', 'organisms at a very early stage of development', 'noun'], ['drought', 'a long period with little or no rain', 'noun']],
      hint: 'Sentence 1 makes a general claim ("surprising adaptations"); sentence 2 gives one specific organism. What\'s that relationship called?',
      why: '<p>Sentence 1 states a general idea: organisms have "surprising adaptations" for surviving "adverse conditions." Sentence 2 describes one specific case: tadpole shrimp embryos that can pause development for over a decade during drought. A specific case of a general statement is an <b>example</b>, so "<b>for example</b>" is the logical transition.</p>',
      wrong: {
        A: '"in contrast" signals an opposing idea, but the shrimp illustrate the claim rather than oppose it.',
        C: '"meanwhile" signals something happening at the same time, or a shift to a separate topic. Neither applies.',
        D: '"consequently" signals a result. The shrimp\'s ability is not caused by the general statement in sentence 1.'
      },
      tip: 'For transitions, name the relationship between the two sentences in plain words (example? contrast? cause? sequence?) before looking at the choices.'
    },
    {
      n: 29, skill: 'Transitions', domain: 'Expression of Ideas',
      passage: '<p>When Chinese director Chloé Zhao accepted the Oscar in 2021 for her film <i>Nomadland</i>, she made Academy Award history. _______ only one other woman, Kathryn Bigelow of the United States, had been named best director at the Oscars, making Zhao the second woman and the first Asian woman to win the award.</p>',
      prompt: 'Which choice completes the text with the most logical transition?',
      choices: ['As a result,', 'Previously,', 'However,', 'Likewise,'],
      answer: 'B',
      vocab: [['director', 'the person who guides the making of a film', 'noun']],
      hint: 'Notice the verb tense "<b>had been</b> named." That points to a time <i>before</i> Zhao\'s win.',
      why: '<p>The second sentence describes what had happened <b>before</b> Zhao\'s 2021 win: only one woman, Kathryn Bigelow, "had been named" best director. The past perfect "had been" signals an earlier time, and "<b>Previously</b>" tells the reader we are looking back to the history before Zhao\'s award. This sets up why her win was historic.</p>',
      wrong: {
        A: 'Bigelow\'s earlier win was not a result of Zhao\'s win; the causality runs backward.',
        C: '"However" signals contrast, but the sentence supports rather than contradicts the claim that Zhao made history.',
        D: '"Likewise" signals similarity to the previous point, but the sentence gives background, not a parallel example.'
      },
      tip: 'Verb tense is a strong clue for time transitions. "Had been" points to an earlier time than the surrounding events.'
    },
    {
      n: 30, skill: 'Transitions', domain: 'Expression of Ideas',
      passage: '<p>If the formation of Earth\'s mantle had been purely a product of core differentiation—whereby heavier elements sink toward the core and lighter elements rise—the upper mantle would be depleted of heavy siderophile elements. Siderophiles are much more abundant in the mantle than predicted in that model, however. _______ extraterrestrial material containing siderophiles, likely from asteroid or comet impacts, almost certainly accreted to Earth following core differentiation.</p>',
      prompt: 'Which choice completes the text with the most logical transition?',
      choices: ['That said,', 'Hence,', 'For example,', 'Likewise,'],
      answer: 'B',
      vocab: [['mantle', 'the thick layer of Earth between the crust and the core', 'noun'], ['differentiation', 'the separation of material into layers by density', 'noun'], ['depleted', 'used up or greatly reduced', 'adj.'], ['siderophile', 'iron-loving; describes elements that tend to bond with iron', 'adj.', ['siderophile', 'siderophiles']], ['abundant', 'plentiful; existing in large amounts', 'adj.'], ['extraterrestrial', 'from outside Earth', 'adj.'], ['accreted', 'gradually added by accumulation', 'verb']],
      hint: 'Sentence 2 gives a surprising observation (too many siderophiles). Sentence 3 gives an explanation that follows from it. Which transition signals a logical conclusion?',
      why: '<p>The reasoning runs: (1) core differentiation alone would leave the upper mantle <i>low</i> in siderophiles; (2) but the mantle actually has <i>more</i> siderophiles than that model predicts; (3) <b>therefore</b>, extra siderophiles must have been added from space after core differentiation. Sentence 3 is a <b>conclusion drawn from</b> the evidence in sentences 1 and 2. "<b>Hence</b>" means "therefore" or "for this reason," which fits exactly.</p>',
      wrong: {
        A: '"That said" introduces a qualification or counterpoint. Sentence 3 does not qualify sentence 2; it explains it.',
        C: '"For example" would present sentence 3 as an instance of sentence 2, but it is an inference, not an example.',
        D: '"Likewise" signals a similar, parallel point. Sentence 3 is a consequence, not a parallel.'
      },
      tip: 'When one sentence presents evidence and the next presents what must be true because of it, look for cause/conclusion transitions: hence, thus, therefore, consequently.'
    },
    {
      n: 31, skill: 'Rhetorical Synthesis', domain: 'Expression of Ideas',
      passage: '<p class="intro">While researching a topic, a student has taken the following notes:</p><ul class="notes"><li>In 2013, archaeologists studied cat bone fragments they had found in the ruins of Quanhucun, a Chinese farming village.</li><li>The fragments were estimated to be 5,300 years old.</li><li>A chemical analysis of the fragments revealed that the cats had consumed large amounts of grain.</li><li>The grain consumption is evidence that the Quanhucun cats may have been domesticated.</li></ul>',
      prompt: 'The student wants to present the Quanhucun study and its conclusions. Which choice most effectively uses relevant information from the notes to accomplish this goal?',
      choices: ['As part of a 2013 study of cat domestication, a chemical analysis was conducted on cat bone fragments found in Quanhucun, China.', 'A 2013 analysis of cat bone fragments found in Quanhucun, China, suggests that cats there may have been domesticated 5,300 years ago.', 'In 2013, archaeologists studied what cats in Quanhucun, China, had eaten more than 5,000 years ago.', 'Cat bone fragments estimated to be 5,300 years old were found in Quanhucun, China, in 2013.'],
      answer: 'B',
      vocab: [['fragments', 'small broken pieces', 'noun'], ['domesticated', 'tamed and kept by humans', 'adj.']],
      hint: 'The goal has two parts: the <b>study</b> and its <b>conclusions</b>. Which choice actually states what the study concluded?',
      why: '<p>The goal is to present both the study <b>and its conclusions</b>. The conclusion in the notes is that the cats "may have been domesticated." Choice B names the study (2013 analysis of bone fragments in Quanhucun) <b>and</b> states its conclusion (cats there may have been domesticated 5,300 years ago). It is the only choice that includes the conclusion.</p>',
      wrong: {
        A: 'Describes the study but never says what it found.',
        C: 'Mentions what was studied (diet) but not the conclusion about domestication.',
        D: 'Reports when and where fragments were found but gives no conclusion at all.'
      },
      tip: 'Rhetorical synthesis questions are about the stated goal, not about accuracy alone. All four choices are true; only one accomplishes the goal.'
    },
    {
      n: 32, skill: 'Rhetorical Synthesis', domain: 'Expression of Ideas',
      passage: '<p class="intro">While researching a topic, a student has taken the following notes:</p><ul class="notes"><li>Gaspar Enriquez is an artist.</li><li>He specializes in portraits of Mexican Americans.</li><li>A portrait is an artistic representation of a person.</li><li>Enriquez completed a painting of the sculptor Luis Jiménez in 2003.</li><li>He completed a drawing of the writer Rudolfo Anaya in 2016.</li></ul>',
      prompt: 'The student wants to emphasize a difference between the two portraits. Which choice most effectively uses relevant information from the notes to accomplish this goal?',
      choices: ['The portraits, or artistic representations, of Luis Jiménez and Rudolfo Anaya were both completed by Enriquez in the early 2000s.', 'Enriquez has completed portraits of numerous Mexican Americans, including sculptor Luis Jiménez and writer Rudolfo Anaya.', 'While both are by Enriquez, the 2003 portrait of Luis Jiménez is a painting, and the 2016 portrait of Rudolfo Anaya is a drawing.', 'Luis Jiménez was a Mexican American sculptor, and Rudolfo Anaya was a Mexican American writer.'],
      answer: 'C',
      vocab: [['portraits', 'artistic representations of people', 'noun']],
      hint: 'The goal is a difference between the two <i>portraits</i> (not the two people). What is different about the artworks themselves?',
      why: '<p>The two portraits differ in <b>medium</b> (painting vs. drawing) and <b>date</b> (2003 vs. 2016). Choice C highlights both differences between the portraits, using the contrast signal "While both are by Enriquez..." to set up the difference. It directly accomplishes the goal.</p>',
      wrong: {
        A: 'This emphasizes a similarity ("both") and is also inaccurate: 2016 is not "the early 2000s."',
        B: 'This groups the portraits together as examples; it shows no difference between them.',
        D: 'This contrasts the <i>subjects</i> (a sculptor vs. a writer), not the portraits themselves.'
      },
      tip: 'Read the goal\'s exact noun. "Difference between the two portraits" is not the same as "difference between the two people."'
    },
    {
      n: 33, skill: 'Rhetorical Synthesis', domain: 'Expression of Ideas',
      passage: '<p class="intro">While researching a topic, a student has taken the following notes:</p><ul class="notes"><li>The Gullah are a group of African Americans who have lived in parts of the southeastern United States since the 18th century.</li><li>Gullah culture is influenced by West African and Central African traditions.</li><li>Louise Miller Cohen is a Gullah historian, storyteller, and preservationist.</li><li>She founded the Gullah Museum of Hilton Head Island, South Carolina, in 2003.</li><li>Vermelle Rodrigues is a Gullah historian, artist, and preservationist.</li><li>She founded the Gullah Museum of Georgetown, South Carolina, in 2003.</li></ul>',
      prompt: 'The student wants to emphasize the duration and purpose of Cohen\'s and Rodrigues\'s work. Which choice most effectively uses relevant information from the notes to accomplish this goal?',
      choices: ['At the Gullah Museums in Hilton Head Island and Georgetown, South Carolina, visitors can learn more about the Gullah people who have lived in the region for centuries.', 'Louise Miller Cohen and Vermelle Rodrigues have worked to preserve the culture of the Gullah people, who have lived in the United States since the 18th century.', 'Since 2003, Louise Miller Cohen and Vermelle Rodrigues have worked to preserve Gullah culture through their museums.', 'Influenced by the traditions of West and Central Africa, Gullah culture developed in parts of the southeastern United States in the 18th century.'],
      answer: 'C',
      vocab: [['preservationist', 'a person who works to protect and keep something (like culture or history) from being lost', 'noun'], ['duration', 'how long something lasts', 'noun']],
      hint: 'Duration = how long <i>their work</i> has gone on (not how long the Gullah have lived there). Purpose = why they do it.',
      why: '<p>The goal names two things about <b>Cohen\'s and Rodrigues\'s work</b>: its <b>duration</b> (how long) and its <b>purpose</b> (why). Both founded their museums in 2003, and both are preservationists. Choice C gives the duration ("<b>Since 2003</b>") and the purpose ("to <b>preserve Gullah culture</b>"), and it names both women.</p>',
      wrong: {
        A: 'Does not mention Cohen or Rodrigues, and "for centuries" refers to how long the Gullah have lived in the region, not to the women\'s work.',
        B: 'Gives the purpose, but "since the 18th century" describes the Gullah people, not the duration of the women\'s work.',
        D: 'Describes the origins of Gullah culture and never mentions Cohen, Rodrigues, or their work.'
      },
      tip: 'Watch for choices that include a time phrase attached to the wrong subject. B has a date, but it measures the wrong thing.'
    }
  ]
});
