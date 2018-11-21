import { createSelector } from 'reselect';

const selectDetailPage = state => state.get('detailPage');

// Select single coin for DetailPage
const makeSelectCoin = () =>
  createSelector(selectDetailPage, detailPageState =>
    detailPageState.get('coin'),
  );

// Loading
const makeSelectLoading = () =>
  createSelector(selectDetailPage, detailPageState =>
    detailPageState.get('loading'),
  );

export { makeSelectCoin, makeSelectLoading };
