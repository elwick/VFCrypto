import { takeLatest, call, put, select } from 'redux-saga/effects';

import request from 'utils/request';
import { getCoinSuccess, getCoinError } from './actions';
import { LOAD_COINS } from './constants';
import { makeSelectCurrentCurrency } from './selectors';

// Individual exports for testing
export function* getCoins() {
  const currency = yield select(makeSelectCurrentCurrency());

  const requestURL = `https://api.coinmarketcap.com/v1/ticker/?limit=10&convert=${currency}`;

  try {
    // Call our request helper (see 'utils/request')
    const coins = yield call(request, requestURL);
    yield put(getCoinSuccess(coins));
  } catch (err) {
    yield put(getCoinError(err));
  }
}

export default function* currencyData() {
  yield takeLatest(LOAD_COINS, getCoins);
}
