const history = document.getElementById('history');

for (let i = 0; i < localStorage.length; i++) {
  const key = localStorage.key(i);
  const value = localStorage.getItem(key);

  let parseValue = value.split('/');
  parseValue = parseValue[parseValue.length - 1]
    .replace(/-/g, ' ')
    .replace(/\.html/g, '');

  let item = `${i + 1}. ${parseValue}`;
  let historyItem = document.createElement('a');
  historyItem.textContent = item;
  historyItem.href = value;
  history.appendChild(historyItem);
}
