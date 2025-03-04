var usDom = document.getElementById('users');
if (usDom) {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(function (resp) { return resp.json(); })
        .then(function (users) {
        users.forEach(function (user) {
            var newUserDiv = document.createElement('div');
            newUserDiv.classList.add('users-style');
            newUserDiv.innerHTML = "".concat(user.id, ". ").concat(user.name, " - ").concat(user.email, " (").concat(user.website, ")");
            usDom.appendChild(newUserDiv);
        });
    });
}
var postDOM = document.getElementById('posts-style');
if (postDOM) {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(function (resp) { return resp.json(); })
        .then(function (posts) {
        posts.forEach(function (post) {
            var newPostDiv = document.createElement('div');
            newPostDiv.classList.add('posts-style');
            newPostDiv.innerHTML = "<h4 class=\"braun\">".concat(post.id, ". ").concat(post.title, "</h4><hr><p>").concat(post.body, "</p>");
            postDOM.appendChild(newPostDiv);
        });
    });
}
var commDom = document.getElementById('comments-style');
if (commDom) {
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(function (resp) { return resp.json(); })
        .then(function (comments) {
        comments.forEach(function (comment) {
            var newCommentDiv = document.createElement('div');
            newCommentDiv.classList.add('comments-style');
            newCommentDiv.innerHTML = "<h4 class=\"braun\">".concat(comment.name, ".</h4> <div>").concat(comment.email, "</div><p>").concat(comment.body, "</p>");
            commDom.appendChild(newCommentDiv);
        });
    });
}
