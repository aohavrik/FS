// * Розділяти всі завдання коментарями і писати що треба робити в завданні.

// 1. Опирайтесь на код лекцій про колбеки.


// function writeProgram(coding, cb){
//     console.log('Prog');
//     setTimeout(()=>{
//         const salary = 1500


//         if (coding){
//             cb(null, salary)
//         }else{
//             cb('the program is not done', 0)
//         }
//     }, 1000)
// }

// function buyKeyboard (money, cb){
//     console.log('Keyb');
//     setTimeout(() => {
//         const constofKeyboard = 500

//         if(constofKeyboard <= money){
//             const rest = money - constofKeyboard
//             cb(null, rest)
//         } else {
//             cb('need more money!!', money)
//         }
//     }, 2000)

// }
// function visitCinema (money, cb){
//     console.log('Cinema');
//     setTimeout(() => {
//         const constofCinema = 100

//         if(constofCinema <= money){
//             const rest = money - constofCinema
//             cb(null, rest)
//         } else {
//             cb('need more money!!!', money)
//         }
//     }, 1000)
// }

// writeProgram(true, (error, salary) => {
//     if (typeof salary === 'number'){
//         console.log('the program is developed! I received: ', salary);

//         buyKeyboard(salary, (errorKeyb, restofKeyb) => {
//             if(!errorKeyb){
//                 console.log('I bought a keyboard! I have funds left: ', restofKeyb);

//                 visitCinema(restofKeyb, (errorCinema, restofCinema)=>{
//                     if(!errorCinema){
//                         console.log('Im going to the cinema! I have funds left: ', restofCinema);
//                     }else {
//                         console.log(errorCinema, restofCinema); 
//                     }
//                 })
//             }else{
//                 console.log(errorKeyb, restofKeyb);
//             }
//         })
//     } else {
//         console.log('((((((', error, salary);
//     }
// })


// 2. Промисифікуйте функції.
function writeProgram(coding) {
    return new Promise((res, rej) => {
        console.log('Prog');
        setTimeout(() => {
            const salary = 1500

            if (coding) {
                res(salary)
            } else {
                rej('the program is not done')
            }
        }, 1000)

    })
}
function buyKeyboard(money) {
    return new Promise((res, rej) => {
        console.log('Keyb');
        setTimeout(() => {
            const constofKeyboard = 500

            if (constofKeyboard <= money) {
                const rest = money - constofKeyboard
                res(rest)
            } else {
                rej('need more money!!', money)
            }
        }, 2000)
    })

}
function visitCinema(money) {
    return new Promise((res, rej) => {
        console.log('Cinema');
        setTimeout(() => {
            const constofCinema = 100

            if (constofCinema <= money) {
                const rest = money - constofCinema
                res(rest)
            } else {
                rej('need more money!!!', money)
            }
        }, 1000)
    })
}

// 3. Викликайте ланцюжок виклку асинхронних функцій через Promise.
writeProgram(true)
    .then(rew => {
        console.log(rew);
        return buyKeyboard(rew, "the program is developed!")
    })
    .then(rest => {
        console.log(rest);
        return visitCinema(rest, "I bought a keyboard!")
    })
    .then(restCinema => {
        console.log(restCinema);
    }).catch(err => console.log(err))
// 4.  Викликайте ланцюжок виклку асинхронних функцій через async/await.

async function AsyCode() {
    try {
        const prog = await writeProgram(false)
        console.log(prog);
        const Key = await buyKeyboard(prog)
        console.log(Key);
        const Cinema = await visitCinema(Key)
        console.log(Cinema);
    } catch (error) {
        console.log(error);
    }
}
AsyCode()

// 5. Покажіть приклади використання Promise.all, Promise.allSetlled, Promise.race.
Promise.all([writeProgram(true), buyKeyboard(600), visitCinema(300)]).then(d => {
    console.log(d);
}).catch(d => console.log(d))

Promise.allSettled([writeProgram(true), buyKeyboard(600), visitCinema(300)]).then(d => {
    d.forEach(el => {
        if (el.status == 'fulfilled') {
            console.log(el.value);
        } else {
            console.log(el.reason);
        }
    });
}).catch(d => console.log(d))

Promise.race([writeProgram(true), buyKeyboard(600), visitCinema(300)]).then(d => {
        console.log(d);
    })