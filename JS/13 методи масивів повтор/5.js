let num_stup = +prompt('введіть число')
let stup = +prompt('введіть ступінь')

function stuoFunction(num1, num2) {
    let res = Math.pow(num1, num2)
    return res
}
console.log(stuoFunction(num_stup, stup));

let num_sqrt = +prompt('введіть число коріню')
function sqrtFunc(num) {
    let res = Math.round(Math.sqrt(num))
    return res
}
console.log(sqrtFunc(num_sqrt));

function randomReturn() {
    let ret = 1000 - Math.random() * 1000
    return ret
}
console.log(randomReturn());

function rUp(num) {
    return Math.ceil(num);
}

console.log(rUp(100 - Math.random() * 100));