// * Розділяти всі завдання коментарями і писати що треба робити в завданні.

// 1. Створити 2 кубіка, при кліку на перший: другий повинен змінювати свій колір на рандомний.
const cub = document.querySelectorAll('.box')
cub.forEach(i => {
    i.classList.add('kub')
})


const klik1 = document.getElementById('klik1')
const klik2 = document.getElementById('klik2')


function clickBox(i) {
    const r = Math.floor(Math.random() * 256)
    const g = Math.floor(Math.random() * 256)
    const b = Math.floor(Math.random() * 256)
    i.style.backgroundColor = `rgb(${r},${g},${b})`
}


klik1.onclick = () => {
    clickBox(klik2)
}
klik2.onclick = () => {
    clickBox(klik1)
}


// 2. Створити текстовий блок, при спробі його скопіювати покажіть користувачу вікно "Текст неможливо скопіювати!!".
const text_blok = document.querySelector(".textblok");
text_blok.oncopy = (i) => {
    i.preventDefault();
    alert("Текст неможливо скопіювати!!");
};

// 3. Створити кубік 100х100 який міняє свій колір в залежності від того на яких координатах ви знаходитесь
//    (r - X координата, g - Y координата, b - середнє арифметичне X+Y/2).

const maus = document.getElementById("muv")
maus.onmousemove = (i) => {
    const r = Math.floor(i.clientX)
    const g = Math.floor(i.clientY)
    const b = Math.floor((i.clientX+i.clientY)/2)
    maus.style.backgroundColor = `rgb(${r},${g},${b})`
}



// 4. Створіть 3 кубіка один в одному які будуть при кліку виводити щось про себе в консоль
const box1 = document.querySelector('.box1');
const box2 = document.querySelector('.box2');
const box3 = document.querySelector('.box3');

function boxClick(i, log) {
    i.onclick = (j) => {
        j.stopPropagation()
        console.log(log);
    };
}

boxClick(box1, 'кубік - 1');
boxClick(box2, 'кубік - 2');
boxClick(box3, 'кубік - 3');

// 5. Створіть ще 3 кубіка які є один в одному, змініть напрямок виконання івенту,
//    зупиніть виконання івентів на другому івенті (Див. лекцію).

const div1 = document.querySelector('.div1');
const div2 = document.querySelector('.div2');
const div3 = document.querySelector('.div3');

function boxClick2(i, log) {
    i.addEventListener('click', (e) => {
        console.log(log);
        if (log === 'кубік - 2') {
            e.stopPropagation()
        }
    }, true)
}

boxClick2(div1, 'кубік - 1');
boxClick2(div2, 'кубік - 2');
boxClick2(div3, 'кубік - 3');





// 6. Використайте будь яку форму з домашної про форми (в модулі HTML\CSS), та отримайте дані з неї у вигляді об'єкту,
//    виведіть об'єкт форми в консоль. Відмініть поведінку за замовчуванням для кнопки submit у формі (Див. лекцію). 

document.getElementById('but1').addEventListener('click', (e) => {
    e.preventDefault()

    // const form = document.forms.namedItem('myFormAPI')
    const formData = new FormData(form)

    const formRes = {}

    formData.forEach((i, y) => {
        formRes[y] = i
    });

    console.log(formRes)
});