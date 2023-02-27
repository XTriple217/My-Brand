const form = document.querySelector('form');
const submitData = async (event) =>{
    event.preventDefault();
    const contact = {
        fullnames : form.fullnames.value,
        email : form.email.value,
        message : form.message.value,
        status : 'unseen'
    };
    await fetch('http://localhost:3000/contacts',{
        method: 'POST',
        body: JSON.stringify(contact),
        headers: { 'Content-Type': 'application/json' }
    });
    window.location.replace('index.html');
    console.log('Successfully submitted!');

}

form.addEventListener('submit', submitData);