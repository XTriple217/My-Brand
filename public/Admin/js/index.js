const form = document.querySelector('form');
const logging = async(event) =>{
    event.preventDefault();
    var uname = form.username.value;
    var password = form.password.value;
    const msg = document.querySelector('.msg');
    let template = '';
    const url = 'http://localhost:3000/Admin_users';
    const response = await fetch(url);
    const data = await response.json();
    data.forEach(record => {
        if ((uname === record.username) && (password === record.password)) {
            window.location.replace('home.html');            
            console.log('Access Granted');
        }
        else{
            template = `<div class='denied-msg'>Access Denied</div>`;
            console.log('Access denied');
        }
    });
    msg.innerHTML = template;
}
form.addEventListener('submit', logging);