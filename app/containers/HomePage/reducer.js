import { fromJS } from 'immutable';

import {
  LOAD_COINS,
  LOAD_COINS_SUCCESS,
  LOAD_COINS_ERROR,
  SET_CURRENCY,
} from './constants';

const initialState = fromJS({
  loading: false,
  error: false,
  coins: [],
  selectedCurrency: 'usd',
  time: {
    lastUpdated: Date(),
  },
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_COINS:
      return state.set('loading', true).set('error', false);
    case LOAD_COINS_SUCCESS:
      return state
        .set('loading', false)
        .set('error', false)
        .set('coins', action.coins)
        .setIn(['time', 'lastUpdated'], Date());
    case LOAD_COINS_ERROR:
      return state.set('error', action.error).set('loading', false);
    case SET_CURRENCY:
      return state.set('selectedCurrency', action.currency);
    default:
      return state;
  }
}

export default appReducer;
