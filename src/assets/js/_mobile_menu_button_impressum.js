const bodyScrollLock = require('body-scroll-lock');
const disableBodyScroll = bodyScrollLock.disableBodyScroll;
const enableBodyScroll = bodyScrollLock.enableBodyScroll;

const mobileMenuButtonImpressum = document.querySelectorAll('.mobile_menu_button_impressum')
const mobileMenuImpressum = document.querySelectorAll('.mobile_menu_impressum')
const menuButtonClickImpressum = document.querySelectorAll('.menu-button_impressum')
const mobileMenuItemImpressum = document.querySelectorAll('.mobile_menu_impressum__item')

// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);

mobileMenuButtonImpressum.forEach(elem => {
    
    elem.onclick = () => {
        mobileMenuImpressum.forEach(elem => {
            if (elem.style.top == '') {
                disableBodyScroll(elem);
                elem.style.top = "0";
            } else if (elem.style.top == '0px') {
                enableBodyScroll(elem);
                elem.style.top = "-340vh";
            } else {
                disableBodyScroll(elem);
                elem.style.top = "0";
            }

        })
        console.log('mobile_button', elem)
    }
});

var menuButton_impressum = document.getElementById('menuButton_impressum');
if (menuButton_impressum) {
    menuButton_impressum.addEventListener('click',  (e) => {
        menuButton_impressum.classList.toggle('is-active');
        e.preventDefault();
    });
}

mobileMenuItemImpressum.forEach(elem => {
    
    elem.onclick = () => {
        setTimeout(function(){ 
            menuButtonClickImpressum.forEach(elem => {
                elem.click();
            });
        }, 500);
    }
});