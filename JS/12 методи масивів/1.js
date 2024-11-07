
let str = 'Hello world and my dear friend ...'

console.log('split');
let str_split = str.split('')
console.log(str_split);

console.log('IndexOF');
let str_inOf = str.indexOf("w")
console.log(str_inOf);

console.log('lastIndexOf');
let str_lastInd = str.lastIndexOf('w')
console.log(str_lastInd);


console.log('concat');
let str_concat  = str.concat('By')
console.log(str_concat);

console.log('includes');
let str_incl = str.includes('o')
console.log(str_incl);

console.log('replace');
let str_repl = str.replace('...', 'Mykola Tsip')
console.log(str_repl);


console.log('charAt');
let str_char = str.charAt(0)
console.log(str_char);


console.log('startWith');
let str_strt = str.startsWith('Hello')
console.log(str_strt);


console.log('endsWiht');
let str_end = str.endsWith('kvas')
console.log(str_end);

let leng = str.length
console.log('padstart');
let str_padstart = str.padStart(leng+6, "START ")
console.log(str_padstart);

console.log('padend');
let str_padend = str.padEnd(leng+3, 'END')
console.log(str_padend);


console.log('charCodeAt');
let str_charCodeAt = str.charCodeAt(7)
console.log(str_charCodeAt);

console.log('search');
let search = str.search('Hello')
console.log(search);


console.log('toLocaleLowerCase');
console.log(str.toLocaleLowerCase());


console.log('toLocaleUpperCase');
console.log(str.toLocaleUpperCase());


console.log('trim');
console.log(str.trim());



console.log('repeat')
console.log(str.repeat(2))



 
