import { Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MapScreenComponent } from './maps/screens/map-screen/map-screen.component';
import { LoadingComponent } from './maps/components/loading/loading.component';
import { MapViewComponent } from './maps/components/map-view/map-view.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MapScreenComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'maps-app';
}
