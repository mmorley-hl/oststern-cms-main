var SITE;SITE =
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 686:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var Flickity = __webpack_require__(275);
var Flickity_fade = __webpack_require__(31);

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

/***/ }),

/***/ 129:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

const mapboxgl = __webpack_require__(158);

var places = {
	"type":"FeatureCollection",
	"features":[
	   	{
		  "type":"Feature",
		  "properties":{
			 "description":"<strong>Frankfurter Küche</strong><p>Hanauer Landstraße 86,</br> 60314 Frankfurt am Main</p><p><a rel=\"noopener\" href=\"http://www.restaurant-frankfurter-kueche.de/\" target=\"_blank\" title=\"Opens in a new window\">Hier gehts zur webseite</a></p>",
			 "icon":"Restaurants"
		  },
		  "geometry":{
			 "type":"Point",
			 "coordinates":[
				8.704224783467328,
				50.111681170124484
			 ]
		  }
	   	},
	   	{
		"type":"Feature",
		"properties":{
		   "description":"<strong>'Das Leben ist Schön</strong><p>Hanauer Landstraße 198,</br> 60314 Frankfurt am Main</p><p><a rel=\"noopener\" href=\"http://www.daslebenistschoen.de/\" target=\"_blank\" title=\"Opens in a new window\">Hier gehts zur webseite</a></p>",
		   "icon":"Restaurants"
		},
		"geometry":{
		   "type":"Point",
		   "coordinates":[
			 8.723497812302732,
			 50.11535621512961
		   ]
		}
		},
		{
			"type":"Feature",
			"properties":{
			   "description":"<strong>'Soul Food Factory East</strong><p>Hanauer Landstraße 124,</br> 60314 Frankfurt am Main</p><p><a rel=\"noopener\" href=\"http://www.soul-food-factory.com/\" target=\"_blank\" title=\"Opens in a new window\">Hier gehts zur webseite</a></p>",
			   "icon":"Restaurants"
			},
			"geometry":{
			   "type":"Point",
			   "coordinates":[
				8.711172127644243,
				50.11132723047215
			   ]
			}
		},
		{
			"type":"Feature",
			"properties":{
			   "description":"<strong>Saravini</strong><p>Hanauer Landstraße 119,</br> 60314 Frankfurt am Main</p><p><a rel=\"noopener\" href=\"http://www.saravini-frankfurt.de/mittagskarte/\" target=\"_blank\" title=\"Opens in a new window\">Hier gehts zur webseite</a></p>",
			   "icon":"Restaurants"
			},
			"geometry":{
			   "type":"Point",
			   "coordinates":[
				 8.710194527644237,
				 50.11172910920639
			   ]
			}
		},
		{
			"type":"Feature",
			"properties":{
			   "description":"<strong>'The Tasty Toast</strong><p>Osthafenplatz 4, 60314 Frankfurt am Main</p>",
			   "icon":"Restaurants"
			},
			"geometry":{
			   "type":"Point",
			   "coordinates":[
				8.71285928352579,
				50.11090767357005
			   ]
			}
		},
		{
			"type":"Feature",
			"properties":{
			   "description":"<strong>Stones</strong><p>Hanauer Landstraße 125,</br> 60314 Frankfurt am Main</p><p><a rel=\"noopener\" href=\"https://www.stonesfood.com/\" target=\"_blank\" title=\"Opens in a new window\">Hier gehts zur webseite</a></p>",
			   "icon":"Restaurants"
			},
			"geometry":{
			   "type":"Point",
			   "coordinates":[
				8.712307297113504,
				50.11246691431603
			   ]
			}
		},
		{
			"type":"Feature",
			"properties":{
			   "description":"<strong>Tawaraya</strong><p>Hanauer Landstraße 131, 60314 Frankfurt am Main</p>",
			   "icon":"Restaurants"
			},
			"geometry":{
			   "type":"Point",
			   "coordinates":[
				8.71320475654297,
				50.11222598741672
			   ]
			}
		},
		{
			"type":"Feature",
			"properties":{
			   "description":"<strong>Cocothai</strong><p>Hanauer Landstraße 151,</br> 60314 Frankfurt am Main</p><p><a rel=\"noopener\" href=\"https://www.cocothaifrankfurtammain.de/\" target=\"_blank\" title=\"Opens in a new window\">Hier gehts zur webseite</a></p>",
			   "icon":"Restaurants"
			},
			"geometry":{
			   "type":"Point",
			   "coordinates":[
				8.71526672770677,
				50.112919324067384
			   ]
			}
		},
		{
			"type":"Feature",
			"properties":{
			   "description":"<strong>Urfa</strong><p>Hanauer Landstraße 133,</br> 60314 Frankfurt am Main</p><p><a rel=\"noopener\" href=\"https://www.urfa-grill-pizzeria.de/\" target=\"_blank\" title=\"Opens in a new window\">Hier gehts zur webseite</a></p>",
			   "icon":"Restaurants"
			},
			"geometry":{
			   "type":"Point",
			   "coordinates":[
				8.713368798870526,
				50.11229886602847
			   ]
			}
		},
		{
			"type":"Feature",
			"properties":{
			   "description":"<strong>Aroydee</strong><p>Hanauer Landstraße 72,</br> 60314 Frankfurt am Main</p><p><a rel=\"noopener\" href=\"https://www.aroydee.de/Frankfurt\" target=\"_blank\" title=\"Opens in a new window\">Hier gehts zur webseite</a></p>",
			   "icon":"Restaurants"
			},
			"geometry":{
			   "type":"Point",
			   "coordinates":[
				8.703535627706737,
				50.11280334433856
			   ]
			}
		},
		{
			"type":"Feature",
			"properties":{
			   "description":"<strong>Goldman</strong><p>Hanauer Landstraße 127,</br> 60314 Frankfurt am Main</p><p><a rel=\"noopener\" href=\"http://www.goldman-restaurant.com/\" target=\"_blank\" title=\"Opens in a new window\">Hier gehts zur webseite</a></p>",
			   "icon":"Restaurants"
			},
			"geometry":{
			   "type":"Point",
			   "coordinates":[
				8.712951143051455,
				50.11208490623492
			   ]
			}
		},
		{
			"type":"Feature",
			"properties":{
			   "description":"<strong>Oosten</strong><p>Mayfarthstraße 4,</br> 60314 Frankfurt am Main</p><p><a rel=\"noopener\" href=\"https://oosten-frankfurt.com/\" target=\"_blank\" title=\"Opens in a new window\">Hier gehts zur webseite</a></p>",
			   "icon":"Restaurants"
			},
			"geometry":{
			   "type":"Point",
			   "coordinates":[
				8.702709870034257,
				50.10785792533555
			   ]
			}
		},
		{
			"type":"Feature",
			"properties":{
			   "description":"<strong>Gref-Völsings</strong><p>Hanauer Landstraße 132,</br> 60314 Frankfurt am Main</p><p><a rel=\"noopener\" href=\"https://www.gref-voelsings.de/\" target=\"_blank\" title=\"Opens in a new window\">Hier gehts zur webseite</a></p>",
			   "icon":"Restaurants"
			},
			"geometry":{
			   "type":"Point",
			   "coordinates":[
				8.7124484565429,
				50.1116097900726
			   ]
			}
		},
		{
			"type":"Feature",
			"properties":{
			   "description":"<strong>Best-Worscht In Town</strong><p>Hanauer Landstraße 270,</br> 60314 Frankfurt am Main</p><p><a rel=\"noopener\" href=\"https://www.bestworschtintown.de/\" target=\"_blank\" title=\"Opens in a new window\">Hier gehts zur webseite</a></p>",
			   "icon":"Restaurants"
			},
			"geometry":{
			   "type":"Point",
			   "coordinates":[
				8.72698031236205,
				50.1165047893076 
			   ]
			}
		},
		{
			"type":"Feature",
			"properties":{
			   "description":"<strong>Bei Frau Nanna</strong><p>Ernst-Achilles-Platz 3,</br> 60314 Frankfurt am Main</p><p><a rel=\"noopener\" href=\"https://order.beifraunanna.de/\" target=\"_blank\" title=\"Opens in a new window\">Hier gehts zur webseite</a></p>",
			   "icon":"Restaurants"
			},
			"geometry":{
			   "type":"Point",
			   "coordinates":[
				8.70476983642246,
				50.1128814042537
			   ]
			}
		},
		{
			"type":"Feature",
			"properties":{
			   "description":"<strong>LEUCHTENDROTER</strong><p>Lindleystraße 17,</br> 60314 Frankfurt am Main</p><p><a rel=\"noopener\" href=\"http://leuchtendroter.com/\" target=\"_blank\" title=\"Opens in a new window\">Hier gehts zur webseite</a></p>",
			   "icon":"Restaurants"
			},
			"geometry":{
			   "type":"Point",
			   "coordinates":[
				8.718510583561219,
				50.11257783263066
			   ]
			}
		},
		{
			"type":"Feature",
			"properties":{
			   "description":"<strong>Kahuna Poké Bros.</strong><p>Hanauer Landstraße 160A,</br> 60314 Frankfurt am Main</p><p><a rel=\"noopener\" href=\"https://kahunapokebros.com/\" target=\"_blank\" title=\"Opens in a new window\">Hier gehts zur webseite</a></p>",
			   "icon":"Restaurants"
			},
			"geometry":{
			   "type":"Point",
			   "coordinates":[
				8.717488819399943,
				50.11311594184854
			   ]
			}
		},
		{
			"type":"Feature",
			"properties":{
			   "description":"<strong>Ben's Burger</strong><p>Hanauer Landstraße 134,</br> 60314 Frankfurt am Main</p><p><a rel=\"noopener\" href=\"https://bens-burger.business.site/\" target=\"_blank\" title=\"Opens in a new window\">Hier gehts zur webseite</a></p>",
			   "icon":"Restaurants"
			},
			"geometry":{
			   "type":"Point",
			   "coordinates":[
				8.712697437075015,
				50.11151811854781
			   ]
			}
		},
		{
			"type":"Feature",
			"properties":{
			   "description":"<strong>Jesse James</strong><p>Hanauer Landstraße 83,</br> 60314 Frankfurt am Main</p><p><a rel=\"noopener\" href=\"http://www.jessejames.eu/\" target=\"_blank\" title=\"Opens in a new window\">Hier gehts zur webseite</a></p>",
			   "icon":"Restaurants"
			},
			"geometry":{
			   "type":"Point",
			   "coordinates":[
				8.705296327706698,
				50.11207194717568
			   ]
			}
		},
		{
			"type":"Feature",
			"properties":{
			   "description":"<strong>COMAI East - modern viet kitchen</strong><p>Hanauer Landstraße 130,</br> 60314 Frankfurt am Main</p><p><a rel=\"noopener\" href=\"https://www.comai.de/\" target=\"_blank\" title=\"Opens in a new window\">Hier gehts zur webseite</a></p>",
			   "icon":"Restaurants"
			},
			"geometry":{
			   "type":"Point",
			   "coordinates":[
				8.7123598408274,
				50.11133081012636
			   ]
			}
		},
		{
			"type":"Feature",
			"properties":{
			   "description":"<strong>Pizzeria Mille Lire</strong><p>Sonnemannstraße 71,</br> 60314 Frankfurt am Main</p><p><a rel=\"noopener\" href=\"http://www.pizzeria-mille-lire.de/\" target=\"_blank\" title=\"Opens in a new window\">Hier gehts zur webseite</a></p>",
			   "icon":"Restaurants"
			},
			"geometry":{
			   "type":"Point",
			   "coordinates":[
				8.70313924526421,
				50.111192054739604
			   ]
			}
		},
		{
			"type":"Feature",
			"properties":{
			   "description":"<strong>Coffee Fellows</strong><p>Hanauer Landstraße 115,</br> 60314 Frankfurt am Main</p><p><a rel=\"noopener\" href=\"http://www.coffee-fellows-ostend.de/\" target=\"_blank\" title=\"Opens in a new window\">Hier gehts zur webseite</a></p>",
			   "icon":"Bar-Café"
			},
			"geometry":{
			   "type":"Point",
			   "coordinates":[
				8.709015614425825,
				50.11224196267669
			   ]
			}
		},
		{
			"type":"Feature",
			"properties":{
			   "description":"<strong>Wiener Feinbäckerei</strong><p>Hanauer Landstraße 108,</br> 60314 Frankfurt am Main</p><p><a rel=\"noopener\" href=\"https://heberer.de/\" target=\"_blank\" title=\"Opens in a new window\">Hier gehts zur webseite</a></p>",
			   "icon":"Bar-Café"
			},
			"geometry":{
			   "type":"Point",
			   "coordinates":[
				8.70924599781994,
				50.111330420991095
			   ]
			}
		},
		{
			"type":"Feature",
			"properties":{
			   "description":"<strong>Aniis</strong><p>Hanauer Landstraße 82,</br> 60314 Frankfurt am Main</p><p><a rel=\"noopener\" href=\"http://www.aniis.de/\" target=\"_blank\" title=\"Opens in a new window\">Hier gehts zur webseite</a></p>",
			   "icon":"Bar-Café"
			},
			"geometry":{
			   "type":"Point",
			   "coordinates":[
				8.704047841198193,
				50.11191788713086
			   ]
			}
		},
		{
			"type":"Feature",
			"properties":{
			   "description":"<strong>Stock Avenue 81</strong><p>Hanauer Landstraße 81,</br> 60314 Frankfurt am Main</p><p><a rel=\"noopener\" href=\"http://www.melia.com/de/lodgings/deutschland/frankfurt/innside-frankfurt-ostend/restaurants.html\" target=\"_blank\" title=\"Opens in a new window\">Hier gehts zur webseite</a></p>",
			   "icon":"Bar-Café"
			},
			"geometry":{
			   "type":"Point",
			   "coordinates":[
				8.704830970034363,
				50.112325267256004
			   ]
			}
		},
		{
			"type":"Feature",
			"properties":{
			   "description":"<strong>Bäckerei und Konditorei Huck</strong><p>Sonnemannstraße 81,</br> 60314 Frankfurt am Main</p><p><a rel=\"noopener\" href=\"https://www.baeckerei-huck.de/\" target=\"_blank\" title=\"Opens in a new window\">Hier gehts zur webseite</a></p>",
			   "icon":"Bar-Café"
			},
			"geometry":{
			   "type":"Point",
			   "coordinates":[
				8.70409040574631,
				50.111376848593906
			   ]
			}
		},
		{
			"type":"Feature",
			"properties":{
			   "description":"<strong>Frankfurt Pub</strong><p>Hanauer Landstraße 99,</br> 60314 Frankfurt am Main</p><p><a rel=\"noopener\" href=\"http://www.frankfurt-pub.de/\" target=\"_blank\" title=\"Opens in a new window\">Hier gehts zur webseite</a></p>",
			   "icon":"Bar-Café"
			},
			"geometry":{
			   "type":"Point",
			   "coordinates":[
				8.708437927706713,
				50.111746607401514
			   ]
			}
		},
		{
			"type":"Feature",
			"properties":{
			   "description":"<strong>Eiscafé Café a Roma</strong><p>Sonnemannstraße 51,</br> 60314 Frankfurt am Main</p>",
			   "icon":"Bar-Café"
			},
			"geometry":{
			   "type":"Point",
			   "coordinates":[
				8.700960888265074,
				50.11085074470636
			   ]
			}
		},
		{
			"type":"Feature",
			"properties":{
			   "description":"<strong>Marmion Bar</strong><p>Lindleystraße 17,</br> 60314 Frankfurt am Main</p><p><a rel=\"noopener\" href=\"https://www.marmion-bar.de\" target=\"_blank\" title=\"Opens in a new window\">Hier gehts zur webseite</a></p>",
			   "icon":"Bar-Café"
			},
			"geometry":{
			   "type":"Point",
			   "coordinates":[
				8.718510583561219,
				50.11257783263066
			   ]
			}
		},
		{
			"type":"Feature",
			"properties":{
			   "description":"<strong>Alnatura Super Natur Markt</strong><p>Hanauer Landstraße 110,</br> 60314 Frankfurt am Main</p>",
			   "icon":"Retail"
			},
			"geometry":{
			   "type":"Point",
			   "coordinates":[
				8.709294277580927,
				50.11124097596751
			   ]
			}
		},
		{
			"type":"Feature",
			"properties":{
			   "description":"<strong>Edeka</strong><p>Ferdinand-Happ-Straße 59,</br> 60314 Frankfurt am Main</p>",
			   "icon":"Retail"
			},
			"geometry":{
			   "type":"Point",
			   "coordinates":[
				8.715864727706792,
				50.11446867774984
			   ]
			}
		},
		{
			"type":"Feature",
			"properties":{
			   "description":"<strong>Lidl</strong><p>Hanauer Landstraße 219,</br> 60314 Frankfurt am Main</p>",
			   "icon":"Retail"
			},
			"geometry":{
			   "type":"Point",
			   "coordinates":[
				8.721729185379182,
				50.115486293551406
			   ]
			}
		},
		{
			"type":"Feature",
			"properties":{
			   "description":"<strong>Rewe</strong><p>Louis-Appia-Passage 7 7,</br> 60314 Frankfurt am Main</p>",
			   "icon":"Retail"
			},
			"geometry":{
			   "type":"Point",
			   "coordinates":[
				8.705509785379135,
				50.112873643153115
			   ]
			}
		},
		{
			"type":"Feature",
			"properties":{
			   "description":"<strong>Aldi Süd</strong><p>Hanauer Landstraße 285,</br> 60314 Frankfurt am Main</p>",
			   "icon":"Retail"
			},
			"geometry":{
			   "type":"Point",
			   "coordinates":[
				8.724419070034426,
				50.11658945000033
			   ]
			}
		},
		{
			"type":"Feature",
			"properties":{
			   "description":"<strong>Me.Ta</strong><p>Hanauer Landstraße 208 -216,</br> 60314 Frankfurt am Main</p>",
			   "icon":"Retail"
			},
			"geometry":{
			   "type":"Point",
			   "coordinates":[
				8.726406085457684,
				50.11562919293627
			   ]
			}
		},
		{
			"type":"Feature",
			"properties":{
			   "description":"<strong>dm</strong><p>Louis-Appia-Passage 6,</br> 60314 Frankfurt am Main</p>",
			   "icon":"Retail"
			},
			"geometry":{
			   "type":"Point",
			   "coordinates":[
				8.705571970034336,
				50.11244186549421
			   ]
			}
		},
		{
			"type":"Feature",
			"properties":{
			   "description":"<strong>Fitness First</strong><p>Hanauer Landstraße 148,</br> 60314 Frankfurt am Main</p>",
			   "icon":"Fitness"
			},
			"geometry":{
			   "type":"Point",
			   "coordinates":[
				8.71600512770675,
				50.11236760526015
			   ]
			}
		},
		{
			"type":"Feature",
			"properties":{
			   "description":"<strong>Fitseveneleven east blck</strong><p>Hanauer Landstraße 120,</br> 60314 Frankfurt am Main</p>",
			   "icon":"Fitness"
			},
			"geometry":{
			   "type":"Point",
			   "coordinates":[
				8.710570127706724,
				50.11133183045381
			   ]
			}
		},
		{
			"type":"Feature",
			"properties":{
			   "description":"<strong>Fitseveneleven east pink</strong><p>Hanauer Landstraße 147,</br> 60314 Frankfurt am Main</p>",
			   "icon":"Fitness"
			},
			"geometry":{
			   "type":"Point",
			   "coordinates":[
				8.714824341198113,
				50.11278522362572
			   ]
			}
		},
		{
			"type":"Feature",
			"properties":{
			   "description":"<strong>Kieser Training</strong><p>Hanauer Landstraße 291A,</br> 60314 Frankfurt am Main</p>",
			   "icon":"Fitness"
			},
			"geometry":{
			   "type":"Point",
			   "coordinates":[
				8.716392498870569,
				50.113392181835025
			   ]
			}
		},
		{
			"type":"Feature",
			"properties":{
			   "description":"<strong>Fritz-Rémond-Theater</strong><p>Bernhard-Grzimek-Allee 1,</br> 60316 Frankfurt am Main</p>",
			   "icon":"Kultur"
			},
			"geometry":{
			   "type":"Point",
			   "coordinates":[
				8.699309256543005,
				50.11610529237147
			   ]
			}
		},
		{
			"type":"Feature",
			"properties":{
			   "description":"<strong>Romanfabrik</strong><p>Hanauer Landstraße 186,</br> 60314 Frankfurt am Main</p>",
			   "icon":"Kultur"
			},
			"geometry":{
			   "type":"Point",
			   "coordinates":[
				8.722945141198247,
				50.114824976214166
			   ]
			}
		},
		{
			"type":"Feature",
			"properties":{
			   "description":"<strong>Kunstverein Familie Montez</strong><p>Honsellstraße 7,</br> 60314 Frankfurt am Main</p>",
			   "icon":"Kultur"
			},
			"geometry":{
			   "type":"Point",
			   "coordinates":[
				8.709860525853374,
				50.1089605822416
			   ]
			}
		},
		{
			"type":"Feature",
			"properties":{
			   "description":"<strong>Union Halle</strong><p>Hanauer Landstraße 188,</br> 60314 Frankfurt am Main</p>",
			   "icon":"Kultur"
			},
			"geometry":{
			   "type":"Point",
			   "coordinates":[
				8.72292931217596,
				50.11426644210688
			   ]
			}
		},
		{
			"type":"Feature",
			"properties":{
			   "description":"<strong>25hours</strong><p>Hanauer Landstraße 127,</br> 60314 Frankfurt am Main</p>",
			   "icon":"Hotels",
			},
			"geometry":{
			   "type":"Point",
			   "coordinates":[
				8.712797538150072,
				50.11210810538992
			   ]
			}
		},
		{
			"type":"Feature",
			"properties":{
			   "description":"<strong>INNSIDE</strong><p>Hanauer Landstraße 81,</br> 60314 Frankfurt am Main</p>",
			   "icon":"Hotels",
			},
			"geometry":{
			   "type":"Point",
			   "coordinates":[
				8.704878827706677,
				50.112383305205896, 
			   ]
			}
		},
		{
			"type":"Feature",
			"properties":{
			   "description":"<strong>B&B Hotel Frankfurt City-Ost</strong><p>Hanauer Landstraße 117,</br> 60314 Frankfurt am Main</p>",
			   "icon":"Hotels",
			},
			"geometry":{
			   "type":"Point",
			   "coordinates":[
				8.709716241586767,
				50.11160000635536
			   ]
			}
		},
		{
			"type":"Feature",
			"properties":{
			   "description":"<strong>MotelOne</strong><p>Hanauer Landstraße 142,</br> 60314 Frankfurt am Main</p>",
			   "icon":"Hotels",
			},
			"geometry":{
			   "type":"Point",
			   "coordinates":[
				8.713694256542883,
				50.11203960791258
			   ]
			}
		},
		{
			"type":"Feature",
			"properties":{
			   "description":"<strong>Moxy</strong><p>Hanauer Landstraße 162,</br> 60314 Frankfurt am Main</p>",
			   "icon":"Hotels",
			},
			"geometry":{
			   "type":"Point",
			   "coordinates":[
				8.71785704495354,
				50.11326424062049
			   ]
			}
		},
		{
			"type":"Feature",
			"properties":{
			   "description":"<strong>Hampton by Hilton Frankfurt City Centre East</strong><p>Grusonstraße 4,</br> 60314 Frankfurt am Main</p>",
			   "icon":"Hotels",
			},
			"geometry":{
			   "type":"Point",
			   "coordinates":[
				8.70798850585079,
				50.112528227125246
			   ]
			}
		},
		{
			"type":"Feature",
			"properties":{
			   "description":"<strong>LINDLEY LINDENBERG</strong><p>Lindleystraße 17,</br> 60314 Frankfurt am Main</p>",
			   "icon":"Hotels",
			},
			"geometry":{
			   "type":"Point",
			   "coordinates":[
				8.718837104529054,
				50.11282985876722
			   ]
			}
		},
		{
			"type":"Feature",
			"properties":{
			   "description":"<strong>Die Knoppschachtel</strong><p>Ferdinand-Happ-Straße 57,</br> 60314 Frankfurt am Main</p>",
			   "icon":"Kita",
			},
			"geometry":{
			   "type":"Point",
			   "coordinates":[
				8.715007013560411,
				50.11448051790032
			   ]
			}
		},
		{
			"type":"Feature",
			"properties":{
			   "description":"<strong>EZB Kita</strong><p>Ferdinand-Happ-Straße 57,</br> 60314 Frankfurt am Main</p>",
			   "icon":"Kita",
			},
			"geometry":{
			   "type":"Point",
			   "coordinates":[
				8.715007013560411,
				50.11448051790032
			   ]
			}
		},
		{
			"type":"Feature",
			"properties":{
			   "description":"<strong>Kindergarten d. Evangelisch-Luth.</strong><p>Röderbergweg 66,</br> 60314 Frankfurt am Main</p>",
			   "icon":"Kita",
			},
			"geometry":{
			   "type":"Point",
			   "coordinates":[
				8.707768964236756,
				50.115814262790835
			   ]
			}
		},
		{
			"type":"Feature",
			"properties":{
			   "description":"<strong>FRÖBEL-Kindergarten</strong><p>Honsellstraße 18,</br> 60314 Frankfurt am Main</p>",
			   "icon":"Kita",
			},
			"geometry":{
			   "type":"Point",
			   "coordinates":[
				8.709864689196351,
				50.110742092904175
			   ]
			}
		},
		{
			"type":"Feature",
			"properties":{
			   "description":"<strong>Frankfurter Sparkasse</strong><p>Grusonstraße 3-5,</br> 60314 Frankfurt am Main</p>",
			   "icon":"Banken",
			},
			"geometry":{
			   "type":"Point",
			   "coordinates":[
				8.70621865115999,
				50.11208644119723, 
			   ]
			}
		},
		{
			"type":"Feature",
			"properties":{
			   "description":"<strong>Europäische Zentralbank (EZB)</strong><p>Sonnemannstraße 20,</br> 60314 Frankfurt am Main</p>",
			   "icon":"Banken",
			},
			"geometry":{
			   "type":"Point",
			   "coordinates":[
				8.70185343846062,
				50.10999246042122
			   ]
			}
		},
		{
			"type":"Feature",
			"properties":{
			   "description":"<strong>Schwedler See</strong><p>Schwedlerstraße,</br> 60314 Frankfurt am Main</p>",
			   "icon":"Parks",
			},
			"geometry":{
			   "type":"Point",
			   "coordinates":[
				8.72247076419106,
				50.1126669871857
			   ]
			}
		},
		{
			"type":"Feature",
			"properties":{
			   "description":"<strong>Hafenpark</strong><p>Mayfarthstraße,</br> 60314 Frankfurt am Main</p>",
			   "icon":"Parks",
			},
			"geometry":{
			   "type":"Point",
			   "coordinates":[
				8.707727030979154,
				50.10780485816412
			   ]
			}
		},
		{
			"type":"Feature",
			"properties":{
			   "description":"<strong>Tankstelle Esso</strong><p>Hanauer Landstraße 178,</br> 60314 Frankfurt am Main</p>",
			   "icon":"Tankstelle",
			},
			"geometry":{
			   "type":"Point",
			   "coordinates":[
				8.71785704495354,
				50.11326424062049
			   ]
			}
		},
	]
 };

 var geojson = {
	type: 'FeatureCollection',
	features: [{
	  type: 'Feature',
	  geometry: {
		type: 'Point',
		'coordinates': [8.71157213340723, 50.11154494192954]
	  },
	  properties: {
		title: 'Mapbox',
		description: 'Oststern Offices'
	  }
	}]
  };

 const mapPresent = document.querySelectorAll('.maps')

 mapPresent.forEach((elem) => {
	
	var filterGroup = document.getElementById('filter-group');
	mapboxgl.accessToken = 'pk.eyJ1IjoiamZyaWVzZW5obCIsImEiOiJja3BtdHRvc3YwNWExMnBwNG11MnJibmV5In0.i84KJRxAWlCeaS900SAC7g';
	
	var mq = window.matchMedia( "(min-width: 820px)" );
	
	// console.log('mq', mq)
	
	if (mq.matches){
		var map = new mapboxgl.Map({
			container: 'map', // container ID
			style: 'mapbox://styles/jfriesenhl/ckpmlu0pa04pw18qnjxgnb5mh', // style ID
			center: [8.71157213340723, 50.11154494192954], // starting position [lng, lat]
			// starting zoom
			zoom: 16,
			attributionControl: true,
			logoEnabled: false
		});
	} else {
		var map = new mapboxgl.Map({
			container: 'map', // container ID
			style: 'mapbox://styles/jfriesenhl/ckpmlu0pa04pw18qnjxgnb5mh', // style ID
			center: [8.71157213340723, 50.11154494192954], // starting position [lng, lat]
			// starting zoom
			zoom: 15,
			attributionControl: true,
			logoEnabled: false
		});
	};

	geojson.features.forEach(function(marker) {

		// create a HTML element for each feature
		var el = document.createElement('div');
		el.className = 'marker';
		// var container = document.querySelector('.marker')
		// console.log('el', el)
	
		// make a marker for each feature and add to the map
		// new mapboxgl.Marker(el)
		new mapboxgl.Marker(el)
		.setLngLat(marker.geometry.coordinates)
		.addTo(map);
	});
	
	
	//disable zoom on map
	map.scrollZoom.disable();
	
	//disable Mobile desktop behavoir
	if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
		map.dragPan.disable();
		// map.scrollZoom.enable();
		const isTouchEvent = e => e.originalEvent && "touches" in e.originalEvent;
		const isTwoFingerTouch = e => e.originalEvent.touches.length >= 2;
	  
		map.on("dragstart", event => {
		  if (isTouchEvent(event) && !isTwoFingerTouch(event)) {
			 map.dragPan.disable();
		  }
		});
	  
		// Drag events not emited after dragPan disabled, so I use touch event here
		map.on("touchstart", event => {
			if (isTouchEvent(event) && isTwoFingerTouch(event)) {
			 map.dragPan.enable();
		  }
		});
	}
	// Add zoom and rotation controls to the map.
	map.addControl(new mapboxgl.NavigationControl({
		// Hide rotation control.
		showCompass: false
	}), 'bottom-left');
	
	map.on('load', function () {
		// Add a GeoJSON source containing place coordinates and information.
		map.addSource('places', {
			'type': 'geojson',
			'data': places,
		});
		 
		places.features.forEach(function (feature) {
			var symbol = feature.properties['icon'];
			// console.log('symbol', symbol)
			var layerID = 'poi-' + symbol;
			// console.log('layerID', layerID)
		
			
	
		// Add a layer for this symbol type if it hasn't been added already.
			if (!map.getLayer(layerID)) {
				map.addLayer({
					'id': layerID,
					'type': 'symbol',
					'source': 'places',
					
					'layout': {
					'icon-image': symbol,
					'icon-allow-overlap': true,
					// "icon-offset": [
					// 	"case",
					// 	["==", ["get", "icon"], symbol],
					// 	["literal", [0, 55]],
					// 	["literal", [0, 0]]
					//   ]
					},
					'filter': ['==', 'icon', symbol]
				});
	
				// Change icon size on zoom
				// map.on('zoom', () => {
				//     const scalePercent = 1 + (map.getZoom() - 8)  * 0.4;
				//     const svgElement = symbol.getElement().children[0];
				//     svgElement.style.transform = `scale(${scalePercent})`;
				//     svgElement.style.transformOrigin = 'bottom';
				// });
				
				// Add checkbox and label elements for the layer.
				var input = document.createElement('input');
				input.type = 'checkbox';
				input.id = layerID;
				input.checked = true;
				filterGroup.appendChild(input);
			
				var label = document.createElement('label');
				label.setAttribute('for', layerID);
				label.textContent = symbol;
				filterGroup.appendChild(label);
			
			// When the checkbox changes, update the visibility of the layer.
				input.addEventListener('change', function (e) {
					map.setLayoutProperty(
						layerID,
						'visibility',
						e.target.checked ? 'visible' : 'none'
					);
				});
	
				map.on('click', layerID, function (e) {
					var coordinates = e.features[0].geometry.coordinates.slice();
					var description = e.features[0].properties.description;
					 
					// Ensure that if the map is zoomed out such that multiple
					// copies of the feature are visible, the popup appears
					// over the copy being pointed to.
					while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
					coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
					}
					 
					new mapboxgl.Popup()
					.setLngLat(coordinates)
					.setHTML(description)
					.addTo(map);
				});
					 
					// Change the cursor to a pointer when the mouse is over the places layer.
				map.on('mouseenter', layerID, function () {
					map.getCanvas().style.cursor = 'pointer';
				});
					 
					// Change it back to a pointer when it leaves.
				map.on('mouseleave', layerID, function () {
					map.getCanvas().style.cursor = '';
				});
			}
		});
	
	
	});
	
	map.on('click', 'places', function (e) {
		var coordinates = e.features[0].geometry.coordinates.slice();
		var description = e.features[0].properties.description;
		 
		// Ensure that if the map is zoomed out such that multiple
		// copies of the feature are visible, the popup appears
		// over the copy being pointed to.
		while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
			coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
		}
		 
		new mapboxgl.Popup()
		.setLngLat(coordinates)
		.setHTML(description)
		.addTo(map);
	});
		 
	// Change the cursor to a pointer when the mouse is over the places layer.
	map.on('mouseenter', 'places', function () {
		map.getCanvas().style.cursor = 'pointer';
	});
		
	// Change it back to a pointer when it leaves.
	map.on('mouseleave', 'places', function () {
		map.getCanvas().style.cursor = '';
	});
 })
 

/***/ }),

/***/ 473:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

const bodyScrollLock = __webpack_require__(509);
const disableBodyScroll = bodyScrollLock.disableBodyScroll;
const enableBodyScroll = bodyScrollLock.enableBodyScroll;

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
                // disableBodyScroll(elem);
                elem.style.top = "0";
            } else if (elem.style.top == '0px') {
                // enableBodyScroll(elem);
                elem.style.top = "-340vh";
            } else {
                // disableBodyScroll(elem);
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

/***/ }),

/***/ 484:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

const bodyScrollLock = __webpack_require__(509);
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
                // disableBodyScroll(elem);
                elem.style.top = "0";
            } else if (elem.style.top == '0px') {
                // enableBodyScroll(elem);
                elem.style.top = "-340vh";
            } else {
                // disableBodyScroll(elem);
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

/***/ }),

/***/ 377:
/***/ (function() {

const mobileMenuButton = document.querySelectorAll('.mobile_menu_button')
const mobileMenu = document.querySelectorAll('.mobile_menu')
var menuButton = document.getElementById('menuButton');

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
        });
        
        if (mobileMenuButton){  
            mobileMenuButton.forEach(elem => {
                if (window.getComputedStyle(elem, null).display == 'block') {             
                    setTimeout(() => { 
                        menuButton.click()
                    }, 1000);     
                } 
            })
        }
    });
});

/***/ }),

/***/ 843:
/***/ (function() {

var restaurants = document.querySelectorAll('.section_listenansicht__restaurants')
var bars = document.querySelectorAll('.section_listenansicht__bars')
var hotels = document.querySelectorAll('.section_listenansicht__hotels')
var fitness = document.querySelectorAll('.section_listenansicht__fitness')
var kitas = document.querySelectorAll('.section_listenansicht__kitas')
var retails = document.querySelectorAll('.section_listenansicht__retails')
var banken = document.querySelectorAll('.section_listenansicht__banken')
var parks = document.querySelectorAll('.section_listenansicht__parks')
var kultur = document.querySelectorAll('.section_listenansicht__kultur')
var tankstellen = document.querySelectorAll('.section_listenansicht__tankstellen')

restaurants.forEach((elem) => {
    elem.onclick = function(e) {
        var tabsName = 'Restaurantsansicht'
        openTabList(e, tabsName)
    }
})

bars.forEach((elem) => {
    elem.onclick = function(e) {
        var tabsName = 'Barsansicht'
        openTabList(e, tabsName)
    }
})

hotels.forEach((elem) => {
    elem.onclick = function(e) {
        var tabsName = 'Hotelsansicht'
        openTabList(e, tabsName)
    }
})

fitness.forEach((elem) => {
    elem.onclick = function(e) {
        var tabsName = 'Fitnessansicht'
        openTabList(e, tabsName)
    }
})

kitas.forEach((elem) => {
    elem.onclick = function(e) {
        var tabsName = 'Kitasansicht'
        openTabList(e, tabsName)
    }
})

retails.forEach((elem) => {
    elem.onclick = function(e) {
        var tabsName = 'Retailsansicht'
        openTabList(e, tabsName)
    }
})

banken.forEach((elem) => {
    elem.onclick = function(e) {
        var tabsName = 'Bankenansicht'
        openTabList(e, tabsName)
    }
})

parks.forEach((elem) => {
    elem.onclick = function(e) {
        var tabsName = 'Parksansicht'
        openTabList(e, tabsName)
    }
})

kultur.forEach((elem) => {
    elem.onclick = function(e) {
        var tabsName = 'Kulturansicht'
        openTabList(e, tabsName)
    }
})

tankstellen.forEach((elem) => {
    elem.onclick = function(e) {
        var tabsName = 'Tankstellenansicht'
        openTabList(e, tabsName)
    }
})

var defaultopen = document.querySelectorAll('#defaultOpen')

defaultopen.forEach((elem) => {
    elem.click();
})

function openTabList(evt, tabsName) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("section_listenansicht__content");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("section_listenansicht__button");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabsName).style.display = "flex";
    evt.currentTarget.className += " active";

  }



/***/ }),

/***/ 179:
/***/ (function() {

var x, i, j, l, ll, selElmnt, a, b, c;
/* Look for any elements with the class "custom-select": */
x = document.getElementsByClassName("custom-select");
l = x.length;

for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  
  ll = selElmnt.length;
  /* For each element, create a new DIV that will act as the selected item: */
  a = document.createElement("DIV");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  a.setAttribute("class", `select-selected`);
  // a.classList.add(a.innerHTML)
  x[i].appendChild(a);
  /* For each element, create a new DIV that will contain the option list: */
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < ll; j++) {
    /* For each option in the original select element,
    create a new DIV that will act as an option item: */
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.classList.add(c.innerHTML)
    
    
    c.addEventListener("click", function(e) {
        /* When an item is clicked, update the original select box,
        and the selected item: */
        var y, i, k, s, h, sl, yl;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        sl = s.length;
        h = this.parentNode.previousSibling;
        for (i = 0; i < sl; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            a.setAttribute("class", `select-selected ${this.innerHTML}`);
            y = this.parentNode.getElementsByClassName("same-as-selected");
            yl = y.length;
            for (k = 0; k < yl; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
    });
    b.appendChild(c);
    
  }
  x[i].appendChild(b);
 
  a.addEventListener("click", function(e) {
    /* When the select box is clicked, close any other select boxes,
    and open/close the current select box: */
    openTabListMobile(e, a.innerHTML)
    e.stopPropagation();
    closeAllSelect(this);
    this.nextSibling.classList.toggle("select-hide");
    this.classList.toggle("select-arrow-active");
  });
}

function closeAllSelect(elmnt) {
  /* A function that will close all select boxes in the document,
  except the current select box: */
  var x, y, i, xl, yl, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}
/* If the user clicks anywhere outside the select box,
then close all select boxes: */
document.addEventListener("click", closeAllSelect);

//////////////////////////////

function openTabListMobile(evt, tabsName) {
  // Declare all variables
  var i, tabcontent_mobile, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent_mobile = document.getElementsByClassName("section_listenansicht_mobile__content");
  for (i = 0; i < tabcontent_mobile.length; i++) {
    tabcontent_mobile[i].style.display = "none";
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(tabsName).style.display = "flex";
  // evt.currentTarget.className += " active";

}

var intialMobileClickCheck = document.querySelectorAll('.select-items')

intialMobileClickCheck.forEach((elem) => {
    var intialMobileClick = document.querySelector(".select-items").childNodes
    intialMobileClick[0].click()
})



/***/ }),

/***/ 823:
/***/ (function() {

var kartenansicht = document.querySelectorAll('.kartenansicht')
var listenansicht = document.querySelectorAll('.listenansicht')

kartenansicht.forEach((elem) => {
    elem.onclick = function(e) {
        var tabsName = 'Kartenansicht'
        openTab(e, tabsName)
    }
    
})
listenansicht.forEach((elem) => {
    elem.onclick = function(e) {
        var tabsName = 'Listenansicht'
        openTab(e, tabsName)
    }
    
})

function openTab(evt, tabsName) {
    if (tabsName == 'Kartenansicht') {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById('Kartenansicht').style.display = "block";
    document.getElementById('Listenansicht').style.display = "none";
    evt.currentTarget.className += " active";
    }
    if (tabsName == 'Listenansicht') {
        // Declare all variables
        var i, tabcontent, tablinks;
      
        // Get all elements with class="tabcontent" and hide them
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
          tabcontent[i].style.display = "none";
        }
      
        // Get all elements with class="tablinks" and remove the class "active"
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
          tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
      
        // Show the current tab, and add an "active" class to the button that opened the tab
        document.getElementById('Listenansicht').style.display = "block";
        document.getElementById('Kartenansicht').style.display = "none";
        evt.currentTarget.className += " active";
        document.getElementById("defaultOpen").click();
        }

  }



/***/ }),

/***/ 836:
/***/ (function() {

const elems = document.querySelectorAll('.to_top_button_logo')

elems.forEach((elem) => {
	elem.onclick = function(e) {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		})
	}
})

/***/ }),

/***/ 783:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

const WOW = __webpack_require__(630);

const wow = new WOW(
	{
	  animateClass: 'animated',
	  offset:       100,
	  mobile:       true,
	  callback:     function(box) {
		// console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
	  }
	}
  );
  wow.init();

/***/ }),

/***/ 893:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./src/assets/js/_mapbox.js
var _mapbox = __webpack_require__(129);
// EXTERNAL MODULE: ./src/assets/js/_wow.js
var _wow = __webpack_require__(783);
// EXTERNAL MODULE: ./src/assets/js/_scrollAnker.js
var _scrollAnker = __webpack_require__(377);
// EXTERNAL MODULE: ./src/assets/js/_toTopButton.js
var _toTopButton = __webpack_require__(836);
// EXTERNAL MODULE: ./src/assets/js/_carousel.js
var _carousel = __webpack_require__(686);
// EXTERNAL MODULE: ./node_modules/headroom.js/dist/headroom.js
var dist_headroom = __webpack_require__(631);
var headroom_default = /*#__PURE__*/__webpack_require__.n(dist_headroom);
;// CONCATENATED MODULE: ./src/assets/js/_headroom.js


// grab an element
var elems = document.querySelectorAll('.header')
// construct an instance of Headroom, passing the element
elems.forEach((elem) => {
    var headroom = new (headroom_default())(elem, {
        "offset": 750,
        "tolerance": 8
      });
    // initialise
    headroom.init();
})

var elemsImpressum = document.querySelectorAll('.header_impressum')
// construct an instance of Headroom, passing the element
elemsImpressum.forEach((elem) => {
    var headroom = new (headroom_default())(elem, {
        "tolerance": 8
      });
    // initialise
    headroom.init();
})



// EXTERNAL MODULE: ./src/assets/js/_mobile_menu_button.js
var _mobile_menu_button = __webpack_require__(473);
// EXTERNAL MODULE: ./src/assets/js/_mobile_menu_button_impressum.js
var _mobile_menu_button_impressum = __webpack_require__(484);
// EXTERNAL MODULE: ./src/assets/js/_tabs_maps.js
var _tabs_maps = __webpack_require__(823);
// EXTERNAL MODULE: ./src/assets/js/_tabs_listen.js
var _tabs_listen = __webpack_require__(843);
// EXTERNAL MODULE: ./src/assets/js/_tabs_listen_mobile.js
var _tabs_listen_mobile = __webpack_require__(179);
// EXTERNAL MODULE: ./node_modules/smoothscroll-polyfill/dist/smoothscroll.js
var smoothscroll = __webpack_require__(523);
var smoothscroll_default = /*#__PURE__*/__webpack_require__.n(smoothscroll);
;// CONCATENATED MODULE: ./src/assets/js/index.js
// import css for webpack


// javscript imports














smoothscroll_default().polyfill()




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
/******/ 			179: 0
/******/ 		};
/******/ 		
/******/ 		var deferredModules = [
/******/ 			[893,736]
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