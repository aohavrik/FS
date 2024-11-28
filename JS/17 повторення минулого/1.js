/* //Дано число. Проверьте, отрицательное оно или нет. Выведите об этом информацию в консоль.

let num = +prompt('Введіть число: ')

if (num < 0) {
    console.log('Число менше нуля');
}  else if(num == 0) {
    console.log('Число дорівнює нуля')
} else{
    console.log('Число більше нуля');
}
//Дана строка. Выведите в консоль длину этой строки.

let str = prompt('Введіть строку для визначення довжини: ') 
console.log(str.length);

//Дана строка. Выведите в консоль последний символ строки.

let str2 = prompt('Введіть строку')
console.log(str2.slice(-1));


//Дано число. Проверьте, четное оно или нет.

let num2 = Number(prompt('Введіть число: '))

if( num2 % 2 == 0){
    console.log("число парне");
    
} else {
    console.log("Число не парне");
}

//Даны два слова. Проверьте, что первые буквы этих слов совпадают.

let slovo =  prompt('Введіть перше слово')
let slovo2 =  prompt('Введіть друге слово')

if (slovo.slice(1) == slovo2.slice(1) ){
    console.log('Перші букві співпадають');
} else {
    console.log('Першы букви не спывпадають');
}

//Дано слово. Получите его последнюю букву. Если слово заканчивается на мягкий знак, то получите предпоследнюю букву.

let str3 = prompt('Введіть слово')

if (str3.slice(-1) != "ь"){
    console.log(str3.slice(-1));
} else {
    console.log(str3.slice(-2));
}


//Дано число. Выведите в консоль первую цифру этого числа.

let num3 = prompt('Введіть число')
let preob = Number(String(num3)[0]); 
console.log(preob)

//Дано число. Выведите в консоль последнюю цифру этого числа.

let num4 = prompt('Введіть число')
let preob2 = Number(String(num4).slice(-1)); 
console.log(preob2)

//Дано число. Выведите в консоль сумму первой и последней цифры этого числа.

let num5 = prompt('Введіть число')
let sum1 = Number(String(num5)[0]); 
let sum2 = Number(String(num5).slice(-1)); 

console.log(sum1+sum2)

//Дано число. Выведите количество цифр в этом числе.
let num6 = +prompt('Введіть число'); 
num6 = Math.abs(num6); 
let dig = String(num6).length; 
console.log(`Количество цифр: ${dig}`);



//Даны два числа. Проверьте, что первые цифры этих чисел совпадают.

let num7_1 = prompt('Введите первое число:'); 
let num7_2 = prompt('Введите второе число:'); 

let Probr1 = Number(String(Math.abs(num7_1))[0]); 
let Probr2 = Number(String(Math.abs(num7_2))[0]);

if (Probr1 === Probr2) {
  console.log('Gthis wbahb cgsdgflf.nm');
} else {
  console.log('Gthis wbahb yt cgsdgflf.nm');
}

//Дана строка. Если в этой строке более одного символа, выведите в консоль предпоследний символ этой строки.
let str4 = prompt('Введіть строку')
if(str4.length > 1){
    console.log(str4.slice(-2));
} else {
    console.log('err');
}

//Даны два целых числа. Проверьте, что первое число без остатка делится на второе.

let num8_1 = +prompt(' число 1')
let num8_2 = +prompt(' число 2')

if (num8_1 % num8_2 == 0) {
    console.log('залишку не має');
    
} else{
    console.log('залишок є');
}

// Выведите в консоль все целые числа от 1 до 100.
// Выведите в консоль все целые числа от -100 до 0
// Выведите в консоль все целые числа от 100 до 1.
// Выведите в консоль все четные числа из промежутка от 1 до 100.
// Выведите в консоль все числа кратные трем в промежутке от 1 до 100.
 
for (let i = 1; i<=100; i++){
    console.log(i);
}
for (let i = -100; i<=0; i++){
    console.log(i);
}
for (let i = 100; i<=0; i--){
    console.log(i);
}
for (let i = 1; i<=100; i++){
    if(i%2==0){
        console.log(i);
    }
}
for (let i = 1; i<=100; i++){
    if(i%2!=0){
        console.log(i);
    }
}






//  Найдите сумму всех целых чисел от 1 до 100.
// Найдите сумму всех целых четных чисел в промежутке от 1 до 100
// Найдите сумму всех целых нечетных чисел в промежутке от 1 до 100.
// Даны два целых числа. Найдите остаток от деления первого числа на второе.
// Дана некоторая строка. Переберите и выведите в консоль по очереди все символы с конца строки 


count = 0
for (let i = 1; i <= 100; i++) {
    count +=i
}
console.log(count);

count2 = 0
for (let i = 1; i<=100; i++){
    if(i%2==0){
        count2 +=i
    }
}
console.log(count2);

count3 = 0
for (let i = 1; i<=100; i++){
    if(i%2!=0){
        count3 +=i
    }
}
console.log(count3);

nums1 = +prompt('число 1')
nums1_2 = +prompt('число 2')
console.log(nums1%nums1_2);


let str_10 = prompt('Введите строку:'); 
for (let i = str_10.length - 1; i >= 0; i--) { 
  console.log(str_10[i]); 
}


 
//  Дан массив с числами. Найдите сумму квадратов элементов этого массива.
// Дан массив с числами. Найдите сумму квадратных корней элементов этого массива.
// Дан массив с числами. Найдите сумму положительных элементов этого массива.
// Дан массив с числами. Найдите сумму тех элементов этого массива, которые больше нуля и меньше десяти. 

let arr = [1, 2, 3, 4, 5, -3, -6]

let qwd = 0;
arr.forEach(num => {
    qwd += num ** 2;
});
console.log(`Сумма квадратiв: ${qwd}`);

sqrt = 0
arr.forEach(num => {
    sqrt += num.sqrt();
});
console.log(`Сумма корней: ${sqrt}`);

sqrt = 0
arr.forEach(num => {
    sqrt += num.sqrt();
});
console.log(`Сумма корней: ${sqrt}`);

positive=0
arr.forEach(num => {
    if (num > 0) {
        positive +=num
    }
});
console.log(`Сумма корней: ${positive}`);

positive2=0
arr.forEach(num => {
    if (0 < num <10 ) {
        positive2 +=num
    }
});
console.log(`Сумма корней: ${positive2}`);



//Дана строка:
// 'abcde'
// Получите массив букв этой строки.

str_arr = 'abcde'
console.log(str_arr.split(''));

// Дано некоторое число:

// 12345
// Получите массив цифр этого числа.

let num_arr = 12345;
let array = String(num_arr).split('').map(Number);
console.log(array);

// Дано некоторое число:

// 12345
// Переверните его:

// 54321
let arr2 = 12345
let array2 = String(arr2).split('').map(Number).reverse().join();
console.log(array2);


// Дано некоторое число:

// 12345
// Найдите сумму цифр этого числа.

let array3 = String(arr2).split('').map(Number)
culc = 0
array3.forEach(num => {
    culc += num
})
console.log(culc);


//Заполните массив целыми числами от 1 до 10.
whole = []
for (i = 1; i <= 10; i++) {
    whole.push(i)
}
console.log(whole);

//Заполните массив четными числами из промежутка от 1 до 100.
whole2 = []
for (i = 1; i <= 10; i++) {
    if (i % 2 == 0) {
        whole2.push(i)
    }
}
console.log(whole2);

//Дан массив с дробями:
// [1.456, 2.125, 3.32, 4.1, 5.34]
// Округлите эти дроби до одного знака в дробной части.


fraction = [1.456, 2.125, 3.32, 4.1, 5.34]
frac = []

fraction.forEach(num => {
    frac.push(num.toFixed(1))
})
console.log(frac);


//Дан массив со строками. Оставьте в этом массиве только те строки, которые начинаются на http://.
let string = ["http://example.com",'asda', "ftp://file.com","http://another-example.com","random text"];
let http = string.filter(i => i.startsWith("http://"));
console.log(http);

//Дан массив со строками. Оставьте в этом массиве только те строки, которые заканчиваются на .html

let string2 = ["http://example.com",'asda.html', "ftp://file.com.html","http://another-example.com","random text"];
let html = string2.filter(i => i.endsWith(".html"));
console.log(html);
//Дан массив с числами. Увеличьте каждое число из массива на 10 процентов.

arr_percent = [15, 23, 32, 41, 52, 22]
percent = []
arr_percent.forEach( i => {
    percent.push(i*1.10)
})
console.log(percent); */

//Заполните массив случайными числами из промежутка от 1 до 100.
random_arr = []
for(i=0; i<5; i++) {
    random_arr.push(Math.round(Math.random(1)*100))
}
console.log(random_arr);



// Дано некоторое число:

// 12345
// Выведите в консоль все его символы с конца.

let number1 = 12345;

let revers3 = number1.toString().split('').reverse().join('');

for (let i = 0; i < revers3.length; i++) {
  console.log(revers3[i]);
}



// Дан некоторый массив, например, вот такой:

// [1, 2, 3, 4, 5, 6]
// По очереди выведите в консоль подмассивы из двух элементов нашего массива:

// [1, 2]
// [3, 4]
// [5, 6]




//Даны два массива:

// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// Слейте эти массивы в новый массив:

// [1, 2, 3, 4, 5, 6]



let obarr1 = [1, 2, 3];
let obarr2 = [4, 5, 6];

let ob = [obarr1+obarr2] 
console.log(ob);
