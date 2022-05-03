const blogTitles = document.querySelectorAll('.blog__title');

const getOnePost = async (title) => {
    const theBlog = await fetch(`/blogs/byTitle/${title}`);
};

for (title of blogTitles) {
    title.addEventListener('click', function (event) {
        const choice = event.target;
        getOnePost(choice.innerHTML);
    })
};