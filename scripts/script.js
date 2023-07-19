import data from '../data.json' assert { type: 'json' };
console.log(data);

const ul = document.querySelector('.article__list');

const arr = [];

for (let i in data) {
  arr.push([i, data[i]]);
}

arr.forEach(e => {
  const content = `
        <div class="article-container">
            <a href="../articles/${e[1].pageName}.html">
            <img
                src="../image-content/${e[1].image}"
                alt="${e[1].pageName}"
                class="article-images"
            />
            <div class="article-text">
                <p class="article-link">${e[1].pageName}</p>
            </div>
            </a>
        </div>`;
  const li = document.createElement('li');
  li.innerHTML = content;
  ul.appendChild(li);
});
