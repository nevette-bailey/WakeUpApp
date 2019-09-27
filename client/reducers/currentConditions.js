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
export const getConditionsThunk = (geoposition) => {
  return async (dispatch) => {
    try {
      const apiKey = '6qiVJW4Q1FPuCdaU6EJgfmQkFRwgqGpt';
      const locationKey = Number(geoposition);
      const { data } = await Axios.get(
        `http://dataservice.accuweather.com/currentconditions/v1/${locationKey}?apikey=6qiVJW4Q1FPuCdaU6EJgfmQkFRwgqGpt`
      );
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
