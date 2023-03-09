const form = document.querySelector('form');
const Register = async(Event) =>{
    Event.preventDefault();
    const record ={
        Email : form.mail.value,
        Password : form.password.value,
        Status : 'Off'
    }
    await fetch('http://localhost:3000/subscribers',{
        method: 'POST',
        body : JSON.stringify(record),
        headers : {'Content-Type': 'application/json'}
    });
    console.log('Successful Created');
    window.location.replace('/index.html');
}


form.addEventListener("submit", Register);