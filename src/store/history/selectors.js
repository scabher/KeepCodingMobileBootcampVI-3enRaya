import { createSelector } from 'reselect';

export const historySelector = state => state.history;

export const formatedHistorySelector = createSelector(
  historySelector,
  history =>
    history.map(({ createdAt, ...rest }) => ({
      ...rest,
      createdAt: new Date(createdAt).toLocaleString(),
    })),
);
