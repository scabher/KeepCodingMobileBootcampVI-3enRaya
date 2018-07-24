import initialState from './initialState';
import { GAME_SET_CELLS } from './actions';

const gameReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GAME_SET_CELLS:
      return { ...state, cells: payload };
    default:
      return state;
  }
};

export default gameReducer;
