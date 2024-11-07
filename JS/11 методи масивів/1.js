
console.log('find')
let arr = [1, 5, true, 'hello', false, null, 'iiii', 54, null]
let res1 = arr.find((el, ind) => {
    return el == 5
});
console.log(res1)


let slova = ['йцу', 'кавун', 'яблуко'];
let indexZBukv = slova.findIndex(a => a === 'яблуко');
console.log(indexZBukv);

console.log("indexOf")

let misto = ['Краматорськ', 'Львів', 'Одеса']
let pershyyIndexKyiv = misto.indexOf('Одеса')
console.log(pershyyIndexKyiv)


console.log('lastIndexOf')

let num = [2, 3, 3, 5]
let lastIndex = num.lastIndexOf(3)
console.log(lastIndex);



console.log('reverse')

num.reverse()
console.log(num)

console.log('sort')

let listName = ['Olya', 'Petro', 'Andriy']
listName.sort()
console.log(listName)

console.log('filter')

let arr2 = [1, 2, 3, 4]
let parni = arr2.filter(a => a % 2 === 0)
console.log(parni)

console.log('some')

let arr3 = [10, 20, 30]
let numb = arr3.some(a => a > 20)
console.log(numb) 

console.log('every')

let arr4 = ['apple', 'banan', 'vishni']
let pusto = arr4.every(a => a !== 'vishni')
console.log(pusto); 


console.log('includes')

let arr5 = ['Vasyl', 'Oksana', 'Ivan']
let names = arr5.includes('Ivan')
console.log(names)

console.log('flat')

let vklad = [[1, 2], [3, 4]]
let spl = vklad.flat()
console.log(spl);


console.log('consta')

let firstGrupa = ['Nazar', 'Daria']
let secondGrupa = ['Olena', 'Maksym']
let Spysok = firstGrupa.concat(secondGrupa)
console.log(Spysok)


console.log('entries')

let color = ['red', 'green', 'blue']
let iterColor = color.entries()
for (let [indeks, colors] of iterColor) {
    console.log(indeks, colors)
}

console.log('toString')

let nubrs = [1, 2, 3]
console.log(nubrs.toString())

console.log('map')

let Chysla = [2, 4, 6]
let podvoyeniChysla = Chysla.map(a => a * 2)
console.log(podvoyeniChysla)
