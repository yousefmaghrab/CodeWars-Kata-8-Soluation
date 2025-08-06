var num1 = Number(prompt("Enter Height = "))
var num2 = Number(prompt("Enter Width = "))
var num3 = Number(prompt("Enter Depth = "))

function Total(height, width, depth) {


    if (height && width && depth !== 0) {



        var resu = (height * width * depth)

        console.log(resu)
    }
}
Total(num1, num2, num3)