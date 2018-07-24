import { DEFAULT_NUMBER_CELLS, players } from '../../constants';

let initialState = {
  cells: [],
  turnOf: players.PLAYER1,
  isFinished: false,
};

for (let index = 0; index < DEFAULT_NUMBER_CELLS; index++) {
  initialState.cells[index] = players.NONE;
}

export default initialState;
