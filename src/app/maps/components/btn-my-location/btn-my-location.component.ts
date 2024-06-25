import { Component } from '@angular/core';

@Component({
  selector: 'app-btn-my-location',
  standalone: true,
  imports: [],
  templateUrl: './btn-my-location.component.html',
  styleUrl: './btn-my-location.component.css'
})
export class BtnMyLocationComponent {

  constructor(){}

  goToMyLocation(){
    console.log('goToMyLocation');
  }
}
