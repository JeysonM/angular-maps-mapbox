import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Feature, PlacesResponse } from '../interfaces/places';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  public userLocation?: [number, number];

  public isLoadingPlaces: boolean = false;
  public places: Feature[] = [];

  get isUserLocationReady(): boolean {
    return !!this.userLocation;
  }
  constructor(private http: HttpClient) { 
    this.getUserLocation();
  }

    public async getUserLocation(): Promise<[number, number]> {
      return new Promise( (resolve, reject ) => {
        navigator.geolocation.getCurrentPosition(

          ({ coords }) => {

            this.userLocation = [coords.longitude, coords.latitude];
            resolve(this.userLocation);
          },
          ( err )=>{
            alert("Could not obtain geolocation.");
            console.log(err);
            reject();
          }
        );
      });
    }

    getPlacesByQuery(query: String = ''){
      this.isLoadingPlaces = true;
      this.http.get<PlacesResponse>(`https://api.mapbox.com/search/geocode/v6/forward?q=${ query }&limit=5&proximity=-74.05115860035947,40.744414190268714&language=es&access_token=pk.eyJ1IjoiamV5c29ubW8iLCJhIjoiY2x4dGQ2MTdvMDBnMzJpcTNxZnV0cWRuZyJ9.RuA853JDu0IcpaPYHsK6pw`)
      .subscribe( resp =>{
        console.log(resp.features);
        this.isLoadingPlaces = false;
        this.places = resp.features;

      });
    }
}
