import { createSelector } from 'reselect';

export const gameSelector = state => state.game;

export const gameCellsSelector = createSelector(
  gameSelector,
  game => game.cells,
);

export const gameTurnOfSelector = createSelector(
  gameSelector,
  game => game.turnOf,
);

export const gameShowResultSelector = createSelector(
  gameSelector,
  game => game.showResult,
);

export const gameWinnerSelector = createSelector(
  gameSelector,
  game => game.winner,
);
