// nav code started here

function goToSignUpPage() {
    window.location.href = "signup.html";
}

//  Added Shantanu 


document.querySelector(".login-btn").addEventListener("click", function() {
    // window.location.href = "lakmehomepage.html"
    window.location.href = "index.html"
})

//  Added Shantanu 

document.querySelector("#home").addEventListener("click", function() {
    window.location.href = "lakmehome.html"
})
document.querySelector("#pro").addEventListener("click", function() {
    window.location.href = "pro.html"
})
document.querySelector("#signin").addEventListener("click", function() {
        window.location.href = "signIn.html"
    })
    // nav code end here

//  main sign in part start here

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

//  main sign in part end here