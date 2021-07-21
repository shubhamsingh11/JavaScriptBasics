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


async function init() {
    try {
        await createPost({ title: 'Post 3', body: 'Third Post' });
        getPosts();

    } catch (error) {
        console.error(error)
}
}

init();