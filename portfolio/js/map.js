var map;
function initialize() {
	if (document.getElementById('map-canvas')) {
		var lat = document.getElementById('map-canvas').getAttribute('data-lat');
		var lng = document.getElementById('map-canvas').getAttribute('data-lng');
		var zoom = document.getElementById('map-canvas').getAttribute('data-zoom');
		var mapOptions = {
			 zoom: parseInt(zoom),
			 scrollwheel: false,
			 center: new google.maps.LatLng(lat, lng)
		};
		map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

		var point = new google.maps.LatLng(lat, lng);

		// var image = new google.maps.MarkerImage(
		//     'images/point.png',
		//     new google.maps.Size(175, 175)
		// );

		var marker = new google.maps.Marker({
		   draggable: false,
		   raiseOnDrag: false,
		   map: map,
		   position: point
		});
	}
}

google.maps.event.addDomListener(window, 'load', initialize);