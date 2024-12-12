const loginForm = document.querySelector(".login-form")
const loginFormEmail = loginForm.elements.email
const loginFormPassword = loginForm.elements.password

const loginFormSubmit = () => {
    event.preventDefault()
    loginFormEmail.value = loginFormEmail.value.trim()
    loginFormPassword.value = loginFormPassword.value.trim()
 if(loginFormEmail.value == "" || loginFormPassword.value == ""){
    alert(`All form fields must be filled in`)
 }
 const data ={
    email: loginFormEmail.value,
    password: loginFormPassword.value
 }
 
 console.log(data)
 loginForm.reset();

}
loginForm.addEventListener('submit',loginFormSubmit)

