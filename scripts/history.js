const history = document.getElementById('history')

if (localStorage.length == 0) {
  let list = document.createElement('li')
  list.textContent = 'Anda belum membaca artikel'
  history.appendChild(list)
}

if (localStorage.length >= 1) {
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
}