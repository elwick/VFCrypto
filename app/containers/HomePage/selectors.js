import { createSelector } from 'reselect';

const selectGlobal = state => state.get('global');

// Current Currency Selected
const makeSelectCurrentCurrency = () =>
  createSelector(selectGlobal, currencyState =>
    currencyState.get('selectedCurrency'),
  );

// Select coins for homepage table display
const makeSelectCoins = () =>
  createSelector(selectGlobal, globalState => globalState.get('coins'));

// Last refreshed time
const makeSelectLastRefreshed = () =>
  createSelector(selectGlobal, globalState =>
    globalState.getIn(['time', 'lastUpdated']),
  );

// Loading
const makeSelectLoading = () =>
  createSelector(selectGlobal, globalState => globalState.get('loading'));

export {
  makeSelectCurrentCurrency,
  makeSelectLastRefreshed,
  makeSelectCoins,
  makeSelectLoading,
};
