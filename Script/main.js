let FirstName = document.getElementById("first_name");
let LastName = document.getElementById("last_name");
let email = document.getElementById("email");
let pass = document.getElementById("password");

let nameError = document.getElementById ("name_error");
let lastNameError = document.getElementById("last_name_error");
let emailError = document.getElementById("email_error");
let passwordError = document.getElementById("password_error");

function FreeTrialRegister() {

        ResetError();
    
        if (!FirstName.value) {
            FirstName.classList.add("input_box_error");
            nameError.classList.add("error_msn");
            nameError.textContent = "First Name cannot be empty"
        }

        if (!LastName.value) {           
            LastName.classList.add("input_box_error");
            lastNameError.classList.add("error_msn");
            lastNameError.textContent = "Last Name cannot be empty"
        }

        // if (!email.value) {         
        //     email.classList.add("input_box_error");
        //     emailError.classList.add("error_msn");
        //     emailError.textContent = "Email cannot be empty"
        // }
        if(!((/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/).test(email.value))){
            email.classList.add("input_box_error_email","input_box_error");
            emailError.classList.add("error_msn");
            emailError.textContent = "Looks like this is not an Email";
            email.placeholder = "email@example.com";
        }

        if (!pass.value) {      
            pass.classList.add("input_box_error");
            passwordError.classList.add("error_msn");
            passwordError.textContent = "Password cannot be empty"
        }
    
}

function ResetError(){

        FirstName.classList.remove("input_box_error");
        nameError.classList.remove("error_msn");
        nameError.textContent = "";
        LastName.classList.remove("input_box_error");
        lastNameError.classList.remove("error_msn");
        lastNameError.textContent = "";
        email.classList.remove("input_box_error_email","input_box_error");
        emailError.classList.remove("error_msn");
        emailError.textContent = "";
        email.textContent = "";
        pass.classList.remove("input_box_error");
        passwordError.classList.remove("error_msn");
        passwordError.textContent = "";
}