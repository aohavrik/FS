// * Разделять все задания комментариями и писать что нужно делать в задании.

// 1. Создайте функцию, которая выводит текст Hello, World! в консоль с задержкой в ​​3 секунды с помощью setTimeout.
//   Опишите в console.info как функция выполняется асинхронно.
function Consoleinfo() {
    setTimeout(() => {
        console.log('Hello world');
    }, 3000)
}
Consoleinfo()
console.info('Ця функція виконується ассинхронно, використання setTimeout затримуэ виконання функції на 3 секунди.')

// // 2. Создайте промиссифицированные функции, и функцию выполняющую несколько запросов к различным промиссифицированным функциям с помощью
// //    - Promise.all
// //    - Promise.allSettled
// //    - Promice.race
// //    - Promice.any

function promice1() {
//     return new Promise((res, rej) => {
//         setTimeout(() => {
//             rej('Дані з джерела 1');
//         }, 1000); 
//     });
}

function promice2() {
//     return new Promise((res, rej) => {
//         setTimeout(() => {
//             rej('Помилка в джерелі 2');
//         }, 2000); 
//     });
}

function promice3() {
//     return new Promise((res, rej) => {
//         setTimeout(() => {
//             rej('Дані з джерела 3');
//         }, 1500); 
//     });
}

console.log('--- Promise.all ---');

Promise.all([promice1(), promice2(), promice3()]).then(d => {
    console.log(d);
}).catch(d => console.log(d))


console.log('---Promise.allSettled---');

Promise.allSettled([promice1(), promice2(), promice3()]).then(d => {
    d.forEach(el => {
        if (el.status == 'fulfilled') {
            console.log(el.value);
        } else {
            console.log(el.reason);
        }
    });
}).catch(d => console.log(d))
console.log('---Promise.race---');

Promise.race([promice1(), promice2(), promice3()]).then(d => {
        console.log(d);
    })
console.log('---Promise.any---');

Promise.any([promice1(), promice2(), promice3()])
.then((el) => {
    console.log('найшвидше виконання:', el);
})
.catch((er) => {
    console.log('Жоден з промісів не було виконано', er);
});


// 3. Используя асинхронный код, напишите программу,
//    которая выполняет определенную асинхронную операцию (например задержка с помощью setTimeout) несколько раз в цикле.
//    Укажите, как код выполняется асинхронно и управляется с использованием:
//    - async/await
//    - Promise



console.log('--- async/await---');

function delay(sec) {
    return new Promise(res => {
        setTimeout(res, sec)
})
}

async function asyncFunc() {
    for (let i = 1; i <= 3; i++) {
        await delay(1000);
        console.log(`oперація ${i} виконана`);
    }
    console.info('aсинхронний цикл з використанням async/await.');
}

asyncFunc();



console.log('---Promise---');


function promFunc() {

    let PromRes = Promise.resolve();

    for (let i = 1; i <= 3; i++) {
        PromRes = PromRes.then(() => delay(1000)).then(() => {
            console.log(`oперація ${i} виконана`);
        });
    }
    
    PromRes.then(() => {
        console.info('асинхронний цикл з використанням Promise.');
    });
}

promFunc();



