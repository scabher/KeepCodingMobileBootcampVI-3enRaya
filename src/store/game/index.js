export { default as gameReducer } from './reducer';
export { gameReset, gameSetCell, gameResultClick } from './actions';
export {
  gameCellsSelector,
  gameTurnOfSelector,
  gameShowResultSelector,
  gameWinnerSelector,
} from './selectors';
