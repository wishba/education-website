const container = document.querySelector('.container');
const firstElement = container.firstElementChild;
const header = document.createElement('header');
const head = `
  <h1>📖Education Website</h1>
  <nav class="nav">
    <a href="../index.html" class="nav-content">Home</a>
    <a href="../reading-progress.html" class="nav-content">Reading Progress</a>
  </nav>
`;
header.classList.add('header');
header.innerHTML = head;
container.insertBefore(header, firstElement);

const footer = document.createElement('footer');
const foot = `
    <p id="copyright" class="copyright__text">
      Copyright &copy; 2023 by Educational Website.
    </p>
`;
footer.classList.add('footer__container');
footer.innerHTML = foot;
container.insertBefore(footer, firstElement.nextSibling);
