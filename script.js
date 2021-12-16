
let oldArr = [];


let arr = JSON.parse(localStorage.getItem('data'));

if(arr = []) {
    var disable = document.querySelector('#cart-img');
    var disable2 = document.querySelector('.belowCart');
    disable2.setAttribute('class', 'notshow')
    disable.setAttribute('class', 'notshow')
    arr.push(...oldArr);
    localStorage.setItem('data', JSON.stringify(arr));
    var active = document.querySelector('.box3');
    active.setAttribute('class', 'show')


let sum = 0;
let oldSum = 0;


arr.map(function(elm, ind) {

    sum += Number(elm.currentPrice);
    oldSum += Number(elm.oldPrice);
    // div1.setAttribute('src', elm.image)
    var section2 = document.createElement('section');
section2.setAttribute('id', 'product');
var div1 = document.createElement('div');
div1.setAttribute('class', 'productbox div1');
var div2 = document.createElement('div');
var div2p = document.createElement('p');
div2p.textContent = elm.name;
div2.append(div2p)
div2.setAttribute('class', 'productbox div2');
// var div3 = document.createElement('div');
// div3.setAttribute('class', 'productbox');
var div4 = document.createElement('div');
div4.setAttribute('class', 'productbox');
div4.textContent = '₹' + elm.currentPrice
var div5 = document.createElement('div');
div5.setAttribute('class', 'productbox div5');
if(elm.oldPrice == null) {
    div5.textContent = elm.oldPrice;
} else {
    div5.textContent = '₹' + elm.oldPrice;
}


// console.log(typeof(Number(elm.currentPrice)))
var div6 = document.createElement('div');
div6.setAttribute('class', 'productbox div6');

var div7 = document.createElement('div');
div7.setAttribute('class', 'productbox');

// var div8 = document.createElement('div');
// div8.setAttribute('class', 'productbox');

document.querySelector('.box2').append(section2);


    section2.append(div1, div2, div4, div5, div6, div7);
    var imgProduct = document.createElement('img');
    imgProduct.setAttribute('id', 'imgProduct');
    imgProduct.setAttribute('src', elm.image);
    div1.append(imgProduct);

let div6Box1 = document.createElement('div');
div6Box1.setAttribute('class', 'div6Box1')
let div6Box2 = document.createElement('div');
div6Box2.setAttribute('class', 'div6Box2')
let div6Box3 = document.createElement('div');
div6Box3.setAttribute('class', 'div6Box3')

div6.append(div6Box1, div6Box2, div6Box3);

//add cart button
div6Box1.addEventListener('click', minusProduct);

var cartValue = 1;

div6Box2.textContent = cartValue;
function minusProduct() {
    cartValue--;
    div6Box2.textContent = cartValue;
    if(cartValue == 0) {
        console.log(arr.pop(ind));
    }

}

div6Box3.addEventListener('click', plusProduct);

function plusProduct() {
    cartValue++;
    console.log(cartValue);
    div6Box2.textContent = cartValue;
}
    
})

let save = sum - oldSum;
//total
document.querySelector('.totalPrice').textContent = '₹'+' '+sum;
document.querySelector('.savings').textContent = '₹'+' '+save;

//total end
if(sum > 200) {
    document.querySelector('.shipping').textContent = '₹'+' '+'120';
    document.querySelector('.totalPrice2').textContent = '₹'+' '+(120+sum);
} else if(sum > 700) {
    document.querySelector('.shipping').textContent = '₹'+' '+'43';
    document.querySelector('.totalPrice2').textContent = '₹'+' '+(43+sum);
} 

}