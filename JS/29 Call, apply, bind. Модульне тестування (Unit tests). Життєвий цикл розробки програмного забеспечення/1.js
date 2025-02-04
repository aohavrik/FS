let names = {
    name: 'Andrii',
    age: 28,
    sayHallo: function hallo (grn) {
        console.log(`Мене звати ${this.name}, мені ${this.age}, я маю ${grn} грн `);
        
    }
}

let Petro = {
    name: 'Петро',
    age: 30
}

let Ivan = {
    name: 'іван',
    age: 55
}

names.sayHallo.bind(Petro)(22)
names.sayHallo.bind(Ivan)(22)

names.sayHallo.call(Petro, 322)
names.sayHallo.call(Ivan, 322)

names.sayHallo.apply(Petro, [222])
names.sayHallo.apply(Ivan, [222])