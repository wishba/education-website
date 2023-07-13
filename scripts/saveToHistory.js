// let pathname = location.pathname;

// pathname = pathname
//   .replace(/^\//, '')
//   .replace(/articles|\.html/g, '')
//   .replace(/^\//, '')
//   .replace(/-/g, ' ')
//   .replace(/\b\w/g, match => match.toUpperCase());

// document.title = pathname;
document.URL = location.href;
let loc = location.href;
loc = loc.split('/');
console.log(loc[loc.length - 1].replace(/-/g, ' ').replace(/\.html/g, ''));

window.addEventListener('load', () => {
  localStorage.setItem('title', document.URL);
});
