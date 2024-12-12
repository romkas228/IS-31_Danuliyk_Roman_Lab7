const list = document.querySelector('.ex3_List_option')
const listOption = document.querySelectorAll('.ex3_List_option')
const doubleButton = document.querySelector('.double_button')

doubleButton.addEventListener('click',() => {
        
    listOption.forEach((option) => option.textContent = `${parseInt(option.textContent) * parseInt(option.textContent)}`)

})

