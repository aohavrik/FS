    // 3. На странице posts вывести в html пост через input[type=number] получать id пост и по клику на кнопку
    //    Send вывести пост в HTML через fetch и XMLHttpRequest.
    //    Стилизовать подходящим образом.
    //    https://jsonplaceholder.typicode.com/posts



const postsDOM = document.getElementById("posts")
const postsDOM2 = document.getElementById("posts2")

const postsInput = document.getElementById("postsInput")
const postsInput2 = document.getElementById("postsInput2")

const postsButton = document.getElementById("postsButton")
const postsButton2 = document.getElementById("postsButton2")

postsButton.addEventListener("click", () => {
    
    const postId = +postsInput.value

    fetch('https://jsonplaceholder.typicode.com/posts').then(res => {
    
        console.log(res);
        return res.json()
    
    }).then(posts => {
        const filter = posts.filter(post => post.id == postId);
        console.log(filter);
        filter.forEach((post) => {
            const newPost = document.createElement("li")
            newPost.classList.add('post')
            newPost.innerHTML = `${post.id}. <b>${post.title}</b> <br>${post.body}`
            postsDOM.appendChild(newPost)
        })
    })

})



postsButton2.addEventListener("click", () => {
    
    const postId2 = +postsInput2.value
    
    const getPost = new XMLHttpRequest()
    getPost.open("GET", "https://jsonplaceholder.typicode.com/posts")
    getPost.send();
    getPost.onload = ({ target: { response } }) => {

        const posts2 = JSON.parse(response)
        console.log(response);

        const filter = posts2.filter(post => post.id == postId2)

        filter.forEach((post) => {
            const newPost2 = document.createElement("li")
            newPost2.classList.add("post")
            newPost2.innerHTML = `${post.id}. <b>${post.title}</b> <br>${post.body}`
            postsDOM2.appendChild(newPost2)
        })
    }

})