import Headroom from "headroom.js";

// grab an element
var elems = document.querySelectorAll('.header')
// construct an instance of Headroom, passing the element
elems.forEach((elem) => {
    var headroom = new Headroom(elem, {
        "offset": 750,
        "tolerance": 8
      });
    // initialise
    headroom.init();
})

var elemsImpressum = document.querySelectorAll('.header_impressum')
// construct an instance of Headroom, passing the element
elemsImpressum.forEach((elem) => {
    var headroom = new Headroom(elem, {
        "tolerance": 8
      });
    // initialise
    headroom.init();
})


