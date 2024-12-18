// 1. Зміна стилю елементу: Створіть HTML-сторінку з декількома елементами, такими як кнопки або тексти.
//    Використовуючи JavaScript, змініть стиль одного або декількох елементів 
//    (наприклад, колір фону або розмір шрифту).
const idBTN = document.querySelector('#btn2')
const btn_class = document.querySelectorAll('.btn')

btn_class.forEach((i) => {
    i.style.backgroundColor = 'red'
    i.style.width = "250px"
    i.style.height = "250px"
    i.style.fontSize = '40px'
    
});



// 2. Зміна текстового вмісту: Створіть елементи, які містять текст.
//    За допомогою JavaScript, змініть текстовий вміст одного або декількох елементів.

const taska2 = document.querySelector('.task2')
taska2.innerText = 'Привіт як справи?'
taska2.classList.add('box')



// 3. Додавання нового елементу: За допомогою JavaScript,
//    додайте 3 нові елемент до DOM-структури.

const newDiv = document.createElement('div')
newDiv.classList.add('box2')
newDiv.innerText = 'Новий DIV'
taska2.appendChild(newDiv)



const newP = document.createElement('p')
newP.innerText = 'Тут новий текст'
document.body.appendChild(newP)


const newSpan = document.createElement('b')
newSpan.innerText = ' Тут ще оди новий текст, але в b'
newP.appendChild(newSpan)

// 4. Видалення елементу: За допомогою JavaScript, видаліть декілька елементів з DOM.

document.body.removeChild(idBTN)
taska2.removeChild(newDiv)

// 5. Зміна атрибутів: Створіть елементи, які мають атрибути
//    (наприклад, "src" для зображення або "href" для посилання).
//    За допомогою JavaScript, змініть атрибути цих елементів.

const imgs =  document.querySelector("img")
imgs.setAttribute('src', 'https://i.allo.ua/media/catalog/product/cache/1/small_image/212x184/9df78eab33525d08d6e5fb8d27136e95/s/m/sm-s721_galaxys24fe_graphite_front_result_2.webp');
imgs.setAttribute('alt', 'Нове зображення')

 

// 6. Сортування списку: Створіть список (наприклад, список <ul>) з декількома пунктами.
//    Використовуючи JavaScript, відсортуйте цей список в алфавітному порядку.

const ul = document.getElementById('list')
const listItems = Array.from(ul.querySelectorAll('li'))
listItems.sort((a, b) => a.innerText.localeCompare(b.innerText))

ul.innerHTML = ''
listItems.forEach(i => ul.appendChild(i))





// 7. Зміна порядку елементів: Створіть декілька елементів. За допомогою JavaScript,
//    змініть порядок цих елементів в DOM.


const container = document.createElement('div');
const kub1 = document.createElement('div');
const kub = document.createElement('div');
const boxx3 = document.createElement('div');

kub1.innerText = 'Перший елемент';
kub.innerText = 'Другий елемент';
boxx3.innerText = 'Третій елемент';


container.appendChild(kub1);
container.appendChild(kub);
container.appendChild(boxx3);

document.body.appendChild(container);

container.innerHTML = ''
container.appendChild(boxx3)
container.appendChild(kub1) 
container.appendChild(kub) 



// 8. Видалення дочірніх елементів: Створіть батьківський елемент, який містить декілька дочірніх елементів.
//    Використовуючи JavaScript, видаліть всі дочірні елементи цього батьківського елемента.




const fam =  document.querySelector(".container")
const cub1 = document.querySelector('.kub1')
const cub2 = document.querySelector('.kub2')
const cub3 = document.querySelector('.kub3')
fam.removeChild(cub1)
fam.removeChild(cub2)
fam.removeChild(cub3)






