// * Розділяти всі завдання коментарями і писати що треба робити в завданні.

// 1. Через функцію конструктор створити об'єкт Car з полями:
//    name, model, old, price, wheels
//    Вивести об'єкт в консоль.
function Car(name, model, old, prise, wheels) {
    this.name = name
    this.model = model
    this.old = old
    this.prise = prise
    this.wheels = wheels
}
let yCar = new Car("ZAZ", "Sence", 14, 1300, 4)
console.log(yCar);




// 2. Через прототайп створити власні методи масивів: some, every, splice
// Створення власного методу some
Array.prototype.some = function (CB) {
    for (let i = 0; i < this.length; i++) {
        if (CB(this[i], i, this)) {
            return true;
        }
    }
    return false;
};

// Створення власного методу every
Array.prototype.every = function (CB) {
    for (let i = 0; i < this.length; i++) {
        if (!CB(this[i], i, this)) {
            return false;
        }
    }
    return true;
};


// Створення власного методу splice
Array.prototype.splice = function(start, el, ...args) {

    const rem = [];
    const len = this.length;

    if (start < 0) {
        start = len + start;
    }

    start = Math.max(0, Math.min(start, len));

    if (el == 'undefined' || el > len - start) {
        el = len - start;
    }

    for (let i = 0; i < el; i++) {
        rem.push(this[start + i]);
    }

    const newAr = [];
    for (let i = 0; i < start; i++) {
        newAr.push(this[i]);
    }

    for (let item of args) {
        newAr.push(item);
    }

    for (let i = start + el; i < len; i++) {
        newAr.push(this[i]);
    }

    this.length = 0;
    for (let i = 0; i < newAr.length; i++) {
        this.push(newAr[i]);
    }

    return rem;
};



// 3. Через функцію конструктор створити об'єкт dog з полями:
//    name, model, year, cost
//    Вивести об'єкт в консоль.
function Dog(name, model, year, cost) {
    this.name = name
    this.model = model
    this.year = year
    this.cost = cost
}

let Dogs = new Dog('Чарлі', "Доберман", 14, 3800)

// 4. Через функцію конструктор створити об'єкт Parent, створити мінімум 3 поля,
//    та додати через прототайп поведінку для об'єкту (мінімум 2 методи).
function Parent(name, year) {
    this.name = name
    this.year = year
    this.children = 0
}

Parent.prototype.cars = function () {
    console.log('Lanos');
}
Parent.prototype.health = function () {
    console.log('100%');
}
let newParent = new Parent()
newParent.cars()
newParent.health()

// 5. Створити об'єкт Son, через прототип унаслідувати поведінку від об'єкту Parent
//    та додати власну поведінку (мінімум 2 методи).
function Son(name, year) {
    this.name = name
    this.year = year
}
Parent.prototype = { ...Parent.Son }


newSon = new Son()
newSon.health()
newSon.cars()

Son.prototype.girl = function (girl) {
    console.log(girl);
}
Son.prototype.studies = function (stud) {
    console.log(stud);
}
// 6. Створити КЛАС People із полями: name, age, isMarried, isChilds, job
//    створити 3 інстанси класу People і вивести їхні поля в консоль.
class People {
    name
    age=0
    job
    isMarried = false
    isChilds=0
    constructor(name, job, isChilds, age, isMarried) {
        this.name = name
        this.age = age
        this.job = job
        this.isMarried = isMarried
        this.isChilds =isChilds
    }
}
let newPeople = new People('Станіслав', 'Шахтар')

console.log(newPeople);


// 7. Створити КЛАС Tiger із полями: name, kind, age, speed, wight, height
//    Додатково створити методи: changeName, addAge, changeSpeed, run
//    Вивести поля класу в консоль та використати методи.
class Tiger {
    name
    kind
    age=0
    speed
    weight
    height

    nName(newName) {
        this.name = newName;
        console.log(`Ім'я змінено на: ${this.name}`);
    }
    nSpeed(newSpeed) {
        this.speed = newSpeed;
        console.log(`${this.name} буже бігать зі швидкістю ${this.speed} км/год.`);
    }
    run() {
        console.log(`${this.name} біжить зі швидкістю ${this.speed} км/год.`);
    }


 

    constructor(name, kind, age, speed, weight, height) {
        this.name = name; 
        this.kind = kind; 
        this.age = age; 
        this.speed = speed; 
        this.weight = weight; 
        this.height = height; 
    }
}


let newTiger = new Tiger('Шерхан', 'Бенгальський тигр', 5, 60, 200, 1.2);

console.log(newTiger);

newTiger.nName('Раджа');
newTiger.nSpeed(70);
newTiger.run();
