// * Разделять все задания комментариями и писать что нужно делать в задании.

// 1. Сделать страницу с произвольным контентом и переходами на 3 страницы:
//    users
//    posts
//    comments

// 2. На странице users через input[type=number] получать id юзерата и по щелчку на кнопку
//    Send вывести пользователя в HTML через fetch и XMLHttpRequest.
//    Стилизовать подходящим образом.
//    https://jsonplaceholder.typicode.com/users/

const userDOM = document.getElementById('user');
const userInput = document.getElementById('userInput');
const userButton = document.getElementById('userButton');

userButton.addEventListener('click', () => {
    const userId = userInput.value;

    // Используем fetch для получения данных пользователя
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then(res => res.json())
        .then(user => {
            const newUser = document.createElement('div');
            newUser.classList.add('user');
            newUser.innerHTML = `${user.id}. ${user.name} (${user.email})<br>${user.address.street}, ${user.address.city}`;
            userDOM.appendChild(newUser);
        });
    
    // Используем XMLHttpRequest для получения данных пользователя
    const getUser = new XMLHttpRequest();
    getUser.open('GET', `https://jsonplaceholder.typicode.com/users/${userId}`);
    getUser.send();
    getUser.onload = ({ target: { response } }) => {
        const user = JSON.parse(response);
        const newUser = document.createElement('div');
        newUser.classList.add('user');
        newUser.innerHTML = `${user.id}. ${user.name} (${user.email})<br>${user.address.street}, ${user.address.city}`;
        userDOM.appendChild(newUser);

    }
    })

    
    // 3. На странице posts вывести в html пост через input[type=number] получать id пост и по клику на кнопку
    //    Send вывести пост в HTML через fetch и XMLHttpRequest.
    //    Стилизовать подходящим образом.
    //    https://jsonplaceholder.typicode.com/posts
    const postDOM = document.getElementById('post');
    const postInput = document.getElementById('postInput');
    const postButton = document.getElementById('postButton');

    postButton.addEventListener('click', () => {
        const postId = postInput.value;

        // Используем fetch для получения данных поста
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            .then(res => res.json())
            .then(post => {
                const newPost = document.createElement('div');
                newPost.classList.add('post');
                newPost.innerHTML = `<b>${post.title}</b><br>${post.body}`;
                postDOM.appendChild(newPost);
            });

        // Используем XMLHttpRequest для получения данных поста
        const getPost = new XMLHttpRequest();
        getPost.open('GET', `https://jsonplaceholder.typicode.com/posts/${postId}`);
        getPost.send();
        getPost.onload = ({ target: { response } }) => {
            const post = JSON.parse(response);
            const newPost = document.createElement('div');
            newPost.classList.add('post');
            newPost.innerHTML = `<b>${post.title}</b><br>${post.body}`;
            postDOM.appendChild(newPost);
        };
    });
    // 4. На странице comments вывести список комментариев через input[type=number] получать id комментария
    //    и по щелчку на кнопку Send вывести пост в HTML через fetch и XMLHttpRequest.
    //    Стилизовать подходящим образом.
    //    https://jsonplaceholder.typicode.com/comments
    const commentDOM = document.getElementById('comment');
    const commentInput = document.getElementById('commentInput');
    const commentButton = document.getElementById('commentButton');

    commentButton.addEventListener('click', () => {
        const commentId = commentInput.value;

        // Используем fetch для получения данных комментария
        fetch(`https://jsonplaceholder.typicode.com/comments/${commentId}`)
            .then(res => res.json())
            .then(comment => {
                const newComment = document.createElement('div');
                newComment.classList.add('comment');
                newComment.innerHTML = `${comment.id}. ${comment.email}<br><b>${comment.name}</b><br>${comment.body}`;
                commentDOM.appendChild(newComment);
            });

        // Используем XMLHttpRequest для получения данных комментария
        const getComment = new XMLHttpRequest();
        getComment.open('GET', `https://jsonplaceholder.typicode.com/comments/${commentId}`);
        getComment.send();
        getComment.onload = ({ target: { response } }) => {
            const comment = JSON.parse(response);
            const newComment = document.createElement('div');
            newComment.classList.add('comment');
            newComment.innerHTML = `${comment.id}. ${comment.email}<br><b>${comment.name}</b><br>${comment.body}`;
            commentDOM.appendChild(newComment);
        };
    });
// 5. Возьмите любую лекцию по ООП, добавьте применение call, apply, bind
