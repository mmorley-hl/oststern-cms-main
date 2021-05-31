// if you're using a bundler, first import:
import Headroom from "headroom.js";

// grab an element
var elems = document.querySelectorAll('.header')
// var myElement = document.querySelector("header");
// construct an instance of Headroom, passing the element
elems.forEach((elem) => {
    var headroom = new Headroom(elem, {
        "offset": 900,
        "tolerance": 8
      });
    // initialise
    headroom.init();
})

var elemsImpressum = document.querySelectorAll('.header_impressum')
// var myElement = document.querySelector("header");
// construct an instance of Headroom, passing the element
elemsImpressum.forEach((elem) => {
    var headroom = new Headroom(elem, {
        "tolerance": 8
      });
    // initialise
    headroom.init();
})


