import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WeatherProvider } from '../../providers/weather/weather';
import { Location } from '../../models/location';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  location: Location;
  weather: any;
  constructor(public navCtrl: NavController, private weatherProvider: WeatherProvider, private storage: Storage) {
  }

  ionViewWillEnter() {
    this.storage.get('location').then(val => {
      if (val !== null) {
        this.location = JSON.parse(val);
      } else {
        this.location = {
          city: 'London',
          country: 'UK'
        };
      }

      this.weatherProvider.getWeather(this.location).subscribe(result => {
        this.weather = result;
      });

    })
  }

}
