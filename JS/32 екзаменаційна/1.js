// Розробіть гру: Морський бій

//   Розробіть 2 вимірний масив (10 на 10), та зробіть візуальну сітку (кораблі не повинні бути видимі).

//   При 20 кліках на кубіки - гра повинна завершуватись поразкою, якщо до цього часу всі кораблики підбиті то гра виграна.

//   Кораблі генерувати в рандомному порядку в масиві (не більше 10 кораблів)


let rozmir = 10
let pole = []
let korabli = []
let hody = 20

function Pole() {
    let tbl = document.getElementById('pole')
    tbl.innerHTML = ''
    for (let r = 0; r < rozmir; r++) {
        let ryad = document.createElement('tr')
        pole[r] = []
        for (let c = 0; c < rozmir; c++) {
            let klityna = document.createElement('td')
            klityna.dataset.r = r
            klityna.dataset.c = c
            klityna.addEventListener('click', hid)
            ryad.appendChild(klityna)
            pole[r][c] = klityna
        }
        tbl.appendChild(ryad)
    }
}

function Korabli() {
    korabli = []
    while (korabli.length < 10) {
        let r = Math.floor(Math.random() * rozmir)
        let c = Math.floor(Math.random() * rozmir)
        if (!korabli.some(k => k.r === r && k.c === c)) {
            korabli.push({ r, c })
        }
    }
}

function hid() {
    if (hody <= 0) return

    let r = this.dataset.r
    let c = this.dataset.c

    if (this.classList.contains('vluch') || this.classList.contains('promah')) return

    let vluch = korabli.findIndex(k => k.r == r && k.c == c)

    if (vluch !== -1) {
        korabli.splice(vluch, 1)
        this.classList.add('vluch')
    } else {
        this.classList.add('promah')
    }

    hody--
    document.getElementById('res').textContent = hody

    perevirka()
}

function perevirka() {
    let povidomlennya = document.getElementById('stan')

    if (korabli.length === 0) {
        povidomlennya.textContent = 'Перемога!'
        Pole2()
    } else if (hody <= 0) {
        povidomlennya.textContent = 'Поразка!'
        Pole2()
    }
}

function Pole2() {
    document.querySelectorAll('#pole td').forEach(klityna => klityna.removeEventListener('click', hid))
}


document.getElementById('restart').addEventListener('click', () => {
    hody = 20
    document.getElementById('res').textContent = hody
    document.getElementById('stan').textContent = ''
    Pole()
    Korabli()
})




Pole()
Korabli()

