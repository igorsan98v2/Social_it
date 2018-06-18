function getCheckedRadioValue(name) {
    var elements = document.getElementsByName(name);
    for (var i=0, len=elements.length; i<len; ++i)
        if (elements[i].checked) return elements[i].value;
}
function rad(x) {return x*Math.PI/180;}
function find_closest_marker(allowedMarkers) {
    var lat = 48.739083;
    var lng = 37.584288;
    var R = 6371; // radius of earth in km
    var distances = [];
    var closest = -1;
    for( i=0;i<allowedMarkers.length; i++ ) {
        var mlat = allowedMarkers[i].position.lat();
        var mlng = allowedMarkers[i].position.lng();
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

    return allowedMarkers[closest];
}


$(document).ready(function() { 
    $('a#openModalWindow').click( function(event){
        event.preventDefault();
        $('#overlay').fadeIn(400,
            function(){
                    $('#modal_form').css('display', 'block') .animate({opacity: 1, top: '50%'}, 200);
                });
            });
        $('#modal_close, #overlay').click( function(){ 
            $('#modal_form')
                .animate({opacity: 0, top: '45%'}, 200,
                    function(){ 
                        $(this).css('display', 'none');
                        $('#overlay').fadeOut(400);
                        //возврат категории
                        var categori1 = document.getElementById("checkBox1").checked;
                        var categori2 = document.getElementById("checkBox2").checked;
                        var categori3 = document.getElementById("checkBox3").checked;
                        var categori4 = document.getElementById("checkBox4").checked;
                        //
                        console.log(categori1);
                        console.log(categori2);
                        console.log(categori3);
                        console.log(categori4);
                        //возврат типа здания
                        var radio_value = getCheckedRadioValue("radioButton");

                        console.log(map);

                        directionsDisplay = new google.maps.DirectionsRenderer;
                        directionsService = new google.maps.DirectionsService;

                        directionsDisplay.set('directions', null);
                        directionsDisplay.setMap(map);
                        dest = {lat: 48.739083, lng: 37.984388};

                        allowedMarkers = [];
                        console.log(markers);
                        for(var i = 0; i<markers.length; i+=2) {
                            if(markers[i].title=="Аптека" && radio_value==1) {
                                if(markers[i+1].icon=="https://image.ibb.co/cF6nXy/icon1_2.png" && categori1 || markers[i+1].icon=="https://image.ibb.co/bvUPCy/icon2.png" && categori2 || 
                                    markers[i+1].icon=="https://image.ibb.co/hNmJ5J/icon3.png" && categori3 || markers[i+1].icon=="https://image.ibb.co/ev34ed/icon1.png" && categori4) {
                                    allowedMarkers.push(markers[i]);
                                }
                            } 
                            else if(markers[i].title=="Больница" && radio_value==2) {
                                if(markers[i+1].icon=="https://image.ibb.co/cF6nXy/icon1_2.png" && categori1 || markers[i+1].icon=="https://image.ibb.co/bvUPCy/icon2.png" && categori2 || 
                                    markers[i+1].icon=="https://image.ibb.co/hNmJ5J/icon3.png" && categori3 || markers[i+1].icon=="https://image.ibb.co/ev34ed/icon1.png" && categori4) {
                                    allowedMarkers.push(markers[i]);
                                }
                            } 
                            else if(markers[i].title=="Административное здание" && radio_value==3) {
                                if(markers[i+1].icon=="https://image.ibb.co/cF6nXy/icon1_2.png" && categori1 || markers[i+1].icon=="https://image.ibb.co/bvUPCy/icon2.png" && categori2 || 
                                    markers[i+1].icon=="https://image.ibb.co/hNmJ5J/icon3.png" && categori3 || markers[i+1].icon=="https://image.ibb.co/ev34ed/icon1.png" && categori4) {
                                    allowedMarkers.push(markers[i]);
                                }
                            } 
                            else if(markers[i].title=="Магазин" && radio_value==4) {
                                if(markers[i+1].icon=="https://image.ibb.co/cF6nXy/icon1_2.png" && categori1 || markers[i+1].icon=="https://image.ibb.co/bvUPCy/icon2.png" && categori2 || 
                                    markers[i+1].icon=="https://image.ibb.co/hNmJ5J/icon3.png" && categori3 || markers[i+1].icon=="https://image.ibb.co/ev34ed/icon1.png" && categori4) {
                                    allowedMarkers.push(markers[i]);
                                }
                            } 
                            else if(markers[i].title=="Кафе" && radio_value==5) {
                                if(markers[i+1].icon=="https://image.ibb.co/cF6nXy/icon1_2.png" && categori1 || markers[i+1].icon=="https://image.ibb.co/bvUPCy/icon2.png" && categori2 || 
                                    markers[i+1].icon=="https://image.ibb.co/hNmJ5J/icon3.png" && categori3 || markers[i+1].icon=="https://image.ibb.co/ev34ed/icon1.png" && categori4) {
                                    allowedMarkers.push(markers[i]);
                                }
                            } 
                            else if(markers[i].title=="Парикмахерская" && radio_value==6) {
                                if(markers[i+1].icon=="https://image.ibb.co/cF6nXy/icon1_2.png" && categori1 || markers[i+1].icon=="https://image.ibb.co/bvUPCy/icon2.png" && categori2 || 
                                    markers[i+1].icon=="https://image.ibb.co/hNmJ5J/icon3.png" && categori3 || markers[i+1].icon=="https://image.ibb.co/ev34ed/icon1.png" && categori4) {
                                    allowedMarkers.push(markers[i]);
                                }
                            } 
                            else if(markers[i].title=="Ломбард" && radio_value==7) {
                                if(markers[i+1].icon=="https://image.ibb.co/cF6nXy/icon1_2.png" && categori1 || markers[i+1].icon=="https://image.ibb.co/bvUPCy/icon2.png" && categori2 || 
                                    markers[i+1].icon=="https://image.ibb.co/hNmJ5J/icon3.png" && categori3 || markers[i+1].icon=="https://image.ibb.co/ev34ed/icon1.png" && categori4) {
                                    allowedMarkers.push(markers[i]);
                                }
                            } 
                            else if(markers[i].title=="Голосовой светофор" && radio_value==8) {
                                if(markers[i+1].icon=="https://image.ibb.co/cF6nXy/icon1_2.png" && categori1 || markers[i+1].icon=="https://image.ibb.co/bvUPCy/icon2.png" && categori2 || 
                                    markers[i+1].icon=="https://image.ibb.co/hNmJ5J/icon3.png" && categori3 || markers[i+1].icon=="https://image.ibb.co/ev34ed/icon1.png" && categori4) {
                                    allowedMarkers.push(markers[i]);
                                }
                            } 
                        }
                        console.log("ALLOWED: ", allowedMarkers);
                        if(allowedMarkers.length!=0) {
                            var reqMarker = find_closest_marker(allowedMarkers);
                            calculateAndDisplayRoute(directionsService, directionsDisplay, reqMarker.position);
                        }
                    }
                );
            });
        });
        