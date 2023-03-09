const form = document.querySelector('form');
const Post = async(e) => {
    e.preventDefault();
    const template = {
        Fullnames : form.fullnames.value,
        Email : form.email.value,
        Message : form.message.value,
        Date : 'none' ,
        Status : 'Unseen'
    }
    await fetch('http://localhost:3000/Contacts', {
        method: 'POST',
        body: JSON.stringify(template),
        headers: { 'Content-Type': 'application/json' }
    });
    window.location.replace('/index.html');
}
form.addEventListener('submit',Post);