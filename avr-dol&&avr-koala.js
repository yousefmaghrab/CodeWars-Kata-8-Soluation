// code challenge 3

// Test Data 1
// Dolphine 96 108 89
// Koalas 88 91 110
/*
const averageDolphins = (96 + 108 + 89) / 3;
const averageKoalas = (88 + 91 + 110) / 3;



// Teat Data 2
// Dolphine 97 112 101
// Koalas 109 95 123
const averageDolphins = (97 + 112 + 101) / 3;
const averageKoalas = (109 + 95 + 123) / 3;*/



// Test Data 3
// Dolphine 97 112 101
// Koalas 109 95 106
const averageDolphins = (97 + 112 + 101) / 3;
const averageKoalas = (109 + 95 + 106) / 3;
console.log(averageDolphins, averageKoalas);

if (averageDolphins > averageKoalas) {
  console.log(" The Dolphins is Winner The Trophy!😋🏆");
} else if (averageKoalas > averageDolphins) {
  console.log("The Koalas IS Winner The Trophy!😋🏆");
} else {
  console.log("The Result Refere To Draw");
}
console.log(averageDolphins, averageKoalas);




if (averageDolphins > averageKoalas && averageDolphins >= 100) {
  console.log(" The Dolphins is Winner The Trophy!😋🏆");
} else if (averageKoalas > averageDolphins && averageKoalas >= 100) {
  console.log("The Koalas IS Winner The Trophy!😋🏆");
} else if (averageDolphins >= 100 && averageKoalas >= 100) {
  console.log("Both win The Trophy!");
} else {
  console.log("The Result Refere To Draw");
}
