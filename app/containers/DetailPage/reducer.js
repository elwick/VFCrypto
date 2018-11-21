import { fromJS } from 'immutable';

import {
  LOAD_COIN_DETAIL_PAGE,
  LOAD_COIN_DETAIL_PAGE_SUCCESS,
  LOAD_COIN_DETAIL_PAGE_ERROR,
} from './constants';

const initialState = fromJS({
  loading: false,
  coin: {},
  time: {
    lastUpdated: Date(),
  },
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_COIN_DETAIL_PAGE:
      return state.set('loading', true);
    case LOAD_COIN_DETAIL_PAGE_SUCCESS:
      return state
        .set('coin', action.coin)
        .set('loading', false)
        .setIn(['time', 'lastUpdated'], Date());
    case LOAD_COIN_DETAIL_PAGE_ERROR:
      return state.set('error', action.error).set('loading', false);
    default:
      return state;
  }
}

export default appReducer;
