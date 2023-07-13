const history = document.getElementById('history')

for (let i = 0; i < localStorage.length; i++) {
  const key = localStorage.key(i)
  const value = localStorage.getItem(key)

  let link = document.createElement('a')
  link.href = value
  link.textContent = key

  let list = document.createElement('li')
  list.appendChild(link)

  history.appendChild(list)
}