import { GET_SHOES, GET_SHOES_ERROR } from './index';
import Axios from 'axios';

//get the shoes associated with a specific temperature, not currently accounting for precipitation

//action creators
const getShoes = (weather) => ({
  type: GET_SHOES,
  weather
});

const getShoesError = (error) => ({
  type: GET_SHOES_ERROR,
  error
});

//thunk creators
export const getShoesThunk = (temperature) => {
  return async (dispatch) => {
    try {
      const temp = Number(temperature);
      if (temp) {
        console.log(' before Axios DATA HERE------------------', temp);

        const { data } = await Axios.get('/api/shoe');
        console.log(data, 'DATA HERE----------------------------------');
        dispatch(getShoes(data));
      }
    } catch (error) {
      dispatch(getShoesError(error));
    }
  };
};

//subreducer for shoes
export default function shoe(state = null, action) {
  switch (action.type) {
    case GET_SHOES:
      return action;
    default:
      return state;
  }
}
