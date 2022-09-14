const imgs = document.getElementsByTagName('img')
for (let i in imgs) {
    const randomIndex = Math.floor(Math.random() * puppyImages.length)
    imgs[i].src = puppyImages[randomIndex]
}

const headers = document.getElementsByTagName('h1')
for (let j in headers) {
    const randomIndex = Math.floor(Math.random() * motivationalQuotes.length)
    headers[j].innerText = motivationalQuotes[randomIndex]
}

const subheaders = document.getElementsByTagName('h2')
for (let m in subheaders) {
    const randomIndex = Math.floor(Math.random() * motivationalQuotes.length)
    subheaders[m].innerText = motivationalQuotes[randomIndex]
}
