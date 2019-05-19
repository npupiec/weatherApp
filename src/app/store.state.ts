import { IStore } from './models/interfaces/store.interface';
import { weatherReducer } from './state/weather.reducer';

export const store: IStore = {
    weather: weatherReducer
}
