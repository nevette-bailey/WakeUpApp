import { GET_CURRENT_CONDITIONS, GET_CONDITIONS_ERROR } from './index';
import Axios from 'axios';

//action creators
const getConditions = (currentConditions) => ({
  type: GET_CURRENT_CONDITIONS,
  currentConditions
});

const getConditionsError = (error) => ({
  type: GET_CONDITIONS_ERROR,
  error
});

//thunk creators
export const getConditionsThunk = (location) => {
  return async (dispatch) => {
    try {
      const apiKey = '9c58c17a1a53d693ab05693a144ca1c8';
      // const locationKey = Number(geoposition);
      const lat = location.coords.latitude;
      const lon = location.coords.longitude;
      const { data } = await Axios.get(
        `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`
      );
      console.log(data, 'CONDITIONS DATA')
      dispatch(getConditions(data));
    } catch (error) {
      dispatch(getConditionsError(error));
    }
  };
};

//subreducer for current conditions
export default function currentConditions(state = {}, action) {
  switch (action.type) {
    case GET_CURRENT_CONDITIONS:
      return action.currentConditions;
    default:
      return state;
  }
}
