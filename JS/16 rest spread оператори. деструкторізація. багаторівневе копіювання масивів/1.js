//spread
let arr = [1, 23, '1212dddd', null, 'asd']
let arr2 = [1, 23, '1212dddd', null, 'asd']
let b1 = {
    a: 1 
}
let b11 = {
    a: 1,
    b: {
        n:0
    } 
}
let c1 = {
    a2: 2
}

// console.log(...arr);

// arr

 let a1 = [...arr]

 let a2 = [...arr, ...arr2]



 // obj
 let b2 = {...b1, ...c1}

 let b3= {...c1}
 
let b4 = { ...b11}

let b5 = { ...b11 ,a1: {...b11.a1} }

let b6 = JSON.parse(JSON.stringify(b11))

let { a, b:{n} } = b11
