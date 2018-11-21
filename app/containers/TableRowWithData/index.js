/**
 *
 * TableRowWithData
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import NumberFormat from 'react-number-format';
import Image from 'components/Image';
import {
  makeSelectCoins,
  makeSelectCurrentCurrency,
  makeSelectLoading,
} from '../HomePage/selectors';
import CurrencyWrapper from './CurrencyWrapper';
import IndexWrapper from './IndexWrapper';
import NameWrapper from './NameWrapper';
import RowWrapper from './RowWrapper';
import CellWrapper from './CellWrapper';

import Loader from '../../components/Loader/Loader';
import A from 'components/A';

/* eslint-disable react/prefer-stateless-function */
export class TableRowWithData extends React.Component {
  render() {
    const { coins, selectedCurrency, className, loading } = this.props;

    // Object containing Symbols for the selected currency
    const prefixCurrency = {
      usd: '$',
      gbp: '£',
      eur: '€',
      jpy: '¥',
      krw: '₩',
    };

    /* Variable holding content for rows of data for the homepage table */
    // Conditionally Render Rows of data
    const content = loading ? (
      // If loading show Loader component
      <Loader />
    ) : (
      // If not loading
      // Map through the coins pulled from the API
      coins.map((coin, index) => (
        // Map individual coin into a clickable row containing coin information
        <A key={coin.id} to={`/coin/${coin.id}`}>
          <RowWrapper className={className} key={coin.name}>
            <CellWrapper>
              <IndexWrapper>{index + 1}</IndexWrapper>
              <Image width={25} image={`${coin.id}.svg`} />
              <NameWrapper>{coin.name}</NameWrapper>
            </CellWrapper>
            <CellWrapper>
              <CurrencyWrapper>
                {prefixCurrency[selectedCurrency]}
              </CurrencyWrapper>
              <NumberFormat
                value={coin[`price_${selectedCurrency}`]}
                displayType={'text'}
                thousandSeparator
                decimalScale={2}
              />
            </CellWrapper>
            <CellWrapper>
              <CurrencyWrapper>
                {prefixCurrency[selectedCurrency]}
              </CurrencyWrapper>
              <NumberFormat
                value={coin[`market_cap_${selectedCurrency}`]}
                displayType={'text'}
                thousandSeparator
                decimalScale={2}
              />
            </CellWrapper>
            <CellWrapper
              style={{
                color: coin.percent_change_24h.includes('-') ? 'red' : 'green',
              }}
            >
              {coin.percent_change_24h}%
            </CellWrapper>
          </RowWrapper>
        </A>
      ))
    );

    // Render all rows
    return <React.Fragment>{content}</React.Fragment>;
  }
}

TableRowWithData.propTypes = {
  selectedCurrency: PropTypes.string.isRequired,
  coins: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  loading: PropTypes.bool.isRequired,
  className: PropTypes.string.isRequired,
};

const mapStateToProps = createStructuredSelector({
  coins: makeSelectCoins(),
  selectedCurrency: makeSelectCurrentCurrency(),
  loading: makeSelectLoading(),
});

const withConnect = connect(mapStateToProps);

export default compose(withConnect)(TableRowWithData);
