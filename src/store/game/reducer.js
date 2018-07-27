import initialState from './initialState';
import { GAME_RESET, GAME_SET_CELL, GAME_SET_CELLS } from './actions';
import { players } from '../../constants';

const gameReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GAME_SET_CELL:
      console.log(payload);
      console.log(state);
      let newCells = state.cells;
      newCells[payload].player = state.turnOf;
      let newTurnOf =
        state.turnOf === players.PLAYER1 ? players.PLAYER2 : players.PLAYER1;
      let newState = {
        ...state,
        ...{ cells: newCells, turnOf: newTurnOf },
      };
      return newState;
    case GAME_SET_CELLS:
      return { ...state, ...payload };
    case GAME_RESET:
      return initialState;
    default:
      return state;
  }
};

export default gameReducer;
