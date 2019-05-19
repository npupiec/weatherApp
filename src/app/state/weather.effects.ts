import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable, of } from 'rxjs';
import {Actions, Effect, ofType} from "@ngrx/effects";
import {Action} from "@ngrx/store";
import {catchError, map, mergeMap} from "rxjs/operators";
import { GET_WEATHER, 
        GET_WEATHER_SUCCESS, 
        GET_WEATHER_FAIL,
        DELETE_WEATHER,
        DELETE_WEATHER_SUCCESS,
        DELETE_WEATHER_FAIL
    } from './weather.actions';

@Injectable()
export class WeatherEffects {
  constructor (private http: HttpClient, private actions$: Actions) {}

  @Effect() getWeather$: Observable<Action> = this.actions$.pipe(
    ofType(GET_WEATHER),
    mergeMap((action: any) => {
        console.log(action.payload)
      const proxy = 'https://cors-anywhere.herokuapp.com/';
      return this.http.get<object[]>(proxy + `https://api.darksky.net/forecast/e6af5b5feb891b272e18f5e2fc0370a6/${action.payload}`)
        .pipe(
          map((weather) => {
            return ({type: GET_WEATHER_SUCCESS, payload: weather})
          }),
          catchError((err: Error) => of({type: GET_WEATHER_FAIL, payload: err.message}))
        )
    })
  )
}