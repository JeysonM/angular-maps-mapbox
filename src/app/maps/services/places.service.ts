import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Feature, PlacesResponse } from '../interfaces/places';
import { PlacesApiClient } from '../api';

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
  constructor(private placesApi: PlacesApiClient) { 
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
      if(!this.userLocation) throw Error("There is not user location")

      this.isLoadingPlaces = true;
      this.placesApi.get<PlacesResponse>(`${ query }`, {
        params: { 
          proximity: this.userLocation.join(',')
        }
      })
      .subscribe( resp =>{
        console.log(resp.features);
        this.isLoadingPlaces = false;
        this.places = resp.features;

      });
    }
}
