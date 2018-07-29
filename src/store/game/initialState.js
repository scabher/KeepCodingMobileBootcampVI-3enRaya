import { DEFAULT_NUMBER_CELLS, players } from '../../constants';

let initialState = {
  cells: [],
  turnOf: players.PLAYER1,
  isFinished: false,
  winner: players.NONE,
  showResult: false,
};

for (let index = 0; index < DEFAULT_NUMBER_CELLS; index++) {
  initialState.cells[index] = { id: index, player: players.NONE };
}

export default initialState;
