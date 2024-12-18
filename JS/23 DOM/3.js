// 10. Зміна HTML-структури: Створіть сторінку з деревом DOM-структури.
//     Використовуючи JavaScript, змініть HTML-структуру шляхом додавання нових елементів,
//     переміщення або видалення існуючих елементів.
const Gilka = document.querySelector('#Gilka')
const Gilka1 = document.querySelector('.Gilka1')
const Gilka2 = document.querySelector('.Gilka2')
const Gilka3 = document.querySelector('.Gilka3')


Gilka.removeChild(Gilka2)



const Gilka4 = document.createElement("div")
Gilka4.classList = 'Gilka4'
Gilka4.classList.add('allGilka')
Gilka4.innerText = 'Гілка 4'
Gilka.appendChild(Gilka4)


const NewSubGilka1 = document.createElement('div')
NewSubGilka1.classList.add('subGilka')
NewSubGilka1.innerText = 'підгілка-1'
Gilka4.appendChild(NewSubGilka1)


const NewSubGilka2 = document.createElement('div')
NewSubGilka2.classList.add('subGilka')
NewSubGilka2.innerText = 'підгілка-2'
Gilka4.appendChild(NewSubGilka2)


const Gilka5 = document.createElement('div')
Gilka5.classList = 'Gilka5'
Gilka5.innerText = 'Гілка 5'
Gilka5.classList.add('allGilka')
Gilka.appendChild(Gilka5)


const NewSubGilka3 = document.createElement('div')
NewSubGilka3.classList.add('subGilka1')
NewSubGilka3.innerText = 'підгілка-1'
Gilka5.appendChild(NewSubGilka3)


const NewSubGilka4 = document.createElement('div')
NewSubGilka4.classList.add('subGilka2')
NewSubGilka4.innerText = 'підгілка-2'
Gilka5.appendChild(NewSubGilka4)


const classGilka = document.querySelectorAll(".allGilka")
classGilka.forEach((i) => {
        i.classList.replace('allGilka', 'branch')
})



