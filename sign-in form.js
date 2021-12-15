var userData = JSON.parse(localStorage.getItem("userDataBase"))

function clickForPass() {
    var height = document.querySelector("#usingJsheight").style.height = "489px";
    var passwd = document.querySelector("#inputPasswd").style.display = "block";
}

document.querySelector("#form").addEventListener("submit", signInBtn)

function signInBtn(event) {
    event.preventDefault();

    var email = document.querySelector('#inputEmail').value;
    var password = document.querySelector("#inputPasswd").value;

    for (var i = 0; i < userData.length; i++) {
        if (userData[i].email == email && userData[i].password == password) {
            window.location.href = "product.html"
        }
    }


}

function goToSignUpPage() {
    window.location.href = "signUp.html";
}