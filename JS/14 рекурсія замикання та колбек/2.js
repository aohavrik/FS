function clearHaus(isClean, cb) {
    if (isClean) {
        cb(500)
    } else {
        cb("Should clear before get money!!!")
    }
}

function shop(money, cb) {
    const priceOfjeans = 40
    if (money >= priceOfjeans) {
        const rest = money - priceOfjeans
        cb(rest)
    } else {
        cb('Not enought money');

    }
}

function mac(money, cb) {
    const priceofBurger = 100

    if (money >= priceofBurger) {
        const rest = money - priceofBurger
        cb(rest)
    } else {
        cb('need more money')
    }
}

clearHaus(true, (response) => {
    if (typeof response === "number") {
        console.log('ura, i got money');

        shop(response, (restJeans) => {
            if (typeof restJeans === 'number') {
                console.log(' Ura i bought jeans, i have rest: ', restJeans);

                mac(restJeans, (restBurger) => {
                    if (typeof restBurger === 'number') {
                        console.log('Yummy Yummy! i have: ', restBurger);

                    } else {
                        console.log('i will hungry all day');

                    }
                })
            } else {
                console.log('salary is too low');
            }
        })
    } else {
        console.log('not lucky not lucky:(');

    }
})

