/*Your task is to create a function that does four basic mathematical operations.

The function should take three arguments - operation(string/char), value1(number), value2(number).
The function should return result of numbers after applying the chosen operation.*/
function basicOp(operation, num1, num2) {
  let result = 0;
  operation == "+"
    ? (result = num1 + num2)
    : operation == "-"
    ? (result = num1 - num2)
    : operation == "*"
    ? (result = num1 * num2)
    : operation == "/"
    ? (result = num1 / num2)
    : (result = console.log("Your operation is Faild"));
  return result;
}
basicOp("-", 4, 7);
