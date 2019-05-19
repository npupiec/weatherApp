import { ActionReducer } from '@ngrx/store';

export interface IStore {
  weather: ActionReducer<IWeatherState>;
  }
  
export interface IStoreState {
  weather: IWeatherState;
}

export interface IFetchingError {
  reducer: string;
  error: {
    message: string;
  };
}
  
export interface IWeatherState {
  pending: false,
  weather: IWeather[],
  error: any,
}

export interface IWeather {
  latitude: number;
  longitude: number;
  timezone: string;
  currently: object;
  hourly: object;
  daily: object;
  flags; object;
  offset: number;
}
  