// javascript for index.html

const container = document.querySelector('.tbody');

const renderPosts = async () => {
    let uri = 'http://localhost:3000/Articles';
    const res = await fetch(uri);
    const posts = await res.json();
    

    let template = '';
    posts.forEach(post => {
        template += `
            <tr>
                <td>
                <input type="checkbox"/>
                </td>
                <td class="id">${post.id}</td>
                <td>${post.title}</td>
                <td>${post.author}</td>
                <td>${post.description.slice(0,20)}..</td>
                <td>${post.like}</td>
                <td>${post.disklike}</td>
                <td>${post.comments}</td>
                <td class="update"><a href="#?id = ${post.id}">Update <Span class="update-icon"><i class="fa-solid fa-circle-info"></i></Span></a></td>
                <td onclick="document.getElementById('id02').style.display='block'" class="delete"><a href="#?del_id=${post.id}">Delete <span class="delete-icon"><i class="fa-sharp fa-solid fa-trash"></i></span></a></td>
            </tr>
        `
    });

    container.innerHTML = template;
    // deleting section
    const form = document.querySelector('form');
    form.del.addEventListener("click",(event)=>{
       const id = new URLSearchParams(Window.location.search).get
       console.log(id);
    });
    form.cancel.addEventListener("click",(event)=>{
        console.log('Button Cancelled!');
    });
}
window.addEventListener('DOMContentLoaded', () => renderPosts());