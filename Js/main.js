// header handeling
let header = document.querySelector('header')
window.onscroll = function () {
    if (window.scrollY > 50) {
        header.style.backgroundColor = 'white'
        header.style.boxShadow = '0px 0px 10px 1px black'
    } else {
        header.style.backgroundColor = 'transparent'
        header.style.boxShadow = 'none'
    }
}

// Handeling Menu
let menuIco = document.querySelector('.menuIco')
let menuCh = document.querySelector('.menuCh')
menuIco.addEventListener('mouseover' , () => {
    menuCh.classList.toggle('active')
})
menuIco.addEventListener('mouseout' , () => {
    menuCh.classList.toggle('active')
})


let shap = document.querySelector('.shap')
let imageConter = document.querySelector('.imageConter')
shap.style.top = "150%"
imageConter.style.right = '-120%'
window.onload = () => {
    shap.style.top = '85%'
    shap.classList.add('center')
    imageConter.style.right = '-30%'
}

document.addEventListener("DOMContentLoaded", function () {
    const imageSlider = document.querySelector(".image-slider");

    // Clone the images to create a continuous loop
    const images = Array.from(imageSlider.querySelectorAll("img"));
    images.forEach((img) => {
        const clone = img.cloneNode(true);
        imageSlider.appendChild(clone);
    });

    // Set the width of the slider to accommodate all images
    imageSlider.style.width = `${images.length * 50}%`;
});

let date = document.querySelector('.date')
year = Date().split(' ')[3]
date.innerHTML = `${year}`
