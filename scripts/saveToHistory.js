let pathname = location.pathname;
pathname = pathname
  .replace(/^\//, '')
  .replace(/articles|\.html/g, '')
  .replace(/^\//, '')
  .replace(/-/g, ' ')
  .replace(/\b\w/g, match => match.toUpperCase());
document.title = pathname

let locationPath = window.location.pathname

window.addEventListener('load', () => {
  localStorage.setItem(document.title, locationPath)
})