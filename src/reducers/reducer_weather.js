import { FETCH_WEATHER } from '../actions/index';

export default function(state=[], action) {
  switch(action.type) {
    case FETCH_WEATHER:
    //take action.payload.data, return a new array, and spread out exisitng state
    //array, and add that to new array as well. Means we don't mutate state
      return [action.payload.data, ...state];
    default:
      return state;
  }
}
