// 2. На странице users вывести в html список пользователей через fetch и XMLHttpRequest.
//    Стилизовать подходящим образом.
//    https://jsonplaceholder.typicode.com/users
const usersDOM = document.getElementById("users")

fetch('https://jsonplaceholder.typicode.com/users').then(res => {
    return res.json()
}).then(us => {
    us.forEach((user) => {
        const newUser = document.createElement("div")
        newUser.classList.add('us')
        newUser.innerHTML = `${user.id}. ${user.name} <br>${user.email}`
        usersDOM.appendChild(newUser)
    })
})


const usersDOM2 = document.getElementById('users2')
const getUser = new XMLHttpRequest()

getUser.open('GET', 'https://jsonplaceholder.typicode.com/users')
getUser.send()
getUser.onload = ({target:{response} }) => {
    let i = 0
    const user2 = JSON.parse(response)
    user2.slice(0, 10).forEach((user) => {
        const newUser2 = document.createElement('div')
        newUser2.classList.add('us')
        newUser2.innerHTML = `${user.id}. ${user.name} <br>${user.email}`
        usersDOM2.appendChild(newUser2)

        if (i < 10) {
            i += 1
        } else {
            return false
        }
    })

}
