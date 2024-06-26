import { Component } from '@angular/core';
import { MapService, PlacesService } from '../../services';
import { Feature } from '../../interfaces/places';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search-results',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './search-results.component.html',
  styleUrl: './search-results.component.css'
})
export class SearchResultsComponent {

    public selectedId: string = '';

    constructor(private placesService: PlacesService,
                private mapService: MapService
    ){}

    get isLoadingPlaces(): boolean {
      return this.placesService.isLoadingPlaces;
    }

    get places(): Feature[] {
      return this.placesService.places;
    }

    flyTo(place: Feature) {
      this.selectedId = place.id;
      const [lng, lat] = [place.properties.coordinates.longitude, place.properties.coordinates.latitude];
      this.mapService.flyTo({ lng, lat });
    }
}
