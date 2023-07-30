import data from '../data.json' assert { type: 'json' };

const ul = document.querySelector('.article__list');

const arr = [];

for (let i in data) {
  arr.push([i, data[i]]);
}

arr.forEach(e => {
  const content = `
        <div class="list-container">
            <a href="../articles/${e[1].pageName}.html">
            <img
                src="../image-content/${e[1].image}"
                alt="${e[1].pageName}"
                class="list-images"
            />
            <div class="list-text">
                <p class="list-link">${e[1].pageName.split('-').join(' ')}</p>
            </div>
            </a>
        </div>`;
  const li = document.createElement('li');
  li.innerHTML = content;
  ul.appendChild(li);
});
