function writeProgram(coding, cb){
    console.log('Prog');
    setTimeout(()=>{
        const salary = 1500


        if (coding){
            cb(null, salary)
        }else{
            cb('the program is not done', 0)
        }
    }, 1000)
}

function buyKeyboard (money, cb){
    console.log('Keyb');
    setTimeout(() => {
        const constofKeyboard = 500

        if(constofKeyboard <= money){
            const rest = money - constofKeyboard
            cb(null, rest)
        } else {
            cb('need more money!!', money)
        }
    }, 2000)

}
function visitCinema (money, cb){
    console.log('Cinema');
    setTimeout(() => {
        const constofCinema = 100

        if(constofCinema <= money){
            const rest = money - constofCinema
            cb(null, rest)
        } else {
            cb('need more money!!!', money)
        }
    }, 1000)
}

writeProgram(true, (error, salary) => {
    if (typeof salary === 'number'){
        console.log('the program is developed! I received: ', salary);
        
        buyKeyboard(salary, (errorKeyb, restofKeyb) => {
            if(!errorKeyb){
                console.log('I bought a keyboard! I have funds left: ', restofKeyb);
                
                visitCinema(restofKeyb, (errorCinema, restofCinema)=>{
                    if(!errorCinema){
                        console.log('Im going to the cinema! I have funds left: ', restofCinema);
                    }else {
                        console.log(errorCinema, restofCinema); 
                    }
                })
            }else{
                console.log(errorKeyb, restofKeyb);
            }
        })
    } else {
        console.log('((((((', error, salary);
    }
})