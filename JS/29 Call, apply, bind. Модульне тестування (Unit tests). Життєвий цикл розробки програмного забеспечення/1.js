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



names.sayHallo.bind(Petro)(22)

names.sayHallo.call(Petro, 322)

names.sayHallo.apply(Petro, [222])