//ЦИКЛ

//1) Напиши цикл, который выводит числа от 1 до 10 в консоль.
/*  for (let i = 1; i <= 10; i++){
    console.log(i);
}

*/
//2 Напиши цикл, который выводит только чётные числа от 1 до 20.
/* for (let i = 0; i <= 20; i++){
    if (i % 2 == 0)
        console.log(i)
}   */


//3 Напиши цикл, который суммирует числа от 1 до 100 и выводит результат (т.е. сумма всех чисел от 1 до 100).
/* let sum = 0
for (let i=0; i<=100; i++){
    sum += i
}
console.log(sum); */
/*


//4 Напиши цикл, который выводит числа от 10 до 1 в обратном порядке.

 for (let i = 10; i >= 1; i--){
    console.log(i);}

  //5 Напиши цикл, который находит сумму всех нечётных чисел от 1 до 50.
  let sum = 0
    for (let i = 1; i <= 50; i++){
        if (i % 2 != 0){
            sum += i
        }

    }
    console.log(sum)


    //6 Напиши цикл, который выводит все числа, кратные 3 от 1 до 30.
for (let i = 1; i <=30; i++){
    if(i%3==0) {
        console.log(i);
    }
}  */


// 7 Напиши цикл, который выводит произведение всех чисел от 1 до 10.
/* let sum = 1
for (let i = 1; i <= 10; i++) {
    sum *= i
}
console.log(sum)  */

//8Напиши программу, которая находит наибольшее число в массиве с использованием цикла.

//Пример массива: [12, 45, 67, 2, 99, 23]


/* let refuge = [12, 45, 67, 2, 99, 23]
for (let i = 0; i < refuge.length; i++) {
    for (let j = 0; j < refuge.length; j++) {
        if (refuge[j] < refuge[j + 1]) {
            let box = refuge[j]
            refuge[j] = refuge[j + 1]
            refuge[j + 1] = box
        }
    }
}
console.log(refuge[0]); */


//9 Используй вложенные циклы, чтобы вывести таблицу умножения от 1 до 5.
/* let sum = 1
let sunn  = [1,2, 3, 4, 5]
for (let i = 0   ; i < sunn.length; i++) {
    for (let j = 0; j < sunn.length; j++) {
       console.log(`${sunn[i]} * ${sunn[j]} = ${sunn[i] * sunn[j]}`);
    }
} */

//10 Напиши цикл, который выводит все простые числа от 2 до 50. Простое число — это число, которое делится только на 1 и на само себя.
/* for (let i = 2; i <= 50; i++) {
    let isPrime = true; // Переменная, которая отслеживает, простое ли число

    for (let j = 2; j < i; j++) { // Проверяем, делится ли i на какое-то число от 2 до i-1
        if (i % j == 0) {
            isPrime = false; // Если нашёлся делитель, то число не простое
            break; // Прекращаем проверку, если число не простое
        }
    }

    if (isPrime) {
        console.log(i); // Если число простое, выводим его
    }
} */

//11Напиши программу, которая находит среднее значение чисел в массиве.

//Пример массива: [10, 20, 30, 40, 50].
/* let qw = 0
let serednya 
let center = [10, 20, 30, 40, 50]
for (i=0; i<center.length; i++){
qw += center[i]
serednya = qw/(center.length)
}
console.log(serednya); */





//12Используя вложенные циклы, нарисуй в консоли следующую пирамиду:

/*
*
**
***
****
*****
*/
/* let a = ""
for (let i = 0; i <5; i++){
   a += "*"
   console.log(a);
} */




//13 Напиши программу, которая выводит все числа от 1 до 100, но:
/* 
если число кратно 3, выведи "Fizz";
если кратно 5 — "Buzz";
если кратно и 3, и 5 — "FizzBuzz". */

/* for (let i = 1; i <= 100; i++){
    if (i % 3 == 0){
        console.log( i  + " Fizz");
    }
    else if (i % 5 == 0 ){
        console.log( i  + " Buzz");
    }
    else if (i % 3 == 0 && i % 5 == 0 ){
        console.log( i  + " FizzBuzz");
    }
    else {
        console.log(i);
        
    }
} */
// ОБ'ЄКТИ 
//1 Создай объект, который описывает человека (например, с именем, возрастом и городом). Выведи все его свойства в консоль.
/* let obj = {
    name: "Andry",
    age: 27,
    city: "Konst"
} */
//2 Добавь новое свойство этому объекту — например, "профессия". А затем измени возраст.
/* obj.prof = "koder"
obj.age = 27.4
console.log(obj); */
//3 Создай объект, который описывает книгу. Пусть у книги будут такие свойства: название, автор, год издания и жанры (используй массив для жанров). Выведи все свойства книги в консоль.
/* let obj = {
    nazva: " Pes",
    name: " Pupkin",
    years: 2000,
    janr: ["comedia", "triller"]
}
console.log(obj); */



//4 Добавь в объект из предыдущего задания метод getInfo, который будет возвращать строку с информацией о книге (название и автор). Вызови этот метод и выведи результат в консоль
/* obj.getinfo = obj.name + obj.nazva 
console.log(obj.getinfo); */

//5 Напиши функцию, которая принимает объект книги как аргумент и добавляет свойство "рейтинг" (например, от 1 до 5). Затем вызови эту функцию и добавь рейтинг в объект книги.

/* function fnObj(obj){
    obj.reit = "5/5"
}

fnObj()
console.log(obj);
 */
function fetchData(cal, lac) {
    if (Math.random() < 0.5) {
        setTimeout(cal, 1000)
    } else {
        setTimeout(lac, 1000)
    }
}


function handleSuccess() {
    console.log('Data received');

}

function handleError() {
    console.log('Error fetching data');

}
fetchData(handleSuccess, handleError)








let balance_grn = prompt('Введіть суму у грн: ')
    balance_usd = balance_grn / 41.5
print(`${balance_grn} грн дорівнює ${balance_usd} доларів`)