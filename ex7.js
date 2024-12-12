const numberInput = document.querySelector('#controls > input')
const createButton = document.querySelector('[data-create]')
const destroyButton = document.querySelector('[data-destroy]')
const boxes = document.querySelector('#boxes')
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
}
function createBoxes (amount) {
    if(numberInput.value >= 1 && numberInput.value <= 100){  
    for( let i = 0; i < amount; i++){
        const div = document.createElement('div')
        div.style.backgroundColor = getRandomHexColor()
        div.style.width = `${30 + i * 10}px`
        div.style.height = `${30 + i * 10}px`
        div.classList.add('box')
        boxes.append(div)
    }
    }else{
        alert('number not in range 1-100')
    }
}
function destroyBoxes () {
   boxes.innerHTML = ""
}
createButton.addEventListener('click',() => createBoxes(numberInput.value))
destroyButton.addEventListener('click',destroyBoxes)
