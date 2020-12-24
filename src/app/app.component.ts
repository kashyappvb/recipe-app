import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  userName1 : string = 'Kashh';
  cityObtained : string;

  getUserName(userName : string){
    this.userName1 = userName;
  }

  getCityInAppComponent(cityFromChild : string)
  {
    this.cityObtained = cityFromChild;
  }
}
