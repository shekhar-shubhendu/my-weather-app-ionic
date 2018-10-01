import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WeatherProvider } from '../../providers/weather/weather';
import { Location } from '../../models/location';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  location: Location = {
    city: 'London',
    country: 'UK'
  }
  weather: any;
  constructor(public navCtrl: NavController, private weatherProvider: WeatherProvider) {
    this.weatherProvider.getWeather(this.location).subscribe(result => {
      this.weather = result;
      console.log(this.weather);
    });
  }

}
