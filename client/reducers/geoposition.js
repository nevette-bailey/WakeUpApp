import { GET_GEOPOSITION, GET_GEOPOSITION_ERROR } from './index';
import Axios from 'axios';

//action creators
const getGeoposition = (geoposition) => ({
  type: GET_GEOPOSITION,
  geoposition
});

const getGeopositionError = (error) => ({
  type: GET_GEOPOSITION_ERROR,
  error
});

//thunk creators
export const getLocationIdThunk = (location) => {
  return async (dispatch) => {
    try {
      const apiKey = '9c58c17a1a53d693ab05693a144ca1c8';
      const lat = location.coords.latitude;
      const lon = location.coords.longitude;
      const { data } = await Axios.get(
        `http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=6qiVJW4Q1FPuCdaU6EJgfmQkFRwgqGpt&q=${lat}%2C%20${lon}`
      );
      // console.log(data, 'DATA')
      const geoposition = data.Key;
      dispatch(getGeoposition(geoposition));
    } catch (error) {
      dispatch(getGeopositionError(error));
    }
  };
};

//subreducer for geoposition
export default function geoposition(state = '', action) {
  switch (action.type) {
    case GET_GEOPOSITION:
      return action.geoposition;
    default:
      return state;
  }
}
