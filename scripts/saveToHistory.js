let pathname = location.pathname;

pathname = pathname
  .replace(/^\//, '')
  .replace(/articles|\.html/g, '')
  .replace(/^\//, '')
  .replace(/-/g, ' ')
  .replace(/\b\w/g, match => match.toUpperCase());

document.title = pathname

window.addEventListener('load', () => {
  localStorage.setItem("title", document.title)
})