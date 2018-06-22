package com.kit.ygs.myapplication;

import android.content.Context;
import android.content.res.AssetManager;
import android.content.res.Resources;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.graphics.Canvas;
import android.graphics.Matrix;
import android.graphics.Paint;

import com.google.android.gms.maps.model.BitmapDescriptor;
import com.google.android.gms.maps.model.BitmapDescriptorFactory;

import java.io.IOException;
import java.io.InputStream;

public class BitmapEditor   {
    private Bitmap background;
    private Bitmap frontend;
    private Paint paint;
    private Context context;
    public   BitmapEditor(Context context){
        this.context = context;
        paint = new Paint(Paint.ANTI_ALIAS_FLAG);
    }
  public Bitmap edit(int categoryID,int placeID ){
        background = getBitmap(categoryID,true);
        frontend = getBitmap(placeID,false);
     // Bitmap eBitmam = Bitmap.createBitmap(background).copy(Bitmap.Config.ARGB_4444, true);//edited bitmap
      Bitmap eBitmam = Bitmap.createBitmap(128,128, Bitmap.Config.ARGB_8888);
      Canvas canvas = new Canvas(eBitmam);
      Matrix m = new Matrix();

      m.setTranslate(0,64);
      canvas.drawBitmap(frontend,m,paint);//команда настояла заменить,отвечаю <-я за это не отвественнен
      m.setTranslate(128-32,0);//
      m.setScale(0.25f,0.25f);
      canvas.drawBitmap(background,m,paint);




      canvas.save();
      return eBitmam;
  }
  private  Bitmap getBitmap(int id,boolean isCategoryID) {
      Bitmap bitmap=null;
        if(isCategoryID){
            switch (id){
                case 1:bitmap = BitmapFactory.decodeResource(context.getResources(), R.drawable.icon1cat);
                    break;
                case 2:bitmap = BitmapFactory.decodeResource(context.getResources(), R.drawable.icon2cat);
                    break;
                case 3:bitmap = BitmapFactory.decodeResource(context.getResources(), R.drawable.icon3cat);
                    break;
                case 4:bitmap = BitmapFactory.decodeResource(context.getResources(), R.drawable.icon4cat);
                    break;

            }
        }

        else {
            switch (id){
                case 1:bitmap = BitmapFactory.decodeResource(context.getResources(), R.drawable.pharmacies);
                    break;
                case 2:bitmap = BitmapFactory.decodeResource(context.getResources(), R.drawable.hospitals);
                break;
                case 3:bitmap = BitmapFactory.decodeResource(context.getResources(), R.drawable.admin);
                    break;
                case 4:bitmap = BitmapFactory.decodeResource(context.getResources(), R.drawable.shops);
                    break;
                case 5:bitmap = BitmapFactory.decodeResource(context.getResources(), R.drawable.cafe);
                    break;
                case 6:bitmap = BitmapFactory.decodeResource(context.getResources(), R.drawable.barbershop);
                    break;
                case 7:bitmap = BitmapFactory.decodeResource(context.getResources(), R.drawable.pawnshops);
                    break;
                case 8:bitmap = BitmapFactory.decodeResource(context.getResources(), R.drawable.trafic);
                    break;
            }
        }
        return bitmap;
    }
}
