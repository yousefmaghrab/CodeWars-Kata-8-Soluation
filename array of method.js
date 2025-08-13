
let zero = 0;
let counter = 3;
let my = ["Ahmed", "Mazero", "Elaham", "Osama", "Gamal", "Ameer"]
console.log(my.slice(zero, ++counter).reverse())
console.log(my.slice(++zero, --counter).reverse())
let nun = my[--counter].slice(0, counter) + my[zero].slice(counter)
let num = [];
num.push(nun)
console.log(num[0][4] + num[0][5].toUpperCase())