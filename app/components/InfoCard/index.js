/**
 *
 * Table
 *
 */

import React from 'react';
import NumberFormat from 'react-number-format';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import TitleWrapper from './TitleWrapper';
import CurrencyWrapper from './CurrencyWrapper';
import FigureWrapper from './FigureWrapper';
import SymbolWrapper from './SymbolWrapper';

function Index(props) {
  const { title, currency, figure, symbol, className } = props;

  // Symbols for currency selected
  const prefixCurrency = {
    usd: '$',
    gbp: '£',
    eur: '€',
    jpy: '¥',
    krw: '₩',
  };

  return (
    <div className={className}>
      <TitleWrapper>{title}</TitleWrapper>
      <CurrencyWrapper>{prefixCurrency[currency]}</CurrencyWrapper>
      <FigureWrapper>
        <NumberFormat
          value={figure}
          displayType={'text'}
          thousandSeparator
          decimalScale={2}
        />
        <SymbolWrapper>{symbol}</SymbolWrapper>
      </FigureWrapper>
    </div>
  );
}

Index.propTypes = {
  title: PropTypes.string.isRequired,
  currency: PropTypes.string,
  figure: PropTypes.string,
  symbol: PropTypes.string,
  className: PropTypes.string.isRequired,
};

export default styled(Index)`
  margin-bottom: 2em;
  width: 21em;
`;
