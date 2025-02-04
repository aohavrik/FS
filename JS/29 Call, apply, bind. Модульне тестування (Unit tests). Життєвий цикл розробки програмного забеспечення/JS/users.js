// 2. На странице users через input[type=number] получать id юзерата и по щелчку на кнопку
//    Send вывести пользователя в HTML через fetch и XMLHttpRequest.
//    Стилизовать подходящим образом.
//    https://jsonplaceholder.typicode.com/users/

const usersDOM = document.getElementById("users")
const usersDOM2 = document.getElementById("users2")

const userInput = document.getElementById("userInput")
const userInput2 = document.getElementById("userInput2")

const userButton = document.getElementById("userButton")
const userButton2 = document.getElementById("userButton2")

userButton.addEventListener("click", () => {
    
    const userId = +userInput.value
    fetch('https://jsonplaceholder.typicode.com/users').then(res => {
    
        return res.json()
    
    }).then(us => {
        const filter = us.filter(us => us.id == userId);
        console.log(filter);
        filter.forEach((user) => {
            const newUser = document.createElement("li")
            newUser.classList.add('user')
            newUser.innerHTML = `${user.id}. ${user.name} <br>${user.email}`
            usersDOM.appendChild(newUser)
        })
    })

})



userButton2.addEventListener("click", () => {
    
    const userId2 = +userInput2.value
    
    const getUser = new XMLHttpRequest()
    getUser.open("GET", "https://jsonplaceholder.typicode.com/users")
    getUser.send();
    getUser.onload = ({ target: { response } }) => {

        const users2 = JSON.parse(response)
        console.log(response);

        const filter = users2.filter(us => us.id == userId2)

        filter.forEach((user) => {
            const newUser2 = document.createElement("li")
            newUser2.classList.add("user")
            newUser2.innerHTML = `${user.id}. ${user.name} <br>${user.email}`
            usersDOM2.appendChild(newUser2)
        })
    }

})



