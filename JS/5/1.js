/* * Розділяйте кожний пункт домашнього в коді коментарями. */

/* * Кожне завдання повинно бути виконане на 5 циклах: for, for of, for in, while, do while */

/* 1. Напишіть цикл, який виводить всі парні числа від 20 до 32. */
for (i = 20; i <= 32; i = i + 2) {
   console.log(i);
}
/* 2. Створіть масив зі списком:

   вашого улюбленого фрукту,
   вашого улюбленого кольору,
   ім'я,
   рандомного числа,
   вашого віку.

   Виведіть цей проітерований масив на консоль і визначте його тип даних. */
let favorite = ['Банан', 'синій', 'Андрій', 10, 27]
for (let i = 0; i < favorite.length; i++) {
   console.log(typeof favorite[i])
}
console.log(favorite)

/* 3. Напишіть цикл який виводить всі непарні числа від 17 до 39. */
for (i = 17; i <= 39; i = i + 2) {
   console.log(i);
}
/* 4. Даний масив [1, 5, true, 'hello', false, null, 'iiii', 54, null], виведіть парні елементи */
let array1 = [1, 5, true, 'hello', false, null, 'iiii', 54, null];

for (let i = 1; i < array1.length; i = i + 2) {
   console.log(array1[i])
}

/* 5. Даний масив [1, 5, true, 'hello', false, null, 'iiii', 54, null], виведіть не парні елементи */
let array2 = [1, 5, true, 'hello', false, null, 'iiii', 54, null]
for (let i = 0; i < array2.length; i = i + 2) {
   console.log(array2[i])
}
/* 6. Даний масив [1, 2, 4, 2, 3, 55, 66, 777, 12]. Виведіть суму всіх  елементів масиву. */
let array3 = [1, 2, 4, 2, 3, 55, 66, 777, 12]
let array3Sum = 0
for (let i = 0; i < array3.length; i++) {
   array3Sum += array3[i]
}
console.log(array3Sum)
/* 7. Даний масив [1, 2, 4, 2, 3, 5, 6, 7, 1]. Перемножити та вивести всі елементи масиву. */
let array4 = [1, 2, 4, 2, 3, 5, 6, 7, 1]
let array4Sum = 1 //тут місце де я тупив, бо робив по аналогії вище і залишив 0, не міг зрозуміти чому не працює
for (let i = 0; i < array4.length; i++) {
   array4Sum *= array4[i]
}
console.log(array4Sum)
/* 8. Створіть prompt в якому потрібно проітерувати число з 0. 
   Якщо це числа 5, 6, 7, 8, 9, 10 то пропустити ітерацію.
   Якщо це числа 100 і більше, завершити ітерацію. */