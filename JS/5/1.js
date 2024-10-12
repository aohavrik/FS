/* * Розділяйте кожний пункт домашнього в коді коментарями. */

/* * Кожне завдання повинно бути виконане на 5 циклах: for, for of, for in, while, do while */

/* 1. Напишіть цикл, який виводить всі парні числа від 20 до 32. */
//FOR
for (let i = 20; i <= 32; i++) {
   if (i % 2 == 0)
      console.log(i)
}
console.log("---")
//FOR OF
let couples = [20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32]
for (let i of couples) {
   if (i % 2 == 0)
      console.log(i)
}
console.log("---")
// FOR IN
for (let i in couples) {
   if (i % 2 == 0)
      console.log(couples[i]);
}
console.log("---")
//WHILE
let a1 = 20
while (a1 <= 32) {
   console.log(a1)
   a1 += 2
}
console.log("---")
//DO WHILE
let a2 = 20
do {
   console.log(a2)
   a2 += 2
} while (a2 <= 32)

console.log("***")





/* 2. Створіть масив зі списком:

   вашого улюбленого фрукту,
   вашого улюбленого кольору,
   ім'я,
   рандомного числа,
   вашого віку.

   Виведіть цей проітерований масив на консоль і визначте його тип даних. */

//FOR
let favorite = ['Банан', 'синій', 'Андрій', 10, 27]
for (let i = 0; i < favorite.length; i++) {
   console.log(favorite[i], typeof favorite[i])
}
console.log("---")

//FOR OF
for (let el of favorite) {
   console.log(el, typeof el)
}
console.log("---")
//FOR IN 
for (let el in favorite) {
   console.log(favorite[el], typeof el)
}

console.log("---")
//WHILE
let b1 = 0
while (b1 < favorite.length) {
   console.log(favorite[b1], typeof favorite[b1])
   b1++
}

console.log("---")

//do whhile
let b2 = 0
do {
   console.log(favorite[b2], typeof favorite[b2])
   b2++
} while (b2 < favorite.length)
console.log("***")


//* 3. Напишіть цикл який виводить всі непарні числа від 17 до 39. */
//FOR
for (v = 17; v <= 39; v = v + 2) {
   console.log(v);
}
console.log("---")


//FOR OF
let noteven = [17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39]
for (let i of noteven) {
   if (i % 2 == 1) {
      console.log(i)
   }
}
console.log("---")

//FOR IN
for (let i in noteven) {
   if (i % 2 == 0) {
      console.log(noteven[i])
   }
}
console.log("---")
//WHILE
let c1 = 17
while (c1 <= 39) {
   if (c1 % 2 == 1)
      console.log(c1)
   c1++
}
console.log("---")
//DO WHILE
let c2 = 17
do {
   if (c2 % 2 == 1) {
      console.log(c2)
   }
   c2++
} while (c2 <= 39)
console.log("---")
console.log("***")





/* 4. Даний масив [1, 5, true, 'hello', false, null, 'iiii', 54, null], виведіть парні елементи */
let array1 = [1, 5, true, 'hello', false, null, 'iiii', 54, null];
//FOR
for (let i = 1; i < array1.length; i = i + 2) {
   console.log(array1[i])
}
console.log("---")

//for OF
let qw = 0
for (let i of array1) {
   if (qw % 2 == 1) {
      console.log(i)
   }
   qw++
}
console.log("---")


//for in
let qw1 = 0
for (let i in array1) {
   if (qw1 % 2 == 1) {
      console.log(array1[i])
   }
   qw1++
}
console.log("---")

//while

let s1 = 0
while (s1 < array1.length) {
   if (s1 % 2 == 1) {
      console.log(array1[s1])
   }
   s1++
}
// do while
let s2 = 0
do {
   if (s2 % 2 == 1) {
      console.log(array1[s2])
   }
   s2++
} while (s2 < array1.length)
console.log("---")
console.log("***")
/* 5. Даний масив [1, 5, true, 'hello', false, null, 'iiii', 54, null], виведіть не парні елементи */
//for
let array2 = [1, 5, true, 'hello', false, null, 'iiii', 54, null]
for (let i = 0; i < array2.length; i = i + 2) {
   console.log(array2[i])
}

console.log("---")

//for OF
let as1 = 0
for (let i of array2) {
   if (as1 % 2 == 0) {
      console.log(i)
   }
   as1++
}
console.log("---")


//for in
let qw11 = 0
for (let i in array2) {
   if (qw11 % 2 == 0) {
      console.log(array2[i])
   }
   qw11++
}
console.log("---")

//while

let s21 = 0
while (s21 < array2.length) {
   if (s21 % 2 == 0) {
      console.log(array2[s21])
   }
   s21++
}
console.log("---")
// do while
let s22 = 0
do {
   if (s22 % 2 == 0) {
      console.log(array2[s22])
   }
   s22++
} while (s22 < array2.length)

console.log("---")
console.log("***")

/* 6. Даний масив [1, 2, 4, 2, 3, 55, 66, 777, 12]. Виведіть суму всіх  елементів масиву. */
//for
let array3 = [1, 2, 4, 2, 3, 55, 66, 777, 12]
let array3Sum = 0
for (let i = 0; i < array3.length; i++) {
   array3Sum += array3[i]
}

console.log(array3Sum)


console.log("---")
//for of
let array32 = [1, 2, 4, 2, 3, 55, 66, 777, 12]
let array3Sum2 = 0
for (let i of array3) {
   array3Sum += i
}
console.log(array3Sum)
console.log("---")
// for in
let array33 = [1, 2, 4, 2, 3, 55, 66, 777, 12]
let array33Sum = 0
for (let i in array33) {
   array33Sum += array33[i]
}
console.log(array33Sum)
console.log("---")
//while
let array34Sum = 0
let a34s = 0
while (a34s < array33.length) {
   array34Sum += array33[a34s]
   a34s++
}
console.log(array34Sum)
console.log("---")
//do while

let array_Sum = 0
   a_s=0 
do {
   array_Sum += array33[ a_s]
   a_s++
}
while ( a_s < array33.length)
console.log(array_Sum)


console.log("***")









/* 7. Даний масив [1, 2, 4, 2, 3, 5, 6, 7, 1]. Перемножити та вивести всі елементи масиву. */



let array4 = [1, 2, 4, 2, 3, 5, 6, 7, 1]
let array4Sum = 1

for (let i = 0; i < array4.length; i++) {
   array4Sum *= array4[i]
}
console.log(array4Sum)
console.log("---")
//for of
let array41Sum = 1
for (let i of array4) {
   array41Sum *= i
}
console.log(array41Sum)
console.log("---")
//for in
let array43Sum = 1
for (let i in array4) {
   array43Sum *= array4[i]
}
console.log(array43Sum)
console.log("---")

//while
let array35Sum = 1
let a35s = 0
while (a35s < array4.length) {
   array35Sum *= array4[a35s]
   a35s++
}
console.log(array35Sum)
console.log("---")



//do while

let array36Sum = 1
let a36s = 0

do {
   array36Sum *= array4[a36s]
   a36s++
}
while (a36s < array4.length)
console.log(array36Sum)
console.log("---")
console.log('***');






console.log(array3Sum)

console.log("***")

/* 8. Створіть prompt в якому потрібно проітерувати число з 0. 
   Якщо це числа 5, 6, 7, 8, 9, 10 то пропустити ітерацію.
   Якщо це числа 100 і більше, завершити ітерацію. */
//for
let promt = +prompt("введіть число:");
for (iq = 0; iq < promt; iq++) {
   if (iq >= 5 && iq <= 10)
      continue
   if (iq >= 100)
      break;
   console.log(iq)
}
console.log("---")
//for of
let arr8 = []
let promtWhile = prompt()
let i = 0
while(i<= promtWhile){
    arr8[i] = i
  i++
}

for (i of arr8){
    if(i >= 5 && i<= 10)
        continue
     if(i >= 100)
        break
     console.log(i)
}
console.log("---")
// for in
let arr9 = []
let m = 0
while(m<= promtWhile){
    arr9[m] = m
  m++
}

for (m in arr9){
    if(arr9[m] >= 5 && m<= 10)
        continue
     if(arr9[m]  >= 100)
        break
     console.log(m)
}

console.log("---")
// while 
a8=0
while( a8 < promt){
  if(a8 >= 5 && a8 <= 10){
    a8++
    continue
  }
  if (a8 >= 100) {
    break
  }
  console.log(a8)
  a8++
}
console.log("---")
//do hile
a81=0
do {
    if(a81 >= 5 && a81 <= 10){
        a81++
        continue
      }
      if (a81 >= 100) {
        break
      }
      console.log(a81)
      a81++
}while( a81 < promt)