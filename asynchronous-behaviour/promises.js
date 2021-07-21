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

function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);

            const error = true;

            if (!error) {
                resolve();
            }
            else {
                reject("Something is wrong");
            }
        }, 3000);
    })
    
}

createPost({ title: 'Post 3', body: 'Third Post' })
    .then(getPosts)
    .catch((err) => console.log(err));