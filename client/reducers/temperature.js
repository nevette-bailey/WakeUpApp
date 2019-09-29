import Axios from 'axios';
import { SET_TEMP, SET_TEMP_ERROR, GET_CURRENT_CONDITIONS } from './index';

//action creators
const setTemperature = (temp) => ({
  type: SET_TEMP,
  temp
});

const setTemperatureErrorAction = (error) => ({
  type: SET_TEMP_ERROR,
  error
});

//thunk creators
// //not async because no database requst is made yet
export const setTempThunk = (temp) => {
  return (dispatch) => {
    try {
      dispatch(setTemperature(temp));
    } catch (error) {
      dispatch(setTemperatureErrorAction(error));
    }
  };
};

//subreducer for temperature
export default function temperature(state = null, action) {
  switch (action.type) {
    case SET_TEMP:
      return action.temp;
    case GET_CURRENT_CONDITIONS:
      return Math.round(action.currentConditions.main.temp * (9/5) - 459.67)
    default:
      return state;
  }
}
