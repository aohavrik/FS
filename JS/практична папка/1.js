/* function sFormula(PDR){
    let R2 = PDR
    let Sform = 3.14 * R2 ** 2
    return Sform
}
const resault  = sFormula(Number(prompt()))
console.log(resault); */

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