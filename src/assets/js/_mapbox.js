const mapboxgl = require('mapbox-gl');

var places = {
	'type': 'FeatureCollection',
	'features': [
	{
	'type': 'Feature',
	'properties': {
		'description':
'<strong>Make it Mount Pleasant</strong><p><a href="http://www.mtpleasantdc.com/makeitmtpleasant" target="_blank" title="Opens in a new window">Make it Mount Pleasant</a> is a handmade and vintage market and afternoon of live entertainment and kids activities. 12:00-6:00 p.m.</p>',
		'icon': 'icon_flexible'
	},
	'geometry': {
	'type': 'Point',
	'coordinates': [8.71157213340723, 50.11154494192954]
	}
	},
	{
	'type': 'Feature',
	'properties': {
		'description':
'<strong>Make it Mount Pleasant</strong><p><a href="http://www.mtpleasantdc.com/makeitmtpleasant" target="_blank" title="Opens in a new window">Make it Mount Pleasant</a> is a handmade and vintage market and afternoon of live entertainment and kids activities. 12:00-6:00 p.m.</p>',
		'icon': 'icon_flexible'
	},
	'geometry': {
	'type': 'Point',
	'coordinates': [8.71226251170242, 50.111369518633154]
	}
	},
	{
	'type': 'Feature',
	'properties': {
		'description':
'<strong>Make it Mount Pleasant</strong><p><a href="http://www.mtpleasantdc.com/makeitmtpleasant" target="_blank" title="Opens in a new window">Make it Mount Pleasant</a> is a handmade and vintage market and afternoon of live entertainment and kids activities. 12:00-6:00 p.m.</p>',
		'icon': 'icon_flexible'
	},
	'geometry': {
	'type': 'Point',
	'coordinates': [8.710191382654784, 50.11146975711955]
	}
	},
	{
	'type': 'Feature',
	'properties': {
		'description':
'<strong>Make it Mount Pleasant</strong><p><a href="http://www.mtpleasantdc.com/makeitmtpleasant" target="_blank" title="Opens in a new window">Make it Mount Pleasant</a> is a handmade and vintage market and afternoon of live entertainment and kids activities. 12:00-6:00 p.m.</p>',
	'icon': 'restaurant-noodle-15'
	},
	'geometry': {
	'type': 'Point',
	'coordinates': [8.710627753477638, 50.11085994721452]
	}
	},
	{
	'type': 'Feature',
	'properties': {
		'description':
'<strong>Make it Mount Pleasant</strong><p><a href="http://www.mtpleasantdc.com/makeitmtpleasant" target="_blank" title="Opens in a new window">Make it Mount Pleasant</a> is a handmade and vintage market and afternoon of live entertainment and kids activities. 12:00-6:00 p.m.</p>',
	'icon': 'icon_flexible'
	},
	'geometry': {
	'type': 'Point',
	'coordinates': [-77.031706, 38.914581]
	}
	},
	{
	'type': 'Feature',
	'properties': {
		'description':
'<strong>Make it Mount Pleasant</strong><p><a href="http://www.mtpleasantdc.com/makeitmtpleasant" target="_blank" title="Opens in a new window">Make it Mount Pleasant</a> is a handmade and vintage market and afternoon of live entertainment and kids activities. 12:00-6:00 p.m.</p>',
		'icon': 'icon_flexible'
	},
	'geometry': {
	'type': 'Point',
	'coordinates': [-77.020945, 38.878241]
	}
	},
	{
	'type': 'Feature',
	'properties': {
		'description':
'<strong>Make it Mount Pleasant</strong><p><a href="http://www.mtpleasantdc.com/makeitmtpleasant" target="_blank" title="Opens in a new window">Make it Mount Pleasant</a> is a handmade and vintage market and afternoon of live entertainment and kids activities. 12:00-6:00 p.m.</p>',
		'icon': 'icon_flexible'
	},
	'geometry': {
	'type': 'Point',
	'coordinates': [-77.007481, 38.876516]
	}
	}
	]
	};
	
var filterGroup = document.getElementById('filter-group');
mapboxgl.accessToken = 'pk.eyJ1IjoibW1vcmxleWhsIiwiYSI6ImNrbHV5c25kZjBuZm0yd28zYncwdGlnOWcifQ.0ii1h91pTh7MM9NLoIXuEA';
var map = new mapboxgl.Map({
	container: 'map', // container ID
	style: 'mapbox://styles/mmorleyhl/cklwedd4f59wp17l9wfr2jwx5', // style ID
	center: [8.71157213340723, 50.11154494192954], // starting position [lng, lat]
	zoom: 16,
	 // starting zoom
});

//disable zoom on map
map.scrollZoom.disable();
// map.dragging.disable();
// map.touchZoom.disable();
map.doubleClickZoom.disable();
// map.scrollWheelZoom.disable();
// map.keyboard.disable();

// Disable tap handler, if present.
if (map.tap) map.tap.disable();
console.log("maptab",map.tap)

//added basich control on map
map.addControl(new mapboxgl.NavigationControl());

var geojson = {
	type: 'FeatureCollection',
	features: [
		{
			type: 'Feature',
			geometry: {
				type: 'Point',
				coordinates: [8.71157213340723, 50.11154494192954]
			},
			properties: {
				title: 'OstStern',
				description: 'Business for you'
			}
		},
		{
			type: 'Feature',
			geometry: {
				type: 'Point',
				coordinates: [8.71226251170242, 50.111369518633154]
			},
			properties: {
				title: 'Küche',
				description: 'Lecker essen'
			}
		},
		{
			type: 'Feature',
			properties: {
				icon: 'theatre',
				title: 'Sarveni',
				description: 'Lecker essen 2 italienisch'
			},
			geometry: {
				type: 'Point',
				coordinates: [8.710191382654784, 50.11146975711955]
			}
		},
		
	]
  };

map.on('load', function () {
	// Add a GeoJSON source containing place coordinates and information.
	map.addSource('places', {
		'type': 'geojson',
		'data': places
	});
	 
	places.features.forEach(function (feature) {
		var symbol = feature.properties['icon'];
		console.log('symbol', symbol)
		var layerID = 'poi-' + symbol;
		console.log('layerID', layerID)
	
	// Add a layer for this symbol type if it hasn't been added already.
		if (!map.getLayer(layerID)) {
			map.addLayer({
				'id': layerID,
				'type': 'symbol',
				'source': 'places',
				'layout': {
				'icon-image': symbol,
				'icon-allow-overlap': true
				},
				'filter': ['==', 'icon', symbol]
			});
			
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
