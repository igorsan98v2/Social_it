function initMap() {
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
            position: userPosition,
            map: map,
            title: 'Marker',
            icon: icons.info.icon,
        });
    };
    
    directionsDisplay.setMap(map);

    calculateAndDisplayRoute(directionsService, directionsDisplay);
    /*document.getElementById('mode').addEventListener('change', function() {
        calculateAndDisplayRoute(directionsService, directionsDisplay);
    });*/
}
function calculateAndDisplayRoute(directionsService, directionsDisplay) {
    var selectedMode = "WALKING";
    directionsService.route({
        origin: {lat: 50.4376659, lng: 30.5283098},  // Haight.
        destination: {lat: 48.734363, lng: 37.576274},  // Ocean Beach.
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