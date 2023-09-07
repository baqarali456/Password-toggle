const eyeButton = document.querySelector('#position');
const password = document.getElementById('password')

eyeButton.addEventListener('click',(e)=>{
    const className = e.target.classList;
    if(className.contains('fa-eye-slash')){
        password.type = "text";
        className.remove('fa-eye-slash');
        className.add('fa-eye');
    }
    else if(className.contains('fa-eye')){
        password.type = "password";
        className.add('fa-eye-slash');
        className.remove('fa-eye');
    }
})