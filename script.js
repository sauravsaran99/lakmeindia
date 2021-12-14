
//For all

document.querySelector('.dot1').addEventListener('click', addImage1);

function addImage1() {
    forAll();
    forMobile();
    forMedium();
}

function forAll() {
    document.querySelector('#header-img').src = '/image/header2.jpg';
}

document.querySelector('.dot2').addEventListener('click', addImage2);

function addImage2() {
document.querySelector('#header-img').src = '/image/header1.jpg'
}

document.querySelector('.dot3').addEventListener('click', addImage3);

function addImage3() {
document.querySelector('#header-img').src = '/image/header3.jpg'
}

document.querySelector('.dot4').addEventListener('click', addImage4);

function addImage4() {
document.querySelector('#header-img').src = '/image/header4.jpg'
}

document.querySelector('.dot5').addEventListener('click', addImage5);

function addImage5() {
document.querySelector('#header-img').src = '/image/header5.jpg'
}
//End of for all

//for mobile

function forMobile() {
    document.querySelector('.dot1').addEventListener('click', addImage1);

function addImage1() {
    document.querySelector('#header-img3').src = '/image/mobile.jpg';
}

document.querySelector('.dot2').addEventListener('click', addImage2);

function addImage2() {
    document.querySelector('#header-img3').src = '/image/mobile1.jpg'
}

document.querySelector('.dot3').addEventListener('click', addImage3);

function addImage3() {
    document.querySelector('#header-img3').src = '/image/mobile2.jpg'
}

document.querySelector('.dot4').addEventListener('click', addImage4);

function addImage4() {
    document.querySelector('#header-img3').src = '/image/mobile3.jpg'
}

document.querySelector('.dot5').addEventListener('click', addImage5);

function addImage5() {
    document.querySelector('#header-img3').src = '/image/mobile4.jpg'
}
}


//mobile end

//medium start

function forMedium() {
    document.querySelector('.dot1').addEventListener('click', addImage1);

function addImage1() {
    document.querySelector('#header-img2').src = '/image/medium.jpg';
}

document.querySelector('.dot2').addEventListener('click', addImage2);

function addImage2() {
    document.querySelector('#header-img2').src = '/image/medium1.jpg'
}

document.querySelector('.dot3').addEventListener('click', addImage3);

function addImage3() {
    document.querySelector('#header-img2').src = '/image/medium2.jpg'
}

document.querySelector('.dot4').addEventListener('click', addImage4);

function addImage4() {
    document.querySelector('#header-img2').src = '/image/medium3.jpg'
}

document.querySelector('.dot5').addEventListener('click', addImage5);

function addImage5() {
    document.querySelector('#header-img2').src = '/image/medium4.jpg'
}
}
//medium end