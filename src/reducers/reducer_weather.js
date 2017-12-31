import { FETCH_WEATHER } from '../actions/index';

export default function (state = [], action) {
  console.log(`action received:`, action);
  switch (action.type) {
    case FETCH_WEATHER:
      if (action.payload.status !== 200) {
        console.log('search failed',action.payload)
        return state;
      } else {
        return [action.payload.data, ...state];
      }
    default:
      return state;
  }
}