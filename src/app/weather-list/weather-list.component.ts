import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-weather-list',
  templateUrl: './weather-list.component.html',
  styleUrls: ['./weather-list.component.scss']
})
export class WeatherListComponent implements OnInit {
  @Input() list;
  @Output() weather = new EventEmitter<object>();

  selectedIndex: number = null;

  constructor() {}

  ngOnInit(){
  }

  remove(item: object) {
    this.list = this.list.filter((obj)=>obj !== item);
    localStorage.setItem('location', JSON.stringify(this.list));
  }

  select(item, index) {
    this.weather.emit(item);
    this.selectedIndex = index;
  }
}
