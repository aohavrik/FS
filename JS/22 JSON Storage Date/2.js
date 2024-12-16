

// Створіть HTML сторінку, яка записує дату останнього входу користувача у localStorage.
//     При повторному відвідуванні сторінки показуйте дату попереднього входу та оновлюйте її.

// const lastdata = localStorage.getItem('data_login');
// const lastmonth = localStorage.getItem('month_login');
// const lastyear = localStorage.getItem('year_login');
// const lastsec = localStorage.getItem('sec_login');
// const lasthour = localStorage.getItem('hour_login');
// const lastmin = localStorage.getItem('min_login');
// let time = new Date();


// if (!lastdata) {
//     let year = time.getFullYear()
//     let month = time.getMonth() + 1
//     let data = time.getDate()
//     let hour = time.getHours()
//     let min = time.getMinutes()
//     let sec = time.getSeconds()

//     localStorage.setItem('data_login', data);
//     localStorage.setItem('month_login', month);
//     localStorage.setItem('year_login', year);
//     localStorage.setItem('hour_login', hour);
//     localStorage.setItem('min_login', min);
//     localStorage.setItem('sec_login', sec);
// } else {
//     document.write(`
//        дату останнього входу: ${lasthour}:${lastmin}:${lastsec} ${lastdata}.${lastmonth}.${lastyear}`
//     )
//     document.write('<hr>');

//     let year = time.getFullYear()
//     let month = time.getMonth() + 1
//     let data = time.getDate()
//     let hour = time.getHours()
//     let min = time.getMinutes()
//     let sec = time.getSeconds()

//     localStorage.setItem('data_login', data);
//     localStorage.setItem('month_login', month);
//     localStorage.setItem('year_login', year);
//     localStorage.setItem('hour_login', hour);
//     localStorage.setItem('min_login', min);
//     localStorage.setItem('sec_login', sec);
// }



//  4. Створіть список завдань (to-do list масив з полями title, date, describe, isDone),
//     який зберігається в localStorage у форматі JSON.
//     Створіть фунції які зможуть: додавати, видаляти й відмічати завдання як виконані.


// let arr = [title, date, describe, isDone]
// JSON_arr = JSON.stringify(arr)
// localStorage.setItem('arr', JSON_arr)




//  5. Реалізуйте таймер сесії, який показує, скільки часу користувач провів на сторінці.
//     Час початку сесії зберігайте у sessionStorage, і при оновленні сторінки він має продовжувати відлік.



// let time_session = sessionStorage.getItem('session')


// if (!time_session) {

//     time_session = new Date().getTime()
//     sessionStorage.setItem('session', time_session)
// } else {
//     time_session = JSON.parse(time_session)
// }

// setInterval(() => {
//     sessionStorage.setItem('login_user', time_session);
// }, 1000);

// let time2 = new Date().getTime()
// let ses_now = new Date(time2 - time_session)
// let hours = ses_now.getHours() - 3
// let minutes = ses_now.getMinutes()
// let seconds = ses_now.getSeconds()
// document.write(`${hours}:${minutes}:${seconds}`)