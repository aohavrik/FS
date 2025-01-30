// 4. Создайте анимацию объекта на веб-странице, используя только CSS для анимации (например, @keyframes).
//    Затем используйте JavaScript для асинхронного запуска анимации, например при клике на кнопку.

document.getElementById('start').addEventListener('click', async function() {
    const element = document.getElementById('anim');
    element.style.animation = 'move 2s forwards';
    await new Promise(resolve => {
        element.addEventListener('animaEnd', resolve, {once: true});
    });
});
