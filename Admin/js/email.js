// javascript for index.html

const tableBody = document.querySelector('.tbody');

const renderPosts = async () => {
    const url = 'http://localhost:3000/Contacts?_sort=id&_order=desc';
    const response = await fetch(url);
    const email = await response.json();    

    let template = '';
    email.forEach(post => {
        template += `
        <tr>
        <td>
          <input type="checkbox"/>
        </td>
        <td>${post.Fullnames}</td>
        <td>${post.Email}</td>
        <td>${post.Message}</td>
        <td>Read <Span><i class="fa-sharp fa-solid fa-envelope"></i></Span></td>
        <td>Delete <span><i class="fa-sharp fa-solid fa-trash"></i></span></td>
      </tr>`
      
    });
    
    tableBody.innerHTML = template;

}

window.addEventListener('DOMContentLoaded', () => renderPosts());