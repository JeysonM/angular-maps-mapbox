import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';



if (!navigator.geolocation) {
  alert('Browser does not support geolocation')
  throw new Error('Browser does not support geolocation')
}

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
