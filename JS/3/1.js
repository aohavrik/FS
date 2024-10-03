let a1 = Boolean("строка")
console.log(a1, typeof a1)

let a11 = Boolean(123456)
console.log(a11, typeof a11)

let a12 = Number("123")
console.log(a12, typeof a12)

let a13 = Boolean(null)
console.log(a13, typeof a13)

let a14 = Boolean(undefined)
console.log(a14, typeof a14)





let a2 = confirm("Yes/No:")
if (a2 == true) {
    console.log("You confirmed popup")
} else if (a2 == false) {
    console.log("Confirm Error")
} 




let a3 = confirm("Yes/No:") ? console.log("You confirmed popup") : console.log("Confirm Error")




let a4 = prompt('ваш вік:')

if (a4 >= 1 && a4 < 12) {
    console.log("You are a child")
} else if (a4 >= 12 && a4 < 18) {
    console.log(" you are teenager")
} else if (a4 >= 18 && a4 < 60) {
    console.log(" you are adult person")
} if (a4 >= 60) {
    console.log(" you are so oldelse")
}



let a5 = prompt("ім'я:")
switch (a5) {
    case 'Admin': console.log('I have full access')
        break
    case 'Student': console.log('Im student')
        break
    case 'Teacher': console.log('Im teacher')
        break
    case 'Young': console.log('I young and ready to party')
        break
    default: console.log('You entered own name')
}





let b1 = 5;
if (b1 < 10) {
    console.log("менше")
}

let b2 = 15;
if (b2 > 10) {
    console.log("більше")
}

let b3 = 10;
if (b3 <= 10) {
    console.log("менше або дорівнює ")
}

let b4 = 20;
if (b4 >= 15) {
    console.log("більше або дорівнює")
}

let b5 = "5";
if (b5 == 5) {
    console.log("дорівнює 5 ")
}

let b6 = 5;
if (b6 === 5) {
    console.log("строге порівняння)")
}

let b7 = "10";
if (b7 != 10) {
    console.log("не дорівнює")
}

let b8 = 10;
if (b8 !== "10") {
    console.log("строге не дорівнює")
}

let b9 = 5;
if (b9 < 3 || b9 > 4) {
    console.log("або менше , або більше")
}

let b10 = 7;
if (b10 > 5 && b10 < 10) {
    console.log("більше  і менше")
}