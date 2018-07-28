import initialState from './initialState';
import { GAME_RESET, GAME_SET_CELL, GAME_SET_CELLS } from './actions';
import { DEFAULT_NUMBER_CELLS, players } from '../../constants';

const gameReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GAME_SET_CELL:
      return applyGameRules(state, payload);
    case GAME_SET_CELLS:
      return { ...state, ...payload };
    case GAME_RESET:
      return initialState;
    default:
      return state;
  }
};

export default gameReducer;

let applyGameRules = (state, payload) => {
  if (state.cells[payload].player !== players.NONE) {
    return state;
  }

  let newCells = state.cells;
  newCells[payload].player = state.turnOf;

  let newState = {
    ...state,
    ...{ cells: newCells },
  };

  // If the game is finished
  const full = isTableFull(newCells);
  const winner = existWinner(newState);
  if (full || winner) {
    let aux = {
      ...newState,
      ...{ isFinished: true, winner: winner ? state.turnOf : players.NONE },
    };
    return aux;
  }

  let newTurnOf =
    state.turnOf === players.PLAYER1 ? players.PLAYER2 : players.PLAYER1;
  newState = {
    ...state,
    ...{ turnOf: newTurnOf },
  };
  return newState;
};

let isTableFull = cells => {
  for (let i = 0; i < cells.length; i++) {
    if (cells[i].player === players.NONE) {
      return false;
    }
  }

  return true;
};

let existWinner = state => {
  let rowSize = Math.sqrt(DEFAULT_NUMBER_CELLS);

  for (let i = 0; i < rowSize; i++) {
    // Vertical
    if (
      state.cells[i].player === state.turnOf &&
      state.cells[i + rowSize].player === state.turnOf &&
      state.cells[i + 2 * rowSize].player === state.turnOf
    ) {
      return true;
    }

    // Horizontal
    let rowIdx = i * rowSize;
    if (
      state.cells[rowIdx].player === state.turnOf &&
      state.cells[rowIdx + 1].player === state.turnOf &&
      state.cells[rowIdx + 2].player === state.turnOf
    ) {
      return true;
    }
  }

  // Diagonal
  if (
    (state.cells[0] === state.turnOf &&
      state.cells[rowSize + 1] === state.turnOf &&
      state.cells[2 * (rowSize + 1)] === state.turnOf) ||
    (state.cells[2 * rowSize] === state.turnOf &&
      state.cells[rowSize + 1] === state.turnOf &&
      state.cells[rowSize - 1] === state.turnOf)
  ) {
    return true;
  }

  return false;
};
