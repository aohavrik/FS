function clearHaus(isClean, cb) {
    console.log("house start");
    setTimeout(() => {
        const suc = [null, 500];
        const err = ["Should clear before get money!!!", 0];
        
        if (isClean) {
            cb(...suc); 
        } else {
            cb(...err);
        }
    }, 3000);
}

function shop(money, cb) {
    console.log("shopping start");
    setTimeout(() => {
        const priceOfJeans = 40;
        const sucJeans = [null, money - priceOfJeans];
        const er = ["Not enough money", 0];
        
        if (money >= priceOfJeans) {
            cb(...sucJeans); 
        } else {
            cb(...er);
        }
    }, 2000);
}

function mac(money, cb) {
    console.log("mac start");
    setTimeout(() => {
        const priceOfBurger = 100;
        const sucBurger = [null, money - priceOfBurger];
        const er = ["Need more money", 0];
        
        if (money >= priceOfBurger) {
            cb(...sucBurger); 
        } else {
            cb(...er);
        }
    }, 1000);
}


clearHaus(true, (err, money) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log("Ura, I got money!");

    shop(money, (err, restJeans) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log("Ura, I bought jeans, I have rest: ", restJeans);

        mac(restJeans, (err, restBurger) => {
            if (err) {
                console.log("I will be hungry all day:", err);
                return;
            }
            console.log("Yummy Yummy! I have: ", restBurger);
        });
    });
});
