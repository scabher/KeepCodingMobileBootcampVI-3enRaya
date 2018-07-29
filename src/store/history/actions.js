import shortid from 'shortid';

export const HISTORY_ADD = 'HISTORY/ADD';
export const HISTORY_SET = 'HISTORY/SET';
export const HISTORY_GET_ALL = 'HISTORY/GET_ALL';

export const historyAdd = payload => ({
  type: HISTORY_ADD,
  payload: {
    ...payload,
    id: shortid.generate(),
  },
});

export const historyGetAll = () => ({
  type: HISTORY_GET_ALL,
});
