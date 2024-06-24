import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { PlacesService } from '../../services';
import {Map, Popup, Marker} from 'mapbox-gl';
import mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-map-view',
  standalone: true,
  imports: [],
  templateUrl: './map-view.component.html',
  styleUrl: './map-view.component.css'
})
export class MapViewComponent implements AfterViewInit {
  
  @ViewChild('mapDiv') mapDivElement!: ElementRef;
  
  constructor(private placesService: PlacesService){
  }

  ngAfterViewInit(): void{
    if (!this.placesService.userLocation) throw Error('Does not exist placesService.userLocation');


    const map = new mapboxgl.Map({
      container: this.mapDivElement.nativeElement,
      style: 'mapbox://styles/mapbox/light-v10', // style URL
      center: this.placesService.userLocation, // starting position [lng, lat]
      zoom: 14, // starting zoom
    });

    const popup = new Popup()
    .setHTML(`
      <h6>Aqui estoy</h6>
      <span>Estoy en este lugar del mundo</span>
    `)

    new Marker({ color: 'red'})
    .setLngLat( this.placesService.userLocation )
    .setPopup( popup )
    .addTo( map) 
  }
}
