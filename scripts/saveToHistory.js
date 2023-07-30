let pathname = location.pathname;
pathname = pathname
  .replace(/^\//, '')
  .replace(/articles|\.html/g, '')
  .replace(/^\//, '')
  .replace(/-/g, ' ')
  .replace(/\b\w/g, match => match.toUpperCase());
document.title = pathname;

const tempObj = {
  title: document.title,
  path: window.location.pathname,
};

window.addEventListener('load', () => {
  localStorage.setItem(document.title, window.location.pathname);
});
