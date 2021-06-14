const elems = document.querySelectorAll('.to_top_button_logo')

elems.forEach((elem) => {
	elem.onclick = function(e) {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		})
	}
})