/**
 *
 * Dropdown
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import Select from 'components/Select';

import Option from 'components/Option';

import { getCoins, setCurrency } from '../HomePage/actions';
import { getCoinDetailPage } from '../DetailPage/actions';
import { makeSelectCurrentCurrency } from '../HomePage/selectors';
import { makeSelectCoin } from '../DetailPage/selectors';

/* eslint-disable react/prefer-stateless-function */
export class Dropdown extends React.Component {
  changeCurrency = e => {
    // Select URL from address bar - to check whether the URL contains '/coin/', which indicates the app is on the single coin page
    const URL = window.location.href;

    // Set currency with value from dropdown list
    this.props.setCurrency(e.target.value);

    // Conditional call to the API depending on which page Dropdown is called in
    if (URL.includes('/coin')) {
      const coinName = this.props.coin[0].id;
      this.props.getCoin(coinName);
    } else {
      this.props.getCoins();
    }
  };

  render() {
    const currencies = ['USD', 'GBP', 'EUR', 'JPY', 'KRW'];
    const { selectedCurrency } = this.props;

    // Currency is changed to lowercase to match api keys
    const content = currencies.map(currency => (
      <Option value={currency.toLowerCase()} key={currency}>
        {currency}
      </Option>
    ));

    return (
      <div>
        <Select value={selectedCurrency} onChange={this.changeCurrency}>
          {content}
        </Select>
      </div>
    );
  }
}

Dropdown.propTypes = {
  setCurrency: PropTypes.func.isRequired,
  getCoins: PropTypes.func.isRequired,
  getCoin: PropTypes.func.isRequired,
  selectedCurrency: PropTypes.string.isRequired,
  coin: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};

const mapStateToProps = createStructuredSelector({
  selectedCurrency: makeSelectCurrentCurrency(),
  coin: makeSelectCoin(),
});

function mapDispatchToProps(dispatch) {
  return {
    setCurrency: evt => dispatch(setCurrency(evt)),
    getCoins: evt => dispatch(getCoins(evt)),
    getCoin: evt => dispatch(getCoinDetailPage(evt)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(Dropdown);
