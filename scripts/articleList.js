fetch('data.json')
  .then(response => response.json())
  .then(jsonData => {
    const modifiedData = jsonData.map(data => ({
      ...data,
      formattedPageName: formattingPageName(data.pageName.replace(/-/g, ' '))
    }));

    function formattingPageName(str) {
      return str.replace(/\b\w/g, char => char.toUpperCase());
    }

    const renderedData = modifiedData.map(data => `
    <li>
      <a href="articles/${data.pageName}.html">
        <img src="image-content/${data.image}" alt="${data.image}" />
        <p>${data.formattedPageName}</p>
      </a>
    </li>
  `).join('');

    const articleList = document.getElementById('articleList');
    articleList.innerHTML = renderedData;
  })
  .catch(error => console.error('Error fetching JSON:', error));