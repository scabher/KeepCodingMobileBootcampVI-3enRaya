import initialState from './initialState';
import { GAME_RESET, GAME_SET_CELL, GAME_RESULT_CLICK } from './actions';
import { DEFAULT_NUMBER_CELLS, players } from '../../constants';

const gameReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GAME_SET_CELL:
      let newState = applyGameRules(state, payload);
      return {
        ...state,
        ...{
          cells: newState.cells,
          turnOf: newState.turnOf,
          isFinished: newState.isFinished,
          showResult: newState.showResult,
          winner: newState.winner,
        },
      };
    case GAME_RESULT_CLICK:
      return { ...state, ...{ showResult: false } };
    case GAME_RESET:
      console.log('GAME_RESET - Initial state:', initialState);
      return initialState;
    default:
      return state;
  }
};

export default gameReducer;

let applyGameRules = (state, payload) => {
  // Click on a non-free
  if (
    state.isFinished ||
    state.cells[payload].player.name !== players.NONE.name
  ) {
    return state;
  }

  let newCells = Object.assign([], state.cells);
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
      ...{
        isFinished: true,
        showResult: true,
        winner: winner ? state.turnOf : players.NONE,
      },
    };
    return aux;
  }

  newState.turnOf =
    state.turnOf.name === players.PLAYER1.name
      ? players.PLAYER2
      : players.PLAYER1;

  return newState;
};

let isTableFull = cells => {
  for (let i = 0; i < cells.length; i++) {
    if (cells[i].player.name === players.NONE.name) {
      return false;
    }
  }

  return true;
};

let existWinner = state => {
  let rowSize = Math.sqrt(DEFAULT_NUMBER_CELLS);
  let playerName = state.turnOf.name;

  for (let i = 0; i < rowSize; i++) {
    // Vertical
    if (
      state.cells[i].player.name === playerName &&
      state.cells[i + rowSize].player.name === playerName &&
      state.cells[i + 2 * rowSize].player.name === playerName
    ) {
      return true;
    }

    // Horizontal
    let rowIdx = i * rowSize;
    if (
      state.cells[rowIdx].player.name === playerName &&
      state.cells[rowIdx + 1].player.name === playerName &&
      state.cells[rowIdx + 2].player.name === playerName
    ) {
      return true;
    }
  }

  // Diagonal
  if (
    (state.cells[0].player.name === playerName &&
      state.cells[rowSize + 1].player.name === playerName &&
      state.cells[2 * (rowSize + 1)].player.name === playerName) ||
    (state.cells[2 * rowSize].player.name === playerName &&
      state.cells[rowSize + 1].player.name === playerName &&
      state.cells[rowSize - 1].player.name === playerName)
  ) {
    return true;
  }

  return false;
};
