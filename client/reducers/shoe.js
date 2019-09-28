import { GET_SHOES, GET_SHOES_ERROR } from './index';
import Axios from 'axios';

//get the shoes associated with a specific temperature, not currently accounting for precipitation

//action creators
const getShoes = (shoes) => ({
  type: GET_SHOES,
  shoes
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
      const { data } = await Axios.get(`/api/weather/${temp}`);
      console.log(data, 'DATA HERE')
    } catch (error) {
      dispatch(getShoesError(error));
    }
  };
};
