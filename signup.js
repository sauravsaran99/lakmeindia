document.querySelector("button").addEventListener("click", signUp)
    var usersData = JSON.parse(localStorage.getItem("userDataBase")) || []

    function signUp(){
        var first = document.querySelector("#firstName").value;
        var last = document.querySelector("#lastName").value;
        var email = document.querySelector("#email").value;
        var password = document.querySelector("#pass").value;
        var checkBox =  document.getElementById("checkmark").checked
        var checkBox = document.getElementById("checkmark").checked;
        if(first == "" || last == "" || email == "" || password =="" || checkBox == false){
            alert("Please enter all data")
        }else{
            var obj = {
            firstName:first,
            lastName: last,
            email:email,
            password:password,
            }
            usersData.push(obj);
            window.location.href = "signin_form.html";
        }

        localStorage.setItem("userDataBase", JSON.stringify(usersData))

    }