export const questions = [
  {
    id: 1,
    type: "mc",
    question: "Lisa’s puppy has a heart rate of 160 beats per minute. How many times will the puppy’s heart beat in 60 minutes?",
    options: ["660", "960", "6,600", "9,600"],
    answer: "9,600",
    explanation: "The puppy’s heart beats 160 times each minute. In 60 minutes, multiply 160 × 60. That gives 9,600 beats."
  },

  {
    id: 2,
    type: "mc",
    question: "Brandon has 2 3/12 feet of wood. Steve has 5 6/7 feet of wood. How many feet of wood do they have altogether?",
    options: ["19 1/2", "19 3/4", "20 1/2", "20 3/4"],
    answer: "20 1/2",
    explanation: "Add the whole numbers and fractions separately. You need a common denominator to add the fractions correctly, then combine everything."
  },

  {
    id: 3,
    type: "mc",
    question: "Betty reads 1/10 of her book every day. How much of her book will she have read after 4 days?",
    options: ["3/10", "2/5", "1/2", "3/5"],
    answer: "2/5",
    explanation: "She reads 1/10 each day. After 4 days, multiply 1/10 × 4 = 4/10. Then simplify 4/10 to 2/5."
  },

  {
    id: 4,
    type: "mc",
    question: "Which choice always describes a rhombus?",
    options: [
      "A quadrilateral with equal side lengths and two pairs of parallel sides",
      "A quadrilateral with one pair of parallel opposite sides",
      "A quadrilateral with two pairs of unequal parallel sides",
      "A quadrilateral with no parallel sides"
    ],
    answer: "A quadrilateral with equal side lengths and two pairs of parallel sides",
    explanation: "A rhombus is a special quadrilateral where all sides are the same length, and both pairs of opposite sides are parallel."
  },

  {
    id: 5,
    type: "mc",
    question: "Ms. Owens bought a 5-pound bag of sand. She gives 1/5 pound to each student. What is the maximum number of students?",
    options: ["10", "16", "25", "50"],
    answer: "25",
    explanation: "You are splitting 5 pounds into pieces of 1/5 pound. Divide 5 ÷ 1/5. Dividing by a fraction means multiply: 5 × 5 = 25."
  },

  {
    id: 6,
    type: "mc",
    question: "(5 × 8 + 4) ÷ 2. What happens if parentheses are removed?",
    options: [
      "The value remains the same",
      "The value decreases by 8",
      "The value increases by 12",
      "The value increases by 20"
    ],
    answer: "The value increases by 20",
    explanation: "With parentheses: (5×8 + 4) ÷ 2 = 44 ÷ 2 = 22. Without them: 5×8 + 4 ÷ 2 = 40 + 2 = 42. The value increases by 20."
  },

  {
    id: 7,
    type: "mc",
    question: "Mr. Barton has a piece of wood that is 1 3/4 feet long. He painted 1/2 of the length black. What length did he paint?",
    options: ["5/8 foot", "1 5/8 feet", "1 7/8 feet", "2 3/4 feet"],
    answer: "1 5/8 feet",
    explanation: "First change 1 3/4 to an improper fraction: 7/4. Then find half: 7/4 ÷ 2 = 7/8. Convert back to a mixed number: 1 5/8."
  },

  {
    id: 8,
    type: "mc",
    question: "What expression shows half the difference of 34 and 6?",
    options: [
      "6 − 34 ÷ 1/2",
      "34 − 6 ÷ 1/2",
      "(34 − 2) ÷ 6",
      "(34 − 6) ÷ 2"
    ],
    answer: "(34 − 6) ÷ 2",
    explanation: "First find the difference: 34 − 6. Then take half of that result by dividing by 2."
  },

  {
    id: 9,
    type: "mc",
    question: "An art teacher has 1,032 pencils. Each box has 24 pencils. How many boxes are there?",
    options: ["42", "43", "44", "45"],
    answer: "43",
    explanation: "You are grouping pencils into sets of 24. Divide 1,032 ÷ 24 to find how many full boxes you can make."
  },

  {
    id: 10,
    type: "mc",
    question: "Juan had 2/3 pound of grapes. He gave away 1/6 pound. What remains?",
    options: ["1/2", "1/3", "1/9", "1/18"],
    answer: "1/2",
    explanation: "Change 2/3 to sixths: 2/3 = 4/6. Then subtract: 4/6 − 1/6 = 3/6. Finally, simplify 3/6 to 1/2."
  },

  {
    id: 11,
    type: "mc",
    question: "Rachel has boards each 2 1/4 feet long. What is the length of 3 1/2 boards?",
    options: ["5 3/4", "6 3/8", "7 7/8", "8"],
    answer: "7 7/8",
    explanation: "Change both mixed numbers to improper fractions, then multiply. Convert your final answer back to a mixed number."
  },

  {
    id: 12,
    type: "mc",
    question: "What is the value of the expression shown?",
    options: ["6/14", "6/8", "2 1/2", "1 4/2"],
    answer: "2 1/2",
    explanation: "Follow the order of operations carefully: solve inside parentheses first, then multiply/divide, then add/subtract."
  },

  {
    id: 13,
    type: "mc",
    question: "Cathy has 720 marbles and divides them among 16 friends. How many does each get?",
    options: ["45", "46", "47", "48"],
    answer: "45",
    explanation: "Divide 720 by 16 to find how many each person receives."
  },

  {
    id: 14,
    type: "mc",
    question: "6 friends share 10 pounds of strawberries equally. How much does each get?",
    options: ["3/5", "1 1/16", "1 2/5", "1 2/3"],
    answer: "1 2/3",
    explanation: "Divide 10 by 6. This gives 10 ÷ 6 = 1 2/3 pounds per person."
  },

  {
    id: 15,
    type: "mc",
    question: "How much larger is the fraction of leftover grape juice than apple juice? (See diagram)",
    image: "/images/q15.png",
    options: ["1/12", "1/4", "4/15", "4/9"],
    answer: "1/4",
    explanation: "Look at the diagram and compare the two fractions. Subtract the smaller fraction from the larger one to find how much more remains."
  },
  // 16–25 (Input)

{
  id: 16,
  type: "input",
  question: "What is the volume of this figure? (see diagram)",
  image: "/images/q16.png",
  answer: "216",
  explanation: "Volume is the number of unit cubes in the figure. Count the cubes layer by layer, or multiply length × width × height if it forms a rectangular prism."
},

{
  id: 17,
  type: "input",
  question: "There are 936 calories in 12 eggs. How many calories are in 1 egg?",
  answer: "78",
  explanation: "Divide the total calories by the number of eggs: 936 ÷ 12 = 78."
},

{
  id: 18,
  type: "input",
  question: "3/8 + n = 1 1/4",
  answer: "7/8",
  explanation: "First change 1 1/4 to an improper fraction: 5/4. Then subtract 3/8 from 5/4. Convert 5/4 to eighths (10/8), then 10/8 − 3/8 = 7/8."
},

{
  id: 19,
  type: "input",
  question: "The screen is 1/2 foot long and 3/4 foot wide. What is the area?",
  answer: "3/8",
  explanation: "Area of a rectangle is length × width. Multiply 1/2 × 3/4 = 3/8."
},

{
  id: 20,
  type: "input",
  question: "An animal shelter uses 38 pounds of food per day. How much in 365 days?",
  answer: "13870",
  explanation: "Multiply the daily amount by the number of days: 38 × 365 = 13,870."
},

{
  id: 21,
  type: "input",
  question: "Adriana has 4 cups of peanuts. How many 1/4-cup servings is that?",
  answer: "16",
  explanation: "Divide 4 by 1/4. Dividing by a fraction means multiply: 4 × 4 = 16."
},

{
  id: 22,
  type: "input",
  question: "A library receives 4,568 books in 4 weeks. How many per week?",
  answer: "1142",
  explanation: "Divide the total books by the number of weeks: 4568 ÷ 4 = 1142."
},

{
  id: 23,
  type: "input",
  question: "A rectangle has length 10.42 m and width 7.67 m. What is the perimeter?",
  answer: "36.18",
  explanation: "Perimeter = 2 × (length + width). Add first: 10.42 + 7.67 = 18.09, then multiply by 2."
},

{
  id: 24,
  type: "input",
  question: "Teresa gave 1/3 of 3/4 pound of fudge. How much did she give?",
  answer: "1/4",
  explanation: "Multiply the fractions: 3/4 × 1/3 = 3/12. Simplify to 1/4."
},

{
  id: 25,
  type: "input",
  question: "7 students share 1/2 a box of erasers. How much does each get?",
  answer: "1/14",
  explanation: "Divide 1/2 by 7. This is the same as 1/2 × 1/7 = 1/14."
},


// 26–40 (Multiple Choice)

{
  id: 26,
  type: "mc",
  question: "Which statement must be true about a parallelogram?",
  options: [
    "It has 2 sets of parallel sides, and opposite sides are equal",
    "It has 1 set of parallel sides",
    "All sides are equal",
    "No sides are parallel"
  ],
  answer: "It has 2 sets of parallel sides, and opposite sides are equal",
  explanation: "A parallelogram always has two pairs of parallel sides, and opposite sides are the same length."
},

{
  id: 27,
  type: "mc",
  question: "Which question will be answered with categorical data?",
  options: [
    "What are students’ favorite foods?",
    "How many pets does a student have?",
    "How many siblings does a student have?",
    "How many games were won?"
  ],
  answer: "What are students’ favorite foods?",
  explanation: "Categorical data groups things into categories, like types of food, instead of counting numbers."
},

{
  id: 28,
  type: "mc",
  question: "24 bottles cost $12 with a $0.48 discount. What is the price per bottle?",
  options: ["$2.09", "$2.08", "$0.49", "$0.48"],
  answer: "$0.48",
  explanation: "First subtract the discount: 12 − 0.48 = 11.52. Then divide by 24 bottles."
},

{
  id: 29,
  type: "mc",
  question: "A box has half the volume of another. Find the missing dimension.",
  options: ["13", "14", "15", "16"],
  answer: "15",
  explanation: "Find the original volume, take half, then solve for the missing side using volume = length × width × height."
},

{
  id: 30,
  type: "mc",
  question: "What is the expanded form of 67.982?",
  options: [
    "6×10 + 7×1 + 9×0.10 + 8×0.01 + 2×0.001",
    "Incorrect",
    "Incorrect",
    "Incorrect"
  ],
  answer: "6×10 + 7×1 + 9×0.10 + 8×0.01 + 2×0.001",
  explanation: "Break the number into place values: tens, ones, tenths, hundredths, and thousandths."
},

{
  id: 31,
  type: "mc",
  question: "How much money should Jaime have by week 6? (see graph)",
  image: "/images/q31.png",
  options: ["$9", "$12", "$15", "$18"],
  answer: "$18",
  explanation: "Look at the pattern in the graph and continue it to week 6."
},

{
  id: 32,
  type: "mc",
  question: "8 students share 50 pounds of clay. How much each?",
  options: ["5–6 pounds", "6–7 pounds", "7–8 pounds", "8–9 pounds"],
  answer: "6–7 pounds",
  explanation: "Divide 50 ÷ 8 = 6.25. This is between 6 and 7."
},

{
  id: 33,
  type: "mc",
  question: "Which expression represents the shaded area? (see diagram)",
  image: "/images/q33.png",
  options: ["0.23 × 5", "23 × 5", "0.023 × 0.005", "0.23 × 0.5"],
  answer: "0.23 × 5",
  explanation: "Use the decimal parts shown in the diagram and multiply them correctly."
},

{
  id: 34,
  type: "mc",
  question: "How many meters are in 27 kilometers?",
  options: ["27", "270", "2,700", "27,000"],
  answer: "27,000",
  explanation: "1 kilometer = 1,000 meters. Multiply 27 × 1,000."
},

{
  id: 35,
  type: "mc",
  question: "What is the next coordinate in the pattern?",
  options: ["(13,20)", "(15,16)", "(15,20)", "(19,20)"],
  answer: "(15,20)",
  explanation: "Each step increases x by 3 and y by 4. Continue the pattern."
},

{
  id: 36,
  type: "mc",
  question: "How many inches did the girl grow? (see graph)",
  image: "/images/q36.png",
  options: ["7", "8", "9", "10"],
  answer: "8",
  explanation: "Find the height at both ages on the graph and subtract to find the growth."
},

{
  id: 37,
  type: "mc",
  question: "Which number line shows the correct calculation? (see diagram)",
  image: "/images/q37.png",
  options: ["A", "B", "C", "D"],
  answer: "A",
  explanation: "Look for the number line that correctly represents dividing the total cost among items."
},

{
  id: 38,
  type: "mc",
  question: "16 × (4 + 6) − 20 ÷ 4. Is 35 correct?",
  options: [
    "Yes, because 140 ÷ 4 = 35",
    "Yes, solve left to right",
    "No, divide last",
    "No, divide before subtract"
  ],
  answer: "No, divide before subtract",
  explanation: "Order of operations says divide before subtracting."
},

{
  id: 39,
  type: "mc",
  question: "9 students share 5 pounds. How much each?",
  options: ["1/45", "5/14", "5/9", "1 4/5"],
  answer: "5/9",
  explanation: "Divide 5 ÷ 9 to get 5/9 pounds each."
},

{
  id: 40,
  type: "mc",
  question: "Who has more wire?",
  options: [
    "Luke, 7 inches more",
    "Roger, 1 inch more",
    "Luke, 1 inch more",
    "Roger, 7 inches more"
  ],
  answer: "Roger, 1 inch more",
  explanation: "Convert everything to inches, then compare the totals."
},
];