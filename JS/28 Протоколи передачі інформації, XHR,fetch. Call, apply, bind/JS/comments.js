
// 4. На странице comments вывести в HTML список комментариев через fetch и XMLHttpRequest.
//    Стилизовать подходящим образом.
//    https://jsonplaceholder.typicode.com/comments


const comDOM = document.getElementById('com')

fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(com_then => {
        let i = 0
        com_then.slice(0, 10).forEach((coms) => {
            const newComs = document.createElement('div')
            newComs.classList.add('comments')
            newComs.innerHTML = `${coms.id}.${coms.email}  <br><br><b>${coms.name}</b> <br><br>${coms.body}`
            comDOM.appendChild(newComs)

            if (i < 10) {
                i += 1
            } else {
                return false
            }
        });

    })

const comDOM2 = document.getElementById('com2')
const getComs = new XMLHttpRequest()

getComs.open('GET', 'https://jsonplaceholder.typicode.com/comments')
getComs.send()
getComs.onload = ({target:{response} }) => {
    let i = 0
    const coms2 = JSON.parse(response)
    coms2.slice(0, 10).forEach((coms) => {
        const newComs2 = document.createElement('div')
        newComs2.classList.add('comments')
        newComs2.innerHTML = `${coms.id}.${coms.email}  <br><br><b>${coms.name}</b> <br><br>${coms.body}`
        comDOM2.appendChild(newComs2)

        if (i < 10) {
            i += 1
        } else {
            return false
        }
    })

}