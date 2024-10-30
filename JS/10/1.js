// Розділяйте кожний пункт домашнього в коді коментарями.

// 1-8 завдання повинно бути виконане через цикл forEach.

//1. Напишіть цикл, який виводить всі парні числа від 20 до 32.
console.log('1. Напишіть цикл, який виводить всі парні числа від 20 до 32.');

let numbersArr = [20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32]
numbersArr.forEach(num => {
    if (num % 2 === 0) {
        console.log(num);
    }
})


/* 2. Створіть масив зі списком:

   вашого улюбленого фрукту,
   вашого улюбленого кольору,
   ім'я,
   рандомного числа,
   вашого віку.

   Виведіть цей проітерований масив на консоль і визначте його тип даних.
 */
console.log(' 2.Створіть масив зі списком:');
let ArrList = ['apple', 'red', 'Andrii', Math.random(), 27]
ArrList.forEach(function (el) {
    console.log(typeof (el), el);
})

//3. Напишіть цикл який виводить всі непарні числа від 17 до 39.

console.log('3. Напишіть цикл який виводить всі непарні числа від 17 до 39.');

let numbersArr2 = [17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39]
numbersArr2.forEach(num => {
    if (num % 2 !== 0) {
        console.log(num);
    }
})
//4. Даний масив [1, 5, true, 'hello', false, null, 'iiii', 54, null], виведіть парні елементи
console.log('4. Даний масив [1, 5, true, hello, false, null, iiii, 54, null], виведіть парні елементи');


let arrpar = [1, 5, true, 'hello', false, null, 'iiii', 54, null]
arrpar.forEach(function (el, ind) {
    if (ind % 2 === 1) {
        console.log(el)
    }
})

//5. Даний масив [1, 5, true, 'hello', false, null, 'iiii', 54, null], виведіть не парні елементи
console.log('5. Даний масив [1, 5, true,hello, false, null, iiii, 54, null], виведіть не парні елементи');

let arrpar2 = [1, 5, true, 'hello', false, null, 'iiii', 54, null]
arrpar.forEach(function (el, ind) {
    if (ind % 2 === 0) {
        console.log(el)
    }
})

//6. Даний масив [1, 2, 4, 2, 3, 55, 66, 777, 12]. Виведіть суму всіх  елементів масиву.
console.log('6. Даний масив [1, 2, 4, 2, 3, 55, 66, 777, 12]. Виведіть суму всіх  елементів масиву.');
let sumArr = [1, 2, 4, 2, 3, 55, 66, 777, 12]
let sum = 0
sumArr.forEach(el => {
    sum += el
})
console.log(sum);

//7. Даний масив [1, 2, 4, 2, 3, 5, 6, 7, 1]. Перемножити та вивести всі елементи масиву.
console.log('7. Даний масив [1, 2, 4, 2, 3, 5, 6, 7, 1]. Перемножити та вивести всі елементи масиву.');
let mulArr = [1, 2, 4, 2, 3, 5, 6, 7, 1]
let mul = 1
mulArr.forEach(el => {
    mul *= el
})
console.log(mul);

/* 8. Створіть prompt в якому потрібно проітерувати число з 0. 
   Якщо це числа 5, 6, 7, 8, 9, 10 то пропустити ітерацію.
   Якщо це числа 100 і більше, завершити ітерацію.
*/
console.log('8. Створіть prompt в якому потрібно проітерувати число з 0. ');


let numArr = +prompt("Введіть число");
let arrNum1 = []
for (let y = 0; y <= numArr; y ++) {
arrNum1[y]= y
}
arrNum1.forEach(el => {
    if (el >= 100){
        return
    } 
    if (el >= 5 && el <= 10) {
        return
    };
    console.log(el);
});


// Використовуємо Math



//9. Створіть функцію яка приймає дробове значення (наприклад 1.34 чи 55.43), та заокруглює його до меншого числа і повертає значення.

console.log('9. Створіть функцію яка приймає дробове значення (наприклад 1.34 чи 55.43), та заокруглює його до меншого числа і повертає значення.');

function rDown(num) {
    return Math.floor(num);
}

console.log(rDown(100 - Math.random() * 100));


//10. Створіть функцію яка приймає дробове значення (наприклад 1.34 чи 55.43), та заокруглює його до більшого числа і повертає значення.

console.log('10. Створіть функцію яка приймає дробове значення (наприклад 1.34 чи 55.43), та заокруглює його до більшого числа і повертає значення.');

function rUp(num) {
    return Math.ceil(num);
}

console.log(rUp(100 - Math.random() * 100));
//11. Створіть функцію яка генерує рандомне число (випадкове) від 0 до 1000 і повертає його.

console.log('11. Створіть функцію яка генерує рандомне число (випадкове) від 0 до 1000 і повертає його.');

function randomReturn() {
    let ret = 1000 - Math.random() * 1000
    return ret
}
console.log(randomReturn());


//12. Створіть функцію яка приймає 2 числа та виодить степіть перше число основне, друге сама степіть.
console.log('12. Створіть функцію яка приймає 2 числа та виодить степіть перше число основне, друге сама степіть.');
let num_stup = +prompt('введіть число')
let stup = +prompt('введіть ступінь')

function stuoFunction(num1, num2) {
    let res = Math.pow(num1, num2)
    return res
}
console.log(stuoFunction(num_stup, stup));


//13. Створіть функцію яка приймає число, виводить з нього корінь, заокруглює його і повертає.
console.log('13. Створіть функцію яка приймає число, виводить з нього корінь, заокруглює його і повертає');
let num_sqrt = +prompt('введіть число коріню')
function sqrtFunc(num) {
    let res = Math.round(Math.sqrt(num))
    return res
}
console.log(sqrtFunc(num_sqrt));

//* Використовувати методи масивів

//14. Дано масив [1, 5, true], додати в кінець масиву 'Hello'
console.log('14 Дано масив [1, 5, true], додати в кінець масиву Hello');
let arr1 = [1, 5, true]
arr1.push('Hello')
console.log(arr1);

//15. Дано масив [1, 5, true], додати в початок масиву 'HelloArray'
console.log('15 Дано масив [1, 5, true], додати в початок масиву HelloArray')
let arr2 = [1, 5, true]
arr1.unshift('HelloArray')
console.log(arr2);

//16. Дано масив [1, 5, true], видалити останній елемент з масиву
console.log('16 Дано масив [1, 5, true], видалити останній елемент з масиву');
let arr3 = [1, 5, true]
arr3.pop()
console.log(arr3);

//17. Дано масив [1, 5, true], видалити перший елемент з масиву
console.log('17. Дано масив [1, 5, true], видалити перший елемент з масиву');

let arr4 = [1, 5, true]
arr4.shift()
console.log(arr4);

//18. Дано масив [5, true, 'hello', false, null, 5] вирізати *в новий масив* з 1 по 5 індекс
console.log('18 Дано масив [5, true, hello, false, null, 5] вирізати *в новий масив* з 1 по 5 індекс');
let arr5 = [5, true, 'hello', false, null, 5]
let arr6 = arr5.slice(0, 5)
console.log(arr6);



//19. Дано масив [5, true, 'hello', false, null, 5] вирізати з 1 по 5 індекс дані
console.log('19 Дано масив [5, true, hello, false, null, 5] вирізати з 1 по 5 індекс дані');
let arr7 = [5, true, 'hello', false, null, 5]
arr7.splice(1, 5)
console.log(arr7);


//20. Дано масив [5, true, 'hello', false, null, 5] вирізати з 1 по 5 індекс та вставити 10, 100, 111, 222
console.log('20 Дано масив [5, true, hello, false, null, 5] вирізати з 1 по 5 індекс та вставити 10, 100, 111, 222');
let arr8 = [5, true, 'hello', false, null, 5]
let arr8_1 = arr8.splice(0, 5, 10, 100, 111, 222)
console.log(arr8);

//21. Створені масиви під час виконанняцього завдання об'єднайте в рядок, а потім назад приведіть рядок в масив.
console.log('21 Створені масиви під час виконанняцього завдання обєднайте в рядок, а потім назад приведіть рядок в масив.');

let All_arr = [arr1, arr2, arr3, arr6, arr7, arr8]
let str_arr = All_arr.join()
console.log(str_arr);
let arr_str = str_arr.split()
console.log(arr_str);



