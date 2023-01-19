// code challenge 4
// not allowed to use if/else statment
// variabls : bill & tip

// Tset Data
// bill value : 275 , 40 ,430

const bill = 430,
  tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

console.log(
  `The bill was ${bill} , the Tip was ${tip} , and the Total Value : ${
    bill + tip
  } !😋`
);
