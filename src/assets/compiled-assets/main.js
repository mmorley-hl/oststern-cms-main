/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
var SITE;SITE =
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/css/index.scss":
/*!***********************************!*\
  !*** ./src/assets/css/index.scss ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://SITE/./src/assets/css/index.scss?");

/***/ }),

/***/ "./src/assets/js/_color_switch.js":
/*!****************************************!*\
  !*** ./src/assets/js/_color_switch.js ***!
  \****************************************/
/***/ (function() {

eval("let colorswitch = document.querySelectorAll('.themeingbutton').forEach((elem) => {\n\telem.onclick = (e) => {\n\t\tlet themeWrapper = document.querySelector('.theme-wrapper')\n\t\tif (themeWrapper.classList.contains('theme-dark')) {\n\t\t\tthemeWrapper.classList.remove('theme-dark')\n\t\t\tthemeWrapper.classList.add('theme-light')\n\t\t} else {\n\t\t\tthemeWrapper.classList.remove('theme-light')\n\t\t\tthemeWrapper.classList.add('theme-dark')\n\t\t} \n\t}\n  })\n\n//# sourceURL=webpack://SITE/./src/assets/js/_color_switch.js?");

/***/ }),

/***/ "./src/assets/js/_cursor.js":
/*!**********************************!*\
  !*** ./src/assets/js/_cursor.js ***!
  \**********************************/
/***/ (function() {

eval("const cursor = document.querySelector('.cursor')\nif (cursor) {\n\n\tcursor.style.opacity = 1\n\n\twindow.onmousemove = (e) => {\n\t\trequestAnimationFrame(() => {\n\t\t\tcursor.style.opacity = 1\n\t\t\tlet x = `${(e.pageX - scrollX - 40)}px`,\n\t\t\t\ty = `${(e.pageY - scrollY - 40)}px`\n\t\t\tcursor.style.setProperty('--top', y)\n\t\t\tcursor.style.setProperty('--left', x)\n\t\t})\n\t}\n\n\t// window.onmouseenter = (e) => {\n\t// \tconsole.log(\"enter\", e)\n\t// \trequestAnimationFrame(() => {\n\t// \t\tcursor.style.opacity = 1\n\t// \t})\n\t// }\n\n\twindow.onmouseout = (e) => {\n\t\trequestAnimationFrame(() => {\n\t\t\tcursor.style.opacity = 0\n\t\t})\n\t}\n\n\t//todo window events or speciefic events\n\tdocument.addEventListener('click', () => {\n\t\tcursor.classList.add(\"expand\")\n\t\tsetTimeout(() => {\n\t\t\tcursor.classList.remove(\"expand\")\n\t\t}, 600)\n\t})\n}\n\n//# sourceURL=webpack://SITE/./src/assets/js/_cursor.js?");

/***/ }),

/***/ "./src/assets/js/_header.js":
/*!**********************************!*\
  !*** ./src/assets/js/_header.js ***!
  \**********************************/
/***/ (function() {

eval("// import Headroom from \"headroom.js\";\n// grab an element\n// var scroll_direction = document.querySelector(\".has-scroll-init\");\n// var htmlelm = document.querySelector(\"html\");\n// // console.log(\"scroll_direction\", scroll_direction.dataset.direction)\n// console.log(\"htmlelm\", htmlelm)\n\n\n// window.onscroll = () => {\n// \tconsole.log(\"scroll_direction\")\n// }\n\n\n\n\n// // construct an instance of Headroom, passing the element\n// var headroom = new Headroom(myElement);\n// // initialise\n// headroom.init();\n\n//# sourceURL=webpack://SITE/./src/assets/js/_header.js?");

/***/ }),

/***/ "./src/assets/js/_mapbox.js":
/*!**********************************!*\
  !*** ./src/assets/js/_mapbox.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("const mapboxgl = __webpack_require__(/*! mapbox-gl */ \"./node_modules/mapbox-gl/dist/mapbox-gl.js\");\n\nvar places = {\n\t'type': 'FeatureCollection',\n\t'features': [\n\t{\n\t'type': 'Feature',\n\t'properties': {\n\t\t'description':\n'<strong>Make it Mount Pleasant</strong><p><a href=\"http://www.mtpleasantdc.com/makeitmtpleasant\" target=\"_blank\" title=\"Opens in a new window\">Make it Mount Pleasant</a> is a handmade and vintage market and afternoon of live entertainment and kids activities. 12:00-6:00 p.m.</p>',\n\t\t'icon': 'icon_flexible'\n\t},\n\t'geometry': {\n\t'type': 'Point',\n\t'coordinates': [8.71157213340723, 50.11154494192954]\n\t}\n\t},\n\t{\n\t'type': 'Feature',\n\t'properties': {\n\t\t'description':\n'<strong>Make it Mount Pleasant</strong><p><a href=\"http://www.mtpleasantdc.com/makeitmtpleasant\" target=\"_blank\" title=\"Opens in a new window\">Make it Mount Pleasant</a> is a handmade and vintage market and afternoon of live entertainment and kids activities. 12:00-6:00 p.m.</p>',\n\t\t'icon': 'icon_flexible'\n\t},\n\t'geometry': {\n\t'type': 'Point',\n\t'coordinates': [8.71226251170242, 50.111369518633154]\n\t}\n\t},\n\t{\n\t'type': 'Feature',\n\t'properties': {\n\t\t'description':\n'<strong>Make it Mount Pleasant</strong><p><a href=\"http://www.mtpleasantdc.com/makeitmtpleasant\" target=\"_blank\" title=\"Opens in a new window\">Make it Mount Pleasant</a> is a handmade and vintage market and afternoon of live entertainment and kids activities. 12:00-6:00 p.m.</p>',\n\t\t'icon': 'icon_flexible'\n\t},\n\t'geometry': {\n\t'type': 'Point',\n\t'coordinates': [8.710191382654784, 50.11146975711955]\n\t}\n\t},\n\t{\n\t'type': 'Feature',\n\t'properties': {\n\t\t'description':\n'<strong>Make it Mount Pleasant</strong><p><a href=\"http://www.mtpleasantdc.com/makeitmtpleasant\" target=\"_blank\" title=\"Opens in a new window\">Make it Mount Pleasant</a> is a handmade and vintage market and afternoon of live entertainment and kids activities. 12:00-6:00 p.m.</p>',\n\t'icon': 'restaurant-noodle-15'\n\t},\n\t'geometry': {\n\t'type': 'Point',\n\t'coordinates': [8.710627753477638, 50.11085994721452]\n\t}\n\t},\n\t{\n\t'type': 'Feature',\n\t'properties': {\n\t\t'description':\n'<strong>Make it Mount Pleasant</strong><p><a href=\"http://www.mtpleasantdc.com/makeitmtpleasant\" target=\"_blank\" title=\"Opens in a new window\">Make it Mount Pleasant</a> is a handmade and vintage market and afternoon of live entertainment and kids activities. 12:00-6:00 p.m.</p>',\n\t'icon': 'icon_flexible'\n\t},\n\t'geometry': {\n\t'type': 'Point',\n\t'coordinates': [-77.031706, 38.914581]\n\t}\n\t},\n\t{\n\t'type': 'Feature',\n\t'properties': {\n\t\t'description':\n'<strong>Make it Mount Pleasant</strong><p><a href=\"http://www.mtpleasantdc.com/makeitmtpleasant\" target=\"_blank\" title=\"Opens in a new window\">Make it Mount Pleasant</a> is a handmade and vintage market and afternoon of live entertainment and kids activities. 12:00-6:00 p.m.</p>',\n\t\t'icon': 'icon_flexible'\n\t},\n\t'geometry': {\n\t'type': 'Point',\n\t'coordinates': [-77.020945, 38.878241]\n\t}\n\t},\n\t{\n\t'type': 'Feature',\n\t'properties': {\n\t\t'description':\n'<strong>Make it Mount Pleasant</strong><p><a href=\"http://www.mtpleasantdc.com/makeitmtpleasant\" target=\"_blank\" title=\"Opens in a new window\">Make it Mount Pleasant</a> is a handmade and vintage market and afternoon of live entertainment and kids activities. 12:00-6:00 p.m.</p>',\n\t\t'icon': 'icon_flexible'\n\t},\n\t'geometry': {\n\t'type': 'Point',\n\t'coordinates': [-77.007481, 38.876516]\n\t}\n\t}\n\t]\n\t};\n\t\nvar filterGroup = document.getElementById('filter-group');\nmapboxgl.accessToken = 'pk.eyJ1IjoibW1vcmxleWhsIiwiYSI6ImNrbHV5c25kZjBuZm0yd28zYncwdGlnOWcifQ.0ii1h91pTh7MM9NLoIXuEA';\nvar map = new mapboxgl.Map({\n\tcontainer: 'map', // container ID\n\tstyle: 'mapbox://styles/mmorleyhl/cklwedd4f59wp17l9wfr2jwx5', // style ID\n\tcenter: [8.71157213340723, 50.11154494192954], // starting position [lng, lat]\n\tzoom: 16,\n\t // starting zoom\n});\n\n//disable zoom on map\nmap.scrollZoom.disable();\n\n//added basich control on map\nmap.addControl(new mapboxgl.NavigationControl());\n\nvar geojson = {\n\ttype: 'FeatureCollection',\n\tfeatures: [\n\t\t{\n\t\t\ttype: 'Feature',\n\t\t\tgeometry: {\n\t\t\t\ttype: 'Point',\n\t\t\t\tcoordinates: [8.71157213340723, 50.11154494192954]\n\t\t\t},\n\t\t\tproperties: {\n\t\t\t\ttitle: 'OstStern',\n\t\t\t\tdescription: 'Business for you'\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\ttype: 'Feature',\n\t\t\tgeometry: {\n\t\t\t\ttype: 'Point',\n\t\t\t\tcoordinates: [8.71226251170242, 50.111369518633154]\n\t\t\t},\n\t\t\tproperties: {\n\t\t\t\ttitle: 'Küche',\n\t\t\t\tdescription: 'Lecker essen'\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\ttype: 'Feature',\n\t\t\tproperties: {\n\t\t\t\ticon: 'theatre',\n\t\t\t\ttitle: 'Sarveni',\n\t\t\t\tdescription: 'Lecker essen 2 italienisch'\n\t\t\t},\n\t\t\tgeometry: {\n\t\t\t\ttype: 'Point',\n\t\t\t\tcoordinates: [8.710191382654784, 50.11146975711955]\n\t\t\t}\n\t\t},\n\t\t\n\t]\n  };\n\nmap.on('load', function () {\n\t// Add a GeoJSON source containing place coordinates and information.\n\tmap.addSource('places', {\n\t\t'type': 'geojson',\n\t\t'data': places\n\t});\n\t \n\tplaces.features.forEach(function (feature) {\n\t\tvar symbol = feature.properties['icon'];\n\t\tconsole.log('symbol', symbol)\n\t\tvar layerID = 'poi-' + symbol;\n\t\tconsole.log('layerID', layerID)\n\t\n\t// Add a layer for this symbol type if it hasn't been added already.\n\t\tif (!map.getLayer(layerID)) {\n\t\t\tmap.addLayer({\n\t\t\t\t'id': layerID,\n\t\t\t\t'type': 'symbol',\n\t\t\t\t'source': 'places',\n\t\t\t\t'layout': {\n\t\t\t\t'icon-image': symbol,\n\t\t\t\t'icon-allow-overlap': true\n\t\t\t\t},\n\t\t\t\t'filter': ['==', 'icon', symbol]\n\t\t\t});\n\t\t\t\n\t\t\t// Add checkbox and label elements for the layer.\n\t\t\tvar input = document.createElement('input');\n\t\t\tinput.type = 'checkbox';\n\t\t\tinput.id = layerID;\n\t\t\tinput.checked = true;\n\t\t\tfilterGroup.appendChild(input);\n\t\t\n\t\t\tvar label = document.createElement('label');\n\t\t\tlabel.setAttribute('for', layerID);\n\t\t\tlabel.textContent = symbol;\n\t\t\tfilterGroup.appendChild(label);\n\t\t\n\t\t// When the checkbox changes, update the visibility of the layer.\n\t\t\tinput.addEventListener('change', function (e) {\n\t\t\t\tmap.setLayoutProperty(\n\t\t\t\t\tlayerID,\n\t\t\t\t\t'visibility',\n\t\t\t\t\te.target.checked ? 'visible' : 'none'\n\t\t\t\t);\n\t\t\t});\n\n\t\t\tmap.on('click', layerID, function (e) {\n\t\t\t\tvar coordinates = e.features[0].geometry.coordinates.slice();\n\t\t\t\tvar description = e.features[0].properties.description;\n\t\t\t\t \n\t\t\t\t// Ensure that if the map is zoomed out such that multiple\n\t\t\t\t// copies of the feature are visible, the popup appears\n\t\t\t\t// over the copy being pointed to.\n\t\t\t\twhile (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {\n\t\t\t\tcoordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;\n\t\t\t\t}\n\t\t\t\t \n\t\t\t\tnew mapboxgl.Popup()\n\t\t\t\t.setLngLat(coordinates)\n\t\t\t\t.setHTML(description)\n\t\t\t\t.addTo(map);\n\t\t\t});\n\t\t\t\t \n\t\t\t\t// Change the cursor to a pointer when the mouse is over the places layer.\n\t\t\tmap.on('mouseenter', layerID, function () {\n\t\t\t\tmap.getCanvas().style.cursor = 'pointer';\n\t\t\t});\n\t\t\t\t \n\t\t\t\t// Change it back to a pointer when it leaves.\n\t\t\tmap.on('mouseleave', layerID, function () {\n\t\t\t\tmap.getCanvas().style.cursor = '';\n\t\t\t});\n\t\t}\n\t});\n\n\n});\n\nmap.on('click', 'places', function (e) {\n\tvar coordinates = e.features[0].geometry.coordinates.slice();\n\tvar description = e.features[0].properties.description;\n\t \n\t// Ensure that if the map is zoomed out such that multiple\n\t// copies of the feature are visible, the popup appears\n\t// over the copy being pointed to.\n\twhile (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {\n\tcoordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;\n\t}\n\t \n\tnew mapboxgl.Popup()\n\t.setLngLat(coordinates)\n\t.setHTML(description)\n\t.addTo(map);\n\t});\n\t \n\t// Change the cursor to a pointer when the mouse is over the places layer.\n\tmap.on('mouseenter', 'places', function () {\n\tmap.getCanvas().style.cursor = 'pointer';\n\t});\n\t \n\t// Change it back to a pointer when it leaves.\n\tmap.on('mouseleave', 'places', function () {\n\tmap.getCanvas().style.cursor = '';\n\t});\n\n\n//# sourceURL=webpack://SITE/./src/assets/js/_mapbox.js?");

/***/ }),

/***/ "./src/assets/js/_scrollAnker.js":
/*!***************************************!*\
  !*** ./src/assets/js/_scrollAnker.js ***!
  \***************************************/
/***/ (function() {

eval("document.querySelectorAll('a[href^=\"#\"]').forEach(anchor => {\n    anchor.addEventListener('click', function (e) {\n        e.preventDefault();\n\n        document.querySelector(this.getAttribute('href')).scrollIntoView({\n            behavior: 'smooth'\n        });\n    });\n});\n\n//# sourceURL=webpack://SITE/./src/assets/js/_scrollAnker.js?");

/***/ }),

/***/ "./src/assets/js/_test.js":
/*!********************************!*\
  !*** ./src/assets/js/_test.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap */ \"./node_modules/gsap/index.js\");\n/* harmony import */ var gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap/ScrollTrigger */ \"./node_modules/gsap/ScrollTrigger.js\");\n/* harmony import */ var locomotive_scroll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! locomotive-scroll */ \"./node_modules/locomotive-scroll/dist/locomotive-scroll.esm.js\");\n\n\n\n\ngsap__WEBPACK_IMPORTED_MODULE_1__.gsap.registerPlugin(gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_2__.ScrollTrigger)\nconsole.log('locomotive imnages started')\ndocument.documentElement.classList.add('is-loaded');\ndocument.documentElement.classList.remove('is-loading');\n// const scroll = new LocomotiveScroll({\n// \tel: document.querySelector('[data-scroll-container]'),\n// \tsmooth: true\n// });\n// const locoScroll = new LocomotiveScroll({\n// \tel: document.querySelector('.locomotive-images'),\n// \tsmooth: true\n// })\n\nconst init = (elem) => {\n\tconsole.clear()\n\tconsole.log('locomotive images init started')\n\n\tconst locoScroll = new locomotive_scroll__WEBPACK_IMPORTED_MODULE_0__.default({\n\t\tel: elem,\n\t\tsmooth: true,\n\t\tsmoothMobile: true,\n\t\tgetSpeed: true,\n\t\tgetDirection: true,\n\n\t})\n\n\tlet dynamicBackgrounds = [];\n\tlet dynamicColorElements = [];\n\n\t// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)\n\tlocoScroll.on(\"scroll\", (instance) => {\n\t\tdocument.documentElement.setAttribute('data-direction', instance.direction)\n\t\tdocument.documentElement.setAttribute('data-speed', instance.speed)\n\t\tgsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_2__.ScrollTrigger.update\n\n\t\t// if (instance.direction == \"up\") {\n\t\t// \tconsole.log(\"data-direction\", instance.direction)\n\t\t// }\n\n\t\t// if (instance.direction == \"down\") {\n\t\t// \tconsole.log(\"data-direction\", instance.direction)\n\t\t// }\n\n\t});\n\n\tlocoScroll.on('call', (value, way, obj) => {\n\t\tif (value === 'dynamicBackground') {\n\t\t\tif (way === 'enter') {\n\t\t\t\tdynamicBackgrounds.push({\n\t\t\t\t\tid: obj.id,\n\t\t\t\t\tel: obj.el\n\t\t\t\t});\n\t\t\t} else {\n\t\t\t\tfor (var i = 0; i < dynamicBackgrounds.length; i++) {\n\t\t\t\t\tif (obj.id === dynamicBackgrounds[i].id) {\n\t\t\t\t\t\tdynamicBackgrounds.splice(i, 1);\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t} else if (value === 'dynamicColor') {\n\t\t\tif (way === 'enter') {\n\t\t\t\tdynamicColorElements.push({\n\t\t\t\t\tid: obj.id,\n\t\t\t\t\tel: obj.el\n\t\t\t\t});\n\t\t\t} else {\n\t\t\t\tfor (var i = 0; i < dynamicColorElements.length; i++) {\n\t\t\t\t\tif (obj.id === dynamicColorElements[i].id) {\n\t\t\t\t\t\tdynamicColorElements.splice(i, 1);\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t});\n\n\t// tell ScrollTrigger to use these proxy methods for the \".smooth-scroll\" element since Locomotive Scroll is hijacking things\n\tgsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_2__.ScrollTrigger.scrollerProxy(elem, {\n\t\tscrollTop(value) {\n\t\t\treturn arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;\n\t\t}, // we don't have to define a scrollLeft because we're only scrolling vertically.\n\t\tgetBoundingClientRect() {\n\t\t\treturn { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };\n\t\t},\n\t\t// LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).\n\t\t// pinType: document.querySelector(\".scrollContainer\").style.transform ? \"transform\" : \"fixed\"\n\t\t// pinType: elem.style.transform ? \"transform\" : \"fixed\"\n\t});\n\n\t//////////////////////////////////////////////////////////\n\t//////////////////////////////////////////////////////////\n\tgsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_2__.ScrollTrigger.create({\n\t\ttrigger: '.image-mask',\n\t\tscroller: elem,\n\t\tstart: 'top+=30% 50%',\n\t\tend: 'bottom-=40% 50%',\n\t\tanimation: gsap__WEBPACK_IMPORTED_MODULE_1__.gsap.to('.image-mask', { backgroundSize: '120%' }),\n\t\tscrub: 2,\n\t\t// markers: true\n\t})\n\n\n\tvar siteHeader = document.querySelector('.headroom');\n\tconsole.log('locomotive images init started', siteHeader)\n\tvar header_progress = 0;\n\tvar header_direction = 1;\n\n\tgsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_2__.ScrollTrigger.create({\n\t\ttrigger: \".main_content\",\n\t\tscroller: elem,\n\t\tstart: \"top top\",\n\t\tonUpdate: self => {\n\t\t\tconsole.log(\"progress:\", self.progress.toFixed(3), \"direction:\", self.direction, \"velocity\", self.getVelocity());\n\t\t\theader_progress = self.progress.toFixed(2);\n\t\t\theader_direction = self.direction;\n\n\t\t\tif (header_direction === 1) {\n\t\t\t\tsiteHeader.classList.remove(\"headroom--pinned\");\n\t\t\t\tsiteHeader.classList.add(\"headroom--unpinned\");\n\t\t\t} else {\n\t\t\t\tsiteHeader.classList.remove(\"headroom--unpinned\");\n\t\t\t\tsiteHeader.classList.add(\"headroom--pinned\");\n\t\t\t}\n\t\t\t// siteHeader.className = newClassName;\n\t\t}\n\t});\n\t//////////////////////////////////////////////////////////\n\t//////////////////////////////////////////////////////////\n\n\t// const tl = gsap.from(\".project--heading--span\", {\n\t// \ty: \"-100%\",\n\t// \tstagger: {\n\t// \t\tamount: 0.5,\n\t// \t\tfrom: \"center\"\n\t// \t}\n\t// });\n\n\t// const image_animation = gsap.to(\".project--image-img\", {\n\t// \tscale: 1.3\n\t// });\n\n\t// ScrollTrigger.create({\n\t// \ttrigger: \".project-content\",\n\t// \tscroller: elem,\n\t// \t// scrub: true,\n\t// \tpin: true,\n\t// \tend: \"+=100%\",\n\t// \tanimation: tl\n\t// });\n\n\t// ScrollTrigger.create({\n\t// \ttrigger: \".project--image\",\n\t// \tscroller: elem,\n\t// \t// scrub: true,\n\t// \tstart: \"top\",\n\t// \tend: \"+=100%\",\n\t// \tanimation: image_animation\n\t// });\n\n\t// const test = gsap.to(\".project\", {\n\t// \ty: 100,\n\t// \tstagger: {\n\t// \t\tamount: 0.3\n\t// \t}\n\t// });\n\n\t// ScrollTrigger.create({\n\t// \ttrigger: \".project\",\n\t// \tscroller: elem,\n\t// \t// scrub: 0.16,\n\t// \tanimation: tl\n\t// });\n\n\n\t//////////////////////////////////////////////////////////\n\t//////////////////////////////////////////////////////////\n\n\n\t// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.\n\tgsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_2__.ScrollTrigger.addEventListener(\"refresh\", () => locoScroll.update());\n\n\t// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.\n\tgsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_2__.ScrollTrigger.refresh();\n}\n\ndocument.querySelectorAll('.js-locomotive-images').forEach(init)\n\n\n//# sourceURL=webpack://SITE/./src/assets/js/_test.js?");

/***/ }),

/***/ "./src/assets/js/_wow.js":
/*!*******************************!*\
  !*** ./src/assets/js/_wow.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("const WOW = __webpack_require__(/*! wow.js */ \"./node_modules/wow.js/dist/wow.js\");\n\nconst wow = new WOW(\n\t{\n\t  animateClass: 'animated',\n\t  offset:       100,\n\t  mobile:       true,\n\t  callback:     function(box) {\n\t\tconsole.log(\"WOW: animating <\" + box.tagName.toLowerCase() + \">\")\n\t  }\n\t}\n  );\n  wow.init();\n\n//# sourceURL=webpack://SITE/./src/assets/js/_wow.js?");

/***/ }),

/***/ "./src/assets/js/index.js":
/*!********************************!*\
  !*** ./src/assets/js/index.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/index.scss */ \"./src/assets/css/index.scss\");\n/* harmony import */ var _cursor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_cursor.js */ \"./src/assets/js/_cursor.js\");\n/* harmony import */ var _cursor_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_cursor_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _test_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_test.js */ \"./src/assets/js/_test.js\");\n/* harmony import */ var _header_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_header.js */ \"./src/assets/js/_header.js\");\n/* harmony import */ var _header_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_header_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _mapbox_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_mapbox.js */ \"./src/assets/js/_mapbox.js\");\n/* harmony import */ var _mapbox_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mapbox_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _color_switch_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_color_switch.js */ \"./src/assets/js/_color_switch.js\");\n/* harmony import */ var _color_switch_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_color_switch_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _wow_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_wow.js */ \"./src/assets/js/_wow.js\");\n/* harmony import */ var _wow_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wow_js__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _scrollAnker_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./_scrollAnker.js */ \"./src/assets/js/_scrollAnker.js\");\n/* harmony import */ var _scrollAnker_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_scrollAnker_js__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://SITE/./src/assets/js/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// the startup function
/******/ 	// It's empty as some runtime module handles the default behavior
/******/ 	__webpack_require__.x = function() {}
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// Promise = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		var deferredModules = [
/******/ 			["./src/assets/js/index.js","vendor"]
/******/ 		];
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		var checkDeferredModules = function() {};
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			var executeModules = data[3];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0, resolves = [];
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					resolves.push(installedChunks[chunkId][0]);
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			while(resolves.length) {
/******/ 				resolves.shift()();
/******/ 			}
/******/ 		
/******/ 			// add entry modules from loaded chunk to deferred list
/******/ 			if(executeModules) deferredModules.push.apply(deferredModules, executeModules);
/******/ 		
/******/ 			// run deferred modules when all chunks ready
/******/ 			return checkDeferredModules();
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkSITE"] = self["webpackChunkSITE"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 		
/******/ 		function checkDeferredModulesImpl() {
/******/ 			var result;
/******/ 			for(var i = 0; i < deferredModules.length; i++) {
/******/ 				var deferredModule = deferredModules[i];
/******/ 				var fulfilled = true;
/******/ 				for(var j = 1; j < deferredModule.length; j++) {
/******/ 					var depId = deferredModule[j];
/******/ 					if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferredModules.splice(i--, 1);
/******/ 					result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 				}
/******/ 			}
/******/ 			if(deferredModules.length === 0) {
/******/ 				__webpack_require__.x();
/******/ 				__webpack_require__.x = function() {};
/******/ 			}
/******/ 			return result;
/******/ 		}
/******/ 		var startup = __webpack_require__.x;
/******/ 		__webpack_require__.x = function() {
/******/ 			// reset startup function so it can be called again when more startup code is added
/******/ 			__webpack_require__.x = startup || (function() {});
/******/ 			return (checkDeferredModules = checkDeferredModulesImpl)();
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// run startup
/******/ 	return __webpack_require__.x();
/******/ })()
;