import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { WeatherEffects } from '../state/weather.effects';
import { WeatherCurrentlyComponent } from './weather-currently.component';
import { FormsModule } from '@angular/forms';
import { WeatherListComponent } from '../weather-list/weather-list.component';

@NgModule({
    imports: [
      CommonModule,
      HttpClientModule,
      FormsModule,
    //   RouterModule,
      EffectsModule.forRoot([WeatherEffects])
    ],
    declarations: [WeatherCurrentlyComponent, WeatherListComponent],
    exports: [WeatherCurrentlyComponent]

  })
  export class WeatherCurrentlyModule { }
