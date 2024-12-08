// 1. Через клас створити об'єкт People який всі дані отримує ззовні з полями:
//    name, f_name, old, isMarried, hasPossition, children
//    Вивести об'єкт в консоль.
class People {
    name
    f_name
    old
    isMarried
    hasPossition
    children

    constructor(
        name,
        f_name,
        old,
        isMarried,
        hasPossition,
        children) {
        this.name = console.log(name);
        this.f_name = console.log(f_name);
        this.old = console.log(old);
        this.isMarried = console.log(isMarried);
        this.hasPossition = console.log(hasPossition);
        this.children = console.log(children);
    }


    set newName(newName) {
        this.name = newName;
    }

    set newFName(newFName) {
        this.f_name = newFName;
    }

    set newOld(newOld) {
        this.old = newOld;
    }

    set newisMarried(newisMarried) {
        this.isMarried = newisMarried;
    }

    set newPossition(newPossition) {
        this.hasPossition = newPossition;
    }

    set newChildren(newChildren) {
        this.children = newChildren;
    }


    get InfoPeople() {
        console.log(People.newName);
        console.log(People.newFName);
        console.log(People.newOld);
        console.log(People.newisMarried);
        console.log(People.newPossition);
        console.log(People.newChildren);
    }



}

const newPeople = new People(
    'Степан',
    'Жуков',
    42,
    'одружений',
    '44.3323, 23.4412',
    'Світлана')


console.log(newPeople);

People.newName = "Василь"
People.newFName = "Кучеренко"
People.newOld = 33
People.newisMarried = true
People.newPossition = 432374
People.newChildren = false


console.log(newPeople.InfoPeople);





// 2. Через клас shortWork створити власні методи масивів всередині класу: filter, find, includes, join, slice
class shortWork {
    myFilter(arr, cb) {
        const res = [];
        for (let i = 0; i < arr.length; i++) {
            if (cb(arr[i], i, arr)) {
                res.push(arr[i]);
            }
        }
        return res;
    }

    myFind(arr, cb) {
        for (let i = 0; i < arr.length; i++) {
            if (cb(arr[i], i, arr)) {
                return arr[i];
            }
        }
        return undefined;
    }

    myIncludes(arr, vl) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === vl) {
                return true;
            }
        }
        return false;
    }

    myJoin(arr, rozd = ",") {
        let res = "";
        for (let i = 0; i < arr.length; i++) {
            res += arr[i];
            if (i < arr.length - 1) {
                res += rozd;
            }
        }
        return res;
    }

    mySlice(arr, start = 0, end = arr.length) {
        const res = [];
        for (let i = start; i < end && i < arr.length; i++) {
            res.push(arr[i]);
        }
        return res;
    }
}



// 3. Через клас створити об'єкт Car який всі дані отримує ззовні  з полями:
//    name, model, year, isNew, cost, wheels
//    Вивести об'єкт в консоль.
class Car {
    name
    model
    year
    isNew
    cost
    wheels

    constructor(
        name,
        model,
        year,
        isNew,
        cost,
        wheels) {
        this.name = name
        this.model = model
        this.year = year
        this.isNew = isNew
        this.cost = cost
        this.wheels = wheels
    }

    set newName(newName) {
        this.name = newName;
    }
    set newYear(newYear) {
        this.year = newYear
    }
    set newModel(newModel) {
        this.model = newModel
    }
    set newisNew(newisNew) {
        this.isNew = newisNew
    }
    set newcost(newcost) {
        this.cost = newcost
    }
    set newWheels(newWheels) {
        this.wheels = newWheels
    }

    get infoCar() {
        console.log(Car.newName);
        console.log(Car.newYear);
        console.log(Car.newModel);
        console.log(Car.newisNew);
        console.log(Car.newcost);
        console.log(Car.newWheels);
    }
}

const newCar = new Car('tesla', 'x', 2012, false, 43000,4)
console.log(newCar);
Car.newName = "ZAZ"
Car.newYear = 2024
Car.newModel = 'Seance'
Car.newisNew = true
Car.newcost = 2000
Car.newWheels = 4
console.log(newCar.infoCar);


// 4. Через клас створити об'єкт Animal який отримує дані ззвоні, створити мінімум 3 поля,
//    та додати через прототайп поведінку для об'єкту (мінімум 2 методи).


class Animal {
    name
    weight
    type

    constructor(name, weight, type) {
        this.name = name
        this.weight = weight
        this.type = type
    }
}

Animal.prototype.data = function () {
    console.log(`тварина ${this.name} має розмір ${this.weight}`);
}
Animal.prototype.run = function () {
    console.log('Я бігаю');
}

const newAnimal = new Animal('Барсік', 140, "кіт")
newAnimal.data()
newAnimal.run()


// 5. Створити клас Dog, через прототип унаслідувати поведінку від класу Animal
//    та додати власну поведінку (мінімум 2 методи).91


class Dog extends Animal {

    sound() {
        if (this.type == 'собака') {
            console.log(`собака ${this.name} гавкає`);
        } else if (this.type == 'кіт') {
            console.log(`кіт ${this.name} мяукає`);
        } else if (this.type == 'корова') {
            console.log(`корова ${this.name} мичить`);
        }
    }

    size() {
        if (this.type == 'собака') {
            console.log(`собака ${this.name} має середній розмір`);
        } else if (this.type == 'кіт' || this.type == 'кішка') {
            console.log(`кіт(кішка)  ${this.name} маленький розмір`);
        } else if (this.type == 'корова' || this.type == 'бик') {
            console.log(`корова(бик) ${this.name} має великий розмір`);
        }
    }

}
Animal.prototype = { ...Dog.prototype }


// 6. Створити клас Poli Який в консоль буде виводити короткий опис того що таке поліморфізм.
class Poli {
    polii() {
        console.log("Поліморфізм – це можливість використовувати одині і ті самі методи для роботи з різними типами об'єктів, які можуть поводитися по-різному.");
    }
}
const newPoli = new Poli()
console.log(newPoli.polii());

// 7. Привести приклад поліморфізму.
class Bus {
    year
    speed
    model
    capacity

    constructor(
        year,
        speed,
        model,
    ) {
        this.year = year
        this.speed = speed
        this.model = model
    }

    capaci() {
        console.log('capacity');
    }
}

class miniBus extends Bus {
    capaci() {
        console.log('capacity 8 seats');
    }
}

class medBus extends Bus {
    capaci() {
        console.log('capacity 16 seats');
    }
}

const mersedes = new medBus(2022, 160, 'sprinter')
const Reno = new miniBus()

const allBus = [mersedes, Reno]
allBus.forEach(i => i.capaci())
// 8. Створити клас Inc Який в консоль буде виводити короткий опис того що таке інкапсуляція.
class Inc {
    logInc() {
        console.log(' частково або повністю закриває данні від доступу з зовні через індитифікатор доступу.');
    }
}
const newInc = new Inc()
newInc.logInc()

// 9. Створити клас калькурятор на геттерах і сеттерах з діями *, /, +, -, вираховувати степінь, факторіал, корінь
//    Клас повинен містити поле date яке буде обновляти конкретну дату і час використання калькулятора.


class Calc {
    num1
    num2
    activ
    data
    res

    constructor(num1, num2, activ, data, res) {
        this.num1 = num1
        this.num2 = num2
        this.activ = activ
        this.data = data
        this.res = res
    }

    get add() {
        return this.num1 + this.num2;
    }

    get minus() {
        return this.num1 - this.num2;
    }

    get multi() {
        return this.num1 * this.num2;
    }

    get dilenya() {
        return this.num1 / this.num2
    }

    get pow() {
        return this.num1 ** this.num2;
    }

    get factorial() {
        let res = 1;
        let res2 = 2
        for (let i = 1; i <= this.num1; i++) {
            res *= i;
        }
        console.log(res);
        
        for (let i = 1; i <= this.num2; i++) {
            res2 *= i;
        }
        console.log(res2);
    
    }
    

    get sqrt() {
        if (this.num1 >= 0 && this.num2 >= 0) {
            return [Math.sqrt(this.num1), Math.sqrt(this.num2)];
        } else {
            console.log("Корінь від'ємного числа неможливий");
        }
    }

    get getData() {
        const now = new Date()
        const year = now.getFullYear()
        const month = now.getMonth() + 1
        const day = now.getDate()
        const hour = now.getHours()
        const min = now.getMinutes()
        const sec = now.getSeconds()
        this.data = `${hour}:${min}:${sec} ${day}.${month}.${year} `;
        return this.data;
    }

  
    act() {
        if (this.activ == "+") {
            console.log(this.add);
            console.log(this.getData);
        } else if (this.activ == "-") {
            console.log(this.minus);
            console.log(this.getData);
        } else if (this.activ == "*") {
            console.log(this.multi);
            console.log(this.getData);
        } else if (this.activ == "/") {
            console.log(this.dilenya);
            console.log(this.getData);
        } else if (this.activ == "sqrt") {
            console.log(this.sqrt);
            console.log(this.getData);
        } else if (this.activ == "^") {
            console.log(this.pow);
            console.log(this.getData);
        } else if (this.activ == "!") {
            console.log(this.factorial);
            console.log(this.getData);
        } else {
            console.log("eerr");
            console.log(this.getData);
        }
    }

    calcs() {
        let nm1 = +prompt("введіть перше число ")
        let nm2 = +prompt("введіть друге число ")
        let atv = prompt("Введіть бажану дію", '(+, -, *, /, sqrt, ^, ! )')
        const newCals = new Calc(nm1, nm2, atv)
        newCals.act()
        return newCals
    }
}


const calcur = new Calc
calcur.calcs()