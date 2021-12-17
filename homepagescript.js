var data = [
    {

        name: "BEST SELLER",
        image: "https://cdn.shopify.com/s/files/1/0014/3514/0183/products/24544_H-8901030758850_3e09b888-1276-44a2-9665-fa293cbd5d3_200x.jpg?v=1601470864",
        role: "LAKME FOREVER MATTE LIQUID LIP COLUR",
        price: "Rs 295",
        shade: "16 shades",
        image2: "https://cdn.shopify.com/s/files/1/0014/3514/0183/products/24544_S5-8901030758850_47d81970-d9f4-480a-9ad0-2182d5a263f5_200x.jpg?v=1591863174"
    },
    {

        name: "BEST SELLER",
        image: "https://cdn.shopify.com/s/files/1/0014/3514/0183/products/24453_S1-8901030742804_200x.jpg?v=1611756792",
        role: "LAKME 9 TO 5 PRIMER + MATTE PERFECT COVER FONDATION",
        price: "Rs 352",
        shade: "16 shades",
        image2: "https://cdn.shopify.com/s/files/1/0014/3514/0183/products/24451_S2-8901030742439_200x.jpg?v=1611755998"
    },
    {

        name: "BEST SELLER",
        image: "https://cdn.shopify.com/s/files/1/0014/3514/0183/products/29158_H2_8901030857867_200x.jpg?v=1630499339",
        role: "LAKME LIMITED EDITION LIP COLORS",
        price: "Rs 399",
        shade: "16 shades",
        image2: "https://cdn.shopify.com/s/files/1/0014/3514/0183/products/29158_S1_-8901030857867_200x.jpg?v=1630500010"
    },
    {

        name: "BEST SELLER",
        image: "https://cdn.shopify.com/s/files/1/0014/3514/0183/products/29113_H1-8901030851667_200x.jpg?v=1629186400",
        role: "LAKME ABSOLUTE MATTE MELT LIQUID LIP COLOR",
        price: "Rs 700",
        shade: "16 shades",
        image2: "https://cdn.shopify.com/s/files/1/0014/3514/0183/products/29113_H2-8901030851667_200x.jpg?v=1629186281"
    },




];

data.map(function (ele, i) {
    var maindiv = document.createElement("div");
    
    var img = document.createElement("img");
    img.setAttribute("class", "img")
    img.setAttribute("id", `id${i}`);
    img.setAttribute("src", ele.image);
    img.setAttribute("onmouseover", `changeimage(${i})`);
    img.setAttribute("onmouseleave", `setperivousimage(${i})`);


    var h4 = document.createElement("h4");
    h4.setAttribute("class", "bestsellerh4")

    h4.textContent = ele.name;

    var p = document.createElement("p");
    p.setAttribute("class", "role")
    p.textContent = ele.role;

    var p1 = document.createElement("p");
    p1.textContent = ele.price;

    var p2 = document.createElement("p");
    p2.textContent = ele.shade;

    var btn = document.createElement("button");
    btn.setAttribute("class", "cart")
    btn.textContent = "ADD TO CART"

    var secdiv = document.createElement("div");
     secdiv.append(h4, p, p1, p2, btn)

    maindiv.append(img ,secdiv);
    secdiv.setAttribute("class","secdiv");
    document.getElementById("box").append(maindiv );
})
function changeimage(i) {
    console.log("on change image", i);
    var image = document.getElementById(`id${i}`);
    image.src = data[i].image2;
}
function setperivousimage(i) {
    var image = document.getElementById(`id${i}`);
    image.src = data[i].image;

}
function gotoproductpage() {
    window.location.href = "product_page.html"
}
