// *Має бути 2 html сторіки та 2 js файлика

//  1. Створіть HTML сторінку, яка відображає, скільки разів користувач її відвідував.
//     Використовуйте localStorage для збереження кількості відвідувань.

//     Результат:
//      На сторінці повинно з’являтися щось на кшталт: "Ви відвідали цю сторінку 5 разів."
let calc = localStorage.getItem('відвідування');
calc++;
localStorage.setItem("відвідування", calc)
document.write(`Ви відвідали цю сторінку ${localStorage.getItem('відвідування')} разів.`)
document.write('<hr>');

//  2. Реалізуйте просту форму входу (2 prompt), де користувач вводить ім'я та пароль.
//     Після входу ім'я користувача зберігається у sessionStorage.
//     На іншій вкладці перевіряйте, чи користувач увійшов (при завантаженні сторінки),
//     і виводьте повідомлення: "Привіт, [Ім'я користувача]".


const auntfic = sessionStorage.getItem('login_user');

let save = {
    user: undefined,
}

if (!auntfic) {
    let login = prompt('введіть логін:');
    save.user = login

    user_json = JSON.stringify(save.user)
    sessionStorage.setItem('login_user', user_json);

} else {
    let username = JSON.parse(sessionStorage.getItem('login_user'))
    document.write(`Привіт, ${username}!`)
    document.write('<hr>');


    //  3. Реалізуйте таймер сесії, який показує, скільки часу користувач провів на сторінці.
    //     Час початку сесії зберігайте у cookie при оновленні сторінки він має продовжувати відлік.

    let time_session = new Date()
    let load = document.cookie.split('; ').find(row => row.startsWith('time='))

    if (!load) {
        time_session.setTime(0)
        document.cookie = `time=${time_session.getTime()}; path=/`
    } else {
        let save = load.split('=')[1]
        time_session = new Date(JSON.parse(save, 10))
    }

    setInterval(() => {
        time_session = new Date(time_session.getTime() + 1000)
        document.cookie = `time=${time_session.getTime()}; path=/`
    }, 1000);

        let hours = time_session.getHours() -3
        let minutes = time_session.getMinutes()
        let seconds = time_session.getSeconds()

    document.write(`Тривалість сесії: ${hours}:${minutes}:${seconds}`)


}