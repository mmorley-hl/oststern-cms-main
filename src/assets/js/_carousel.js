// import Flickity from 'flickity'
var Flickity = require('flickity-fullscreen');
var Flickity_fade = require('flickity-fade');

const carousel = document.querySelectorAll('.carousel')

carousel.forEach((elem) => {

	var flkty = new Flickity( '.carousel', {
		wrapAround: true,
		fullscreen: true,
	});

})

const carousel_fade = document.querySelectorAll('.carousel_fade')

carousel_fade.forEach((elem) => {

	var flkty = new Flickity_fade( '.carousel_fade', {
		fade: true,
		fullscreen: true,
	});

})