import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherCurrentlyComponent } from './weather-currently.component';

describe('WeatherCurrentlyComponent', () => {
  let component: WeatherCurrentlyComponent;
  let fixture: ComponentFixture<WeatherCurrentlyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherCurrentlyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherCurrentlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
