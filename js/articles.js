// javascript for index.html

const container = document.querySelector('.blog');
const container2 = document.querySelector('.blog2');

const renderPosts = async () => {
    const url = 'http://localhost:3000/Articles?_sort=date&_order=desc';
    const res = await fetch(url);
    const article = await res.json();
    

    let template = '';
    article.forEach(post => {
        template += `
          <div class="articles">
          <div class="articles-body">
            <div class="trending-photo"></div>
            <div class="trend-contents">
              <div class="trend-title">
                ${post.title}
              </div>
              <div class="trend-para">
                ${post.article.slice(0 , 200)}
                <a href = "readmore.html?index = ${post.id}"> Read More</a>
              </div>
              <div class="posted-info">
              <div class="trend-date">Posted on: ${post.date}</div>
              <div class="trend-author">${post.author}</div>
            </div>
            
            <div class="trend-icons">
              <div class="con">
              <div><span><i class="fa-solid fa-thumbs-up"></i></span></div>
              <div class="like">Like ${post.like}</div> 
              </div>

              <div class="con">
              <div><a href=''><span><i class="fa-solid fa-thumbs-down"></i></span></a></div>
              <div class="dislike">Dislike ${post.disklike}</div>              
              </div>

              <div class="con">
              <div> <a href=''><span><i class="fa-regular fa-comment"></i></span></a></div>
              <div class="comment">Comment ${post.comments}</div>              
              </div>
          </div>
          </div>
          </div>
          </div>
        `
    })

    container.innerHTML += template;
    container2.innerHTML += template;

}

window.addEventListener('DOMContentLoaded', () => renderPosts());