var num1, num2
function logicoperation(num1, num2, operation) {
    num1 = Number(prompt("Enter The First Number : "))
    num2 = Number(prompt("Enter The Secound Number : "))
    operation = prompt("Enter The arithmetic operations")
    if (operation == '+') {
        result = num1 + num2
        console.log(result)
    }
    else if (operation == '-') {
        result = num1 - num2
        console.log(result)
    }
    else if (operation == '*') {
        result = num1 * num2
        console.log(result)
    }
    else if (operation == '/') {
        result = num1 / num2
        console.log(result)
    }
    else {
        console.log("Enter The operation * or / or - or +")
    }

}
logicoperation(num1, num2,)