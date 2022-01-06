const formSubmit = document.getElementById("formSubmit");
const Name = document.getElementById("Name");
const UserName = document.getElementById("UserName");
const Email = document.getElementById("Email");
const ConfirmEmail = document.getElementById("ConfirmEmail");
const Password = document.getElementById("Password");
const ConfirmPassword = document.getElementById("ConfirmPassword");
const submitButton = document.getElementById("submitButton");
const formresult = document.getElementById("formresult");
const result =document.querySelector("#result")

const eye1 = document.querySelector(".eye1")
const eye2 = document.querySelector(".eye2")


const namemess = document.getElementById("namemess");
const usernamemess = document.getElementById("usernamemess");
const emailmess = document.getElementById("emailmess");
const conemailmess = document.getElementById("conemailmess");
const passmess = document.getElementById("passmess");
const conpassmess = document.getElementById("conpassmess");

const NameREXP = /^[A-Za-z\w]+$/;
const UserNameREXP = /^[a-z0-9@#$%-_]{6,15}$/;
const EmaiREXP = /^[a-z0-9-\.]+@[a-z]+\.[a-z-\.]+$/;
const PasswordREXP = /^[a-zA-Z0-9@#$%&*_-]{8,20}$/




formSubmit.addEventListener("submit", (e) => {

    e.preventDefault();
  

    if (NameREXP.test(Name.value) == false) {
        namemess.innerHTML =  `<p class="text-danger"> Name fields are Requird</p>`
        Name.style.border = "1px solid red";
    } 
    
    else if (UserNameREXP.test(UserName.value) == false) {
        usernamemess.innerHTML = `<p class="text-danger"> User Name fields Requird</p>`
        UserName.style.border = "1px solid red";
    } else if (EmaiREXP.test(Email.value) == false) {
        emailmess.innerHTML = `<p class="text-danger"> Email fields Requird</p>`
        Email.style.border = "1px solid red";
    } else if (Email.value == ConfirmEmail.value === false) {
        conemailmess.innerHTML = `<p class="text-danger"> Email are Not Matching</p>`
        ConfirmEmail.style.border = "1px solid red";
    } else if(PasswordREXP.test(Password.value) == false) {
        passmess.innerHTML = `<p class="text-danger"> Password fields Requird</p>`
        Password.style.border = "1px solid red";
    } else if(Password.value == ConfirmPassword.value == false) {
        conpassmess.innerHTML = `<p class="text-danger"> Password are Not Matching</p>`
    ConfirmPassword.style.border = "1px solid red";
    } else{
        formresult.innerHTML = `<p class="alert alert-success"> Data Stable </p>`
        result.innerHTML =`
        Name             = ${Name.value}
        User Name        = ${UserName.value}
        Email            = ${Email.value}
        Confirm Email    = ${ConfirmEmail.value}
        Password         = ${Password.value}
        confirm PAssword = ${ConfirmPassword.value}
        `
        setInterval(()=>{

        Name.value =""
        UserName.value =""
        Email.value= ""
        ConfirmEmail.value =""
        Password.value =""
        ConfirmPassword.value =""
        },10000)

    }
}) 



// Input Name valadition 
Name.addEventListener("blur", () => {
    if (Name.value == "") {
        Name.style.border = "1px solid red";
        namemess.innerHTML = `<p class="text-danger"> Name fields Requird</p>`
    }
})

Name.addEventListener("keyup", () => {
    if (NameREXP.test(Name.value) == "") {
        Name.style.border = "1px solid red";
        namemess.innerHTML = `<p class="text-danger">Plase Write only </p>`
    } else {
        Name.style.border = "1px solid green";
        namemess.innerHTML = ""
    }
})

// Input UserName valadition 
UserName.addEventListener("blur", () => {
    if (UserName.value == "") {
        UserName.style.border = "1px solid red";
        usernamemess.innerHTML = `<p class="text-danger"> Username fields Requird</p>`
    }
})

UserName.addEventListener("keyup", () => {
    if (UserNameREXP.test(UserName.value) == "") {
        UserName.style.border = "1px solid red";
        usernamemess.innerHTML = `<p class="text-danger">User Must Be 6 to 15 Caracter  </p>`
    } else {
        UserName.style.border = "1px solid green";
        usernamemess.innerHTML = ""
    }
})

// Input Email valadition 

Email.addEventListener("blur", () => {
    if (Email.value == "") {
        Email.style.border = "1px solid red";
        emailmess.innerHTML = `<p class="text-danger"> Emaill fields Requird</p>`
    }
})


Email.addEventListener("keyup", () => {
    if (EmaiREXP.test(Email.value) == "") {
        Email.style.border = "1px solid red";
        emailmess.innerHTML = `<p class="text-danger">Plase Input Your Valid Email  </p>`
    } else {
        Email.style.border = "1px solid green";
        emailmess.innerHTML = ""
    }
})
// Input confirm Email valadition 
ConfirmEmail.addEventListener("blur", () => {
    if (ConfirmEmail.value == "") {
        ConfirmEmail.style.border = "1px solid red";
        conemailmess.innerHTML = `<p class="text-danger"> Confirm Emaill fields Requird</p>`
    } else{
        conemailmess.innerHTML = ""
    }
})


ConfirmEmail.addEventListener("keyup", () => {
    if (Email.value === ConfirmEmail.value == false) {
        ConfirmEmail.style.border = "1px solid red";
        conemailmess.innerHTML = `<p class="text-danger">Email Not Matching </p>`
    } else {
        ConfirmEmail.style.border = "1px solid green";
        conemailmess.innerHTML = `<p class="text-success">Email Matched </p>`
    }

})

// Password Email valadition

Password.addEventListener("blur", () => {
    if (PasswordREXP.test(Password.value) == "") {
        Password.style.border = "1px solid red";
        passmess.innerHTML = `<p class="text-danger">Password fields Requird </p>`
    } else {
        Password.style.border = "1px solid green";
        passmess.innerHTML = ""
    }

})
Password.addEventListener("keyup", () => {
    if (PasswordREXP.test(Password.value) == "") {
        Password.style.border = "1px solid red";
        passmess.innerHTML = `<p class="text-danger">Password Must Be 8 to 20 Caracter </p>`
    } else {
        Password.style.border = "1px solid green";
        passmess.innerHTML = ""
    }

})

// Input confirm Password valadition 
ConfirmPassword.addEventListener("blur", () => {
    if (PasswordREXP.test(ConfirmPassword.value) == "") {
        ConfirmPassword.style.border = "1px solid red";
        conpassmess.innerHTML = `<p class="text-danger">Confirm Password fields Requird </p>`
    } else {
        ConfirmPassword.style.border = "1px solid green";
        conpassmess.innerHTML = ""
    }

})
ConfirmPassword.addEventListener("keyup", () => {
    if (Password.value === ConfirmPassword.value == false) {
        ConfirmPassword.style.border = "1px solid red";
        conpassmess.innerHTML = `<p class="text-danger">Password are Not Matching </p>`
    } else {
        ConfirmPassword.style.border = "1px solid green";
        conpassmess.innerHTML = `<p class="text-success">Password Matched </p>`
    }

})

// Eye icon function

eye1.addEventListener("click", () => {
    if (Password.type == "password") {
        Password.setAttribute('type', 'text')
        eye1.innerHTML = `<i class="far fa-eye-slash"></i>`
    } else if (Password.type == "text") {
        Password.setAttribute("type", "password")
        eye1.innerHTML = `<i class="far fa-eye"></i>`
    }
})


eye2.addEventListener("click", () => {
    if (ConfirmPassword.type == "password") {
        ConfirmPassword.setAttribute('type', 'text')
        eye2.innerHTML = `<i class="far fa-eye-slash"></i>`
    } else if (ConfirmPassword.type == "text") {
        ConfirmPassword.setAttribute("type", "password")
        eye2.innerHTML = `<i class="far fa-eye"></i>`
    }
})