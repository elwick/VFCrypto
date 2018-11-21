import {
  LOAD_COINS,
  LOAD_COINS_SUCCESS,
  LOAD_COINS_ERROR,
  SET_CURRENCY,
} from './constants';

export function getCoins() {
  return {
    type: LOAD_COINS,
  };
}

export function getCoinSuccess(coins) {
  return {
    type: LOAD_COINS_SUCCESS,
    coins,
  };
}

export function getCoinError(error) {
  return {
    type: LOAD_COINS_ERROR,
    error,
  };
}

export function setCurrency(currency) {
  return {
    type: SET_CURRENCY,
    currency,
  };
}
