var a1 = 12;
var a2 = 'text var a2';
var a3 = 71;
var a4 = a1 + a3;
var a5 = a4 + a1 + a3;

let b1 = 10;
let b2 = 'text let b2';
let b3 = 20;
let b4 = b1 + b3;
let b5 = b4 + b1 + b3;

const c1 = 20;
const c2 = 'text const c2';
const c3 = 30;
const c4 = 'const4';
const c5 = 123;

document.write(a2);
document.write('<hr>');
document.write(b2);
document.write('<hr>');
document.write(c2);
document.write('<hr>');
document.write('<b>var</b> - це старий підхід оголошення змінної. Не рекомендується виокристання');
document.write('<hr>');
document.write('<b>let</b> - це новий підхід оголошення змінної. Рекомендується використання');
document.write('<hr>');
document.write('<b>сonst</b> - це константа, містить в собі інформацію яку не можна перезаписати');
document.write('<hr>');
document.write('<b>Декларація</b> -оголошення перемінної без присвоєння їй значення, наприклад let a1; .');
document.write('<hr>');
document.write('<b>Ініціалізація </b> - це оголошення перемінної алез  присвоєнням їй значення, наприклад let a1 = 1; .');
document.write('<hr>');

console.log(a1);
console.log(b1);
console.log(c1);

alert(a3);
alert(b3);
alert(c3);

confirm(a4);
confirm(b4);
confirm(c4);

prompt(a5); 
prompt(b5); 
prompt(c5); 




