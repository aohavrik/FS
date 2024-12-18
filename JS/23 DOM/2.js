// 9. Зміна класів: Створіть сторінку з елементами, які мають CSS-класи. За допомогою JavaScript, змініть класи цих елементів без використання подій.
const bigBox = document.querySelectorAll('.box');
bigBox.forEach((i) => {
 
    if (i.classList.contains('red')) {
        i.classList.replace('red', 'black')
    } 
    if (i.classList.contains('blue')) {
        i.classList.replace('blue', 'yellow')
    } 
     if (i.classList.contains('green')) {
        i.classList.replace('green', 'orange')
    }
})