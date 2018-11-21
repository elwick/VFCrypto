import React from 'react';
import PropTypes from 'prop-types';
import NumberFormat from 'react-number-format';
import Wrapper from './Wrapper';
import WrapperRight from './WrapperRight';
import WrapperLeft from './WrapperLeft';
import Image from './Image';
import P from './P';
import Span from './Span';
import CurrencyWrapper from './CurrencyWrapper';
import ButtonWrapper from './ButtonWrapper';

// Displays Coin information in header when on a Coin Detail page
function CoinInfoHeader(props) {
  const { coinData, selectedCurrency } = props;

  // Object containing Symbols for the selected currency
  const prefixCurrency = {
    usd: '$',
    gbp: '£',
    eur: '€',
    jpy: '¥',
    krw: '₩',
  };

  return (
    <Wrapper>
      <ButtonWrapper to={'/'}>
        <img src={require('images/back.svg')} alt="" width={20} />
      </ButtonWrapper>

      <WrapperLeft>
        <Image width={45} image={`${coinData.id}.svg`} />
        <P>
          {coinData.name} <Span>{coinData.symbol}</Span>
        </P>
      </WrapperLeft>

      <WrapperRight>
        <CurrencyWrapper>
          {prefixCurrency[`${selectedCurrency}`]}
        </CurrencyWrapper>
        <NumberFormat
          value={coinData[`price_${selectedCurrency}`]}
          displayType="text"
          thousandSeparator
          decimalScale={2}
        />
      </WrapperRight>
    </Wrapper>
  );
}

CoinInfoHeader.propTypes = {
  coinData: PropTypes.object.isRequired,
  selectedCurrency: PropTypes.string.isRequired,
};

export default CoinInfoHeader;
