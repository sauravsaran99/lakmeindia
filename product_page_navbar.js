 

 
 
 document.querySelector("#home").addEventListener("click", function () {
    window.location.href = "index.html"
})

// document.querySelector("#pro").addEventListener("click", function () {
//     window.location.href = "product_page.html"
// })


document.querySelector("#cart").addEventListener("click", function () {
    document.querySelector('.fixed').classList.add('displays')
    // document.querySelector('.fixed').classList.remove('fixed')
})


document.querySelector("#signin").addEventListener("click", function () {
    window.location.href = "signin_form.html"
}) 



