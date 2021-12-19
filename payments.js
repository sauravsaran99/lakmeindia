document.querySelector("#proceed").addEventListener("click", contactInformation);
var contactArr =  [];
function contactInformation () {

    var firstName = document.querySelector("#firstName").value;
    var lastName = document.querySelector("#lastName").value;
    var email  = document.querySelector("#email").value;
    var box = document.querySelector("#box").value;
    var pin = document.querySelector("#pin").value;
    var country = document.querySelector("#country").value;
    var address = document.querySelector("#address").value;
    var city = document.querySelector("#city").value;
    var state = document.querySelector("#state").value;
    var phone = document.querySelector("#phone").value;
    var saveAddress = document.querySelector(".saveAddress").value;
    var above18 = document.querySelector(".above18").value;

    console.log()

    var contactList = {
        firstName :firstName, 
        lastName  :lastName,
        email      :email,
        box        :box,
        pin        :pin,
        country    :country,
        address    :address,
        city       :city,
        state      :state,
        phone      :phone,
        saveAddress :saveAddress,
        above18    :above18,
    }
    console.log(contactList);
    contactArr.push(contactList);

    localStorage.setItem("contactDatabase",JSON.stringify(contactArr))
    
}







 var data = JSON.parse(localStorage.getItem("addCart")) 
//console.log(arr)
showCartItem(data)


function showCartItem (arr) {

productSubTotal=0;
productTotal = 0;


    document.querySelector(".order-summary").textContent = ""
    console.log(arr)
   arr.map(function (elem){
    div = document.createElement("div");
    div.setAttribute("class", "productItem");

    image = document.createElement("img");
    image.setAttribute("src", elem.image)
    image.setAttribute("class", "productImage")
    productName = document.createElement("p")
    productName.setAttribute("class", "productName");

    productName.textContent = elem.name
    productPrice = document.createElement('p')
    productPrice.setAttribute("class", "productPrice");

    productPrice.textContent = elem.currentPrice

console.log(elem.currentPrice)
console.log(typeof(elem.currentPrice))

    productSubTotal+=(+elem.currentPrice)

    div.append(image, productName,productPrice)


    document.querySelector(".order-summary").append(div)
    

  })



//   productTotal += (productTotal*(.18))
  taxTotal = (Math.floor(productSubTotal*(.18)))

  console.log(taxTotal);

//   console.log(productSubtotal);


TotalProduct= productSubTotal+taxTotal;


document.querySelector(".productSubtotal").innerHTML = productSubTotal;



document.querySelector(".product-total-price").innerHTML = TotalProduct;

document.querySelector(".texAmount").innerHTML = taxTotal;

}

discountfirst=0
function applyCoupon () {
    var dCode = document.querySelector(".discount-code").value;
    


    if (dCode === "MASAI30" && discountfirst==0) {

        productPrice = document.querySelector(".product-total-price").innerHTML;
        total = (Math.floor(TotalProduct*(0.7)));
    
        taxTotal = (Math.floor(total*(.18)))

        document.querySelector(".product-total-price").innerHTML = total;

        document.querySelector(".texAmount").innerHTML = taxTotal;

        discountfirst+=1;

    }

}
function moveLogin () {
  window.location.href = "signin_form.html";
}

document.querySelector('#proceed').addEventListener('click', function () {
  window.location.href = 'thankyou.html'
})


