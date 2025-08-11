// Regular Function
let Num = function (...numbers) {
    return ` Names is ${numbers}`
}
console.log(Num("'osama'", "'Ahmed'", "'Yousef'", "'Mohamed'"))

// Arrow Function

let print = (...Names) => { return `Names is ${Names}` };

console.log(print('osma', 'Malak', 'Magdy', 'Mariem'))