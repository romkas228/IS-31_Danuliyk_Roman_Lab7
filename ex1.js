const swapButton = document.querySelector(".swap_Button")
const input1 = document.querySelector(".input1")
const input2 = document.querySelector(".input2")

swapButton.addEventListener('click',() =>{
    const temp = input1.value
    input1.value = input2.value
    input2.value = temp
})