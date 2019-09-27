import { combineReducers } from 'redux';
import temperature from './temperature';

//action types
export const SET_TEMP = 'SET_TEMP';
export const SET_TEMP_ERROR = 'SET_TEMP_ERROR';
export const GET_LOCATION = 'GET_LOCATION';
export const GET_LOCATION_ERROR = 'GET_LOCATION_ERROR';
export const SET_LOCATION = 'SET_LOCATION';
export const SET_LOCATION_ERROR = 'SET_LOCATION_ERROR';

export const GET_CURRENT_CONDITIONS = 'GET_CURRENT_CONDITIONS';
export const GET_CONDITIONS_ERROR = 'GET_CONDITIONS_ERROR';

const rootReducer = combineReducers({
  temperature
});

export default rootReducer;
