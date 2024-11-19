//backend
function writeProgram(isClean, cb){
    console.log('housee start');
    setTimeout(()=>{
        const salary = 500
        if (isClean){
            cb(null, salary)
        }else{
            cb('house is not cleared', 0)
        }
    }, 3000)
}

function buyKeyboard (money, cb){
    console.log('shop start');
    
    setTimeout(() => {
        const constofjeans = 100

        if(constofjeans <= money){
            const rest = money - constofjeans
            cb(null, rest)
        } else {
            cb('need more money', money)
        }
    }, 2000)

}
function visitCinema (money, cb){
    console.log('Mac start');
    
    setTimeout(() => {
        const constofmac = 100

        if(constofmac <= money){
            const rest = money - constofmac
            cb(null, rest)
        } else {
            cb('need more money!!!', money)
        }
    }, 1000)
}

//frontend
writeProgram(true, (error, salary) => {
    if (typeof salary === 'number'){
        console.log('ura', salary);
        
        buyKeyboard(salary, (errorShop, restofShop) => {
            if(!errorShop){
                console.log('i bought jeans!!', restofShop);
                
                visitCinema(restofShop, (errorMac, restofmac)=>{
                    if(!errorMac){
                        console.log('yummy yummy', restofmac);
                    }else {
                        console.log(errorMac, restofmac); 
                    }
                })
            }else{
                console.log(errorShop, restofShop);
            }
        })
    } else {
        console.log('((((((', error, salary);
    }
})

