// * Розділяти всі завдання коментарями і писати що треба робити в завданні.

/* // 1. Через функцію конструктор створити об'єкт People з полями:
//    name, f_name, old, isMarried, hasPossition, children
//    Вивести об'єкт в консоль.
function People(
    name = 'N/A', f_name = 'N/A', old = 0,
    isMarried = 'N/A', hasPossition = 'N/A',
    children = 'N/A') {

    this.name = name;
    this.f_name = f_name;
    this.old = old;
    this.isMarried = isMarried;
    this.hasPossition = hasPossition;
    this.children = children;
    console.log(this.name,
        this.f_name,
        this.old,
        this.isMarried,
        this.hasPossition,
        this.children
    );
}

const anket = new People(
    prompt("Введіть ваше ім'я:"),
    prompt("Введіть ваше Призвище"),
    prompt("Введіть ваш вік:"),
    prompt("Введіть ваш сімейний стан:"),
    prompt("Введіть вашу адресу:"),
    prompt("Введіть скіільки у вас дітей:")
);
console.log(anket);



// 2. Через прототайп створити власні методи масивів: filter, find, includes, join, slice
arr = [1, 2, 3, 'asd', false, 4, 5,  6]

Array.prototype.myFilter = function (CB) {
    let resFilter = []
    for (let i = 0; i < this.length; i++) {
        if (CB(this[i], i, this)) {
            resFilter.push(this[i])
        }
    }
    return resFilter
}


Array.prototype.myFind = function (CB) {
    for (let i = 0; i < this.length; i++) {
        if (CB(this[i])) {
            return this[i];
        }
    }
    return false
}


Array.prototype.myIncludes = function (CB) {
    for (let i = 0; i < this.length; i++) {
        if (this[i] == CB) {
            return true
        }
        
    }
    return false
}


Array.prototype.myJoin = function (znak = ',') {
    let res = ''
    for (let i = 0; i < this.length; i++) {
        res += this[i]
        if (i < this.length - 1) {
            res += znak
        }
    }
    return res
};


Array.prototype.mySlice = function (start = 0, end = this.length) {
    let res = []
    for (let i = start; i < end && i < this.length; i++) {
        res.push(this[i])
    }
    return res
}


console.log(arr.myFilter(i => i > 2))
console.log(arr.myFind(i => i === 4))
console.log(arr.myIncludes(3))
console.log(arr.myJoin(1))
console.log(arr.mySlice(1, 3))

// 3. Через функцію конструктор створити об'єкт Car з полями:
//    name, model, year, isNew, cost, wheels
//    Вивести об'єкт в консоль.
function Car(name, model, year, isNew, cost) {
    this.name = name
    this.model = model
    this.year = year
    this.isNew = isNew
    this.cost = cost
}
console.log(Car()); */

// 4. Через функцію конструктор створити об'єкт Animal, створити мінімум 3 поля,
//    та додати через прототайп поведінку для об'єкту (мінімум 2 методи).
function Animal(name, view) {
    this.name = name
    this.age = 0
    this.view = view
}

Animal.prototype.weight = function(){
    console.log('weigh');
}
Animal.prototype.height = function(){
    console.log('heig');
}


// 5. Створити об'єкт Dog, через прототип унаслідувати поведінку від об'єкту Animal
//    та додати власну поведінку (мінімум 2 методи).

function Dog(breed){
    this.breed=breed
}

Dog.prototype = {...Animal.prototype} 

Dog.prototype.runspeed = function(){
    console.log('run');
}
Dog.prototype.kindness = function() {
    console.log('kind');
    
}

const ani = new Dog('asd')
ani.weight()