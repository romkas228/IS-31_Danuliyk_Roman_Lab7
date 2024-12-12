const categories = document.querySelector('#categories')
const item = document.querySelectorAll('.item') 
console.log(`Number of categories:${item.length}`)
item.forEach((category) => {
    const tittle = category.querySelector(`h2`).textContent
    const list = category.querySelectorAll(`ul > li`)
    console.log(`Category: ${tittle}`)
    console.log(`Elements: ${list.length}`)
})
