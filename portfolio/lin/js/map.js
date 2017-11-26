var map;
function initialize() {
	if (document.getElementById('map')) {
		var lat = document.getElementById('map').getAttribute('data-lat');
		var lng = document.getElementById('map').getAttribute('data-lng');
		var zoom = document.getElementById('map').getAttribute('data-zoom');
		var mapOptions = {
			zoom: parseInt(zoom),
			scrollwheel: false,
			center: new google.maps.LatLng(lat, lng)
		};
		map = new google.maps.Map(document.getElementById('map'), mapOptions);
		var point = new google.maps.LatLng(lat, lng);

		var image = new google.maps.MarkerImage(
			'./images/marker.png',
			new google.maps.Size(34, 53)
			);

		var marker = new google.maps.Marker({
			icon: image,
			draggable: false,
			raiseOnDrag: false,
			map: map,
			position: point
		});
	}
}

google.maps.event.addDomListener(window, 'load', initialize);



