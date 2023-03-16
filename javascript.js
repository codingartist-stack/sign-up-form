const password = document.getElementById("password");
const confirmPass = document.getElementById("confirmpassword");
const error = document.getElementById("error");

function checkPass(e) {
    if (password.value === confirmPass.value) {
        password.style.borderColor = "green"
        confirmPass.style.borderColor = "green"
    } else {
        password.style.borderColor = "red"
        confirmPass.style.borderColor = "red"
        error.textContent = "* Passwords do not match"
        error.style.color = "red"
    }
}


confirmPass.addEventListener("input", (e) => {
    console.log('am I working?');
    checkPass(e)
})


//grab password and confirm pass
//check if they are the same
//if same boarder green
//if not boarder red -- should it be red if they are both empty?
//display error. 

//buckets and loops

//password bucket is password

