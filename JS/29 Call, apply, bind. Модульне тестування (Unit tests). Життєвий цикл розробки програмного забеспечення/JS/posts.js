// 3. На странице posts вывести в html пост через input[type=number] получать id пост и по клику на кнопку
//    Send вывести пост в HTML через fetch и XMLHttpRequest.
//    Стилизовать подходящим образом.
//    https://jsonplaceholder.typicode.com/posts



// // 3. На странице posts вывести в html список постов через fetch и XMLHttpRequest.
// //    Стилизовать подходящим образом.
// //    https://jsonplaceholder.typicode.com/posts
// const postDOM = document.getElementById('posts')

// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(res => res.json())
//     .then(post_then => {
//         let i = 0
//         post_then.slice(0, 10).forEach((pos) => {
//             const newPost = document.createElement('div')
//             newPost.classList.add('post')
//             newPost.innerHTML = `${pos.id}. <b>${pos.title}</b> <br>${pos.body}`
//             postDOM.appendChild(newPost)

//             if (i < 10) {
//                 i += 1
//             } else {
//                 return false
//             }
//         });

//     })

// const postDOM2 = document.getElementById('posts2')
// const getPost = new XMLHttpRequest()

// getPost.open('GET', 'https://jsonplaceholder.typicode.com/posts')
// getPost.send()
// getPost.onload = ({target:{response} }) => {
//     let i = 0
//     const posts2 = JSON.parse(response)
//     posts2.slice(0, 10).forEach((pos) => {
//         const newPost2 = document.createElement('div')
//         newPost2.classList.add('post')
//         newPost2.innerHTML = `${pos.id}. <b>${pos.title}</b> <br>${pos.body}`
//         postDOM2.appendChild(newPost2)

//         if (i < 10) {
//             i += 1
//         } else {
//             return false
//         }
//     })

// }
