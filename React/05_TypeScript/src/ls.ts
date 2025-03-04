

interface User {
    id: number;
    name: string;
    email: string;
    website: string;
}

const usDom: HTMLElement | null = document.getElementById('users');

if (usDom) {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(resp => resp.json())
        .then((users: User[]) => {
            users.forEach((user) => {
                const newUserDiv = document.createElement('div');
                newUserDiv.classList.add('users-style');
                newUserDiv.innerHTML = `${user.id}. ${user.name} - ${user.email} (${user.website})`;
                usDom.appendChild(newUserDiv);
            });
        });
}




interface Post {
    id: number;
    title: string;
    body: string;
}

const postDOM: HTMLElement | null = document.getElementById('posts-style');

if (postDOM) {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(resp => resp.json())
        .then((posts: Post[]) => {
            posts.forEach((post) => {
                const newPostDiv = document.createElement('div');
                newPostDiv.classList.add('posts-style');
                newPostDiv.innerHTML = `<h4 class="braun">${post.id}. ${post.title}</h4><hr><p>${post.body}</p>`;
                postDOM.appendChild(newPostDiv);
            });
        });
}


interface Comment {
    name: string;
    email: string;
    body: string;
}

const commDom: HTMLElement | null = document.getElementById('comments-style');

if (commDom) {
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(resp => resp.json())
        .then((comments: Comment[]) => {
            comments.forEach((comment) => {
                const newCommentDiv = document.createElement('div');
                newCommentDiv.classList.add('comments-style');
                newCommentDiv.innerHTML = `<h4 class="braun">${comment.name}.</h4> <div>${comment.email}</div><p>${comment.body}</p>`;
                commDom.appendChild(newCommentDiv);
            });
        });
}