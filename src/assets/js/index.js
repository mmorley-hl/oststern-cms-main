import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// import css for webpack
import '../css/index.scss';
// javscript imports
import './_cursor.js';
// import './_test.js';
import './_header.js';
import './_mapbox.js';
import './_color_switch.js';
import './_wow.js';
import './_scrollAnker.js';
import './_carousel.js';
import './_toTopButton.js';
import './_headroom.js';
import './_mobile_menu_button.js';
import './_mobile_menu_button_impressum.js';
import './_random_color.js';
import './_tabs_maps.js';
import './_tabs_listen.js';
import smoothscroll from 'smoothscroll-polyfill'

import simpleParallax from 'simple-parallax-js';

smoothscroll.polyfill()

var image = document.getElementsByClassName('thumbnail');
new simpleParallax(image);
// new simpleParallax(image, {
// 	scale: 1.5
// });

// gsap.registerPlugin(ScrollTrigger);

// gsap.to(".panel:not(:last-child)", {
//   yPercent: -100, 
//   ease: "none",
//   stagger: 0.5,
//   scrollTrigger: {
//     trigger: "#container",
//     start: "top top",
//     end: "+=300%",
//     scrub: true,
//     pin: true
//   }
// });


// gsap.set(".panel", {zIndex: (i, target, targets) => targets.length - i});

// let red_panel = document.querySelector('.red')

// let red_inner = document.querySelector('.panel_inner')
// // let rectCollection = red_inner.getClientRects();
// const rect = red_inner.getBoundingClientRect();
// console.log(`height: ${rect.height}`);

// red_panel.style.height = (rect.height + 200) + 'px';

