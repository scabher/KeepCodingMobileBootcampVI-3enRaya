export const GAME_SET_CELL = 'GAME/SET_CELL';
export const GAME_RESET = 'GAME/RESET';
export const GAME_RESULT_CLICK = 'GAME/RESULT_CLICK';

export const gameSetCell = payload => ({
  type: GAME_SET_CELL,
  payload,
});

export const gameResultClick = () => ({
  type: GAME_RESULT_CLICK,
});

export const gameReset = () => ({
  type: GAME_RESET,
});
