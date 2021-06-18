const mobileMenuButton = document.querySelectorAll('.mobile_menu_button')
const mobileMenu = document.querySelectorAll('.mobile_menu')
const menuButtonClick = document.querySelectorAll('.menu-button')
const mobileMenuItem = document.querySelectorAll('.mobile_menu__item')
// console.log('mobile_button', mobileMenuButton)

// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);

mobileMenuButton.forEach(elem => {  
    elem.onclick = () => {
        mobileMenu.forEach(elem => {
            if (elem.style.top == '') {
                elem.style.top = "0";
            } else if (elem.style.top == '0px') {
                elem.style.top = "-340vh";
            } else {
                elem.style.top = "0";
            }

        })
    }
});

var menuButton = document.getElementById('menuButton');
if (menuButton) {
    menuButton.addEventListener('click',  (e) => {
        menuButton.classList.toggle('is-active');
        e.preventDefault();
    });
}

mobileMenuItem.forEach(elem => {
    
    elem.onclick = () => {
        setTimeout(function(){ 
            menuButtonClick.forEach(elem => {
                elem.click();
            });
        }, 500);
    }
});