const form = document.querySelector('form');
const message = document.querySelector('.message');
const logging = async(Event) =>{
    Event.preventDefault();
    const response = await fetch('http://localhost:3000/user');
    const data = await response.json();
    data.forEach(record => {
        if (record.email === form.email.value && record.password === form.password.value) {
            window.location.replace('home.html');
            console.log('Access Granted');
            
        }
        else{
            const err_msg = `
            <div class = 'err_msg'>Access Denied</div>
            `
            message.innerHTML = err_msg;
        }
    });
}




form.addEventListener('submit',logging);