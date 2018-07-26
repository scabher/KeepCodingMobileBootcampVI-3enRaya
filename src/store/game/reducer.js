import initialState from './initialState';
import { GAME_RESET, GAME_SET_CELLS } from './actions';

const gameReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GAME_SET_CELLS:
      return { ...state, ...payload };
    case GAME_RESET:
      return initialState;
    default:
      return state;
  }
};

export default gameReducer;
