function initMap() {
    console.log(jsonMarkers, typeof(jsonMarkers));

    //initializing icons below
    var icons = {
        info: {
            icon: 'https://icons8.com/iconizer/files/Pirate_icons/thumb/64/trash-full.png'
        }
    };

    //user position 
    function error(obj) {
        console.log("Ошибка при определении положения");
    };
    navigator.geolocation.getCurrentPosition(success, error);

    var directionsDisplay = new google.maps.DirectionsRenderer;
    var directionsService = new google.maps.DirectionsService;
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 14,
        center: {lat: 50.4376659, lng: 30.5283098},
    });


    function success(position) {
        userPosition = {lat: position.coords.latitude, lng: position.coords.longitude};
        var marker = new google.maps.Marker({
            position: {lat: 48.739083, lng: 37.584288},
            map: map,
            title: 'UserMarker',
            icon: "https://image.ibb.co/hBvWsy/location.png",
        });
    };

    var markers = [];

    for(var i = 0; i<jsonMarkers.length; i++) {
        console.log(jsonMarkers[i][2]);
        switch(jsonMarkers[i][2]) {
            case 1 :
                var marker = new google.maps.Marker({
                    position: {lat: jsonMarkers[i][3], lng: jsonMarkers[i][4]},
                    map: map,
                    title: "Аптека",
                    icon: "https://image.ibb.co/jZGUvJ/image.png",
                });
                markers.push(marker);
                break;

            case 2 :
                var marker = new google.maps.Marker({
                    position: {lat: jsonMarkers[i][3], lng: jsonMarkers[i][4]},
                    map: map,
                    title: "Больница",
                    icon: "https://image.ibb.co/j19w9d/hospitals.png",
                });
                markers.push(marker);
                break;

            case 3 :
                var marker = new google.maps.Marker({
                    position: {lat: jsonMarkers[i][3], lng: jsonMarkers[i][4]},
                    map: map,
                    title: "Административное здание",
                    icon: "https://image.ibb.co/nkXxhy/image.png",
                });
                markers.push(marker);
                break;

            case 4 :
                var marker = new google.maps.Marker({
                    position: {lat: jsonMarkers[i][3], lng: jsonMarkers[i][4]},
                    map: map,
                    title: "Магазин",
                    icon: "https://image.ibb.co/hjoEUd/shops.png",
                });
                markers.push(marker);
                break;


            case 5 :
                var marker = new google.maps.Marker({
                    position: {lat: jsonMarkers[i][3], lng: jsonMarkers[i][4]},
                    map: map,
                    title: "Кафе",
                    icon: "https://image.ibb.co/jgg9Ud/cafe.png",
                });
                markers.push(marker);
                break;

            case 6 :
                var marker = new google.maps.Marker({
                    position: {lat: jsonMarkers[i][3], lng: jsonMarkers[i][4]},
                    map: map,
                    title: "Парикмахерская",
                    icon: "https://image.ibb.co/fGo9vJ/barbershop.png",
                });
                markers.push(marker);
                break;


            case 7 :
                var marker = new google.maps.Marker({
                    position: {lat: jsonMarkers[i][3], lng: jsonMarkers[i][4]},
                    map: map,
                    title: "Ломбард",
                    icon: "https://image.ibb.co/dzvB9d/pawnshops.png",
                });
                markers.push(marker);
                break;

            case 8 :
                var marker = new google.maps.Marker({
                    position: {lat: jsonMarkers[i][3], lng: jsonMarkers[i][4]},
                    map: map,
                    title: "Голосовой светофор",
                    icon: "https://image.ibb.co/hyaYNy/traffic_light.png",
                });
                markers.push(marker);
                break;
        }

        switch(jsonMarkers[i][1]) {
            case 1 :
                var marker = new google.maps.Marker({
                    position: {lat: jsonMarkers[i][3], lng: jsonMarkers[i][4]},
                    map: map,
                    icon: "https://image.ibb.co/cF6nXy/icon1_2.png",
                    origin: new google.maps.Point(0, 0),
                    zIndex: 9999999,
                });
                break;

            case 2 :
                var marker = new google.maps.Marker({
                    position: {lat: jsonMarkers[i][3], lng: jsonMarkers[i][4]},
                    map: map,
                    icon: "https://image.ibb.co/bvUPCy/icon2.png",
                    zIndex: 9999999,
                });
                break;

            case 3 :
                var marker = new google.maps.Marker({
                    position: {lat: jsonMarkers[i][3], lng: jsonMarkers[i][4]},
                    map: map,
                    icon: "https://image.ibb.co/hNmJ5J/icon3.png",
                    zIndex: 9999999,
                });
                break;

            case 4 :
                var marker = new google.maps.Marker({
                    position: {lat: jsonMarkers[i][3], lng: jsonMarkers[i][4]},
                    map: map,
                    icon: "https://image.ibb.co/ev34ed/icon1.png",
                    zIndex: 9999999,
                });
                break;
        }

    }

    function rad(x) {return x*Math.PI/180;}
    function find_closest_marker() {
        var lat = 48.739083;
        var lng = 37.584288;
        var R = 6371; // radius of earth in km
        var distances = [];
        var closest = -1;
        for( i=0;i<markers.length; i++ ) {
            var mlat = markers[i].position.lat();
            var mlng = markers[i].position.lng();
            var dLat  = rad(mlat - lat);
            var dLong = rad(mlng - lng);
            var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
                Math.cos(rad(lat)) * Math.cos(rad(lat)) * Math.sin(dLong/2) * Math.sin(dLong/2);
            var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
            var d = R * c;
            distances[i] = d;
            if ( closest == -1 || d < distances[closest] ) {
                closest = i;
            }
        }

        console.log(markers[closest].title);
        return markers[closest];
    }
    var nearestMarker = find_closest_marker();

    directionsDisplay.setMap(map);

    calculateAndDisplayRoute(directionsService, directionsDisplay, nearestMarker.position);
    /*document.getElementById('mode').addEventListener('change', function() {
        calculateAndDisplayRoute(directionsService, directionsDisplay);
    });*/
}
function calculateAndDisplayRoute(directionsService, directionsDisplay, dest) {
    var selectedMode = "WALKING";
    directionsService.route({
        origin: {lat: 48.739083, lng: 37.584288},  // Haight.
        destination: dest,  // Ocean Beach.
        // Note that Javascript allows us to access the constant
        // using square brackets and a string value as its
        // "property."
        travelMode: google.maps.TravelMode[selectedMode]
    }, 
    function(response, status) {
        if (status == 'OK') {
            directionsDisplay.setDirections(response);
        } else {
            window.alert('Directions request failed due to ' + status);
        }
    });
}