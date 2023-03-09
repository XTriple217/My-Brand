const form = document.querySelector('form');
const Post = async(e) => {
    e.preventDefault();
    const template = {
        title : form.title.value,
        author : form.author.value,
        date : form.date.value,
        image : 'none' ,
        description : form.description.value,
        article : form.article.value,
        like : 0,
        disklike : 0,
        comments : 0 
    }
    await fetch('http://localhost:3000/Articles', {
        method: 'POST',
        body: JSON.stringify(template),
        headers: { 'Content-Type': 'application/json' }
    });
    window.location.replace('page-manager.html');

    alert('Successfuly Posted!');
}
form.addEventListener('submit',Post);