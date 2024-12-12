const body = document.body
const button = document.querySelector('.change-color')
const colorName = document.querySelector('.color')


function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
}

button.addEventListener('click',() => {
    const bgColor = getRandomHexColor()
    colorName.textContent = bgColor
    body.style.backgroundColor = bgColor

})
