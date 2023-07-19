const firstElement = document.body.firstElementChild;
const header = document.createElement('header');
const head = `
  <ul class='nav'>
    <li>
      <a href="/index.html">Home</a>
    </li>
    <li>
      <a href="/reading-progress.html">Reading Progress</a>
    </li>
  </ul>
  <hr>
`;

header.innerHTML = head;
document.body.insertBefore(header, firstElement);
