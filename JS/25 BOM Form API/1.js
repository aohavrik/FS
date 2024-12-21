// * Розділяти всі завдання коментарями і писати що треба робити в завданні.

// 1. Створити промпт при заповненні якого вас перенаправляє на сайт який був введений в промпті.
// const prom = prompt('Введіть')

// if (prom.startsWith("http")) {
//     window.location.href = prom
//     console.log('aaa');

//   } else {
//     window.location.href = "http://"+prom
//     console.log('aaassss');

//   }

// 2. Створити функцію яка буде показувати на екрані геолокацію та url шлях сайту.
function info() {
  document.write(window.location.href);
  window.navigator.geolocation.getCurrentPosition((geo) => {
    console.log(geo);
  })

}
// info()
// 3. Створити стрім із мікро і відео (Див. лекцію).
const vid = document.getElementById('vid')
window.navigator.mediaDevices.getUserMedia({ audio: true, video: true }).then(vidos => {
  vid.srcObject = vidos
  vid.play()
})

// stream()