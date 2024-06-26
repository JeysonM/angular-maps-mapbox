import { Component } from '@angular/core';
import { SearchResultsComponent } from '../search-results/search-results.component';
import { PlacesService } from '../../services';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [SearchResultsComponent],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {

  private debounceTimer?: NodeJS.Timeout;
  specialKeys: Set<string> = new Set([
    'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight',
    'Shift', 'Control', 'Alt', 'Meta', 'Escape', 'Tab'
  ]);

  constructor(private placesService: PlacesService){  }

  onQueryChanged( event: KeyboardEvent, query: string = ''){
    if (this.debounceTimer) clearTimeout(this.debounceTimer);
    if (this.specialKeys.has(event.key)) {
      return; //console.log(`Ignoring special key: ${event.key}`);
      
    }

    this.debounceTimer = setTimeout(() =>{
        this.placesService.getPlacesByQuery( query );
    }, 350);
  }
}
