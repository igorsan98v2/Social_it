package com.kit.ygs.myapplication;

import android.os.AsyncTask;
import android.util.Log;

import com.google.android.gms.maps.GoogleMap;
import com.google.android.gms.maps.model.LatLng;
import com.google.android.gms.maps.model.Polyline;
import com.google.android.gms.maps.model.PolylineOptions;

import java.util.List;

public class AsyncSearch extends AsyncTask<SearchQuery,Integer,PolylineOptions> {
    private  GoogleMap mMap;

    @Override
    protected PolylineOptions doInBackground(SearchQuery... searchQueries) {
        try {


            SearchQuery query = searchQueries[0];
            SearchRoute searchRoute = new SearchRoute(query.getQuery(),query.getContext());
            List<LatLng> routes = searchRoute.getRoutes();

            PolylineOptions polylineOptions = new PolylineOptions();

            for (LatLng point : routes){
                polylineOptions.add(point);
            }
            polylineOptions.color(query.getContext().getResources().getColor( R.color.colorDarkRed));
            polylineOptions.zIndex(14f);

            mMap = query.getmMap();

            return polylineOptions;
        }
        catch (Exception e){
            Log.d("AsyncSearch",e.getMessage());
        }
        return null;
    }


    @Override
    protected void onPostExecute(PolylineOptions polylineOptions) {
        try {
            if(    MainActivity.polyline!=null){
                MainActivity.polyline.remove();
                MainActivity.polyline = null;
            }
        }
        catch (NullPointerException e){
            Log.d("ASYNC",e.getMessage());
        }
        MainActivity.polyline = mMap.addPolyline(polylineOptions);

    }


}
