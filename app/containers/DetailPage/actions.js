import {
  LOAD_COIN_DETAIL_PAGE,
  LOAD_COIN_DETAIL_PAGE_SUCCESS,
  LOAD_COIN_DETAIL_PAGE_ERROR,
} from './constants';

export function getCoinDetailPage(coin) {
  return {
    type: LOAD_COIN_DETAIL_PAGE,
    coin,
  };
}

export function getCoinSuccessDetailPage(coin) {
  return {
    type: LOAD_COIN_DETAIL_PAGE_SUCCESS,
    coin,
  };
}

export function getCoinErrorDetailPage(error) {
  return {
    type: LOAD_COIN_DETAIL_PAGE_ERROR,
    error,
  };
}
