// -------Google Map-------


function initialize() {
	var mapOptions = {
	  center: { lat:-37.828, lng: 144.948},
	  zoom: 10,
	  disableDefaultUI:true
	};
	var map = new google.maps.Map(document.getElementById('map-canvas'),
	    mapOptions);
}
	google.maps.event.addDomListener(window, 'load', initialize);











