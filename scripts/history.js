const history = document.getElementById('history')

for (let i = 0; i < localStorage.length; i++) {
  const key = localStorage.key(i)
  const value = localStorage.getItem(key)

  let item = `Key: ${key}, Value: ${value}`
  let historyItem = document.createElement('p')
  historyItem.textContent = item

  history.appendChild(historyItem)
}