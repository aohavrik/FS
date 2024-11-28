
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



let a1 = [...arr]; 
let a2 = [...arr, ...arr2]; 
let a3 = [...arr, 42, true, 'new element'];
let a4 = [[1, 2], [3, 4], [5, 6]];
let a5 = JSON.parse(JSON.stringify(a4));
let a6 = [...a4];




let b2 = {...b1, ...c1}
let b3= {...c1}
let b4 = { ...b11}
let b5 = { ...b11 ,a1: {...b11.a1} }
let b6 = JSON.parse(JSON.stringify(b11))
let { a, b:{n} } = b11
