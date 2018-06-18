package com.kit.ygs.myapplication;

import com.google.android.gms.maps.model.LatLng;
//контейнер для объекта
public class Place {
    private LatLng coord;
    private String name;
    private int category_id;
    private int place_id;

    public Place(LatLng coord, String name, int category_id, int place_id) {
        this.coord = coord;
        this.name = name;
        this.category_id = category_id;
        this.place_id = place_id;
    }

    public LatLng getCoord() {
        return coord;
    }

    public String getName() {
        return name;
    }

    public int getCategory_id() {
        return category_id;
    }

    public int getPlace_id() {
        return place_id;
    }
}
