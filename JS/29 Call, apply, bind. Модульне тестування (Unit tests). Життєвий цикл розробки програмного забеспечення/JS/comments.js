// 4. На странице comments вывести список комментариев через input[type=number] получать id комментария
//    и по щелчку на кнопку Send вывести пост в HTML через fetch и XMLHttpRequest.
//    Стилизовать подходящим образом.
//    https://jsonplaceholder.typicode.com/comments





const comsDOM = document.getElementById("coms")
const comsDOM2 = document.getElementById("coms2")

const comsInput = document.getElementById("comsInput")
const comsInput2 = document.getElementById("comsInput2")

const comsButton = document.getElementById("comsButton")
const comsButton2 = document.getElementById("comsButton2")

comsButton.addEventListener("click", () => {
    
    const comsId = +comsInput.value

    fetch('https://jsonplaceholder.typicode.com/comments').then(res => {
    
        console.log(res);
        return res.json()
    
    }).then(comes => {
        const filter = comes.filter(post => post.id == comsId);
        console.log(filter);
        filter.forEach((coms) => {
            const newComs = document.createElement("li")
            newComs.classList.add('com')
            newComs.innerHTML = `${coms.id}.${coms.email}  <br><br><b>${coms.name}</b> <br><br>${coms.body}`
            comsDOM.appendChild(newComs)
        })
    })

})



comsButton2.addEventListener("click", () => {
    
    const comsId2 = +comsInput2.value
    
    const getComs = new XMLHttpRequest()
    getComs.open("GET", "https://jsonplaceholder.typicode.com/comments")
    getComs.send();
    getComs.onload = ({ target: { response } }) => {

        const coms2 = JSON.parse(response)
        const filter = coms2.filter(coms => coms.id == comsId2)

        filter.forEach((coms) => {
            const newComs2 = document.createElement("li")
            newComs2.classList.add("coms")
            newComs2.innerHTML = `${coms.id}.${coms.email}  <br><br><b>${coms.name}</b> <br><br>${coms.body}`
            comsDOM2.appendChild(newComs2)
        })
    }

})