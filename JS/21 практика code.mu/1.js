//Дано некоторое число. Проверьте, что цифры этого числа расположены по возрастанию.
// let num = 123
// let string_arr = num.toString().split(''); 
// let trufol = true

// string_arr.forEach((el, i, arr) => {
//     if (i > 0 && arr[i - 1] > el) {
//         trufol = false;
//     }
// });

// if (trufol == false){
//     console.log(' цифри не по возростнню');
// } else{
//     console.log(' цифри  по возростнню');
// }




//  Дан массив:

// [1, '', 2, 3, '', 5]
// Удалите из массива все пустые строки.

// let arr1 =  [1, '', 2, 3, '', 5]
// let res1 = arr1.filter(i => i!="")
// console.log(res1);


// Дан массив:

// [
// 	[2, 1, 4, 3, 5],
// 	[3, 5, 2, 4, 1],
// 	[4, 3, 1, 5, 2],
// ]
// Отсортируйте элементы в каждом подмассиве.

// arr2 = [
// 	[2, 1, 4, 3, 5],
// 	[3, 5, 2, 4, 1],
// 	[4, 3, 1, 5, 2],
// ]
// res2 = arr2.forEach((i)=> {
//     i.sort((a, b) => a - b);
// })
// console.log(res2);

// Даны два массива:

// let arr1 = [1, 2, 3];
// let arr2 = [1, 2, 3, 4, 5];
// Удалите из большего массива лишние элементы с конца так, чтобы длины массивов стали одинаковыми.


// let arr3_1 = [1, 2, 3];
// let arr3_2 = [1, 2, 3, 4, 5];

// let res3 = arr3_2.splice(0, arr3_1.length)
// console.log(res3);







// 3.2






// Выведите в консоль все числа в промежутке от 10 до 1000, у которых предпоследняя цифра четная.


// for (let i = 10; i <= 1000; i++) {
//     let noarr = i.toString().split('');
//     let Last = noarr[noarr.length - 1] 
//     if (Last != "0") {
//         if(i%2==0){
//             console.log(i);
//         }
//     }
// }




// Дан массив. Удалите из него каждый пятый элемент.

// let arrs = []

// for(let i = 1; i<=30; i++){
//     arrs.push(i)
// }
// console.log(arrs);
// let arrss = arrs.filter(i => i% 5 != 0)
// console.log(arrss);



// Дана некоторая переменная с числом:

// let num = 5;
// Сделайте строку, содержащую столько нулей, сколько указано в переменной. В нашем случае получится такая строка:

// '00000'


// let zeronum = 6
// let zerores = 0
// for (i=1; i<zeronum; i++){
//     zerores += '0'
// }
// console.log(zerores);





// Дана некоторая строка со словами:

// 'aaa bbb ccc eee fff'
// Удалите из этой строки каждое второе слово. В нашем случае должно получится следующее:

// 'aaa ccc fff'

// let str = 'aaa bbb ccc eee fff'

// let strarr = str.split(' ')
// let strfiltr = strarr.filter((_,i) => i % 2 == 0)
// let strstr=strfiltr.join(" ")
// console.log(strstr);



// Дан массив:

// [
// 	[1, 2, 3],
// 	[4, 5, 6],
// 	[7, 8, 9],
// ]
// Найдите сумму элементов этого массива.

// const flatsum = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
// ]

// let resflat = flatsum.flat()
// let count = 0
// for(let i = 0; i<resflat.length; i++){
//     count += resflat[i]
// }
// console.log(count);






// 3.3




// Дан массив со словами. Удалите из него слова, состоящие более чем из трех символов.

// let str_len = ['qwer', 'qw', 'asdfgh', 'swe']
// let sorts = str_len.filter((i) => i.length<=3)  
// console.log(sorts);








// Дано некоторое число:

// 1357
// Проверьте, что все цифры этого числа являются нечетными.


// let mum = 21357
// let set = true
// let arsNum = mum.toString().split('').forEach((i) => {
//     if(i%2==0){
//         set = false
//     } 
// })
// if(set == true){
//     console.log('все цифры этого числа являются нечетными');
// } else{
//     console.log('не все цифры этого числа являются нечетными');
// }






// Дано некоторое слово:

// 'abcba'
// Проверьте, что это слово читается одинаково с любой стороны.


// let read = 'abcba'
// let rever = read.split('').reverse().join('')
// if(read == rever){
//     console.log('это слово читается одинаково с любой стороны.');
// } else {
//     console.log('это слово не читается одинаково с любой стороны.');
// }








// Дан массив:

// [
// 	[
// 		[11, 12, 13],
// 		[14, 15, 16],
// 		[17, 17, 19],
// 	],
// 	[
// 		[21, 22, 23],
// 		[24, 25, 26],
// 		[27, 27, 29],
// 	],
// 	[
// 		[31, 32, 33],
// 		[34, 35, 36],
// 		[37, 37, 39],
// 	],
// ]
// Найдите сумму элементов этого массива.


// let sumbigarr= 0
// let big_arr =  [
//     	[
//     		[11, 12, 13],
//     		[14, 15, 16],
//     		[17, 17, 19],
//     	],
//     	[
//     		[21, 22, 23],
//     		[24, 25, 26],
//     		[27, 27, 29],
//     	],
//     	[
//     		[31, 32, 33],
//     		[34, 35, 36],
//     		[37, 37, 39],
//     	],
//     ]

// big_arr.forEach((i) => {
//     i.forEach((j)=>{
//         j.forEach((k=>{
//             sumbigarr += k
//         }))
//     })
// })
// console.log(sumbigarr);





// 3.4










// Выведите в консоль все числа в промежутке от 10 до 1000, у которых первая цифра четная.

//  for (let i = 10; i <= 1000; i++) {
//         let noarr = i.toString().split('');
//         let first = noarr[0] 
//         if (first %2==0 ) {
//                 console.log(i);
//         }
//     }









// Дан некоторый массив, например, вот такой:

// [1, 2, 3, 4, 5, 6]
// Поменяйте местами пары элементов этого массива:

// [2, 1, 4, 3, 6, 5]

// let rev2 = [1, 2, 3, 4, 5, 6]
// for (let i = 0; i < rev2.length; i += 2){
//     let ar = rev2[i]
//     rev2[i] = rev2[i + 1]
//     rev2[i+1] = ar
// }
// console.log(rev2);








// Дан следующий объект:

// let obj = {
// 	1: {
// 		1: 11,
// 		2: 12,
// 		3: 13,
// 	},
// 	2: {
// 		1: 21,
// 		2: 22,
// 		3: 23,
// 	},
// 	3: {
// 		1: 24,
// 		2: 25,
// 		3: 26,
// 	},
// }
// Найдите сумму элементов этого объекта.



// let objct = {
// 	1: {
// 		1: 11,
// 		2: 12,
// 		3: 13,
// 	},
// 	2: {
// 		1: 21,
// 		2: 22,
// 		3: 23,
// 	},
// 	3: {
// 		1: 24,
// 		2: 25,
// 		3: 26,
// 	},
// }
// let ccoout = 0
// for (let i in objct) {
//     for (let j in objct[i]) {
//         ccoout += objct[i][j];
//     }
// }
// console.log(ccoout);













// 3.5







// Дан текст со словами. Запишите в массив все слова, начинающиеся на букву 'a'.


// let text_a=[]
// let text = 'qwera asddd gf aaasf aqw jhssah'
// let artext = text.split(' ').forEach((i) => {
// 	let letter = i.split('')
// 		if(letter[0] == 'a'){
// 			text_a.push(i)
// 		}

// })

// console.log(text_a);













// Дан массив с числами. Оставьте в нем только те числа, которые делятся на 5.


// let numbr = []
// for (i=1; i<=50; i++){
// 	if(i%5==0){
// 		numbr.push(i)
// 	}
// } 
// console.log(numbr);













// Дан массив с числами. Оставьте в нем только те числа, которые содержат цифру ноль.


// let numbro = []
// for (i=0; i<=200; i++){
// 		let strnum = i.toString().split('')
// 		strnum.filter((j) => {
// 			if(j == 0 ){
// 				numbro.push(i)
// 			}
// 		})
// } 
// console.log(numbro);






// Дан массив со числами. Проверьте, что в нем есть число, содержащее в себе цифру 3.




// let numbrq = []
// for (i=0; i<=50; i++){
// 	let str = i.toString().split('')
// 	str.filter((j)=>{
// 		if(j == 3){
// 			numbrq.push(i)
// 		}
// 	})
// }
// console.log(numbrq);










// Дано некоторое число:

// 35142
// Отсортируйте цифры этого числа. В нашем случае должно получится следующее:

// 12345

// let q1 = 35142
// let q2 = q1.toString().split('').sort().join('')
// console.log(q2);















// Напишите программу, которая сформирует следующую строку:

// '-1-2-3-4-5-'

// let w1 = []
// for(i=1; i<=5; i++){
// 	w1.push(i)
// }
// let w2 = w1.join('-') 
// let w3 = w2.split('')
// w3.unshift('-')
// w3.push('-')
// let w4 = w3.join('')


// console.log(w4);
















// Найдите сумму элементов этого объекта.

// let objk = {
// 	1: {
// 		1: {
// 			1: 111,
// 			2: 112,
// 			3: 113,
// 		},
// 		2: {
// 			1: 121,
// 			2: 122,
// 			3: 123,
// 		},
// 	},
// 	2: {
// 		1: {
// 			1: 211,
// 			2: 212,
// 			3: 213,
// 		},
// 		2: {
// 			1: 221,
// 			2: 222,
// 			3: 223,
// 		},
// 	},
// 	3: {
// 		1: {
// 			1: 311,
// 			2: 312,
// 			3: 313,
// 		},
// 		2: {
// 			1: 321,
// 			2: 322,
// 			3: 323,
// 		},
// 	},
// }

// let soun = 0
// for (i in objk){
// 	for(j in objk[i]){
// 		for(k in objk[j]){
// 			soun+=objk[i][j][k]
// 		}
// 	}
// }
// console.log(soun);













// 3.6






// Дан массив со числами. Удалите из него числа, состоящие более чем из трех цифр.


// let bum = []
// for (i=990; i<= 1120; i++){
// 	bum.push(i)
// }
// let bumres= bum.toString().split(",").filter((i) => i.length <= 3 )
// console.log(bumres);






// Дано число, например, вот такое:

// let num = 12345;
// Проверьте, что все цифры этого числа больше нуля.

// let numg = 12345
// let big0 = true
// rjes = numg.toString().split("").forEach((i) => {
// 	if (i <= 0) {
// 		big0 = false
// 	}
// })
// if(big0==true){
// 	console.log("всі більше нуля");
// } else {
// 	console.log('не всі більше нуля');
// }







// Дан некоторый массив, например, вот такой:

// [123, 456, 789]
// Слейте все элементы этого массива в один массив, разбив их посимвольно:

// [1, 2, 3, 4, 5, 6, 7, 8, 9]

// let arsstrsort = [123, 456, 789]
// let asd = arsstrsort.join('').split('').map(Number)
// console.log(asd);







// Дан следующая структура:

// let data = [
// 	{
// 		1: 11,
// 		2: 12,
// 		3: 13,
// 	},
// 	{
// 		1: 21,
// 		2: 22,
// 		3: 23,
// 	},
// 	{
// 		1: 24,
// 		2: 25,
// 		3: 26,
// 	},
// ];


// Найдите сумму элементов этой структуры.
// let ghj = 0
// let pre = data.forEach((i)=> {
// 	for( j in i){
// 		ghj += i[j]
// 	}
// })
// console.log(ghj);






//3.7






//Дана строка со словами. Отсортируйте слова в алфавитном порядке.

// let sortstr = 'Bsfk fvsr fkgkgk xcvb'
// let arrstrsort = sortstr.split(' ').sort()
// console.log(arrstrsort);





// Дано число. Получите массив делителей этого числа.
// let pn = 42
// let pnres =[]
// for(i=1; i<=pn; i++){
// 	if(pn%i == 0){
// 		pnres.push(i)
// 	}
// } 
// console.log(pnres);







//Даны два числа. Получите массив общих делителей этих чисел.

// let numbre1 = 28
// let numbre2 = 24
// let conc = []

// if (numbre1 => numbre2) {

// 	for (i = 1; i <= numbre1; i++) {
// 		if (numbre1 % i == 0 && numbre2 % i == 0) {
// 			conc.push(i)
// 		}
// 	}
// 	console.log(conc);
// } else {
// 	for (i = 1; i <= numbre2; i++) {
// 		if (numbre1 % i == 0 && numbre2 % i == 0) {
// 			conc.push(i)
// 		}
// 	}
// 	console.log(conc);
// }







//Дано число. Проверьте, что у этого числа есть только один делитель, кроме него самого и единицы.
// let nqwe = 9; 
// let count9 = 0; 

// for (let i = 2; i < nqwe; i++) {
//   if (nqwe % i === 0) {
//     count9++;
//     if (count9 > 1) {
//       break; 
//     }
//   }
// }

// if (count9 === 1) {
//   console.log('у этого числа есть только один делитель, кроме него самого и единицы.'); 
// } else {
//   console.log('у этого числа есть не только один делитель, кроме него самого и единицы.'); 
// }







//Через запятую написаны числа. Получите максимальное из этих чисел.

// let jqwery= [4, 5, 6, 4]
// let maxj = Math.max(...jqwery)
// console.log(maxj);





//Дан массив с числами. После каждого однозначного числа вставьте еще такое же.
// let jqwery2 = [42, 5, 61, 4, 13];
// for (let i = 0; i < jqwery2.length; i++){
//     if (jqwery2[i].toString().length === 1) { 
//         jqwery2.splice(i + 1, 0, jqwery2[i]);
// 		i++;
//     }
// };
// console.log(jqwery2);






//Дана строка. Удалите из нее все гласные буквы.

// let str55 = "фацкапвіі ьлізе їхзщшло";
// let resvbn = str55.replace(/[аеєиіїоуюя]/g, '');
// console.log(resvbn);






//Дана строка. Сделайте заглавной последнюю букву каждого слова в этой строке.

// let str66 = "фацкапвіі ьлізе їхзщшло";

// let result47 = str66.split(' ').map(i => {
//     let lsts = i[i.length - 1].toUpperCase(); 
//     return i.slice(0, -1) + lsts; 
// }).join(' ');

// console.log(result47);



//Дан следующая структура:

// let data3 = [
// 	{
// 		1: [1, 2, 3],
// 		2: [1, 2, 3],
// 		3: [1, 2, 3],
// 	},
// 	{
// 		1: [1, 2, 3],
// 		2: [1, 2, 3],
// 		3: [1, 2, 3],
// 	},
// 	{
// 		1: [1, 2, 3],
// 		2: [1, 2, 3],
// 		3: [1, 2, 3],
// 	},
// ];
// Найдите сумму элементов этой структуры.

// let ghj123 = 0
// let pre123 = data3.forEach((i)=> {
// 	for( j in i){
// 		for(k of i[j]) {
// 			ghj123 += k
// 		}
// 	}
// })
// console.log(ghj123);




// 3.8





// Дан массив со числами. Проверьте, что все числа из этого массива содержат в себе цифру 3.


// let numg2 = [23, 13, 22]
// let big3 = true

// for (i of numg2) {
// 	let n3 = i.toString().split('')
// 	if (n3[0] != 3 && n3[n3.length - 1] != 3) {
// 		big3 = false;
// 	}
// }
// if (big3 == true) {
// 	console.log("всі мають 3");
// } else {
// 	console.log('не всі мають 3');
// }


// Дана строка в формате:

//  'kebab-case'
// Преобразуйте ее в формат:

// 'snake_case'

// let keba = 'kebab-case';

// Преобразуем kebab-case в snake_case
// keba = keba.replace(/kebab-/g, 'snake_');
// console.log(keba);



// Дана строка в формате:

// 'snake_case'
// Преобразуйте ее в формат:

// 'camelCase'

// keba =  keba.replace(/snake_case/g, 'camelCase');
// console.log(keba);

// Дана строка в формате:

// 'camelCase'
// Преобразуйте ее в формат:

// 'snake_case'

// keba =  keba.replace(/camelCase/g, 'snake_case');
// console.log(keba);





// Сформируйте с помощью циклов следующий массив:

// [
// 	[1, 2, 3],
// 	[1, 2, 3],
// 	[1, 2, 3],
// 	[1, 2, 3],
// 	[1, 2, 3],
// ]


// let arrbig = []
// for(i=1; i<=5; i++){
// 	let arrbig2 = []
// 	for(j=1;j<=3; j++){
// 		arrbig2.push(j)
// 	}
// 	arrbig.push(arrbig2)
// }
// console.log(arrbig);






// 3.9







// Дана строка. Проверьте, что эта строка состоит только из цифр.







// Дана строка. Проверьте, что эта строка состоит только из четных цифр.





// Дан массив со числами. Удалите из него числа, имеющие два и более нуля.

let two0arr = []

for (i = 0; i <= 1000; i += 50) {
	two0arr.push(i)
}


two0arr.forEach((i)=>{
	let zxc = i.toString().split('')
	zxc.filter((j)=> j == 0)
})

console.log(zxc);





// Найдите все числа от 1 до 1000, сумма цифр которых равна 13.
// let arrsum1000 = []
// let arrsum13 = []
// for(i=0; i<=1000; i++){
// 	arrsum1000.push(i)
// }
// for( i of arrsum1000){
// 	let er = arrsum1000[i].toString().split('')
// 	if(er[0]+er[er.length-1]==13){
// 		arrsum13.push(i)
// 	}
// }
// console.log(`числа сма цифр яких = 13: ${arrsum13}`);






// Сформируйте с помощью циклов следующий массив:

// [
// 	[1, 2, 3],
// 	[4, 5, 6],
// 	[7, 8, 9],
// ]


// let order = []
// let order1 = []
// let order2 = []
// let order3 = []
// for (j = 1; j <= 9; j++) {
// 	if (j <= 3) {
// 		order1.push(j)
// 	} else if (j > 3 && j <= 6) {
// 		order2.push(j)
// 	} else if (j > 6 && j <= 9) {
// 		order3.push(j)
// 	}
// }
// order.push(order1)
// order.push(order2)
// order.push(order3)

// console.log(order);