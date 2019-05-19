import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { GET_WEATHER } from '../state/weather.actions';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-weather-currently',
  templateUrl: './weather-currently.component.html',
  styleUrls: ['./weather-currently.component.scss']
})
export class WeatherCurrentlyComponent implements OnInit {
  subMap: Subscription[] = [];
  weather;
  iconToday: ImageData;
  list: any[] =[];
  longitude: number;
  latitude: number;

  constructor(private store: Store<any>) { 
    if (this.list.length > 0) {
      this.list = JSON.parse(localStorage.getItem('location'));
    }
  }

  ngOnInit() {
    this.store.select(store => store.weather).pipe(filter(x => x)).subscribe(weathers => {this.weather = weathers
        if (this.weather) {
          this.iconToday = this.weather.weather.currently;
          this.list.push(this.weather);
          localStorage.setItem('location', JSON.stringify(this.list));
        }
    });
  }

  addToList(form){
    let x = form.value.getLatitude;
    let y = form.value.getLongitude;
    this.store.dispatch({type: GET_WEATHER, payload: [x, y]});
    this.weather = JSON.parse(localStorage.getItem('location'));
    this.longitude = null;
    this.latitude = null;
    
  }

  getWeatherItem(e) {
    this.weather = e;
    this.longitude = e.weather.longitude;
    this.latitude = e.weather.latitude;
  }
}
