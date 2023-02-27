const form = document.querySelector('form');
const form_message = document.querySelector('.post-message');
const createPost = async(event) =>{
    event.preventDefault();
    const record = {
    title : form.title.value,
    author : form.author.value,
    date : form.date.value,
    image : form.image.value,
    description : form.description.value,
    article : form.article.value
    }
    await fetch('http://localhost:3000/articles',{
        method: 'POST',
        body: JSON.stringify(record),
        headers: { 'Content-Type': 'application/json' }
    });      
    const template = `<div>Succesfuly Uploaded</div>`;
    form_message.innerHTML = template;
    console.log('Uploaded Successfuly');
}
form.addEventListener('submit', createPost); 