import { HISTORY_ADD, HISTORY_SET } from './actions';
import initialState from './initialState';

const historyReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case HISTORY_ADD:
      return [...state, payload];
    case HISTORY_SET:
      return payload;
    default:
      return state;
  }
};

export default historyReducer;
