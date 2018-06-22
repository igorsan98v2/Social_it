package com.kit.ygs.myapplication;
import android.content.Context;

import com.google.android.gms.maps.model.LatLng;

import java.util.ArrayList;
import java.util.List;

public class SearchRoute  {

    private Context context;
    private static LatLng location ;
    public List<LatLng> routes;
    LatLng closest;
    public SearchRoute(String query,Context context){

        this.context = context;
        closest=null;
        location = new LatLng(MainActivity.mLastKnownLocation.getLatitude(),(MainActivity.mLastKnownLocation.getLongitude()));
        findClosest(query);
        if(closest!=null){
            RouteBuilder route =new RouteBuilder(location.latitude,location.longitude,closest.latitude,closest.longitude);
            routes = route.getRoutes();

        }
    }
    private  ArrayList<Place> search(String query){
        ArrayList<Place>places=new SQLDriver(context).queryPlaces(null);
        ArrayList<Place>results = new ArrayList<>(0);
        for (Place place:places) {
            if(place.getName().contains(query)){
                results.add(place);
                continue;
            }

            switch (place.getPlace_id()){
                case 1:
                    if("Аптека".contains(query)){
                        results.add(place);
                    }
                    break;

                    case 2:
                    if("Больница".contains(query)||"Поликлиника".contains(query)){
                        results.add(place);
                    }
                    break;
                case 4:
                    if("продуктовый".contains(query)||"магазин".contains(query)){
                        results.add(place);
                    }
                    break;

                case 5:
                    if("кафе".contains(query)||"ресторан".contains(query)){
                        results.add(place);
                    }
                    break;
                case 6:
                    if("парихмахерская".contains(query)||"салон".contains(query)){
                        results.add(place);
                    }
                    break;

            }
        }
        return  results;
    }
    private void findClosest(String query){
        ArrayList<Place>candidats = search(query);
        double min = 999999999;

        for (Place candidate:candidats) {
            double latitude = candidate.getCoord().latitude;
            double longitude =  candidate.getCoord().longitude;
            double distance = Math.sqrt(Math.pow(location.latitude-latitude,2)+Math.pow(location.longitude-longitude,2))*
                    (candidate.getCategory_id()+3)/5;//коєф доступности
            if(distance<min){
                min = distance;
                closest = candidate.getCoord();
            }
        }
    }
    public List<LatLng> getRoutes(){
        return routes;
    }
}
