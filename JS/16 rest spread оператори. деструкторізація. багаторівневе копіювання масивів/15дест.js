// Backend
function writeProgram(isClean, cb) {
    console.log("house start");
    setTimeout(() => {
        const sucProg = [null, 500]; 
        const error = ["House is not cleared", 0]; 
        if (isClean) {
            cb(...sucProg); 
        } else {
            cb(...error); 
        }
    }, 3000);
}

function buyKeyboard(money, cb) {
    console.log("shop start");
    setTimeout(() => {
        const costOfKeyboard = 100;
        const sucKey = [null, money - costOfKeyboard]; 
        const error = ["Need more money", money]; 
        if (money >= costOfKeyboard) {
            cb(...sucKey); 
        } else {
            cb(...error); 
        }
    }, 2000);
}

function visitCinema(money, cb) {
    console.log("cinema start");
    setTimeout(() => {
        const costOfCinema = 100;
        const sucCinema = [null, money - costOfCinema]; 
        const error = ["Need more money!!!", money]; 
        if (money >= costOfCinema) {
            cb(...sucCinema); 
        } else {
            cb(...error); 
        }
    }, 1000);
}

// Frontend
writeProgram(true, (error, salary) => {
    if (!error) {
        console.log("Ura! Got salary:", salary);

        buyKeyboard(salary, (errorShop, restOfShop) => {
            if (!errorShop) {
                console.log("I bought a keyboard! Remaining money:", restOfShop);

                visitCinema(restOfShop, (errorCinema, restOfCinema) => {
                    if (!errorCinema) {
                        console.log("Enjoyed the cinema! Remaining money:", restOfCinema);
                    } else {
                        console.log("Failed to visit the cinema:", errorCinema, restOfCinema);
                    }
                });
            } else {
                console.log("Failed to buy a keyboard:", errorShop, restOfShop);
            }
        });
    } else {
        console.log("Failed to clean the house:", error, salary);
    }
});
