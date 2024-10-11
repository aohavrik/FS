/* 1. Перевести тип і в консоль вивести результат через typeof:
- стрічку в булевий
- число в булевий
- стрічку в число
- нул в булевий
- андефайнед в булевий */


let a1 = Boolean("строка")
console.log(a1, typeof a1)

let a2 = Boolean(123456)
console.log(a2, typeof a2)

let a3 = Number("123")
console.log(a3, typeof a3)

let a4 = Boolean(null)
console.log(a4, typeof a4)

let a5 = Boolean(undefined)
console.log(a5, typeof a5)

/* 
2. Створити об'єкт* user із 3 рівнями вкладеностей (на кожному рівні не менше 3 поля)
2.1  Вивести на 2 рівні 1 поле, та на 3 рівні 2 поля в консоль */

let user = {
    login: 'admin',
    pass: 'admin_pass',
    repeat_pass: 'admin_pass',
    Set: {
        Greeting: 'Hello Admin',
        loudspeaker: 'enter a message',
        quantity: 44,
        BaseAdmon: {
            admin1name: 'Svetlana',
            admin1age: 18,
            admin2name: 'Igor',
            admin2age: 44,
            admin3name: 'Oleg',
            admin3age: 14
        }
    }
}

console.log(user.Set.Greeting);
console.log(user.Set.BaseAdmon.admin1name, user.Set.BaseAdmon.admin3name);

/* 3. Створити масив* list із 3 рівнями вкладеності (на кожному рівні не менше 3 елементів)
3.1 Вивести на 2 рівні 1 елемент, та на 3 рівні 2 елемента в консоль */

let list = ['їжа', ['борщ', 'суп', 'узвар'], ['коктель', ['фреш', 'томат', 'чай']]]

console.log(list[1][0])
console.log(list[2][1][1], list[2][1][0])

/* 4. Напишіть цикл for, який виводить всі парні числа від 2 до 20. */

/* 
5. Створіть масив зі списком вашого улюбленого фрукту, вашого улюбленого кольору, і вашого віку.
   Виведіть цей масив на консоль і визначте його тип даних. */
let favorite = ['банан', 'синій', 27]
console.log(favorite, typeof favorite[0], typeof favorite[1], typeof favorite[2]);

/* 6. Напишіть 2 prompt які приймають два числа. виведіть більше з них. Використайте конструкцію if-else. */
let number1 = prompt()
let number2 = prompt()

if (number1 > number2) {
    console.log(number1 + '-це число більше')
} else if (number1 < number2) {
    console.log(number2 + '-це число більше')
} else {
    console.log( 'ці числа однакові')
}

/* 7. Напишіть цикл for який виводить всі непарні числа від 1 до 15. */
for (let i = 1; i <= 15; i = i + 2) {
    console.log(i);
}


/* 8. Даний масив [1, 5, true, 'hello', false, null, 'iiii', 54, null], виведіть парні елементи */
let array1 = [1, 5, true, 'hello', false, null, 'iiii', 54, null];

for (let i = 1; i < array1.length; i = i + 2) {
    console.log(array1[i])
}

/* 9. Даний масив [1, 5, true, 'hello', false, null, 'iiii', 54, null], виведіть не парні елементи */
let array2 = [1, 5, true, 'hello', false, null, 'iiii', 54, null]
for (let i = 0; i < array2.length; i = i + 2) {
    console.log(array2[i])
   }

/* 10. Даний масив [1, 2, 4, 2, 3, 55, 66, 777, 12]. Виведіть суму всіх  елементів масиву. */
let array3 = [1, 2, 4, 2, 3, 55, 66, 777, 12]
let array3Sum = 0
for (let i = 0; i < array3.length; i++ ){
    array3Sum += array3[i]
}
console.log( array3Sum)

/* 11. Даний масив [1, 2, 4, 2, 3, 5, 6, 7, 1]. Перемножити та вивести всі елементи масиву. */
let array4 = [1, 2, 4, 2, 3, 5, 6, 7, 1]
let array4Sum = 1 //тут місце де я тупив, бо робив по аналогії вище і залишив 0, не міг зрозуміти чому не працює
for (let i = 0; i < array4.length; i++){
    array4Sum *= array4[i]
}
console.log( array4Sum)
