$(function(){

	var phoneSize = $('.phone-image').width();
	

	function resizePhone() {
		phoneSize = $('.phone-image').width();
	  	$('video').width(phoneSize - 25)
	}


	$( window ).resize(function() {
		resizePhone()
	});

	resizePhone()


	// Get LNG LAT by IP
	var locationAPI = 'http://freegeoip.net/json/';
	longLat = []

	var lat;
	var lon;

	$.getJSON( locationAPI, function( data ) {

	  	longLat.push({'longitude': data.longitude, 'latitude': data.latitude })
	  	
	  	for (var i = 0; i < longLat.length; i++) {

			lat = longLat[i].latitude
			lon = longLat[i].longitude

			//console.log(lon, lat)

			var map, infoWindow;

		      function initMap() {


		        map = new google.maps.Map(document.getElementById('map'), {
		          center: {lat: lat, lng: lon},
		          zoom: 11,
		          disableDefaultUI: true,
		          disableDoubleClickZoom: true,
			      draggable: false,
			      scrollwheel: false,
			      panControl: false,
		          styles: [
						    {
						        "featureType": "all",
						        "elementType": "all",
						        "stylers": [
						            {
						                "hue": "#ff0000"
						            }
						        ]
						    },
						    {
						        "featureType": "all",
						        "elementType": "geometry",
						        "stylers": [
						            {
						                "color": "#8deeff"
						            }
						        ]
						    },
						    {
						        "featureType": "all",
						        "elementType": "geometry.fill",
						        "stylers": [
						            {
						                "lightness": "0"
						            },
						            {
						                "saturation": "0"
						            },
						            {
						                "color": "#005569"
						            }
						        ]
						    },
						    {
						        "featureType": "all",
						        "elementType": "geometry.stroke",
						        "stylers": [
						            {
						                "color": "#09090a"
						            }
						        ]
						    },
						    {
						        "featureType": "all",
						        "elementType": "labels.text.fill",
						        "stylers": [
						            {
						                "gamma": "0.00"
						            },
						            {
						                "lightness": "70"
						            },
						            {
						                "saturation": "-5"
						            },
						            {
						                "weight": "1.02"
						            },
						            {
						                "color": "#ffffff"
						            }
						        ]
						    },
						    {
						        "featureType": "all",
						        "elementType": "labels.text.stroke",
						        "stylers": [
						            {
						                "saturation": "-100"
						            },
						            {
						                "lightness": "-100"
						            },
						            {
						                "weight": 2
						            },
						            {
						                "gamma": "0.00"
						            },
						            {
						                "hue": "#ff0000"
						            },
						            {
						                "visibility": "on"
						            }
						        ]
						    },
						    {
						        "featureType": "all",
						        "elementType": "labels.icon",
						        "stylers": [
						            {
						                "visibility": "off"
						            }
						        ]
						    },
						    {
						        "featureType": "landscape",
						        "elementType": "geometry",
						        "stylers": [
						            {
						                "lightness": 30
						            },
						            {
						                "saturation": 30
						            }
						        ]
						    },
						    {
						        "featureType": "poi",
						        "elementType": "geometry",
						        "stylers": [
						            {
						                "saturation": 20
						            }
						        ]
						    },
						    {
						        "featureType": "poi.park",
						        "elementType": "geometry",
						        "stylers": [
						            {
						                "lightness": 20
						            },
						            {
						                "saturation": -20
						            }
						        ]
						    },
						    {
						        "featureType": "road",
						        "elementType": "geometry",
						        "stylers": [
						            {
						                "lightness": 10
						            },
						            {
						                "saturation": -30
						            }
						        ]
						    },
						    {
						        "featureType": "road",
						        "elementType": "geometry.stroke",
						        "stylers": [
						            {
						                "saturation": 25
						            },
						            {
						                "lightness": 25
						            }
						        ]
						    },
						    {
						        "featureType": "water",
						        "elementType": "all",
						        "stylers": [
						            {
						                "lightness": -20
						            }
						        ]
						    }
						]
		        });

		        infoWindow = new google.maps.InfoWindow;

		      }

		      initMap();



		}
	});
	


})