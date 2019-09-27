import {
  GET_LOCATION,
  GET_LOCATION_ERROR,
  SET_LOCATION,
  SET_LOCATION_ERROR
} from './index';

//action creators
const getLocation = (location) => ({
  type: GET_LOCATION,
  location
});

const getLocationError = (error) => ({
  type: GET_LOCATION_ERROR,
  error
});

const setLocation = (location) => ({
  type: SET_LOCATION,
  location
});

const setLocationError = (error) => ({
  type: SET_LOCATION_ERROR,
  error
});


//thunk creators
// //not async because api is through phone?
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
export default function temperature(state = 0, action) {
  switch (action.type) {
    case SET_TEMP:
      return action.temp;
    default:
      return state;
  }
}
