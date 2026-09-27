/* Math — Module 1 (27 questions).
   Multiple choice: choices[4] + answer.  Student-produced response:
   type:'spr', accept:[numeric values], answerText. Solutions use steps[]. */
(function () {
  const F = (a, b) => '<span class="frac"><span>' + a + '</span><span>' + b + '</span></span>';
  const R = a => '<span class="sqrt">√<span>' + a + '</span></span>';
  const eq = s => '<span class="eq">' + s + '</span>';
  const calc = s => '<span class="calc">' + s + '</span>';
  const tbl = (head, rows) => '<table class="data"><tr>' + head.map(h => '<th><i>' + h + '</i></th>').join('') + '</tr>' + rows.map(r => '<tr>' + r.map(c => '<td>' + c + '</td>').join('') + '</tr>').join('') + '</table>';

  const parab = (h, k, o) => FIG.plane(Object.assign({ xmin: -6, xmax: 10, ymin: -8, ymax: 5, gx: 1, gy: 1, lx: 2, ly: 2, w: 250, h: 220, alt: 'Parabola with vertex (' + h + ', ' + k + ')' }, o || {}),
    p => p.fn(x => (x - h) * (x - h) + k));

  window.SAT = window.SAT || { modules: [] };
  SAT.modules.push({
    id: 'math1',
    section: 'math',
    short: 'Math · Module 1',
    minutes: 43,
    directions: '<p>The questions in this section address a number of important math skills. Use of a calculator is permitted for all questions.</p><p>Unless otherwise indicated: all variables and expressions represent real numbers; figures provided are drawn to scale; all figures lie in a plane; the domain of a given function <i>f</i> is the set of all real numbers <i>x</i> for which <i>f</i>(<i>x</i>) is a real number.</p><p style="margin:0">For multiple-choice questions, select the best answer. For student-produced response questions, type your answer in the box (fractions or decimals are accepted).</p>',
    questions: [
      {
        n: 1, skill: 'One-variable data: distributions', domain: 'Problem-Solving and Data Analysis',
        figure: FIG.catLine({ cats: ['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019'], vals: [], ymin: 0, ymax: 15, ystep: 5, minor: 1, yfmt: v => v + '%', rotate: true, w: 360, h: 260, ml: 56, mb: 62, xTitle: 'Model year', yTitle: 'Percent of cars for sale', series: [{ vals: [12, 12, 12, 8, 4, 9, 10, 10, 11, 11], cls: 's-a', marker: 'dot' }], alt: 'Line graph of percent of cars for sale by model year from 2010 to 2019; the lowest point is 2014 at about 4 percent' }),
        prompt: 'The line graph shows the percent of cars for sale at a used car lot on a given day by model year.<br><br>For what model year is the percent of cars for sale the smallest?',
        choices: ['2012', '2013', '2014', '2015'],
        answer: 'C',
        vocab: [['model year', 'the year a car model is designated as, often the year after it is built', 'noun', ['model year']]],
        hint: 'Smallest percent = the lowest point on the line.',
        why: '<p>The smallest percent corresponds to the <b>lowest point</b> on the line graph. The line dips sharply to about <b>4%</b> at <b>2014</b>, lower than every other year (the next lowest is 2013 at about 8%).</p>',
        steps: ['Scan the graph for the lowest point on the line.', 'The lowest point is above the label <b>2014</b>, at about 4%.', 'All other years are at 8% or higher, so 2014 has the smallest percent.'],
        wrong: { A: '2012 is at about 12%, one of the highest values.', B: '2013 is about 8%, on the way down, but not the minimum.', D: '2015 is about 9%; the line has already started rising again.' },
        tip: 'Always read the axis labels first so you know which axis carries the quantity being asked about.'
      },
      {
        n: 2, skill: 'Systems of two linear equations', domain: 'Algebra',
        figure: FIG.plane({ xmin: -6, xmax: 6, ymin: -6, ymax: 6, gx: 1, gy: 1, lx: 1, ly: 1, w: 300, h: 300, alt: 'Two lines intersecting at (4, negative 5)' }, p => p.fn(x => -2 * x + 3) + p.fn(x => -0.75 * x - 2) + p.dot(4, -5)),
        prompt: 'The graph of a system of linear equations is shown. What is the solution (<i>x</i>, <i>y</i>) to the system?',
        choices: ['(4, −5)', '(0, 3)', '(0, −2)', '(−2, 3)'],
        answer: 'A',
        vocab: [['system of equations', 'two or more equations that share the same variables', 'noun', ['system of linear equations', 'system']], ['solution', 'for a system: the point that satisfies all equations at once', 'noun']],
        hint: 'The solution of a system is where the lines <i>cross</i>.',
        why: '<p>A solution to a system must satisfy <b>both</b> equations, so on a graph it is the point where the two lines <b>intersect</b>. The lines cross at <b>(4, −5)</b>.</p>',
        steps: ['Find the intersection of the two lines on the grid.', 'Trace down to the <i>x</i>-axis: <i>x</i> = 4. Trace across to the <i>y</i>-axis: <i>y</i> = −5.', 'Check with the equations read from the graph: steep line <i>y</i> = −2<i>x</i> + 3 gives −2(4) + 3 = −5 ✓; other line <i>y</i> = −0.75<i>x</i> − 2 gives −3 − 2 = −5 ✓.'],
        wrong: { B: '(0, 3) is the <i>y</i>-intercept of only the steep line; the other line does not pass through it.', C: '(0, −2) is the <i>y</i>-intercept of only the less steep line.', D: '(−2, 3) is not on either line.' },
        tip: 'Intercepts are tempting distractors on graph questions. The solution must lie on <i>both</i> lines.'
      },
      {
        n: 3, skill: 'Linear inequalities in one or two variables', domain: 'Algebra',
        prompt: 'The total cost, in dollars, to rent a surfboard consists of a $25 service fee and a $10 per hour rental fee. A person rents a surfboard for <i>t</i> hours and intends to spend a maximum of $75 to rent the surfboard. Which inequality represents this situation?',
        choices: ['10<i>t</i> ≤ 75', '10 + 25<i>t</i> ≤ 75', '25<i>t</i> ≤ 75', '25 + 10<i>t</i> ≤ 75'],
        answer: 'D',
        vocab: [['service fee', 'a one-time charge added to the cost', 'noun', ['service fee']], ['maximum', 'the greatest amount allowed', 'noun'], ['inequality', 'a math statement comparing two values using <, >, ≤, or ≥', 'noun']],
        hint: 'Which part is charged once, and which part is charged every hour? "Maximum of $75" means total ≤ 75.',
        why: '<p>Total cost = one-time fee + hourly rate × hours = <b>25 + 10<i>t</i></b>. "A maximum of $75" means the total can be at most 75, so the cost must be <b>≤ 75</b>: 25 + 10<i>t</i> ≤ 75.</p>',
        steps: ['One-time service fee: $25 (charged once, no <i>t</i>).', 'Hourly fee: $10 for each of <i>t</i> hours → 10<i>t</i>.', 'Total cost: 25 + 10<i>t</i>.', '"Maximum of $75" → total ≤ 75, so ' + calc('25 + 10<i>t</i> ≤ 75')],
        wrong: { A: 'Leaves out the $25 service fee.', B: 'Swaps the numbers: it charges $25 per hour and a $10 fee.', C: 'Uses $25 as the hourly rate and ignores the actual $10 hourly fee.' },
        tip: 'In cost models, the number multiplied by the variable is the per-unit rate; the constant is the one-time charge.'
      },
      {
        n: 4, skill: 'Nonlinear functions: transformations', domain: 'Advanced Math',
        figure: parab(2, -2, { w: 280, h: 250 }),
        prompt: 'The graph shown will be translated up 4 units. Which of the following will be the resulting graph?',
        choiceLayout: 'grid',
        choices: [
          '<span class="fig-inline">' + parab(2, 2, { alt: 'Parabola with vertex at (2, 2)' }) + '</span>',
          '<span class="fig-inline">' + parab(2, -6, { alt: 'Parabola with vertex at (2, negative 6)' }) + '</span>',
          '<span class="fig-inline">' + parab(-2, -2, { alt: 'Parabola with vertex at (negative 2, negative 2)' }) + '</span>',
          '<span class="fig-inline">' + parab(6, -2, { alt: 'Parabola with vertex at (6, negative 2)' }) + '</span>'
        ],
        answer: 'A',
        vocab: [['translated', 'moved without changing shape or orientation (shifted)', 'verb'], ['vertex', 'the turning point (lowest or highest point) of a parabola', 'noun'], ['parabola', 'the U-shaped graph of a quadratic function', 'noun']],
        hint: 'Find the vertex of the original graph. "Up 4" adds 4 to every <i>y</i>-coordinate and leaves <i>x</i> unchanged.',
        why: '<p>The original parabola has its vertex (lowest point) at <b>(2, −2)</b>. Translating <b>up 4 units</b> adds 4 to every <i>y</i>-value and leaves every <i>x</i>-value alone, so the new vertex is (2, −2 + 4) = <b>(2, 2)</b>. The shape and width stay the same. Graph A has its vertex at (2, 2).</p>',
        steps: ['Read the original vertex: (2, −2). (Check: it passes through (0, 2) and (4, 2).)', 'Up 4 → add 4 to <i>y</i>: (2, −2 + 4) = (2, 2).', 'Choose the graph with vertex (2, 2): <b>A</b>.'],
        wrong: { B: 'Vertex (2, −6): this is a translation <b>down</b> 4.', C: 'Vertex (−2, −2): this is a translation <b>left</b> 4.', D: 'Vertex (6, −2): this is a translation <b>right</b> 4.' },
        tip: 'Up/down shifts change <i>y</i> (the vertical position); left/right shifts change <i>x</i>. Track the vertex to see the shift quickly.'
      },
      {
        n: 5, skill: 'Linear equations in context', domain: 'Algebra',
        prompt: eq('<i>s</i> = 40 + 3<i>t</i>') + 'The equation gives the speed <i>s</i>, in miles per hour, of a certain car <i>t</i> seconds after it began to accelerate. What is the speed, in miles per hour, of the car 5 seconds after it began to accelerate?',
        choices: ['40', '43', '45', '55'],
        answer: 'D',
        vocab: [['accelerate', 'speed up', 'verb']],
        hint: 'Substitute <i>t</i> = 5.',
        why: '<p>Substitute <i>t</i> = 5 into the equation: <i>s</i> = 40 + 3(5) = 40 + 15 = <b>55</b> miles per hour.</p>',
        steps: ['Identify the input: <i>t</i> = 5 seconds.', calc('<i>s</i> = 40 + 3(5)'), calc('<i>s</i> = 40 + 15 = 55')],
        wrong: { A: '40 is the speed at <i>t</i> = 0 (when acceleration began).', B: '43 is the speed after only 1 second.', C: '45 adds 5 instead of 3 × 5 = 15.' },
        tip: 'In a linear model, the constant (40) is the starting value and the coefficient (3) is the change per unit of time.'
      },
      {
        n: 6, skill: 'Nonlinear functions', domain: 'Advanced Math', type: 'spr', accept: [77], answerText: '77',
        prompt: 'The function <i>f</i> is defined by <i>f</i>(<i>x</i>) = <i>x</i><sup>2</sup> + <i>x</i> + 71. What is the value of <i>f</i>(2)?',
        vocab: [['function', 'a rule that gives exactly one output for each input', 'noun']],
        hint: 'Replace every <i>x</i> with 2.',
        why: '<p>Evaluate by substituting 2 for every <i>x</i>: <i>f</i>(2) = 2<sup>2</sup> + 2 + 71 = 4 + 2 + 71 = <b>77</b>.</p>',
        steps: [calc('<i>f</i>(2) = (2)<sup>2</sup> + (2) + 71'), calc('= 4 + 2 + 71'), calc('= 77')],
        mistakes: ['Treating <i>x</i><sup>2</sup> as 2<i>x</i>. It happens to give the same value at <i>x</i> = 2 (because 2<sup>2</sup> = 2 · 2), but it fails for any other input, e.g. 3<sup>2</sup> = 9, not 6.', 'Forgetting the middle term (+ <i>x</i>) gives 75.'],
        tip: 'Use parentheses when substituting, especially with negatives: (−2)<sup>2</sup> = 4, but −2<sup>2</sup> = −4.'
      },
      {
        n: 7, skill: 'Linear inequalities in one or two variables', domain: 'Algebra', type: 'spr', accept: [25], answerText: '25',
        prompt: 'An event planner is planning a party. It costs the event planner a onetime fee of $35 to rent the venue and $10.25 per attendee. The event planner has a budget of $300. What is the greatest number of attendees possible without exceeding the budget?',
        vocab: [['venue', 'the place where an event happens', 'noun'], ['attendee', 'a person who goes to an event', 'noun'], ['budget', 'the amount of money available to spend', 'noun'], ['exceeding', 'going over a limit', 'verb']],
        hint: 'Write 35 + 10.25<i>n</i> ≤ 300 and solve. Attendees must be a whole number, so round <i>down</i>.',
        why: '<p>Let <i>n</i> be the number of attendees. The total cost is 35 + 10.25<i>n</i>, and it must not exceed 300. Solving gives <i>n</i> ≤ 25.85... Since you can\'t have part of a person, and rounding up to 26 would break the budget, the greatest possible number is <b>25</b>.</p>',
        steps: [calc('35 + 10.25<i>n</i> ≤ 300'), 'Subtract 35: ' + calc('10.25<i>n</i> ≤ 265'), 'Divide by 10.25: ' + calc('<i>n</i> ≤ 25.85...'), 'Largest whole number: <b>25</b>. Check: 35 + 10.25(25) = $291.25 ≤ $300 ✓, but 35 + 10.25(26) = $301.50 > $300 ✗.'],
        mistakes: ['Rounding 25.85 up to 26, which exceeds the budget.', 'Forgetting the $35 fee: 300 ÷ 10.25 ≈ 29.'],
        tip: 'With "maximum without exceeding," always round <i>down</i>, then check the next integer to be sure.'
      },
      {
        n: 8, skill: 'Probability and conditional probability', domain: 'Problem-Solving and Data Analysis',
        figure: FIG.table({ head: [[{ t: 'Mascot', rows: 2 }, { t: 'Grade level', span: 3 }, { t: 'Total', rows: 2 }], ['Sixth', 'Seventh', 'Eighth']], rows: [['Badger', 4, 9, 9, 22], ['Lion', 9, 2, 9, 20], ['Longhorn', 4, 6, 4, 14], ['Tiger', 6, 9, 9, 24], ['Total', 23, 26, 31, 80]], rowHead: true }),
        prompt: 'The table gives the distribution of votes for a new school mascot and grade level for 80 students.<br><br>If one of these students is selected at random, what is the probability of selecting a student whose vote for new mascot was for a lion?',
        choices: [F(1, 9), F(1, 5), F(1, 4), F(2, 3)],
        answer: 'C',
        vocab: [['probability', 'how likely something is: favorable outcomes ÷ total outcomes', 'noun'], ['at random', 'by chance, with every option equally likely', 'phrase', ['at random']], ['distribution', 'how values are spread across categories', 'noun']],
        hint: 'Probability = (number who voted Lion) ÷ (all students). Use the Lion row total.',
        why: '<p>Probability = favorable ÷ total. The Lion row total is <b>20</b> students, and the total number of students is <b>80</b>. So the probability is 20/80 = <b>1/4</b>.</p>',
        steps: ['Favorable outcomes: Lion total = 9 + 2 + 9 = 20.', 'Total outcomes: all 80 students.', calc('P(Lion) = ' + F(20, 80) + ' = ' + F(1, 4))],
        wrong: { A: '1/9 would come from a mistaken ratio such as 9 lion voters in one grade ÷ 80 ≈ 0.11, but that uses only one grade.', B: '1/5 = 16/80; no count in the table gives that.', D: '2/3 has no basis in the table; it may come from misreading the Lion row.' },
        tip: 'Before computing, identify which group is the denominator. "One of these students" = all 80.'
      },
      {
        n: 9, skill: 'Lines, angles, and triangles', domain: 'Geometry and Trigonometry',
        prompt: 'Triangles <i>ABC</i> and <i>DEF</i> are congruent, where <i>A</i> corresponds to <i>D</i>, and <i>B</i> and <i>E</i> are right angles. The measure of angle <i>A</i> is 18°. What is the measure of angle <i>F</i>?',
        choices: ['18°', '72°', '90°', '162°'],
        answer: 'B',
        vocab: [['congruent', 'exactly the same shape and size', 'adj.'], ['corresponds', 'matches up with (in the same position)', 'verb'], ['right angle', 'an angle of exactly 90°', 'noun', ['right angles', 'right angle']]],
        hint: 'Angle F corresponds to angle C. Find angle C using the 180° angle sum.',
        why: '<p>In congruent triangles, corresponding angles are equal. A ↔ D, B ↔ E, so <b>C ↔ F</b>. In triangle ABC: A = 18°, B = 90°, so C = 180° − 90° − 18° = <b>72°</b>. Therefore F = 72°.</p>',
        steps: ['Match vertices: A→D, B→E, so C→F.', 'Angle sum in triangle ABC: ' + calc('18° + 90° + ∠C = 180°'), calc('∠C = 72°'), 'Corresponding angles are equal: ∠F = ∠C = 72°.'],
        wrong: { A: '18° is angle A (and D), not angle F.', C: '90° is the right angle at B and E.', D: '162° is the <i>sum</i> of angles E and F (90° + 72°), not angle F by itself. (It also equals 180° − 18°, which forgets the right angle.)' },
        tip: 'Write the correspondence (ABC ↔ DEF) and match letters by position. The third letters (C and F) correspond.'
      },
      {
        n: 10, skill: 'Linear equations in one variable', domain: 'Algebra',
        prompt: 'If 4<i>x</i> + 2 = 12, what is the value of 16<i>x</i> + 8?',
        choices: ['40', '48', '56', '60'],
        answer: 'B',
        vocab: [['expression', 'a combination of numbers, variables, and operations (no equals sign)', 'noun']],
        hint: 'Compare 16<i>x</i> + 8 with 4<i>x</i> + 2. What do you multiply by?',
        why: '<p>Notice that 16<i>x</i> + 8 = <b>4(4<i>x</i> + 2)</b>. Since 4<i>x</i> + 2 = 12, the expression equals 4 × 12 = <b>48</b>. No need to find <i>x</i>.</p>',
        steps: ['Factor: ' + calc('16<i>x</i> + 8 = 4(4<i>x</i> + 2)'), 'Substitute: ' + calc('4(12) = 48'), 'Check by solving: 4<i>x</i> = 10, <i>x</i> = 2.5, so 16(2.5) + 8 = 40 + 8 = 48 ✓.'],
        wrong: { A: '40 is 16<i>x</i> alone (16 × 2.5), forgetting the + 8.', C: '56 might come from 4 × 12 + 8, adding the 8 twice.', D: '60 might come from 5 × 12, using the wrong multiplier.' },
        tip: 'When asked for an expression rather than <i>x</i>, look for a multiple of the given expression first; it saves time and avoids fraction errors.'
      },
      {
        n: 11, skill: 'Equivalent expressions', domain: 'Advanced Math',
        prompt: 'Which expression is equivalent to (<i>m</i><sup>4</sup><i>q</i><sup>4</sup><i>z</i><sup>−1</sup>)(<i>mq</i><sup>5</sup><i>z</i><sup>3</sup>), where <i>m</i>, <i>q</i>, and <i>z</i> are positive?',
        choices: ['<i>m</i><sup>4</sup><i>q</i><sup>20</sup><i>z</i><sup>−3</sup>', '<i>m</i><sup>5</sup><i>q</i><sup>9</sup><i>z</i><sup>2</sup>', '<i>m</i><sup>6</sup><i>q</i><sup>8</sup><i>z</i><sup>−1</sup>', '<i>m</i><sup>20</sup><i>q</i><sup>12</sup><i>z</i><sup>−2</sup>'],
        answer: 'B',
        vocab: [['equivalent', 'equal in value for all allowed inputs', 'adj.'], ['exponent', 'the small raised number showing repeated multiplication', 'noun']],
        hint: 'When multiplying powers with the same base, <b>add</b> the exponents. Remember <i>m</i> by itself is <i>m</i><sup>1</sup>.',
        why: '<p>Use the product rule <i>a</i><sup>p</sup> · <i>a</i><sup>q</sup> = <i>a</i><sup>p+q</sup> for each base:</p><ul><li><i>m</i>: 4 + 1 = 5</li><li><i>q</i>: 4 + 5 = 9</li><li><i>z</i>: −1 + 3 = 2</li></ul><p>Result: <b><i>m</i><sup>5</sup><i>q</i><sup>9</sup><i>z</i><sup>2</sup></b>.</p>',
        steps: ['Group like bases: (<i>m</i><sup>4</sup> · <i>m</i><sup>1</sup>)(<i>q</i><sup>4</sup> · <i>q</i><sup>5</sup>)(<i>z</i><sup>−1</sup> · <i>z</i><sup>3</sup>).', 'Add exponents: <i>m</i><sup>5</sup>, <i>q</i><sup>9</sup>, <i>z</i><sup>2</sup>.', calc('<i>m</i><sup>5</sup><i>q</i><sup>9</sup><i>z</i><sup>2</sup>')],
        wrong: { A: 'Multiplies exponents for <i>q</i> (4 × 5 = 20) and <i>z</i> (−1 × 3 = −3) instead of adding, and misses <i>m</i>\'s second factor.', C: 'Mismatched addition: the exponents don\'t come from adding like bases.', D: 'Multiplies exponents throughout; multiplying is for a power raised to a power, not for a product.' },
        tip: 'Product of powers: add. Power of a power: multiply. Don\'t forget invisible exponents of 1.'
      },
      {
        n: 12, skill: 'Linear functions', domain: 'Algebra',
        prompt: 'An airplane descends from an altitude of 9,500 feet to 5,000 feet at a constant rate of 400 feet per minute. What type of function best models the relationship between the descending airplane\'s altitude and time?',
        choices: ['Decreasing exponential', 'Decreasing linear', 'Increasing exponential', 'Increasing linear'],
        answer: 'B',
        vocab: [['descends', 'moves downward', 'verb'], ['altitude', 'height above sea level or the ground', 'noun'], ['constant rate', 'the same amount of change in each unit of time', 'noun', ['constant rate']], ['exponential', 'changing by the same percent (factor) each time period', 'adj.']],
        hint: '"Constant rate of 400 feet per minute" = same <i>amount</i> each minute. Is altitude going up or down?',
        why: '<p>Two features decide the answer. <b>Constant rate</b> (the same 400 feet each minute) means the change is by a fixed <i>amount</i>, which is <b>linear</b> (exponential change is by a fixed <i>percent</i>). The plane is <b>descending</b>, so altitude goes down over time: <b>decreasing</b>. Model: altitude = 9,500 − 400<i>t</i>.</p>',
        steps: ['Same amount of change per minute → linear.', 'Altitude falls as time passes → decreasing.', 'Model: <i>A</i>(<i>t</i>) = 9,500 − 400<i>t</i>, a decreasing linear function.'],
        wrong: { A: 'Exponential decay shrinks by the same <i>percent</i> each minute, not the same number of feet.', C: 'Altitude decreases, and the change is not by a percent.', D: 'Linear is right, but altitude decreases, not increases.' },
        tip: 'Linear = add/subtract the same amount each step. Exponential = multiply by the same factor each step.'
      },
      {
        n: 13, skill: 'Systems of two linear equations', domain: 'Algebra', type: 'spr', accept: [1], answerText: '1',
        prompt: eq('3<i>x</i> + 6 = 4<i>y</i><br>3<i>x</i> + 4 = 2<i>y</i>') + 'The solution to the given system of equations is (<i>x</i>, <i>y</i>). What is the value of <i>y</i>?',
        vocab: [['elimination', 'solving a system by adding or subtracting equations to cancel a variable', 'noun']],
        hint: 'Both equations contain 3<i>x</i>. Subtract one equation from the other.',
        why: '<p>Both equations have the same 3<i>x</i> term, so subtracting eliminates <i>x</i> immediately:</p><p>(3<i>x</i> + 6) − (3<i>x</i> + 4) = 4<i>y</i> − 2<i>y</i> → 2 = 2<i>y</i> → <b><i>y</i> = 1</b>.</p>',
        steps: ['Subtract equation 2 from equation 1: ' + calc('(3<i>x</i> + 6) − (3<i>x</i> + 4) = 4<i>y</i> − 2<i>y</i>'), calc('2 = 2<i>y</i>'), calc('<i>y</i> = 1'), 'Check: 3<i>x</i> + 4 = 2(1) → <i>x</i> = −2/3. Then 3(−2/3) + 6 = 4 = 4(1) ✓.'],
        mistakes: ['Solving for <i>x</i> (−2/3) and entering that instead of <i>y</i>.', 'Sign errors when subtracting: 6 − 4 = 2, not 10.'],
        tip: 'Look for identical terms before substituting. Elimination is often a one-step solution.'
      },
      {
        n: 14, skill: 'Nonlinear functions: transformations', domain: 'Advanced Math', type: 'spr', accept: [76], answerText: '76',
        prompt: 'The function <i>f</i> is defined by <i>f</i>(<i>x</i>) = (<i>x</i> − 6)(<i>x</i> − 2)(<i>x</i> + 6). In the <i>xy</i>-plane, the graph of <i>y</i> = <i>g</i>(<i>x</i>) is the result of translating the graph of <i>y</i> = <i>f</i>(<i>x</i>) up 4 units. What is the value of <i>g</i>(0)?',
        vocab: [['translating', 'shifting a graph without changing its shape', 'verb']],
        hint: 'Translating up 4 means <i>g</i>(<i>x</i>) = <i>f</i>(<i>x</i>) + 4. Find <i>f</i>(0) first.',
        why: '<p>Shifting a graph up 4 adds 4 to every output: <i>g</i>(<i>x</i>) = <i>f</i>(<i>x</i>) + 4. Compute <i>f</i>(0) = (0 − 6)(0 − 2)(0 + 6) = (−6)(−2)(6) = 72. So <i>g</i>(0) = 72 + 4 = <b>76</b>.</p>',
        steps: [calc('<i>f</i>(0) = (−6)(−2)(6)'), calc('(−6)(−2) = 12, and 12 × 6 = 72'), 'Up 4: ' + calc('<i>g</i>(0) = 72 + 4 = 76')],
        mistakes: ['Sign error: (−6)(−2) is +12, not −12. A sign slip gives −72 + 4 = −68.', 'Shifting the input instead: <i>f</i>(0 + 4) or <i>f</i>(0 − 4) describes a horizontal shift, not "up."'],
        tip: 'Vertical shift: add to the output, <i>f</i>(<i>x</i>) + <i>k</i>. Horizontal shift: change the input, <i>f</i>(<i>x</i> − <i>h</i>).'
      },
      {
        n: 15, skill: 'Nonlinear functions in context', domain: 'Advanced Math',
        prompt: 'The function <i>f</i>(<i>w</i>) = 6<i>w</i><sup>2</sup> gives the area of a rectangle, in square feet (ft<sup>2</sup>), if its width is <i>w</i> ft and its length is 6 times its width. Which of the following is the best interpretation of <i>f</i>(14) = 1,176?',
        choices: ['If the width of the rectangle is 14 ft, then the area of the rectangle is 1,176 ft<sup>2</sup>.', 'If the width of the rectangle is 14 ft, then the length of the rectangle is 1,176 ft.', 'If the width of the rectangle is 1,176 ft, then the length of the rectangle is 14 ft.', 'If the width of the rectangle is 1,176 ft, then the area of the rectangle is 14 ft<sup>2</sup>.'],
        answer: 'A',
        vocab: [['interpretation', 'an explanation of what something means', 'noun']],
        hint: 'In <i>f</i>(<i>w</i>), the input <i>w</i> is the width and the output <i>f</i>(<i>w</i>) is the area.',
        why: '<p>The input of <i>f</i> is <i>w</i>, the <b>width</b>; the output is the <b>area</b>. So <i>f</i>(14) = 1,176 means: width 14 ft → area 1,176 ft<sup>2</sup>. Check: length = 6 × 14 = 84 ft, and 14 × 84 = 1,176 ✓.</p>',
        steps: ['Input (inside parentheses): 14 = width in feet.', 'Output: 1,176 = area in square feet.', 'Verify: 6(14)<sup>2</sup> = 6(196) = 1,176 ✓.'],
        wrong: { B: 'The output is area, not length. The length would be 6 × 14 = 84 ft.', C: 'Swaps input and output and calls the output a length.', D: 'Swaps input and output.' },
        tip: '<i>f</i>(input) = output. Name the units of each to interpret function notation correctly.'
      },
      {
        n: 16, skill: 'Nonlinear functions: exponential models', domain: 'Advanced Math',
        prompt: 'The number of bacteria in a liquid medium doubles every day. There are 44,000 bacteria in the liquid medium at the start of an observation. Which of the following represents the number of bacteria, <i>y</i>, in the liquid medium <i>t</i> days after the start of the observation?',
        choices: ['<i>y</i> = ' + F(1, 2) + '(44,000)<sup><i>t</i></sup>', '<i>y</i> = 2(44,000)<sup><i>t</i></sup>', '<i>y</i> = 44,000(' + F(1, 2) + ')<sup><i>t</i></sup>', '<i>y</i> = 44,000(2)<sup><i>t</i></sup>'],
        answer: 'D',
        vocab: [['medium', 'a substance in which something (like bacteria) grows', 'noun'], ['doubles', 'becomes twice as large', 'verb']],
        hint: 'Exponential growth: <i>y</i> = (starting amount)(growth factor)<sup><i>t</i></sup>. What is the start? What multiplies each day?',
        why: '<p>Exponential models have the form <i>y</i> = <i>a</i>(<i>b</i>)<sup><i>t</i></sup>, where <i>a</i> is the starting amount and <i>b</i> is the factor per time period. The start is <b>44,000</b>, and "doubles every day" means multiply by <b>2</b> each day. So <b><i>y</i> = 44,000(2)<sup><i>t</i></sup></b>. Check: at <i>t</i> = 0, <i>y</i> = 44,000 ✓; at <i>t</i> = 1, <i>y</i> = 88,000 ✓.</p>',
        steps: ['Initial value <i>a</i> = 44,000.', 'Doubling → growth factor <i>b</i> = 2.', calc('<i>y</i> = 44,000(2)<sup><i>t</i></sup>')],
        wrong: { A: 'Raises 44,000 to the power <i>t</i>, which grows absurdly fast, and halves it.', B: 'Also raises 44,000 to the power <i>t</i>; at <i>t</i> = 0 it gives 2, not 44,000.', C: 'A factor of 1/2 means the population halves each day (decay).' },
        tip: 'Plug in <i>t</i> = 0 to check the starting value; it eliminates A and B instantly.'
      },
      {
        n: 17, skill: 'Nonlinear functions: exponential models', domain: 'Advanced Math',
        figure: '<div style="display:flex;justify-content:center">' + tbl(['x', 'h(x)'], [[0, '1.23'], [2, '1.54'], [4, '1.94']]) + '</div>',
        prompt: 'The table shows the exponential relationship between the number of years, <i>x</i>, since Hana started training in pole vault, and the estimated height <i>h</i>(<i>x</i>), in meters, of her best pole vault for that year. Which of the following functions best represents this relationship, where <i>x</i> ≤ 4?',
        choices: ['<i>h</i>(<i>x</i>) = 1.12(0.23)<sup><i>x</i></sup>', '<i>h</i>(<i>x</i>) = 1.12(1.23)<sup><i>x</i></sup>', '<i>h</i>(<i>x</i>) = 1.23(0.12)<sup><i>x</i></sup>', '<i>h</i>(<i>x</i>) = 1.23(1.12)<sup><i>x</i></sup>'],
        answer: 'D',
        vocab: [['exponential relationship', 'a pattern where the output is multiplied by the same factor for equal steps in the input', 'noun', ['exponential relationship']]],
        hint: 'At <i>x</i> = 0, <i>h</i> = 1.23, so the coefficient is 1.23. The heights are increasing, so the base must be greater than 1.',
        why: '<p>For <i>h</i>(<i>x</i>) = <i>a</i>(<i>b</i>)<sup><i>x</i></sup>, plugging in <i>x</i> = 0 gives <i>h</i>(0) = <i>a</i>. The table says <i>h</i>(0) = 1.23, so <b><i>a</i> = 1.23</b> (eliminates A and B). The values increase, so <b><i>b</i> > 1</b> (eliminates C). Check D: 1.23(1.12)<sup>2</sup> = 1.23(1.2544) ≈ 1.54 ✓ and 1.23(1.12)<sup>4</sup> ≈ 1.94 ✓.</p>',
        steps: ['<i>x</i> = 0: ' + calc('<i>h</i>(0) = <i>a</i>(<i>b</i>)<sup>0</sup> = <i>a</i> = 1.23'), 'Growth factor over 2 years: 1.54 ÷ 1.23 ≈ 1.252, so per year <i>b</i> = √1.252 ≈ 1.12.', 'Check <i>x</i> = 4: 1.23(1.12)<sup>4</sup> = 1.23(1.5735) ≈ 1.94 ✓.'],
        wrong: { A: 'Starting value 1.12 is wrong, and base 0.23 < 1 would mean decay.', B: 'Starting value 1.12 is wrong; <i>h</i>(0) would be 1.12, not 1.23.', C: 'Base 0.12 < 1 would make the height shrink rapidly.' },
        tip: 'Two quick filters for exponential choices: <i>f</i>(0) gives the coefficient; growth needs base > 1, decay needs 0 < base < 1.'
      },
      {
        n: 18, skill: 'Linear functions', domain: 'Algebra',
        prompt: 'The function <i>h</i> is defined by <i>h</i>(<i>x</i>) = 4<i>x</i> + 28. The graph of <i>y</i> = <i>h</i>(<i>x</i>) in the <i>xy</i>-plane has an <i>x</i>-intercept at (<i>a</i>, 0) and a <i>y</i>-intercept at (0, <i>b</i>), where <i>a</i> and <i>b</i> are constants. What is the value of <i>a</i> + <i>b</i>?',
        choices: ['21', '28', '32', '35'],
        answer: 'A',
        vocab: [['x-intercept', 'where a graph crosses the x-axis (y = 0)', 'noun', ['x-intercept']], ['y-intercept', 'where a graph crosses the y-axis (x = 0)', 'noun', ['y-intercept']], ['constants', 'fixed numbers that do not change', 'noun']],
        hint: '<i>x</i>-intercept: set <i>h</i>(<i>x</i>) = 0. <i>y</i>-intercept: plug in <i>x</i> = 0.',
        why: '<p><b><i>y</i>-intercept:</b> <i>h</i>(0) = 28, so <i>b</i> = 28.<br><b><i>x</i>-intercept:</b> 4<i>a</i> + 28 = 0 → <i>a</i> = −7.<br>So <i>a</i> + <i>b</i> = −7 + 28 = <b>21</b>.</p>',
        steps: ['<i>b</i>: ' + calc('<i>h</i>(0) = 4(0) + 28 = 28'), '<i>a</i>: ' + calc('4<i>a</i> + 28 = 0 → <i>a</i> = −7'), calc('<i>a</i> + <i>b</i> = −7 + 28 = 21')],
        wrong: { B: '28 is just <i>b</i>, forgetting to add <i>a</i>.', C: '32 uses <i>a</i> = 4 (the slope) instead of the <i>x</i>-intercept.', D: '35 uses <i>a</i> = +7, a sign error when solving 4<i>a</i> = −28.' },
        tip: 'Intercepts: set the <i>other</i> variable to zero. <i>x</i>-intercept → <i>y</i> = 0; <i>y</i>-intercept → <i>x</i> = 0.'
      },
      {
        n: 19, skill: 'Linear inequalities in one or two variables', domain: 'Algebra',
        prompt: eq('<i>y</i> &lt; 5<i>x</i> + 6') + 'For which of the following tables are all the values of <i>x</i> and their corresponding values of <i>y</i> solutions to the given inequality?',
        choiceLayout: 'grid',
        choices: [tbl(['x', 'y'], [[3, 17], [5, 27], [7, 37]]), tbl(['x', 'y'], [[3, 17], [5, 35], [7, 37]]), tbl(['x', 'y'], [[3, 25], [5, 35], [7, 45]]), tbl(['x', 'y'], [[3, 21], [5, 31], [7, 41]])],
        answer: 'A',
        vocab: [['inequality', 'a statement that one quantity is less than or greater than another', 'noun']],
        hint: 'Compute 5<i>x</i> + 6 for <i>x</i> = 3, 5, 7. Each <i>y</i> must be strictly less than that.',
        why: '<p>Compute the boundary 5<i>x</i> + 6 for each <i>x</i>: <i>x</i> = 3 → 21; <i>x</i> = 5 → 31; <i>x</i> = 7 → 41. Each <i>y</i> must be <b>strictly less</b> than these. Table A: 17 < 21 ✓, 27 < 31 ✓, 37 < 41 ✓. All three work.</p>',
        steps: ['Boundary values: 5(3) + 6 = 21, 5(5) + 6 = 31, 5(7) + 6 = 41.', 'Table A: 17 < 21, 27 < 31, 37 < 41 → all true ✓.', 'Table B fails at <i>x</i> = 5 (35 is not < 31); C fails everywhere; D has <i>y</i> equal to the boundary (21 = 21), which is not "<".'],
        wrong: { B: 'At <i>x</i> = 5, <i>y</i> = 35 is not less than 31.', C: 'Every <i>y</i> is greater than the boundary: 25 > 21, 35 > 31, 45 > 41.', D: 'These points lie exactly <i>on</i> the line <i>y</i> = 5<i>x</i> + 6. Because the symbol is strict (<), equality does not count.' },
        tip: 'Strict inequalities (< or >) exclude the boundary. Points exactly on the line are traps.'
      },
      {
        n: 20, skill: 'Systems of two linear equations', domain: 'Algebra', type: 'spr', accept: [35], answerText: '35',
        prompt: eq('<i>y</i> = 4<i>x</i> + 1<br>4<i>y</i> = 15<i>x</i> − 8') + 'The solution to the given system of equations is (<i>x</i>, <i>y</i>). What is the value of <i>x</i> − <i>y</i>?',
        vocab: [['substitution', 'replacing a variable with an equivalent expression', 'noun']],
        hint: 'Substitute 4<i>x</i> + 1 for <i>y</i> in the second equation.',
        why: '<p>Substitute <i>y</i> = 4<i>x</i> + 1 into 4<i>y</i> = 15<i>x</i> − 8: 4(4<i>x</i> + 1) = 15<i>x</i> − 8 → 16<i>x</i> + 4 = 15<i>x</i> − 8 → <i>x</i> = −12. Then <i>y</i> = 4(−12) + 1 = −47. So <i>x</i> − <i>y</i> = −12 − (−47) = <b>35</b>.</p>',
        steps: [calc('4(4<i>x</i> + 1) = 15<i>x</i> − 8'), calc('16<i>x</i> + 4 = 15<i>x</i> − 8'), calc('<i>x</i> = −12'), calc('<i>y</i> = 4(−12) + 1 = −47'), calc('<i>x</i> − <i>y</i> = −12 + 47 = 35')],
        mistakes: ['Sign slip: −12 − (−47) is −12 + 47 = 35, not −59.', 'Distributing incorrectly: 4(4<i>x</i> + 1) = 16<i>x</i> + 4, not 16<i>x</i> + 1.'],
        tip: 'Subtracting a negative is adding. Write the double negative explicitly to avoid mistakes.'
      },
      {
        n: 21, skill: 'Right triangles and the Pythagorean theorem', domain: 'Geometry and Trigonometry', type: 'spr', accept: [113], answerText: '113',
        prompt: 'A right triangle has legs with lengths of 24 centimeters and 21 centimeters. If the length of this triangle\'s hypotenuse, in centimeters, can be written in the form 3' + R('<i>d</i>') + ', where <i>d</i> is an integer, what is the value of <i>d</i>?',
        vocab: [['legs', 'the two sides of a right triangle that form the right angle', 'noun'], ['hypotenuse', 'the longest side of a right triangle, opposite the right angle', 'noun'], ['integer', 'a whole number (positive, negative, or zero)', 'noun']],
        hint: 'Use <i>c</i><sup>2</sup> = <i>a</i><sup>2</sup> + <i>b</i><sup>2</sup>, then pull a factor of 9 out of the square root.',
        why: '<p>By the Pythagorean theorem, <i>c</i><sup>2</sup> = 24<sup>2</sup> + 21<sup>2</sup> = 576 + 441 = 1,017. So <i>c</i> = √1,017. Factor out a perfect square: 1,017 = 9 × 113, so √1,017 = √9 · √113 = 3√113. Therefore <b><i>d</i> = 113</b>.</p>',
        steps: [calc('<i>c</i><sup>2</sup> = 24<sup>2</sup> + 21<sup>2</sup> = 576 + 441 = 1,017'), calc('1,017 = 9 × 113'), calc('<i>c</i> = ' + R('9 × 113') + ' = 3' + R('113')), '<i>d</i> = 113.'],
        mistakes: ['Entering 1,017 (forgetting to factor out the 3).', 'Adding the legs (45) instead of their squares.'],
        tip: 'Both legs here are multiples of 3 (24 = 3·8, 21 = 3·7), so the hypotenuse is 3√(8² + 7²) = 3√113. Spotting common factors saves time.'
      },
      {
        n: 22, skill: 'Area and volume', domain: 'Geometry and Trigonometry',
        prompt: 'The floor of a ballroom has an area of 600 square meters. An architect creates a scale model of the floor of the ballroom, where the length of each side of the model is ' + F(1, 10) + ' times the length of the corresponding side of the actual floor of the ballroom. What is the area, in square meters, of the scale model?',
        choices: ['6', '10', '60', '150'],
        answer: 'A',
        vocab: [['scale model', 'a smaller (or larger) copy with all lengths multiplied by the same factor', 'noun', ['scale model']], ['corresponding', 'matching; in the same position', 'adj.']],
        hint: 'If lengths are multiplied by <i>k</i>, areas are multiplied by <i>k</i><sup>2</sup>.',
        why: '<p>When every length is scaled by a factor <i>k</i>, area is scaled by <b><i>k</i><sup>2</sup></b> (area has two dimensions). Here <i>k</i> = 1/10, so area scales by (1/10)<sup>2</sup> = 1/100. The model\'s area is 600 × 1/100 = <b>6</b> square meters.</p>',
        steps: ['Length factor: <i>k</i> = 1/10.', 'Area factor: ' + calc('<i>k</i><sup>2</sup> = ' + F(1, 100)), calc('600 × ' + F(1, 100) + ' = 6')],
        wrong: { B: '10 has no direct connection; it may come from misapplying the scale factor.', C: '60 multiplies the area by 1/10, treating area like a length.', D: '150 might come from dividing by 4; no relation to the scale factor.' },
        tip: 'Scale factor rule: lengths × <i>k</i>, areas × <i>k</i><sup>2</sup>, volumes × <i>k</i><sup>3</sup>.'
      },
      {
        n: 23, skill: 'Circles', domain: 'Geometry and Trigonometry',
        prompt: 'Which of the following equations represents a circle in the <i>xy</i>-plane that intersects the <i>y</i>-axis at exactly one point?',
        choices: ['(<i>x</i> − 8)<sup>2</sup> + (<i>y</i> − 8)<sup>2</sup> = 16', '(<i>x</i> − 8)<sup>2</sup> + (<i>y</i> − 4)<sup>2</sup> = 16', '(<i>x</i> − 4)<sup>2</sup> + (<i>y</i> − 9)<sup>2</sup> = 16', '<i>x</i><sup>2</sup> + (<i>y</i> − 9)<sup>2</sup> = 16'],
        answer: 'C',
        vocab: [['intersects', 'crosses or meets', 'verb'], ['radius', 'the distance from the center of a circle to its edge', 'noun'], ['tangent', 'touching a line at exactly one point', 'adj.']],
        hint: 'All four circles have radius 4. A circle touches the <i>y</i>-axis at exactly one point when its center is exactly 4 units from the <i>y</i>-axis.',
        why: '<p>In (<i>x</i> − <i>h</i>)<sup>2</sup> + (<i>y</i> − <i>k</i>)<sup>2</sup> = <i>r</i><sup>2</sup>, the center is (<i>h</i>, <i>k</i>) and the radius is <i>r</i>. Every choice has <i>r</i><sup>2</sup> = 16, so <i>r</i> = 4. A circle meets the <i>y</i>-axis at exactly one point (it is <b>tangent</b>) when the distance from the center to the <i>y</i>-axis, which is |<i>h</i>|, equals the radius. Only C has |<i>h</i>| = 4: center (4, 9).</p>',
        steps: ['Radius of each circle: √16 = 4.', 'Distance from center to <i>y</i>-axis = |<i>h</i>|: A: 8, B: 8, C: 4, D: 0.', '|<i>h</i>| = 4 = <i>r</i> → tangent to the <i>y</i>-axis → exactly one intersection point: <b>C</b>. (It touches at (0, 9).)'],
        wrong: { A: 'Center (8, 8) is 8 units from the <i>y</i>-axis, more than the radius, so the circle never reaches it (0 points).', B: 'Center (8, 4) is 8 units from the <i>y</i>-axis, so it never reaches it. It is exactly 4 units above the <i>x</i>-axis, so this circle touches the <b><i>x</i>-axis</b> at one point. The trap is mixing up the axes.', D: 'Center (0, 9) is on the <i>y</i>-axis, so the circle crosses it twice, at (0, 5) and (0, 13).' },
        tip: 'Distance from center to axis vs. radius: greater → 0 points, equal → 1 point, less → 2 points.'
      },
      {
        n: 24, skill: 'Lines, angles, and triangles', domain: 'Geometry and Trigonometry',
        prompt: 'In triangles <i>ABC</i> and <i>DEF</i>, angles <i>B</i> and <i>E</i> each have measure 27° and angles <i>C</i> and <i>F</i> each have measure 41°. Which additional piece of information is sufficient to determine whether triangle <i>ABC</i> is congruent to triangle <i>DEF</i>?',
        choices: ['The measure of angle <i>A</i>', 'The length of side <i>AB</i>', 'The lengths of sides <i>BC</i> and <i>EF</i>', 'No additional information is necessary.'],
        answer: 'C',
        vocab: [['sufficient', 'enough', 'adj.'], ['congruent', 'identical in shape and size', 'adj.'], ['similar', 'same shape but possibly different size', 'adj.']],
        hint: 'Two matching angles already make the triangles <i>similar</i>. To decide congruence you must compare the size of one pair of corresponding sides.',
        why: '<p>Since two pairs of angles match, the third angles match too (A = D = 112°), so the triangles are <b>similar</b>: same shape, possibly different sizes. To determine whether they are also <b>congruent</b>, you must compare a pair of <b>corresponding sides</b>. Side <i>BC</i> (between angles B and C) corresponds to side <i>EF</i> (between angles E and F). Knowing both lengths tells you: equal → congruent (ASA); unequal → not congruent.</p>',
        steps: ['Angle sum: ∠A = ∠D = 180° − 27° − 41° = 112°. All angles match → similar triangles.', 'Similar triangles are congruent only if a pair of corresponding sides is equal.', 'BC ↔ EF (both are between the 27° and 41° angles). Knowing both lengths settles the question.'],
        wrong: { A: 'Angle A is already known (112°) from the angle sum, and angles alone can never establish congruence.', B: 'Knowing only <i>AB</i> tells you nothing about triangle DEF\'s size, so you cannot compare.', D: 'Matching angles only guarantee similarity; one triangle could be a scaled-up copy of the other.' },
        tip: 'AAA proves similarity, not congruence. You always need at least one pair of equal corresponding sides.'
      },
      {
        n: 25, skill: 'Percentages', domain: 'Problem-Solving and Data Analysis',
        prompt: 'The result of increasing the quantity <i>x</i> by 1,800% is 684. What is the value of <i>x</i>?',
        choices: ['12,996', '12,312', '38', '36'],
        answer: 'D',
        vocab: [['increasing by a percent', 'adding that percent of the original to the original', 'phrase', ['increasing']]],
        hint: 'Increasing by 1,800% means adding 18<i>x</i> to <i>x</i>. So the result is 19<i>x</i>.',
        why: '<p>Increasing <i>x</i> by 1,800% means adding 1,800% of <i>x</i> (which is 18<i>x</i>) to the original <i>x</i>: <i>x</i> + 18<i>x</i> = <b>19<i>x</i></b>. Set 19<i>x</i> = 684 → <i>x</i> = <b>36</b>.</p>',
        steps: ['1,800% as a decimal: 18.', 'Increase by 1,800%: ' + calc('<i>x</i> + 18<i>x</i> = 19<i>x</i>'), calc('19<i>x</i> = 684 → <i>x</i> = 36'), 'Check: 36 + 18(36) = 36 + 648 = 684 ✓.'],
        wrong: { A: '12,996 = 684 × 19: multiplies instead of divides.', B: '12,312 = 684 × 18: multiplies by the percent instead of solving.', C: '38 = 684 ÷ 18: treats the result as 1,800% <i>of</i> <i>x</i> (18<i>x</i>) and forgets to include the original <i>x</i>.' },
        tip: '"Increase by <i>p</i>%" multiplies by (1 + <i>p</i>/100). "Is <i>p</i>% of" multiplies by <i>p</i>/100. The difference is the trap in choice C.'
      },
      {
        n: 26, skill: 'Linear functions', domain: 'Algebra',
        prompt: 'A window repair specialist charges $220 for the first two hours of repair plus an hourly fee for each additional hour. The total cost for 5 hours of repair is $400. Which function <i>f</i> gives the total cost, in dollars, for <i>x</i> hours of repair, where <i>x</i> ≥ 2?',
        choices: ['<i>f</i>(<i>x</i>) = 60<i>x</i> + 100', '<i>f</i>(<i>x</i>) = 60<i>x</i> + 220', '<i>f</i>(<i>x</i>) = 80<i>x</i>', '<i>f</i>(<i>x</i>) = 80<i>x</i> + 220'],
        answer: 'A',
        vocab: [['additional', 'extra; beyond the first amount', 'adj.']],
        hint: '5 hours = 2 base hours + 3 additional hours. What does each additional hour cost? Then test the choices at <i>x</i> = 2 and <i>x</i> = 5.',
        why: '<p>For 5 hours, $400 − $220 = $180 covers the 3 additional hours, so the hourly fee is $180 ÷ 3 = <b>$60</b>. For <i>x</i> hours there are (<i>x</i> − 2) additional hours: <i>f</i>(<i>x</i>) = 220 + 60(<i>x</i> − 2) = 220 + 60<i>x</i> − 120 = <b>60<i>x</i> + 100</b>.</p>',
        steps: ['Additional hours in a 5-hour job: 5 − 2 = 3.', 'Cost of those 3 hours: 400 − 220 = 180 → 180 ÷ 3 = $60 per hour.', calc('<i>f</i>(<i>x</i>) = 220 + 60(<i>x</i> − 2) = 60<i>x</i> + 100'), 'Check: <i>f</i>(2) = 220 ✓, <i>f</i>(5) = 400 ✓.'],
        wrong: { B: '60<i>x</i> + 220 gives <i>f</i>(2) = 340, which would mean $340 (not $220) for the first two hours, and <i>f</i>(5) = 520, not 400.', C: '80<i>x</i> matches <i>f</i>(5) = 400, but it gives <i>f</i>(2) = 160 (not 220) and implies an $80 hourly rate instead of $60.', D: '80<i>x</i> + 220 gives <i>f</i>(2) = 380 instead of 220 and <i>f</i>(5) = 620 instead of 400.' },
        tip: 'Test answer choices with two known points (here <i>x</i> = 2 → 220 and <i>x</i> = 5 → 400). Only the right model passes both.'
      },
      {
        n: 27, skill: 'Nonlinear equations: quadratics', domain: 'Advanced Math', type: 'spr', accept: [29 / 3], answerText: '29/3 (or 9.666, 9.667)',
        prompt: eq('<i>x</i>(<i>x</i> + 1) − 56 = 4<i>x</i>(<i>x</i> − 7)') + 'What is the sum of the solutions to the given equation?',
        vocab: [['solutions', 'values of the variable that make the equation true', 'noun'], ['quadratic', 'an equation where the highest power of the variable is 2', 'adj.']],
        hint: 'Expand both sides and move everything to one side to get <i>ax</i><sup>2</sup> + <i>bx</i> + <i>c</i> = 0. The sum of the solutions is −<i>b</i>/<i>a</i>.',
        why: '<p>Expand: <i>x</i><sup>2</sup> + <i>x</i> − 56 = 4<i>x</i><sup>2</sup> − 28<i>x</i>. Move everything to the right side: 0 = 3<i>x</i><sup>2</sup> − 29<i>x</i> + 56. For <i>ax</i><sup>2</sup> + <i>bx</i> + <i>c</i> = 0, the sum of the solutions is <b>−<i>b</i>/<i>a</i></b> = −(−29)/3 = <b>29/3</b>.</p><p>Check by factoring: 3<i>x</i><sup>2</sup> − 29<i>x</i> + 56 = (3<i>x</i> − 8)(<i>x</i> − 7), so <i>x</i> = 8/3 or 7, and 8/3 + 7 = 29/3 ✓.</p>',
        steps: ['Left side: ' + calc('<i>x</i><sup>2</sup> + <i>x</i> − 56'), 'Right side: ' + calc('4<i>x</i><sup>2</sup> − 28<i>x</i>'), 'Set to zero: ' + calc('3<i>x</i><sup>2</sup> − 29<i>x</i> + 56 = 0'), 'Sum of roots: ' + calc('−' + F('<i>b</i>', '<i>a</i>') + ' = ' + F(29, 3) + ' ≈ 9.667'), 'Factor check: (3<i>x</i> − 8)(<i>x</i> − 7) = 0 → <i>x</i> = 8/3, 7.'],
        mistakes: ['Sign error moving terms: the <i>x</i> terms give −28<i>x</i> − <i>x</i> = −29<i>x</i>, not −27<i>x</i>.', 'Entering 9.67: too short. Use 29/3, 9.666, or 9.667.', 'Using −<i>b</i>/<i>a</i> with the equation not set to zero first.'],
        tip: 'Sum of roots = −<i>b</i>/<i>a</i>, product of roots = <i>c</i>/<i>a</i>. These shortcuts skip solving entirely.'
      }
    ]
  });
})();
