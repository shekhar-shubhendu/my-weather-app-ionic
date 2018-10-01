import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Location } from '../../models/location'; 
import { Observable } from 'rxjs/Observable';

@Injectable()
export class WeatherProvider {

  apiKey = 'OpenWeather API KEY';
  url = 'https://api.openweathermap.org/data/2.5/weather?q=';
  constructor(public http: HttpClient) {
  }

  getWeather(location: Location): Observable<any>{
    return this.http.get(`${this.url}${location.city},${location.country}&appid=${this.apiKey}`);
  }

}
