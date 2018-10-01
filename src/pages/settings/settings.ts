import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Location } from '../../models/location'; 
import { Storage } from '@ionic/storage';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  location: Location;
  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {
    this.location = {
      city: 'London',
      country: 'UK'
    };
  }

  ionViewWillEnter(){
    this.storage.get('location').then(val => {
      if (val !== null) {
        this.location = JSON.parse(val);
      } else {
        this.location = {
          city: 'London',
          country: 'UK'
        };
      }
    });
  }

  saveForm(){
    this.storage.set('location', JSON.stringify(this.location));
    this.navCtrl.push(HomePage);
  }

}
