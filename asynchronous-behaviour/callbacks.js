const posts = [
    { title: 'Post 1', body: 'First Post' },
    {title: 'Post 2', body: 'Second Post'}
];

function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
            output += post.title + ' ';
        })
        console.log(output);
    }, 2000);
}

function createPost(post, callback) {
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 3000);
}

createPost({ title: 'Post 3', body: 'Third Post' }, getPosts);