import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import Mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"

Mapboxgl.accessToken = 'pk.eyJ1IjoiamV5c29ubW8iLCJhIjoiY2x4dGQ2MTdvMDBnMzJpcTNxZnV0cWRuZyJ9.RuA853JDu0IcpaPYHsK6pw';


if (!navigator.geolocation) {
  alert('Browser does not support geolocation')
  throw new Error('Browser does not support geolocation')
}

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
