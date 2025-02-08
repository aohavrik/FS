// - Перепишіть код по колбекам (лекція де було clearHouse) використовуючи функції генератори
function writeProgram(isClean) {
    return new Promise((resolve, reject) => {
        console.log("house start");
        setTimeout(() => isClean ? resolve(500) : reject("House is not cleaned"), 3000);
    });
}

function buyKeyboard(money) {
    return new Promise((resolve, reject) => {
        console.log("shop start");
        setTimeout(() => money >= 100 ? resolve(money - 100) : reject("Need more money for keyboard"), 2000);
    });
}

function visitCinema(money) {
    return new Promise((resolve, reject) => {
        console.log("cinema start");
        setTimeout(() => money >= 100 ? resolve(money - 100) : reject("Need more money for cinema"), 1000);
    });
}

function* gena() {
    try {
        let salary = yield writeProgram(true);
        console.log("Ura! Got salary:", salary);

        let restOfShop = yield buyKeyboard(salary);
        console.log("I bought a keyboard! Remaining money:", restOfShop);

        let restOfCinema = yield visitCinema(restOfShop);
        console.log("Enjoyed the cinema! Remaining money:", restOfCinema);
    } catch (error) {
        console.log("Error:", error);
    }
}

function runGenerator(gen) {
    const pusk = gen();
    
    function nextStep(value) {
        try {
            const { done, value: promise } = pusk.next(value);
            if (!done) promise.then(nextStep).catch(er => {
                try {
                    nextStep(pusk.throw(er));
                } catch (Eror) {
                    console.log("Unhandled error:", Eror);
                }
            });
        } catch (error2) {
            console.log("Generator execution error:", error2);
        }
    }
    
    nextStep();
}

runGenerator(gena);

// - Напишіть регулярний вираз (Цифри від 1 до 5, літери від A до F великі і малі і довжина рядка не більше 9 символів)
//   та через input валідуйте його (результат виводьте на екран)

const vvod = document.createElement("input");
const resul = document.createElement("div");
vvod.type = "text";
vvod.placeholder = "введіть текст";

document.body.appendChild(vvod);
document.body.appendChild(resul);

const regulyar = /^[1-5A-Fa-f]{1,9}$/;

vvod.addEventListener("input", () => {
    if (regulyar.test(vvod.value)) {
        resul.textContent = "Корректний ввод";
        resul.style.color = "green";
    } else {
        resul.textContent = "Некорректний ввод";
        resul.style.color = "red";
    }
});
