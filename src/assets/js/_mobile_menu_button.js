const bodyScrollLock = require('body-scroll-lock');
const disableBodyScroll = bodyScrollLock.disableBodyScroll;
const enableBodyScroll = bodyScrollLock.enableBodyScroll;

const mobileMenuButton = document.querySelectorAll('.mobile_menu_button')
const mobileMenu = document.querySelectorAll('.mobile_menu')
console.log('mobile_button', mobileMenuButton)
mobileMenuButton.forEach(elem => {
    
    elem.onclick = () => {
        mobileMenu.forEach(elem => {
            console.log('style', elem.style.top)
            if (elem.style.top == '') {
                // disableBodyScroll(elem);
                elem.style.top = "0";
            } else if (elem.style.top == '0px') {
                // enableBodyScroll(elem);
                elem.style.top = "-100vh";
            } else {
                // disableBodyScroll(elem);
                elem.style.top = "0";
            }

        })
        console.log('mobile_button', elem)
    }
});