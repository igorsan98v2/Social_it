package com.kit.ygs.myapplication;

import android.util.Log;

import org.apache.http.HttpEntity;
import org.apache.http.HttpResponse;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.impl.client.DefaultHttpClient;
import org.json.JSONObject;

import java.io.BufferedReader;

import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.UnsupportedEncodingException;
import java.net.URL;

import javax.net.ssl.HttpsURLConnection;

public class JSONParser {

        private static InputStream is ;

        private  static String json ;
        // constructor
        public JSONParser() {
            Log.d("Json","I am just container !");
            json = new String();
            is=null;

        }
        public String getJSONFromUrl(String urlLink) {
            // Making HTTP request
            try {
                // defaultHttpClient
                Log.d("URL_POST",urlLink);
                URL url = new URL(urlLink);
                HttpsURLConnection connection = (HttpsURLConnection)url.openConnection();
                is = connection.getInputStream();
            } catch (UnsupportedEncodingException e) {
                e.printStackTrace();
            } catch (Exception e) {
                e.printStackTrace();
            }
            try {
                BufferedReader reader = new BufferedReader(new InputStreamReader(
                        is, "iso-8859-1"), 8);
                StringBuilder sb = new StringBuilder();
                String line = null;
                while ((line = reader.readLine()) != null) {
                    sb.append(line + "\n");
                }

                json = sb.toString();
                is.close();
            } catch (Exception e) {
                Log.e("Buffer Error", "Error converting result " + e.toString());
            }
            return json;

        }
    }

