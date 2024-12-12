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

// let nust2 = '2a4a681';
// onlik =true

// nust2.split('').forEach(i => {
//     if (isNaN(Number(i))) {
//         onlik = false;
//     }
// });

// if(onlik == true){
// 	 console.log('log всі цифри');

// } else {
// 	console.log('не всі тут цири');

// }








// Дана строка. Проверьте, что эта строка состоит только из четных цифр.
// let nust = '123'
// gsg = nust.map(Number)





// Дан массив со числами. Удалите из него числа, имеющие два и более нуля.

// let two0arr = [];

// for (let i = 0; i <= 1000; i += 50) {
//     two0arr.push(i);
// }
// let filteredArr = two0arr.filter(num => {
//     let zeroCount = num.toString().split('').filter(j => j === '0').length;
//     return zeroCount < 2;
// });

// console.log(filteredArr);





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







// 3.10






// №1
// Дан массив. Сделайте так, чтобы в нем каждый элемент повторился два раза.

// let arr77 = [1, 2, 3, 4, 5]
// let doubArr = arr77.flatMap(item => [item, item])
// console.log(doubArr)










// №2
// // Дан массив и число. Оставьте в массиве только те числа, которые являются делителями заданного числа.
// let delitel=[]
// let zaddel = 3
// for(i=1; i<100; i++){
// 	delitel.push(i)
// }

// let itog = delitel.filter(i => i%zaddel == 0)

// console.log(itog);









// №3
// Даны два числа. Получите массив цифр, которые есть и в одном, и во втором числе.
// let num123 = 12345;
// let num223 = 34567;

// let como = Array.from(new Set(String(num123).split('')))
//                         .filter(digit => String(num223).includes(digit));
// console.log(como);












// №4
// Дано число. Получите массив позицией всех цифр 3 в этом числе, за исключением первой и последней.

// let chislo = 1233312333;

// let posiarey = [];
// let strNum = String(chislo)

// for (let i = 0; i < strNum.length; i++) {
//     if (strNum[i] === '3') {
//         posiarey.push(i)
//     }
// }
// if (posiarey.length > 2) {
//     posiarey = posiarey.slice(1, posiarey.length - 1)
// }

// console.log(posiarey)















// №5
// Дан массив со числами. Оставьте в нем числа, состоящие из разных цифр, а остальные удалите.
// let nus = [123, 112, 456, 788, 901, 303];

// let FilsNum = nus.filter(num => {
//     let resa = String(num).split('')
//     return new Set(resa).size == resa.length
// })
// console.log(FilsNum)











// №6
// Дан массив:

// [
// 	[1, 2, 3],
// 	[4, 5, 6],
// 	[7, 8, 9],
// ]
// Слейте элементы этого массива в один одномерный массив:

// [1, 2, 3, 4, 5, 6, 7, 8, 9]
// 


// let miniarr = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
// ];
// let flatmini = array.flat();
// console.log(flatArray)





// 4.0



// №1
// Сделайте функцию, которая вернет текущий день недели словом.
// function getDays() {
//     const days = ['Понеділок', 'Вівторок', 'Середа', 'Четвер', 'Пятниця', 'Субота', 'Неділя'];
//     const today = new Date().getDay();
//     return days[today-1];
// }

// console.log(getDays()); 

// №2
// Сделайте функцию, которая параметром будет получать дату, а возвращать день недели словом, соответствующий этой дате.
// function getDays(date) {
//     const days = ['Понеділок', 'Вівторок', 'Середа', 'Четвер', 'Пятниця', 'Субота', 'Неділя']
//     const ind = new Date(date).getDay()
//     return days[ind-1]
// }

// console.log(getDays('2023-12-25'))



// №3
// Сделайте функцию, которая параметром будет принимать секунды, а возвращать количество суток, соответствующих этим секундам.
// function secday(sec) {
//     return sec / (60 * 60 * 24)
// }
// console.log(secday(86400))



// №4
// Сделайте функцию, которая параметром будет принимать число и строку и обрезать эту строку до длины, заданной первым параметром.

// function vkorotytyRyadok(dovzhyna, tekst) {
//     let rezultat = ''

//     for (let i = 0; i < dovzhyna && i < tekst.length; i++) {
//         rezultat += tekst[i]
//     }


//     return rezultat
// }
// console.log(vkorotytyRyadok(5, "Привіт, Світлана!"))




// №5
// Сделайте функцию, которая параметром будет получать дату, а возвращать знак зодиака, соответствующий этой дате.

// function znakZodiaku(data) {
//     const zodiaky = [
//         { znak: 'Козеріг', poch: '12-22', kin: '01-19' },
//         { znak: 'Водолій', poch: '01-20', kin: '02-18' },
//         { znak: 'Риби', poch: '02-19', kin: '03-20' },
//         { znak: 'Овен', poch: '03-21', kin: '04-19' },
//         { znak: 'Телець', poch: '04-20', kin: '05-20' },
//         { znak: 'Близнюки', poch: '05-21', kin: '06-20' },
//         { znak: 'Рак', poch: '06-21', kin: '07-22' },
//         { znak: 'Лев', poch: '07-23', kin: '08-22' },
//         { znak: 'Діва', poch: '08-23', kin: '09-22' },
//         { znak: 'Терези', poch: '09-23', kin: '10-22' },
//         { znak: 'Скорпіон', poch: '10-23', kin: '11-21' },
//         { znak: 'Стрілець', poch: '11-22', kin: '12-21' }
//     ];

//     const dataVvedena = new Date(data)
//     const misyac = String(dataVvedena.getMonth() + 1).padStart(2, '0')
//     const den = String(dataVvedena.getDate()).padStart(2, '0')
//     const formatData = `${misyac}-${den}`

//     for (let i = 0; i < zodiaky.length; i++) {
//         const { znak, poch, kin } = zodiaky[i]
//         if ((formatData >= poch && formatData <= '12-31') ||  (formatData >= '01-01' && formatData <= kin)) {
//             return znak
//         }
//     }
// }

// console.log(znakZodiaku('2023-10-01'))



// №6
// Сделайте функцию, которая параметром будет принимать число, а возвращать сумму его делителей.

// function sumaDilnykiv(chyslo) {
//     let suma = 0
//     for (let i = 1; i <= chyslo; i++) {
//         if (chyslo % i === 0) {
//             suma += i
//         }
//     }
//     return suma
// }

// console.log(sumaDilnykiv(12))








// 4.2

// №1
// Сделайте функцию, которая параметром будет принимать число и возвращать сумму его цифр.

// function sumaCyfr(chyslo) {
//     let suma = 0

//     while (chyslo > 0) {
//         suma += chyslo % 10
//         chyslo = Math.floor(chyslo / 10)
//     }

//     return suma
// }

// console.log(sumaCyfr(123))
// console.log(sumaCyfr(4567))

// №2
// Сделайте функцию, которая параметром будет принимать число и удалять из него нули.

// function vydalytyNuli(chyslo) {
//     return Number(String(chyslo).replace(/0/g, ''));
// }
// console.log(vydalytyNuli(102030)); 

// №3
// Сделайте функцию, которая будет возвращать сколько дней прошло или осталось до заданной даты в году, в зависимости от того, была уже эта дата или нет.
// function dniDoDaty(data) {
//     let nows = new Date()
//     let tar = new Date(data)
//     let ms = 1000 * 60 * 60 * 24
//     let dif = tar - nows;
//     return Math.round(dif / ms)
// }
// console.log(dniDoDaty('2024-12-25'))





// №4
// Сделайте функцию, которая параметром будет принимать год и проверять, високосный он или нет.






// №5
// Сделайте функцию, которая вернет массив всех високосных годов за предыдущие сто лет.

// function vysokosniRoky() {
//     const potokhnyyRik = new Date().getFullYear();
//     const poperedni100 = Array.from({ length: 100 }, (_, i) => potokhnyyRik - i);
//     return poperedni100.filter(chyVysokosnyy);
// }


// №6
// Сделайте функцию, которая будет возвращать сколько дней осталось до конца текущего месяца.


// function dniDoKincyaMisyacya() {
// 	const now = new Date();
// 	const enonth = new Date(now.getFullYear(), now.getMonth() + 1, 0);
// 	const perdy = 1000 * 60 * 60 * 24;
// 	return Math.round((enonth - now) / perdy);
// }
// console.log(dniDoKincyaMisyacya());



// №7
// Сделайте функцию, которая вернет предыдущий, текущий и следующий дни недели словом в виде следующего объекта:

// function dnyTyzhnya() {
//     const dni = ['нд', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
//     const syogodni = new Date().getDay();

//     return {
//         prev: dni[(syogodni + 6) % 7],
//         curr: dni[syogodni],
//         next: dni[(syogodni + 1) % 7],
//     };
// }

// console.log(dnyTyzhnya());


// {
// 	next: 'пн',
// 	curr: 'вс',
// 	prev: 'сб',
// }






// 4.3





// №1
// Сделайте функцию, которая параметром будет принимать массив и удалять из него все дубли.
// let phislo = [1, 1, 2, 3, 3, 3, 4, 5, 5]
// function vydalytyDuble(masiv) {
//     let rezultat = []

//     for (let i = 0; i < masiv.length; i++) {
//         if (!rezultat.includes(masiv[i])) {
//             rezultat.push(masiv[i])
//         }
//     }
//     return rezultat
// }

// console.log(vydalytyDuble(phislo))



// №2
// Сделайте функцию, которая параметром будет принимать массив и удалять из него все дубли, которые встречаются больше трех раз.
// 

// function vydalytyChastyiDuble(masiv) {
//     const zustrichi = masiv.reduce((acc, num) => {
//         acc[num] = (acc[num] || 0) + 1
//         return acc
//     }, {})

//     return masiv.filter((num) => zustrichi[num] <= 3)
// }

// console.log(vydalytyChastyiDuble(phislo))



// №3
// Сделайте функцию, которая параметром будет принимать массив и удалять из него одинаковые, рядом стоящие элементы.
// let chislo = [1, 1, 2, 3, 3, 3, 4, 5, 5]
// function vydalytySosedniDuble(masiv) {
//     return masiv.filter((y, i) => y !== masiv[i - 1]);
// }

// console.log(vydalytySosedniDuble(chislo))



// №4
// Сделайте функцию, которая параметром будет принимать массив с числами и возвращать максимальное и минимальное значение из этого массива в виде следующего объекта:

// {
// 	max: 9,
// 	min: 1,
// }

// function maksimumIMinimum(masiv) {
//     return {
//         max: Math.max(...masiv),
//         min: Math.min(...masiv),
//     };
// }

// console.log(maksimumIMinimum(chislo))




// 4.4




// №1
// Сделайте функцию, которая параметром будет принимать число, а возвращать количество его делителей.
// function  delitelnaya (num){
// 	let delcont = 0
// 	for(i=1; i<=num;i++){
// 		if(num%i==0){
// 			delcont++
// 		}
// 	} 
// 	return console.log("Число", num, 'має', delcont, "дільників");
// }
// console.log(delitelnaya(22));





// №2
// Сделайте функцию, которая параметром будет принимать дату, а возвращать знак зодиака, соответствующий этой дате.

// function getZodiacSign(day, month) {
//     const zodiacSigns = [
//         { sign: "Козеріг", start: [12, 22], end: [1, 19] },
//         { sign: "Водолій", start: [1, 20], end: [2, 18] },
//         { sign: "Риби", start: [2, 19], end: [3, 20] },
//         { sign: "Овен", start: [3, 21], end: [4, 19] },
//         { sign: "Телець", start: [4, 20], end: [5, 20] },
//         { sign: "Близнюки", start: [5, 21], end: [6, 20] },
//         { sign: "Рак", start: [6, 21], end: [7, 22] },
//         { sign: "Лев", start: [7, 23], end: [8, 22] },
//         { sign: "Діва", start: [8, 23], end: [9, 22] },
//         { sign: "Терези", start: [9, 23], end: [10, 22] },
//         { sign: "Скорпіон", start: [10, 23], end: [11, 21] },
//         { sign: "Стрілець", start: [11, 22], end: [12, 21] },
//     ];

//     for (const { sign, start, end } of zodiacSigns) {
//         if (
//             (month === start[0] && day >= start[1]) ||
//             (month === end[0] && day <= end[1])
//         ) {
//             return sign;
//         }
//     }
// }

// console.log(getZodiacSign(23, 7))





// №3
// Сделайте функцию, которая параметром будет принимать число, а возвращать массив его делителей.

// function  delitelnaya2 (num){
// 	let delarr = []
// 	for(let i=1; i<=num;i++){
		
// 		if(num%i===0){
// 			delarr.push(i)
// 		}
// 	} 
// 	return delarr
// }

// console.log(delitelnaya2(25));




// №4
// Сделайте функцию, которая параметром будет принимать число и проверять, простое оно или нет.
// function prosto(num) {
//     if (num <= 1) {
// 		return false
// 	}
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//         if (num % i === 0) return false
//     }
//     return true
// }

// console.log(prosto(7))




// №5
// Сделайте функцию, которая параметром будет принимать число и удалять из него четные цифры.

// function nechet(num) {
//     return Number(String(num).split('').filter(i => i % 2 !== 0).join(''))
// }

// console.log(nechet(123456))



// №6
// Сделайте функцию, которая заполнит массив N случайными числами из заданного промежутка.
// function randomArray(N, min, max) {
//     let arr = []
//     for (let i = 0; i < N; i++) {
//         arr.push(Math.floor(Math.random() * (max - min + 1)) + min)
//     }
//     return arr
// }





// 4.5






