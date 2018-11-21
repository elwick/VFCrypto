import { takeLatest, call, put, select } from 'redux-saga/effects';

import request from 'utils/request';
import { getCoinSuccessDetailPage, getCoinErrorDetailPage } from './actions';
import { LOAD_COIN_DETAIL_PAGE } from './constants';
import { makeSelectCurrentCurrency } from '../HomePage/selectors';

// Individual exports for testing
export function* getCoin(action) {
  const selectedCoin = action.coin;
  const selectedCurrency = yield select(makeSelectCurrentCurrency());

  const requestURL = `https://api.coinmarketcap.com/v1/ticker/${selectedCoin}/?convert=${selectedCurrency}`;
  try {
    // Call our request helper (see 'utils/request')
    const coin = yield call(request, requestURL);
    yield put(getCoinSuccessDetailPage(coin));
  } catch (err) {
    yield put(getCoinErrorDetailPage(err));
  }
}

export default function* coinData() {
  yield takeLatest(LOAD_COIN_DETAIL_PAGE, getCoin);
}
