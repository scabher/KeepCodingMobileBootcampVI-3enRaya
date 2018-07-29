import { createSelector } from 'reselect';

export const gameSelector = state => state.game;

export const gameCellsSelector = createSelector(
  gameSelector,
  game => game.cells,
);
