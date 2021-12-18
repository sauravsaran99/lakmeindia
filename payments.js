var data = [
{"id": 1, "image": "https://cdn.shopify.com/s/files/1/0014/3514/0183/products/27148_S9-8901030741845_70f974c2-d8d8-43b8-b1c2-ab3f91969d4e_300x.jpg?v=1617882362", "image_hover": "https://cdn.shopify.com/s/files/1/0014/3514/0183/products/Hero_Bundle-_1_1_300x.jpg?v=1617893040", "name": "LAKM\u00c9 BLUSH AND GLOW SHEET MASK VALUE SET OF 10", "currentPrice": "599", "oldPrice": "1,000", "discountPrice": "40% OFF", "isSoldOut": null, "link": "https://lakmeindia.com/collections/bestsellers/products/lakme-blush-and-glow-sheet-mask-value-set-10"},
{"id": 2, "image": "https://cdn.shopify.com/s/files/1/0014/3514/0183/products/1000x1000-swatch_1_300x.jpg?v=1620802298", "image_hover": "https://cdn.shopify.com/s/files/1/0014/3514/0183/products/1000x1000-hero_1_300x.jpg?v=1620801652", "name": "LAKM\u00c9 9TO5 VITAMIN C + SKINCARE VALUE SET", "currentPrice": "999", "oldPrice": "1,297", "discountPrice": "23% OFF", "isSoldOut": null, "link": "https://lakmeindia.com/collections/bestsellers/products/lakme-9to5-vitamin-c-skincare-combo"},
{"id": 3, "image": "https://cdn.shopify.com/s/files/1/0014/3514/0183/products/img2_4_1_300x.jpg?v=1620910674", "image_hover": "https://cdn.shopify.com/s/files/1/0014/3514/0183/products/img1_3_1_300x.jpg?v=1620910668", "name": "LAKM\u00c9 GREEN TEA ESSENTIALS KIT", "currentPrice": "699", "oldPrice": "847", "discountPrice": "17% OFF", "isSoldOut": null, "link": "https://lakmeindia.com/collections/bestsellers/products/green-tea-essentials-kit"},
{"id": 4, "image": "https://cdn.shopify.com/s/files/1/0014/3514/0183/products/24968_H2-8901030816055_300x.jpg?v=1621002851", "image_hover": "https://cdn.shopify.com/s/files/1/0014/3514/0183/products/Lakme9to5Primer_MatteLipColorRedLetter_300x.jpg?v=1598243140", "name": "Lakm\u00e9 9 to 5 Primer + Matte Lip Color", "currentPrice": "300", "oldPrice": "500", "discountPrice": "40% OFF", "isSoldOut": null, "link": "https://lakmeindia.com/collections/bestsellers/products/lakme-9to5-primer-matte-lipstick"}
]

localStorage.setItem("dataList", JSON.stringify(data))

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

 //var data = JSON.parse(localStorage.getItem("contactDatabase")) 
//console.log(arr)
showCartItem(data)
function showCartItem (arr) {
    document.querySelector(".order-summary").textContent = ""
    console.log(arr)
   arr.map(function (elem){
    div = document.createElement("div");
    div.setAttribute("class", "productItem");

    image = document.createElement("img");
    image.setAttribute("src", elem.image)
    productName = document.createElement("p")
    productName.setAttribute("class", "productName");

    productName.textContent = elem.name
    productPrice = document.createElement('p')
    productPrice.setAttribute("class", "productPrice");

    productPrice.textContent = elem.currentPrice


    div.append(image, productName,productPrice)


    document.querySelector(".order-summary").append(div)
    

  })
}

function applyCoupon () {
    var dCode = document.querySelector(".discount-code").value;

    if (dCode === "MASAI30") {
        total = (total*0.7);
    }

}
function moveLogin () {
  window.location.href = "signIn.html";
}


