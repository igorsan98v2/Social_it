package com.kit.ygs.myapplication;

import android.content.Context;

import com.google.android.gms.maps.GoogleMap;
import com.google.maps.android.MarkerManager;

public class SearchQuery {
    private String query;
    private Context context;
    private GoogleMap mMap;

    public SearchQuery(String query, Context context,GoogleMap mMap) {
        this.query = query;
        this.context = context;
        this.mMap = mMap;
    }
    public String getQuery() {
        return query;
    }

    public Context getContext() {
        return context;
    }

    public GoogleMap getmMap() {
        return mMap;
    }
}
