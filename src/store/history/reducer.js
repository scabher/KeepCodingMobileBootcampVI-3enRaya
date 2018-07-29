import { HISTORY_ADD, HISTORY_GET_ALL } from './actions';
import initialState from './initialState';

const historyReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case HISTORY_ADD:
      return [...state, payload];
    case HISTORY_GET_ALL:
      return state;
    default:
      return state;
  }
};

export default historyReducer;
