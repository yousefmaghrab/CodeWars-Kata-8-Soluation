// print mark's higher than johns's

const massJohn = 92;
const heightJohn = 1.95;
const massMark = 78;
const heightMark = 1.69;
const BMISMark = massMark / heightMark ** 2;
const BMISJohn = massJohn / heightJohn ** 2;
if (BMISMark > BMISJohn) {
  console.log(
    `"Mark's BMI is higher than John's! ,Mark's BMI ${BMISMark} higher than john's ${BMISJohn}!"`
  );
} else {
  console.log(
    `"john's BMI is higher than Mark's! ,john's BMI ${BMISJohn} higher than Mark's ${BMISMark}!"`
  );
}