import { GET_WEATHER, GET_WEATHER_SUCCESS, GET_WEATHER_FAIL } from './weather.actions';

const initialState= {
    pending: false,
    weather: [],
    error: null,
  };
  
export function weatherReducer(state = initialState, action: {type: string, payload: any}) {
    switch (action.type) {
      case GET_WEATHER:
        return {
            ...state,
            ...action.payload
        }
      case GET_WEATHER_SUCCESS:
        return {
          pending: false,
          weather: action.payload,
          error: null,
        };
    }
  }
  