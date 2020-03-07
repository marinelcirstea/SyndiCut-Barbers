var image;
var marker;

function initializeMap() {
	'use strict';
	
	var lat = 32.0864250154076;
	var lng = 34.77459954445794;
	
	var mapOptions = {
		zoom: 17,
		disableDefaultUI: true,
		draggable: true,
		scrollwheel: false,
		center: new google.maps.LatLng(lat, lng),
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		styles: [{"stylers": [{"saturation": -100},{"gamma": 0.8},{"lightness": 4},{"visibility": "on"}]},{"featureType": "landscape.natural", "stylers": [{"visibility": "on"},{"color": "#5dff00"},{"gamma": 4.97},{"lightness": -5},{"saturation": 100}]}]
	}
	var map = new google.maps.Map(document.getElementById("map"), mapOptions);
	

	if (window.matchMedia("(min-width: 800px)").matches) {
		image = {
			url: './images/marker.svg',
			size: new google.maps.Size(82, 82),
			origin: new google.maps.Point(0, 0),
			anchor: new google.maps.Point(0, 82)
		};
	} else {
		image = {
			url: './images/marker-mobile.svg',
			size: new google.maps.Size(50, 50),
			origin: new google.maps.Point(0, 0),
			anchor: new google.maps.Point(0, 50)
		};
	}

	marker = new google.maps.Marker({
		position: {
			lat: lat,
			lng: lng
		},
		map: map,
		icon: image,
		draggable: false
	});

	AddMarker();
	
	google.maps.event.addListener(marker, 'dragend', function(evt){
		console.log(evt.latLng.lat());
		console.log(evt.latLng.lng());
	});

	google.maps.event.addDomListener(window, 'resize', function() {
		AddMarker();
	});
};

function MarkerSize(width, height, img) {
	image = {
		url: img,
		size: new google.maps.Size(width, height),
		origin: new google.maps.Point(0, 0),
		anchor: new google.maps.Point(0, height)
	};
}

function AddMarker() {
	if (window.matchMedia("(min-width: 800px)").matches) {
		MarkerSize(82, 82, './images/marker.svg');
	} else {
		MarkerSize(50, 50, './images/marker-mobile.svg');
	}

	marker.setIcon(image);
}