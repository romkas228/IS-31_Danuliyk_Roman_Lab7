const div = document.querySelector('.ex2_div')
const reduceButton = document.querySelector('.reduce_button')
const increaseButton = document.querySelector('.increase_button')

reduceButton.addEventListener('click',() => {
    const currentSize = parseInt(div.style.width || 50)
    div.style.width = `${currentSize - 15}px`
    div.style.height = `${currentSize - 15}px`
})
increaseButton.addEventListener('click',() => {
    const currentSize = parseInt(div.style.width || 50)
    div.style.width = `${currentSize + 15}px`
    div.style.height = `${currentSize + 15}px`
})
