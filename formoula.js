//code challenge 1
// Test Data 1
// mark mass = 78 kg marktall = 1.69m
// john tall = 92 kg johntall = 1.95m
// formula : BMIS = mass / height **2

const massJohn = 92;
const heightJohn = 1.95;
const massMark = 78;
const heightMark = 1.69;
const BMISMark = massMark / heightMark ** 2;
const BMISJohn = massJohn / heightJohn ** 2;
const markHigherBMI = BMISMark > BMISJohn; //=> true
console.log(BMISMark, BMISJohn, markHigherBMI);

//Test Data 2

// markmass = 95kg markheight = 1.88m
// johnmass = 85kg johnheigth = 1.76m
// formula : BMIS = mass / height **2

const HeightJohn = 1.76;
const MassJohn = 85;
const HeightMark = 1.88;
const HassMark = 95;
const JohnBMIS = MassJohn / HeightJohn ** 2;
const MarkBMIS = MassMark / HeightMark ** 2;
const MarkHigherBMI = MarkBMIS > JohnBMIS; //=> false
console.log(JohnBMIS, MarkBMIS, MarkHigherBMI);



