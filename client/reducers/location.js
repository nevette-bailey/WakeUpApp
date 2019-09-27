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
export const getLocationThunk = () => {
  return (dispatch) => {
    try {
      dispatch(getLocation(location));
    } catch (error) {
      dispatch(getLocationError(error));
    }
  };
};

export const setLocationThunk = (location) => {
  return (dispatch) => {
    try {
      dispatch(setLocation(location));
    } catch (error) {
      dispatch(setLocationError(error));
    }
  };
};

//subreducer for temperature
export default function location(state = {}, action) {
  switch (action.type) {
    case SET_LOCATION:
      return action.location;
    default:
      return state;
  }
}
