export const GAME_SET_CELLS = 'GAME/SET_CELLS';
export const GAME_RESET = 'GAME/RESET';

export const gameSetCells = payload => ({
  type: GAME_SET_CELLS,
  payload,
});

export const gameReset = () => ({
  type: GAME_RESET,
});
