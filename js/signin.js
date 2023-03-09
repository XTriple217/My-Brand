const form = document.querySelector('form');
const message = document.querySelector('.log-message');
const logging = async(e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:3000/subscribers');
    const information =  await response.json();
    let status = false;
    information.forEach(info => {
        if (info.Email === form.email.value && info.Password === form.password.value) {
            status = true;
            window.location.replace('/index.html');
            console.log('Access Granted');
        }
    });
    if (status == false) {
        message.innerHTML = 'Check your Email or password';
    }

}




form.addEventListener("submit", logging);