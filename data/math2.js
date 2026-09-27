/* Math — Module 2 (27 questions). Same schema as math1.js. */
(function () {
  const F = (a, b) => '<span class="frac"><span>' + a + '</span><span>' + b + '</span></span>';
  const R = a => '<span class="sqrt">√<span>' + a + '</span></span>';
  const eq = s => '<span class="eq">' + s + '</span>';
  const calc = s => '<span class="calc">' + s + '</span>';
  const tbl = (head, rows) => '<table class="data"><tr>' + head.map(h => '<th><i>' + h + '</i></th>').join('') + '</tr>' + rows.map(r => '<tr>' + r.map(c => '<td>' + c + '</td>').join('') + '</tr>').join('') + '</table>';

  window.SAT = window.SAT || { modules: [] };
  SAT.modules.push({
    id: 'math2',
    section: 'math',
    short: 'Math · Module 2',
    minutes: 43,
    directions: '<p>The questions in this section address a number of important math skills. Use of a calculator is permitted for all questions.</p><p>Unless otherwise indicated: all variables and expressions represent real numbers; figures provided are drawn to scale; all figures lie in a plane; the domain of a given function <i>f</i> is the set of all real numbers <i>x</i> for which <i>f</i>(<i>x</i>) is a real number.</p><p style="margin:0">For multiple-choice questions, select the best answer. For student-produced response questions, type your answer in the box (fractions or decimals are accepted).</p>',
    questions: [
      {
        n: 1, skill: 'Units and rates', domain: 'Problem-Solving and Data Analysis',
        prompt: 'An object\'s speed is 64 yards per second. What is the object\'s speed, in <u>feet</u> per second? (1 yard = 3 feet)',
        choices: ['61', '67', '94', '192'],
        answer: 'D',
        vocab: [['conversion', 'changing a measurement from one unit to another', 'noun']],
        hint: 'Each yard is 3 feet. Should the number of feet be bigger or smaller than the number of yards?',
        why: '<p>Each yard contains 3 feet, so the speed in feet is 3 times the speed in yards: 64 × 3 = <b>192</b> feet per second.</p>',
        steps: [calc('64 ' + F('yd', 's') + ' × ' + F('3 ft', '1 yd') + ' = 192 ' + F('ft', 's')), 'Sense check: feet are smaller than yards, so the number must get larger.'],
        wrong: { A: '61 = 64 − 3: subtracts instead of multiplying.', B: '67 = 64 + 3: adds instead of multiplying.', C: '94 has no valid connection to the conversion.' },
        tip: 'Write units as fractions and cancel them (yd over yd). The units tell you whether to multiply or divide.'
      },
      {
        n: 2, skill: 'Two-variable data: models and scatterplots', domain: 'Problem-Solving and Data Analysis',
        figure: FIG.plane({ xmin: 0, xmax: 15, ymin: 0, ymax: 21, gx: 2, gy: 2, lx: 2, ly: 2, w: 300, h: 300, ml: 26, mb: 22, firstQuadrant: true, alt: 'Scatterplot with six points rising from about (4, 6) to (14, 16) and a line of best fit starting near (0, 3.4) with slope 1' },
          p => p.fn(x => x + 3.4, 0, 14) + [[4, 6.2], [6, 10], [8, 11], [10, 13.7], [12, 15], [14, 16]].map(q => p.dot(q[0], q[1], 3.6)).join('')),
        prompt: 'The scatterplot shows the relationship between two variables, <i>x</i> and <i>y</i>. A line of best fit is also shown.<br><br>Which of the following equations best represents the line of best fit shown?',
        choices: ['<i>y</i> = <i>x</i> + 3.4', '<i>y</i> = <i>x</i> − 3.4', '<i>y</i> = −<i>x</i> + 3.4', '<i>y</i> = −<i>x</i> − 3.4'],
        answer: 'A',
        vocab: [['scatterplot', 'a graph of data points showing how two variables relate', 'noun'], ['line of best fit', 'the straight line that best follows the trend of the data', 'noun', ['line of best fit']], ['slope', 'steepness of a line: rise over run', 'noun']],
        hint: 'Two things to check: does the line go up or down (sign of slope)? Where does it cross the <i>y</i>-axis (above or below zero)?',
        why: '<p>The line <b>rises</b> from left to right, so its slope is <b>positive</b> (eliminates C and D). It crosses the <i>y</i>-axis <b>above</b> the origin, at about 3.4, so the <i>y</i>-intercept is <b>positive</b> (eliminates B). That leaves <b><i>y</i> = <i>x</i> + 3.4</b>. Check: at <i>x</i> = 10 the line is near 13.4, which matches the graph.</p>',
        steps: ['Direction: up to the right → positive slope.', '<i>y</i>-intercept: the line starts at about 3.4 on the <i>y</i>-axis → +3.4.', 'Only <i>y</i> = <i>x</i> + 3.4 has both.'],
        wrong: { B: 'Positive slope, but the <i>y</i>-intercept would be −3.4, below the origin.', C: 'Negative slope; the line would fall from left to right.', D: 'Negative slope and negative intercept.' },
        tip: 'For "which equation" graph questions, check the sign of the slope and the sign of the intercept first; that usually leaves one choice.'
      },
      {
        n: 3, skill: 'Linear equations in two variables', domain: 'Algebra',
        figure: FIG.plane({ xmin: -8, xmax: 8, ymin: -6, ymax: 10, gx: 1, gy: 1, lx: 2, ly: 2, w: 300, h: 300, alt: 'Line passing through (0, negative 5) and (2.5, 0) with slope 2' }, p => p.fn(x => 2 * x - 5) + p.dot(0, -5) + p.dot(1, -3) + p.dot(2.5, 0)),
        prompt: 'The graph shows the linear relationship between <i>x</i> and <i>y</i>. Which table gives three values of <i>x</i> and their corresponding values of <i>y</i> for this relationship?',
        choiceLayout: 'grid',
        choices: [tbl(['x', 'y'], [[0, 0], [1, '−7'], [2, '−9']]), tbl(['x', 'y'], [[0, 0], [1, '−3'], [2, '−1']]), tbl(['x', 'y'], [[0, '−5'], [1, '−7'], [2, '−9']]), tbl(['x', 'y'], [[0, '−5'], [1, '−3'], [2, '−1']])],
        answer: 'D',
        vocab: [['linear relationship', 'a relationship whose graph is a straight line', 'noun', ['linear relationship']], ['corresponding', 'matching; paired with', 'adj.']],
        hint: 'Read the <i>y</i>-intercept (where <i>x</i> = 0). Then decide whether <i>y</i> goes up or down as <i>x</i> increases.',
        why: '<p>The line crosses the <i>y</i>-axis at <b>(0, −5)</b>, so when <i>x</i> = 0, <i>y</i> = −5 (eliminates A and B). The line rises from left to right, going up 2 for every 1 to the right (slope 2): the line is <i>y</i> = 2<i>x</i> − 5. That gives (1, −3) and (2, −1), which is table <b>D</b>.</p>',
        steps: ['<i>y</i>-intercept: (0, −5).', 'Slope: from (0, −5) to (2.5, 0), rise 5 over run 2.5 → 2.', 'Equation: <i>y</i> = 2<i>x</i> − 5 → <i>x</i> = 1: −3; <i>x</i> = 2: −1.', 'Table D matches: (0, −5), (1, −3), (2, −1).'],
        wrong: { A: '(0, 0) is not on the line, and the <i>y</i>-values decrease, but the line rises.', B: '(0, 0) is not on the line.', C: 'Correct intercept, but <i>y</i> decreases by 2 each step (slope −2), while the line rises.' },
        tip: 'Two checks usually decide it: the point at <i>x</i> = 0 and whether <i>y</i> increases or decreases.'
      },
      {
        n: 4, skill: 'Area and volume', domain: 'Geometry and Trigonometry',
        prompt: 'What is the perimeter, in inches, of a rectangle with a length of 4 inches and a width of 9 inches?',
        choices: ['13', '17', '22', '26'],
        answer: 'D',
        vocab: [['perimeter', 'the total distance around the outside of a shape', 'noun']],
        hint: 'A rectangle has two lengths and two widths.',
        why: '<p>Perimeter is the sum of all four sides: 2(length) + 2(width) = 2(4) + 2(9) = 8 + 18 = <b>26</b> inches.</p>',
        steps: [calc('<i>P</i> = 2ℓ + 2<i>w</i>'), calc('<i>P</i> = 2(4) + 2(9) = 8 + 18 = 26')],
        wrong: { A: '13 = 4 + 9 counts only one length and one width (half the perimeter).', B: '17 = 4 + 4 + 9 misses one width.', C: '22 = 4 + 9 + 9 misses one length.' },
        tip: 'Don\'t confuse perimeter (distance around: add sides) with area (space inside: multiply). The area here would be 36.'
      },
      {
        n: 5, skill: 'Equivalent expressions and equations', domain: 'Advanced Math',
        prompt: eq('7<i>m</i> = 2(<i>n</i> + <i>p</i>)') + 'The given equation relates the positive numbers <i>m</i>, <i>n</i>, and <i>p</i>. Which equation correctly gives <i>m</i> in terms of <i>n</i> and <i>p</i>?',
        choices: ['<i>m</i> = ' + F('2(<i>n</i> + <i>p</i>)', '7'), '<i>m</i> = 2(<i>n</i> + <i>p</i>)', '<i>m</i> = 2(<i>n</i> + <i>p</i>) − 7', '<i>m</i> = 2 − <i>n</i> − <i>p</i> − 7'],
        answer: 'A',
        vocab: [['in terms of', 'expressed using (those other variables)', 'phrase', ['in terms of']]],
        hint: '<i>m</i> is being multiplied by 7. What undoes multiplication?',
        why: '<p><i>m</i> is multiplied by 7, so divide both sides by 7 to isolate it: <b><i>m</i> = 2(<i>n</i> + <i>p</i>)/7</b>.</p>',
        steps: [calc('7<i>m</i> = 2(<i>n</i> + <i>p</i>)'), 'Divide both sides by 7: ' + calc('<i>m</i> = ' + F('2(<i>n</i> + <i>p</i>)', '7'))],
        wrong: { B: 'Ignores the 7 entirely.', C: 'Subtracts 7, but 7 multiplies <i>m</i>; you must divide.', D: 'Subtracts 7 and also distributes incorrectly.' },
        tip: 'Undo operations with their inverses: multiplication ↔ division, addition ↔ subtraction.'
      },
      {
        n: 6, skill: 'One-variable data: center', domain: 'Problem-Solving and Data Analysis', type: 'spr', accept: [79], answerText: '79',
        prompt: eq('73, 74, 75, 77, 79, 82, 84, 85, 91') + 'What is the median of the data shown?',
        vocab: [['median', 'the middle value when data are listed in order', 'noun'], ['mean', 'the average: sum divided by count', 'noun']],
        hint: 'The list is already in order. How many values are there? Which one is in the middle?',
        why: '<p>The 9 values are already in increasing order. With an odd count, the median is the middle value, which is the 5th value: 73, 74, 75, 77, <b>79</b>, 82, 84, 85, 91. The median is <b>79</b>.</p>',
        steps: ['Count: 9 values (odd).', 'Middle position: (9 + 1) ÷ 2 = 5th value.', '5th value = <b>79</b> (4 values below it, 4 above).'],
        mistakes: ['Computing the mean (720 ÷ 9 = 80) instead of the median.', 'Forgetting to check that the data are sorted (here they are).'],
        tip: 'Median: sort, then take the middle (odd count) or average the two middle values (even count).'
      },
      {
        n: 7, skill: 'Linear functions', domain: 'Algebra', type: 'spr', accept: [2], answerText: '2',
        prompt: 'The function <i>f</i> is defined by <i>f</i>(<i>x</i>) = 4<i>x</i>. For what value of <i>x</i> does <i>f</i>(<i>x</i>) = 8?',
        vocab: [['function', 'a rule that assigns exactly one output to each input', 'noun']],
        hint: 'Set 4<i>x</i> equal to 8.',
        why: '<p>We need the input that produces an output of 8: 4<i>x</i> = 8, so <b><i>x</i> = 2</b>.</p>',
        steps: [calc('4<i>x</i> = 8'), calc('<i>x</i> = 8 ÷ 4 = 2')],
        mistakes: ['Computing <i>f</i>(8) = 32 instead of solving <i>f</i>(<i>x</i>) = 8.'],
        tip: '"<i>f</i>(<i>x</i>) = 8" gives you the output and asks for the input. "<i>f</i>(8)" gives you the input and asks for the output.'
      },
      {
        n: 8, skill: 'Percentages', domain: 'Problem-Solving and Data Analysis',
        prompt: 'Of 300,000 paper clips, 234,000 are size large. What percentage of the paper clips are size large?',
        choices: ['22%', '33%', '66%', '78%'],
        answer: 'D',
        vocab: [['percentage', 'a part out of 100', 'noun']],
        hint: 'Percent = part ÷ whole × 100.',
        why: '<p>Percentage = part ÷ whole × 100 = 234,000 ÷ 300,000 × 100 = 0.78 × 100 = <b>78%</b>.</p>',
        steps: [calc(F('234,000', '300,000') + ' = ' + F(234, 300) + ' = 0.78'), calc('0.78 × 100 = 78%')],
        wrong: { A: '22% is the percentage that are <i>not</i> large (100 − 78).', B: '33% has no connection to these numbers.', C: '66% might come from a digit mix-up; it is not 234/300.' },
        tip: 'Estimate first: 234 out of 300 is more than 3/4 (225/300), so the answer is a bit over 75%.'
      },
      {
        n: 9, skill: 'Linear functions in context', domain: 'Algebra',
        prompt: eq('<i>f</i>(<i>x</i>) = 8<i>x</i> + 4') + 'The function <i>f</i> gives the estimated height, in feet, of a willow tree <i>x</i> years after its height was first measured. Which statement is the best interpretation of 4 in this context?',
        choices: ['The tree will be measured each year for 4 years.', 'The tree is estimated to grow to a maximum height of 4 feet.', 'The estimated height of the tree increased by 4 feet each year.', 'The estimated height of the tree was 4 feet when it was first measured.'],
        answer: 'D',
        vocab: [['interpretation', 'what something means in context', 'noun'], ['estimated', 'roughly calculated', 'adj.']],
        hint: 'Plug in <i>x</i> = 0 (the moment of the first measurement). What is <i>f</i>(0)?',
        why: '<p>In <i>f</i>(<i>x</i>) = 8<i>x</i> + 4, the constant 4 is the value when <i>x</i> = 0: <i>f</i>(0) = 8(0) + 4 = 4. Since <i>x</i> = 0 means "0 years after first measured," the tree was <b>4 feet tall when first measured</b>. (The 8 is the growth per year.)</p>',
        steps: [calc('<i>f</i>(0) = 8(0) + 4 = 4'), '<i>x</i> = 0 corresponds to the moment of the first measurement.', 'So 4 = the height in feet at the first measurement.'],
        wrong: { A: 'The function has no limit on the number of years; 4 is not a count of measurements.', B: 'A linear function with positive slope has no maximum; the tree keeps getting taller in this model.', C: 'The yearly increase is the slope, 8 feet per year, not 4.' },
        tip: 'In <i>y</i> = <i>mx</i> + <i>b</i> models: <i>b</i> = starting value (at <i>x</i> = 0), <i>m</i> = change per one unit of <i>x</i>.'
      },
      {
        n: 10, skill: 'Systems of equations: linear and quadratic', domain: 'Advanced Math',
        prompt: eq('<i>y</i> = 76<br><i>y</i> = <i>x</i><sup>2</sup> − 5') + 'The graphs of the given equations in the <i>xy</i>-plane intersect at the point (<i>x</i>, <i>y</i>). What is a possible value of <i>x</i>?',
        choices: ['−' + F(76, 5), '−9', '5', '76'],
        answer: 'B',
        vocab: [['intersect', 'meet or cross each other', 'verb']],
        hint: 'Set the two <i>y</i>-values equal: <i>x</i><sup>2</sup> − 5 = 76.',
        why: '<p>At an intersection point both equations have the same <i>y</i>, so <i>x</i><sup>2</sup> − 5 = 76 → <i>x</i><sup>2</sup> = 81 → <i>x</i> = 9 or <i>x</i> = −9. Only <b>−9</b> is among the choices.</p>',
        steps: [calc('<i>x</i><sup>2</sup> − 5 = 76'), calc('<i>x</i><sup>2</sup> = 81'), calc('<i>x</i> = ±9'), 'Check: (−9)<sup>2</sup> − 5 = 81 − 5 = 76 ✓.'],
        wrong: { A: '−76/5 comes from treating the equation as linear (−5<i>x</i> = 76), ignoring the square.', C: '5 is the constant being subtracted, not a solution: 5<sup>2</sup> − 5 = 20 ≠ 76.', D: '76 is the <i>y</i>-value, not the <i>x</i>-value.' },
        tip: 'Squares have two roots. If only one appears in the choices, pick it, but remember the ± when a question asks for "all" or "sum of" solutions.'
      },
      {
        n: 11, skill: 'Similarity and scale factor', domain: 'Geometry and Trigonometry',
        prompt: 'Each side of equilateral triangle S is multiplied by a scale factor of <i>k</i> to create equilateral triangle T. The length of each side of triangle T is greater than the length of each side of triangle S. Which of the following could be the value of <i>k</i>?',
        choices: [F(29, 28), '1', F(28, 29), '0'],
        answer: 'A',
        vocab: [['equilateral', 'having all sides equal', 'adj.'], ['scale factor', 'the number every length is multiplied by to resize a shape', 'noun', ['scale factor']]],
        hint: 'To make every side <i>longer</i>, what must be true about <i>k</i> compared with 1?',
        why: '<p>Multiplying a length by <i>k</i> makes it longer only if <b><i>k</i> > 1</b>. Of the choices, only 29/28 (≈ 1.036) is greater than 1.</p>',
        steps: ['New side = <i>k</i> × old side.', 'Longer requires <i>k</i> > 1.', '29/28 ≈ 1.036 > 1 ✓; 1 keeps the size the same; 28/29 < 1 shrinks; 0 collapses the triangle.'],
        wrong: { B: '<i>k</i> = 1 produces a congruent triangle: sides stay the same, not greater.', C: '28/29 ≈ 0.966 < 1 shrinks every side.', D: '<i>k</i> = 0 makes every side 0; no triangle at all.' },
        tip: 'Fractions with a numerator larger than the denominator are greater than 1. Compare numerator and denominator at a glance.'
      },
      {
        n: 12, skill: 'Linear equations in one variable', domain: 'Algebra',
        prompt: eq('66<i>x</i> = 66<i>x</i>') + 'How many solutions does the given equation have?',
        choices: ['Exactly one', 'Exactly two', 'Infinitely many', 'Zero'],
        answer: 'C',
        vocab: [['identity', 'an equation that is true for every value of the variable', 'noun']],
        hint: 'Try <i>x</i> = 0, <i>x</i> = 1, <i>x</i> = −5. Is the equation ever false?',
        why: '<p>Both sides are exactly the same expression, so the equation is true for <b>every</b> value of <i>x</i>. Subtracting 66<i>x</i> from both sides gives 0 = 0, which is always true. An equation that is always true is an <b>identity</b> and has <b>infinitely many</b> solutions.</p>',
        steps: [calc('66<i>x</i> − 66<i>x</i> = 0'), calc('0 = 0 (always true)'), 'Every real number is a solution → infinitely many.'],
        wrong: { A: 'Dividing both sides by 66<i>x</i> might suggest a single solution, but that step is invalid when <i>x</i> = 0 and hides the fact that every <i>x</i> works.', B: 'Linear equations never have exactly two solutions.', D: 'Zero solutions happens when simplifying gives a false statement like 0 = 5. Here it gives 0 = 0.' },
        tip: 'Simplify to the end: true statement (0 = 0) → infinitely many; false statement (0 = 3) → none; <i>x</i> = number → exactly one.'
      },
      {
        n: 13, skill: 'Linear equations in context', domain: 'Algebra', type: 'spr', accept: [41], answerText: '41',
        prompt: 'Vivian bought party hats and cupcakes for $71. Each package of party hats cost $3, and each cupcake cost $1. If Vivian bought 10 packages of party hats, how many cupcakes did she buy?',
        vocab: [['package', 'a set of items sold together', 'noun']],
        hint: 'Hats cost 10 × $3. The rest of the $71 went to $1 cupcakes.',
        why: '<p>The party hats cost 10 × $3 = $30. The remaining $71 − $30 = $41 was spent on cupcakes at $1 each, so she bought <b>41</b> cupcakes. As an equation: 3(10) + 1<i>c</i> = 71 → <i>c</i> = 41.</p>',
        steps: [calc('3(10) + <i>c</i> = 71'), calc('30 + <i>c</i> = 71'), calc('<i>c</i> = 41')],
        mistakes: ['Answering 30 (the cost of the hats).', 'Dividing 71 by 3 or by 4 instead of setting up the equation.'],
        tip: 'Write total = (price × quantity) + (price × quantity), then plug in what you know.'
      },
      {
        n: 14, skill: 'Nonlinear functions: exponential', domain: 'Advanced Math', type: 'spr', accept: [11875], answerText: '11875',
        prompt: 'The exponential function <i>g</i> is defined by <i>g</i>(<i>x</i>) = 19 · <i>a</i><sup><i>x</i></sup>, where <i>a</i> is a positive constant. If <i>g</i>(3) = 2,375, what is the value of <i>g</i>(4)?',
        vocab: [['exponential function', 'a function where the variable is in the exponent', 'noun', ['exponential function']], ['constant', 'a fixed number', 'noun']],
        hint: 'Use <i>g</i>(3) to find <i>a</i>: 19<i>a</i><sup>3</sup> = 2,375. Then <i>g</i>(4) = <i>g</i>(3) × <i>a</i>.',
        why: '<p>From <i>g</i>(3) = 19<i>a</i><sup>3</sup> = 2,375, divide by 19: <i>a</i><sup>3</sup> = 125, so <i>a</i> = 5. Each increase of 1 in <i>x</i> multiplies <i>g</i> by <i>a</i>, so <i>g</i>(4) = <i>g</i>(3) × 5 = 2,375 × 5 = <b>11,875</b> (enter 11875).</p>',
        steps: [calc('19<i>a</i><sup>3</sup> = 2,375'), calc('<i>a</i><sup>3</sup> = 125 → <i>a</i> = 5'), calc('<i>g</i>(4) = 19 · 5<sup>4</sup> = 19 · 625 = 11,875'), 'Shortcut: <i>g</i>(4) = <i>g</i>(3) · <i>a</i> = 2,375 · 5.'],
        mistakes: ['Stopping at <i>a</i> = 5 and entering 5.', 'Entering a comma (11,875). Leave out commas: 11875.'],
        tip: 'For exponential functions, going from <i>x</i> to <i>x</i> + 1 multiplies the output by the base.'
      },
      {
        n: 15, skill: 'Right triangle trigonometry', domain: 'Geometry and Trigonometry',
        prompt: 'In right triangle <i>RST</i>, the sum of the measures of angle <i>R</i> and angle <i>S</i> is 90 degrees. The value of sin(<i>R</i>) is ' + F(R(15), 4) + '. What is the value of cos(<i>S</i>)?',
        choices: [F(R(15), 15), F(R(15), 4), F('4' + R(15), 15), R(15)],
        answer: 'B',
        vocab: [['complementary', 'two angles that add up to 90°', 'adj.'], ['sine', 'opposite side ÷ hypotenuse (in a right triangle)', 'noun', ['sin']], ['cosine', 'adjacent side ÷ hypotenuse (in a right triangle)', 'noun', ['cos']]],
        hint: 'R and S are complementary (they add to 90°). What is the relationship between the sine of an angle and the cosine of its complement?',
        why: '<p>Since <i>R</i> + <i>S</i> = 90°, the angles are <b>complementary</b>. For complementary angles, <b>sin(<i>R</i>) = cos(<i>S</i>)</b>: the side <i>opposite R</i> is the same side that is <i>adjacent to S</i>, and both ratios use the same hypotenuse. So cos(<i>S</i>) = sin(<i>R</i>) = <b>√15/4</b>.</p>',
        steps: ['R + S = 90° → the right angle is at T; R and S are complementary.', 'Opposite(R) = adjacent(S); hypotenuse is shared.', calc('cos(<i>S</i>) = ' + F('adjacent to S', 'hypotenuse') + ' = ' + F('opposite R', 'hypotenuse') + ' = sin(<i>R</i>) = ' + F(R(15), 4))],
        wrong: { A: 'Since sin(<i>R</i>) = √15/4, the side opposite R is √15, the hypotenuse is 4, and the third side is √(16 − 15) = 1. So √15/15 = 1/√15 is <b>tan(<i>S</i>)</b> (opposite S ÷ adjacent S), not cos(<i>S</i>).', C: '4√15/15 = 4/√15 is <b>1/cos(<i>S</i>)</b>, the reciprocal of the correct answer.', D: '√15 is <b>1/tan(<i>S</i>)</b>. It is also greater than 1, which is impossible for the cosine of an angle.' },
        tip: 'Co-function rule: sin(θ) = cos(90° − θ). SOH CAH TOA confirms it: one side is "opposite" for one acute angle and "adjacent" for the other.'
      },
      {
        n: 16, skill: 'Linear equations in two variables', domain: 'Algebra',
        figure: FIG.plane({ xmin: 0, xmax: 105, ymin: 0, ymax: 52, gx: 5, gy: 2.5, lx: 10, ly: 10, w: 340, h: 250, ml: 44, mb: 34, firstQuadrant: true, xTitle: 'Company A', yTitle: 'Company B', alt: 'Line from (0, 40) to (60, 0)' }, p => p.seg(0, 40, 60, 0)),
        prompt: 'The graph shows the relationship between the number of shares of stock from Company A, <i>x</i>, and the number of shares of stock from Company B, <i>y</i>, that Simone can purchase. Which equation could represent this relationship?',
        choices: ['<i>y</i> = 8<i>x</i> + 12', '8<i>x</i> + 12<i>y</i> = 480', '<i>y</i> = 12<i>x</i> + 8', '12<i>x</i> + 8<i>y</i> = 480'],
        answer: 'B',
        vocab: [['shares of stock', 'units of ownership in a company that can be bought and sold', 'noun', ['shares of stock', 'shares']], ['intercept', 'where a graph crosses an axis', 'noun']],
        hint: 'Read the intercepts: (0, 40) and (60, 0). Plug each into the choices.',
        why: '<p>The line goes <b>down</b> from (0, 40) to (60, 0). Test the intercepts:</p><ul><li><b>B:</b> <i>x</i> = 0 → 12<i>y</i> = 480 → <i>y</i> = 40 ✓. <i>y</i> = 0 → 8<i>x</i> = 480 → <i>x</i> = 60 ✓.</li><li><b>D:</b> <i>x</i> = 0 → 8<i>y</i> = 480 → <i>y</i> = 60 ✗.</li></ul><p>So the equation is <b>8<i>x</i> + 12<i>y</i> = 480</b>. In context, Company A shares cost $8, Company B shares cost $12, and Simone spends $480 total.</p>',
        steps: ['Intercepts from the graph: (0, 40) and (60, 0).', 'Test B at (0, 40): 8(0) + 12(40) = 480 ✓.', 'Test B at (60, 0): 8(60) + 12(0) = 480 ✓.'],
        wrong: { A: 'Positive slope (the line would rise) and <i>y</i>-intercept 12.', C: 'Positive slope and <i>y</i>-intercept 8.', D: 'Swaps the coefficients: intercepts would be (40, 0) and (0, 60), the reverse of the graph.' },
        tip: 'For standard-form equations, the intercepts are the fastest check: set <i>x</i> = 0 for the <i>y</i>-intercept, <i>y</i> = 0 for the <i>x</i>-intercept.'
      },
      {
        n: 17, skill: 'Equivalent expressions: rational', domain: 'Advanced Math',
        prompt: 'Which expression is equivalent to ' + F('8<i>x</i>(<i>x</i> − 7) − 3(<i>x</i> − 7)', '2<i>x</i> − 14') + ', where <i>x</i> > 7?',
        choices: [F('<i>x</i> − 7', '5'), F('8<i>x</i> − 3', '2'), F('8<i>x</i><sup>2</sup> − 3<i>x</i> − 14', '2<i>x</i> − 14'), F('8<i>x</i><sup>2</sup> − 3<i>x</i> − 77', '2<i>x</i> − 14')],
        answer: 'B',
        vocab: [['equivalent', 'equal for all allowed values', 'adj.'], ['factor', 'a number or expression that divides another exactly', 'noun']],
        hint: 'The numerator has a common factor of (<i>x</i> − 7). The denominator is 2(<i>x</i> − 7).',
        why: '<p>Factor the numerator: 8<i>x</i>(<i>x</i> − 7) − 3(<i>x</i> − 7) = <b>(<i>x</i> − 7)(8<i>x</i> − 3)</b>. Factor the denominator: 2<i>x</i> − 14 = <b>2(<i>x</i> − 7)</b>. Since <i>x</i> > 7, <i>x</i> − 7 ≠ 0, so it cancels: the result is <b>(8<i>x</i> − 3)/2</b>.</p>',
        steps: ['Numerator: ' + calc('(<i>x</i> − 7)(8<i>x</i> − 3)'), 'Denominator: ' + calc('2(<i>x</i> − 7)'), 'Cancel (<i>x</i> − 7) (allowed because <i>x</i> > 7): ' + calc(F('8<i>x</i> − 3', '2'))],
        wrong: { A: 'Comes from wrongly combining 8<i>x</i> − 3 as 5 and flipping the fraction.', C: 'Expanding the numerator: 8<i>x</i><sup>2</sup> − 56<i>x</i> − 3<i>x</i> + 21 = 8<i>x</i><sup>2</sup> − 59<i>x</i> + 21, not 8<i>x</i><sup>2</sup> − 3<i>x</i> − 14.', D: 'Also an incorrect expansion of the numerator (it should be 8<i>x</i><sup>2</sup> − 59<i>x</i> + 21).' },
        tip: 'Look for a common binomial factor before expanding. The condition "<i>x</i> > 7" is a hint that (<i>x</i> − 7) will cancel.'
      },
      {
        n: 18, skill: 'Nonlinear functions: exponential', domain: 'Advanced Math',
        prompt: 'The function <i>f</i> is defined by <i>f</i>(<i>x</i>) = (−8)(2)<sup><i>x</i></sup> + 22. What is the <i>y</i>-intercept of the graph of <i>y</i> = <i>f</i>(<i>x</i>) in the <i>xy</i>-plane?',
        choices: ['(0, 14)', '(0, 2)', '(0, 22)', '(0, −8)'],
        answer: 'A',
        vocab: [['y-intercept', 'the point where a graph crosses the y-axis (x = 0)', 'noun', ['y-intercept']]],
        hint: 'Plug in <i>x</i> = 0. Remember 2<sup>0</sup> = 1.',
        why: '<p>The <i>y</i>-intercept is <i>f</i>(0). Since 2<sup>0</sup> = 1, <i>f</i>(0) = (−8)(1) + 22 = 14. The <i>y</i>-intercept is <b>(0, 14)</b>.</p>',
        steps: [calc('<i>f</i>(0) = (−8)(2)<sup>0</sup> + 22'), calc('= (−8)(1) + 22 = 14'), '<i>y</i>-intercept: (0, 14).'],
        wrong: { B: '(0, 2) uses the base 2 as the intercept.', C: '(0, 22) ignores the exponential term, which equals −8 at <i>x</i> = 0.', D: '(0, −8) ignores the + 22.' },
        tip: 'Anything (nonzero) to the power 0 is 1. For <i>a</i>(<i>b</i>)<sup><i>x</i></sup> + <i>c</i>, the <i>y</i>-intercept is <i>a</i> + <i>c</i>.'
      },
      {
        n: 19, skill: 'Linear equations in context', domain: 'Algebra',
        prompt: 'Keenan made 32 cups of vegetable broth. Keenan then filled <i>x</i> small jars and <i>y</i> large jars with all the vegetable broth he made. The equation 3<i>x</i> + 5<i>y</i> = 32 represents this situation. Which is the best interpretation of 5<i>y</i> in this context?',
        choices: ['The number of large jars Keenan filled', 'The number of small jars Keenan filled', 'The total number of cups of vegetable broth in the large jars', 'The total number of cups of vegetable broth in the small jars'],
        answer: 'C',
        vocab: [['broth', 'a thin soup made by simmering vegetables or meat in water', 'noun'], ['interpretation', 'meaning in context', 'noun']],
        hint: 'The right side, 32, is measured in <i>cups</i>. So each term on the left is also in cups. What does 5 mean for each large jar?',
        why: '<p>The total, 32, counts <b>cups</b> of broth, so each term on the left is a number of cups. <i>y</i> is the number of large jars, and 5 must be the <b>cups per large jar</b>. So 5<i>y</i> = (5 cups per jar) × (number of large jars) = <b>the total cups of broth in the large jars</b>.</p>',
        steps: ['Units of 32: cups.', '<i>y</i> = number of large jars; 5 = cups in each large jar.', '5<i>y</i> = cups/jar × jars = total cups in large jars.'],
        wrong: { A: 'The number of large jars is <i>y</i> alone, not 5<i>y</i>.', B: 'The number of small jars is <i>x</i>.', D: 'The cups in the small jars is 3<i>x</i>.' },
        tip: 'Unit analysis settles most interpretation questions: every term in an equation must have the same units as the total.'
      },
      {
        n: 20, skill: 'Circles', domain: 'Geometry and Trigonometry', type: 'spr', accept: [5], answerText: '5',
        prompt: 'A circle in the <i>xy</i>-plane has a diameter with endpoints (2, 4) and (2, 14). An equation of this circle is (<i>x</i> − 2)<sup>2</sup> + (<i>y</i> − 9)<sup>2</sup> = <i>r</i><sup>2</sup>, where <i>r</i> is a positive constant. What is the value of <i>r</i>?',
        vocab: [['diameter', 'a segment through the center of a circle with both endpoints on the circle', 'noun'], ['radius', 'half the diameter; center to edge', 'noun']],
        hint: 'The diameter is vertical: from <i>y</i> = 4 to <i>y</i> = 14. The radius is half of it.',
        why: '<p>The endpoints share <i>x</i> = 2, so the diameter is vertical with length 14 − 4 = 10. The radius is half the diameter: <i>r</i> = <b>5</b>. (Check: the center (2, 9) is the midpoint, and (2, 14) is 5 units from it.)</p>',
        steps: ['Diameter length: |14 − 4| = 10.', calc('<i>r</i> = 10 ÷ 2 = 5'), 'Check: distance from center (2, 9) to (2, 4) = 5 ✓.'],
        mistakes: ['Entering the diameter (10).', 'Entering <i>r</i><sup>2</sup> (25).'],
        tip: 'In (<i>x</i> − <i>h</i>)<sup>2</sup> + (<i>y</i> − <i>k</i>)<sup>2</sup> = <i>r</i><sup>2</sup>, the right side is <i>r</i><sup>2</sup>. Read carefully whether the question wants <i>r</i> or <i>r</i><sup>2</sup>.'
      },
      {
        n: 21, skill: 'Linear equations: perpendicular lines', domain: 'Algebra', type: 'spr', accept: [0.25], answerText: '1/4 (or .25)',
        prompt: 'Line ℓ is defined by 3<i>y</i> + 12<i>x</i> = 5. Line <i>n</i> is perpendicular to line ℓ in the <i>xy</i>-plane. What is the slope of line <i>n</i>?',
        vocab: [['perpendicular', 'meeting at a right angle (90°)', 'adj.'], ['negative reciprocal', 'flip the fraction and change the sign (e.g., −4 → 1/4)', 'noun', ['negative reciprocal']]],
        hint: 'Solve for <i>y</i> to find the slope of ℓ. Perpendicular slopes are negative reciprocals.',
        why: '<p>Rewrite line ℓ in slope-intercept form: 3<i>y</i> = −12<i>x</i> + 5 → <i>y</i> = −4<i>x</i> + 5/3. Its slope is <b>−4</b>. Perpendicular lines have slopes that are <b>negative reciprocals</b> (their product is −1), so line <i>n</i> has slope <b>1/4</b>.</p>',
        steps: [calc('3<i>y</i> = −12<i>x</i> + 5'), calc('<i>y</i> = −4<i>x</i> + ' + F(5, 3)), 'Slope of ℓ: −4. Negative reciprocal: ' + calc('−' + F(1, '−4') + ' = ' + F(1, 4)), 'Check: (−4)(1/4) = −1 ✓.'],
        mistakes: ['Using 12 or −12 as the slope without dividing by 3.', 'Taking only the reciprocal (−1/4) and forgetting to change the sign.', 'Entering 4 (the opposite, not the reciprocal).'],
        tip: 'For <i>Ax</i> + <i>By</i> = <i>C</i>, the slope is −<i>A</i>/<i>B</i>: here −12/3 = −4.'
      },
      {
        n: 22, skill: 'Nonlinear equations: absolute value', domain: 'Advanced Math',
        prompt: eq('<span class="abs">−5<i>x</i> + 13</span> = 73') + 'What is the sum of the solutions to the given equation?',
        choices: ['−' + F(146, 5), '−12', '0', F(26, 5)],
        answer: 'D',
        vocab: [['absolute value', 'the distance of a number from 0; always nonnegative', 'noun', ['absolute value']]],
        hint: 'Split into two equations: −5<i>x</i> + 13 = 73 and −5<i>x</i> + 13 = −73.',
        why: '<p>|<i>A</i>| = 73 means <i>A</i> = 73 or <i>A</i> = −73.</p><ul><li>−5<i>x</i> + 13 = 73 → −5<i>x</i> = 60 → <i>x</i> = −12</li><li>−5<i>x</i> + 13 = −73 → −5<i>x</i> = −86 → <i>x</i> = 86/5</li></ul><p>Sum: −12 + 86/5 = −60/5 + 86/5 = <b>26/5</b>.</p>',
        steps: ['Case 1: ' + calc('−5<i>x</i> + 13 = 73 → <i>x</i> = −12'), 'Case 2: ' + calc('−5<i>x</i> + 13 = −73 → <i>x</i> = ' + F(86, 5)), 'Sum: ' + calc('−12 + ' + F(86, 5) + ' = ' + F(26, 5)), 'Shortcut: the two solutions are symmetric around the point where −5<i>x</i> + 13 = 0 (<i>x</i> = 13/5), so the sum is 2 × 13/5 = 26/5.'],
        wrong: { A: '−146/5 comes from sign errors in both cases.', B: '−12 is only one of the two solutions.', C: '0 assumes the two solutions are opposites (<i>x</i> and −<i>x</i>), which is true only when there is no constant term inside the bars.' },
        tip: 'Absolute value equations usually give two solutions. Their midpoint is where the inside equals zero, so the sum is twice that value.'
      },
      {
        n: 23, skill: 'Nonlinear functions: exponential forms', domain: 'Advanced Math',
        prompt: 'For the exponential function <i>f</i>, the value of <i>f</i>(1) is <i>k</i>, where <i>k</i> is a constant. Which of the following equivalent forms of the function <i>f</i> shows the value of <i>k</i> as the coefficient or the base?',
        choices: ['<i>f</i>(<i>x</i>) = 50(1.6)<sup><i>x</i>+1</sup>', '<i>f</i>(<i>x</i>) = 80(1.6)<sup><i>x</i></sup>', '<i>f</i>(<i>x</i>) = 128(1.6)<sup><i>x</i>−1</sup>', '<i>f</i>(<i>x</i>) = 204.8(1.6)<sup><i>x</i>−2</sup>'],
        answer: 'C',
        vocab: [['coefficient', 'the number multiplied in front (here, in front of the power)', 'noun'], ['base', 'the number being raised to a power', 'noun']],
        hint: 'Compute <i>f</i>(1) from any form. Then find the form where the exponent becomes 0 when <i>x</i> = 1.',
        why: '<p>First find <i>k</i> = <i>f</i>(1). Using B: 80(1.6)<sup>1</sup> = 128. So <i>k</i> = 128. In choice C, <i>f</i>(<i>x</i>) = 128(1.6)<sup><i>x</i>−1</sup>, plugging in <i>x</i> = 1 makes the exponent 0, so <i>f</i>(1) = 128 × 1 = 128. The coefficient <b>128</b> is exactly <i>f</i>(1) = <i>k</i>.</p>',
        steps: [calc('<i>k</i> = <i>f</i>(1) = 80(1.6) = 128'), 'Form C: ' + calc('<i>f</i>(1) = 128(1.6)<sup>0</sup> = 128'), 'The coefficient in C (128) equals <i>k</i>. The base in every choice is 1.6, not 128.'],
        wrong: { A: 'Coefficient 50 is <i>f</i>(−1), since the exponent is 0 when <i>x</i> = −1.', B: 'Coefficient 80 is <i>f</i>(0).', D: 'Coefficient 204.8 is <i>f</i>(2).' },
        tip: 'In <i>a</i>(<i>b</i>)<sup><i>x</i> − <i>h</i></sup>, the coefficient <i>a</i> equals <i>f</i>(<i>h</i>). Match <i>h</i> to the input you care about.'
      },
      {
        n: 24, skill: 'Nonlinear equations: quadratics', domain: 'Advanced Math',
        prompt: eq('−9<i>x</i><sup>2</sup> + 30<i>x</i> + <i>c</i> = 0') + 'In the given equation, <i>c</i> is a constant. The equation has exactly one solution. What is the value of <i>c</i>?',
        choices: ['3', '0', '−25', '−53'],
        answer: 'C',
        vocab: [['discriminant', 'b² − 4ac; tells how many real solutions a quadratic has', 'noun'], ['constant', 'a fixed number', 'noun']],
        hint: 'Exactly one solution ⇔ discriminant <i>b</i><sup>2</sup> − 4<i>ac</i> = 0.',
        why: '<p>A quadratic <i>ax</i><sup>2</sup> + <i>bx</i> + <i>c</i> = 0 has exactly one real solution when its <b>discriminant</b> <i>b</i><sup>2</sup> − 4<i>ac</i> equals 0. Here <i>a</i> = −9, <i>b</i> = 30: 30<sup>2</sup> − 4(−9)(<i>c</i>) = 900 + 36<i>c</i> = 0 → <i>c</i> = <b>−25</b>.</p><p>Check: −9<i>x</i><sup>2</sup> + 30<i>x</i> − 25 = −(3<i>x</i> − 5)<sup>2</sup>, a perfect square with the single root <i>x</i> = 5/3.</p>',
        steps: [calc('<i>b</i><sup>2</sup> − 4<i>ac</i> = 0'), calc('30<sup>2</sup> − 4(−9)(<i>c</i>) = 0'), calc('900 + 36<i>c</i> = 0 → <i>c</i> = −25'), 'Verify: −(3<i>x</i> − 5)<sup>2</sup> = −9<i>x</i><sup>2</sup> + 30<i>x</i> − 25 ✓.'],
        wrong: { A: 'With <i>c</i> = 3, the discriminant is 900 + 108 = 1,008 > 0 (two solutions).', B: 'With <i>c</i> = 0, the equation factors as −3<i>x</i>(3<i>x</i> − 10) = 0: two solutions.', D: 'With <i>c</i> = −53, the discriminant is 900 − 1,908 < 0 (no real solutions).' },
        tip: 'Discriminant > 0: two solutions; = 0: one; < 0: none. Keep track of the negative <i>a</i>: −4(−9) = +36.'
      },
      {
        n: 25, skill: 'Equivalent expressions: factoring', domain: 'Advanced Math',
        prompt: 'Which of the following expressions has a factor of <i>x</i> + 2<i>b</i>, where <i>b</i> is a positive integer constant?',
        choices: ['3<i>x</i><sup>2</sup> + 7<i>x</i> + 14<i>b</i>', '3<i>x</i><sup>2</sup> + 28<i>x</i> + 14<i>b</i>', '3<i>x</i><sup>2</sup> + 42<i>x</i> + 14<i>b</i>', '3<i>x</i><sup>2</sup> + 49<i>x</i> + 14<i>b</i>'],
        answer: 'D',
        vocab: [['factor', 'an expression that divides another with no remainder', 'noun'], ['integer', 'a whole number', 'noun']],
        hint: 'If (<i>x</i> + 2<i>b</i>) is a factor, the expression equals 0 at <i>x</i> = −2<i>b</i>. Or: write 3<i>x</i><sup>2</sup> + <i>kx</i> + 14<i>b</i> = (<i>x</i> + 2<i>b</i>)(3<i>x</i> + 7) and expand.',
        why: '<p>If <i>x</i> + 2<i>b</i> is a factor and the expression is 3<i>x</i><sup>2</sup> + <i>kx</i> + 14<i>b</i>, the other factor must be (3<i>x</i> + 7) (to get 3<i>x</i><sup>2</sup> and 2<i>b</i> · 7 = 14<i>b</i>). Expanding: (<i>x</i> + 2<i>b</i>)(3<i>x</i> + 7) = 3<i>x</i><sup>2</sup> + (7 + 6<i>b</i>)<i>x</i> + 14<i>b</i>. So the middle coefficient must be <b><i>k</i> = 6<i>b</i> + 7</b> for a positive integer <i>b</i>:</p><ul><li>7 → <i>b</i> = 0 ✗ (not positive)</li><li>28 → <i>b</i> = 3.5 ✗</li><li>42 → <i>b</i> = 35/6 ✗</li><li><b>49 → <i>b</i> = 7 ✓</b></li></ul>',
        steps: ['Other factor: (3<i>x</i> + 7), since 3<i>x</i> · <i>x</i> = 3<i>x</i><sup>2</sup> and 7 · 2<i>b</i> = 14<i>b</i>.', calc('(<i>x</i> + 2<i>b</i>)(3<i>x</i> + 7) = 3<i>x</i><sup>2</sup> + (6<i>b</i> + 7)<i>x</i> + 14<i>b</i>'), 'Need 6<i>b</i> + 7 = middle coefficient with <i>b</i> a positive integer.', calc('6<i>b</i> + 7 = 49 → <i>b</i> = 7 ✓'), 'Check: (<i>x</i> + 14)(3<i>x</i> + 7) = 3<i>x</i><sup>2</sup> + 49<i>x</i> + 98 ✓.'],
        wrong: { A: '6<i>b</i> + 7 = 7 gives <i>b</i> = 0, but <i>b</i> must be positive.', B: '6<i>b</i> + 7 = 28 gives <i>b</i> = 3.5, not an integer.', C: '6<i>b</i> + 7 = 42 gives <i>b</i> = 35/6, not an integer.' },
        tip: 'Factor theorem: (<i>x</i> − <i>r</i>) is a factor exactly when plugging in <i>x</i> = <i>r</i> gives 0. Here, 12<i>b</i><sup>2</sup> − 2<i>kb</i> + 14<i>b</i> = 0 → <i>k</i> = 6<i>b</i> + 7.'
      },
      {
        n: 26, skill: 'One-variable data: mean', domain: 'Problem-Solving and Data Analysis',
        figure: '<div style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap">' +
          FIG.hist({ title: 'Data Set A', edges: [10, 20, 30, 40, 50, 60], counts: [0, 3, 4, 7, 9], ymax: 12, ystep: 2, w: 230, h: 210 }) +
          FIG.hist({ title: 'Data Set B', edges: [10, 20, 30, 40, 50, 60], counts: [3, 4, 7, 9, 0], ymax: 12, ystep: 2, w: 230, h: 210 }) + '</div>',
        prompt: 'Two data sets of 23 integers each are summarized in the histograms shown. For each of the histograms, the first interval represents the frequency of integers greater than or equal to 10, but less than 20. The second interval represents the frequency of integers greater than or equal to 20, but less than 30, and so on. What is the smallest possible difference between the mean of data set A and the mean of data set B?',
        choices: ['0', '1', '10', '23'],
        answer: 'B',
        vocab: [['histogram', 'a bar graph showing how many data values fall in each interval', 'noun'], ['frequency', 'how many times something occurs', 'noun'], ['interval', 'a range of values, e.g., 20 up to but not including 30', 'noun'], ['mean', 'average: total ÷ number of values', 'noun']],
        hint: 'B\'s bars are A\'s bars shifted left by 10. To make the means as close as possible, make A\'s values as small as possible and B\'s as large as possible.',
        why: '<p>Data set A: 3 values in [20, 30), 4 in [30, 40), 7 in [40, 50), 9 in [50, 60). Data set B has the <b>same counts</b> in intervals 10 lower. So A\'s mean is larger. To make the difference as <b>small</b> as possible, push A\'s values to the <b>bottom</b> of each interval and B\'s to the <b>top</b> (largest integers allowed).</p><ul><li>Smallest A total: 3(20) + 4(30) + 7(40) + 9(50) = 60 + 120 + 280 + 450 = <b>910</b></li><li>Largest B total: 3(19) + 4(29) + 7(39) + 9(49) = 57 + 116 + 273 + 441 = <b>887</b></li></ul><p>Difference of means = (910 − 887) ÷ 23 = 23 ÷ 23 = <b>1</b>.</p>',
        steps: ['Each B value can be at most 19, 29, 39, or 49 (integers, strictly less than the upper bound).', 'Each A value can be as low as 20, 30, 40, or 50.', 'Per value, the smallest gap is 20 − 19 = 1 (and so on for every interval).', 'All 23 values paired this way differ by exactly 1, so the means differ by at least ' + calc(F('23 × 1', '23') + ' = 1')],
        wrong: { A: '0 is the smallest possible difference between the <i>ranges</i>, not the means. The means cannot be equal, because every A value is at least 1 more than its matching B value.', C: '10 is the difference between the <i>greatest</i> possible mean of A and the greatest possible mean of B (or any matching positions), not the smallest possible difference.', D: '23 is the difference of the totals, not the means (it still needs dividing by 23).' },
        tip: 'For "smallest possible" or "largest possible" questions about grouped data, push values to the edges of their intervals, and watch whether the endpoints are included.'
      },
      {
        n: 27, skill: 'Right triangles: special triangles', domain: 'Geometry and Trigonometry', type: 'spr', accept: [104], answerText: '104',
        prompt: 'The perimeter of an equilateral triangle is 624 centimeters. The height of this triangle is <i>k</i>' + R(3) + ' centimeters, where <i>k</i> is a constant. What is the value of <i>k</i>?',
        vocab: [['equilateral', 'all three sides equal (and all angles 60°)', 'adj.'], ['height', 'the perpendicular distance from a vertex to the opposite side', 'noun'], ['30-60-90 triangle', 'a right triangle with sides in ratio 1 : √3 : 2', 'noun', ['30-60-90']]],
        hint: 'Find the side length first. The height splits the triangle into two 30°-60°-90° triangles, so height = (side/2) × √3.',
        why: '<p>Each side is 624 ÷ 3 = <b>208</b> cm. The height cuts the triangle into two 30°-60°-90° right triangles with hypotenuse 208 and short leg 208 ÷ 2 = 104. The long leg (the height) is short leg × √3 = <b>104√3</b>. So <b><i>k</i> = 104</b>.</p>',
        steps: [calc('side = 624 ÷ 3 = 208'), 'Half the base (short leg): ' + calc('208 ÷ 2 = 104'), 'Height (long leg) = short leg × √3: ' + calc('104' + R(3)), 'Formula check: height = ' + F(R(3), 2) + ' × side = ' + F(R(3), 2) + ' × 208 = 104√3 ✓.'],
        mistakes: ['Using the perimeter (624) as the side length.', 'Entering 208 (the side) instead of half of it.', 'Computing the height as a decimal (≈ 180.1) and entering that; the question wants <i>k</i>.'],
        tip: 'Equilateral triangle with side <i>s</i>: height = (<i>s</i>√3)/2, area = (<i>s</i><sup>2</sup>√3)/4. The reference sheet\'s 30°-60°-90° triangle gives you this.'
      }
    ]
  });
})();
