function initMap() {
            var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';
            var icons = {
                info: {
                    icon: 'https://cdn.icon-icons.com/icons2/644/PNG/128/filled_disabled-access_icon-icons.com_59340.png'
                }
            };

            var mapDefautPos = {lat: 48.737993, lng: 37.590348};

            var map = new google.maps.Map(document.getElementById('map'), {
                zoom: 12,
                center: mapDefautPos
            });

            var marker = new google.maps.Marker({
                position: mapDefautPos,
                map: map,
                title: 'Marker',
                icon: icons.info.icon,
            });
        }