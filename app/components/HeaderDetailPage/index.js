import React from 'react';
import PropTypes from 'prop-types';
import Dropdown from '../../containers/Dropdown';

import CoinInfoHeader from '../CoinInfoHeader';
import WrapperHeader from './WrapperHeader';
import WrapperDiv from './WrapperDiv';

function HeaderDetailPage(props) {
  const { coinData, selectedCurrency } = props;
  return (
    <WrapperHeader>
      <CoinInfoHeader selectedCurrency={selectedCurrency} coinData={coinData} />
      <WrapperDiv>
        <Dropdown />
      </WrapperDiv>
    </WrapperHeader>
  );
}

HeaderDetailPage.propTypes = {
  coinData: PropTypes.object.isRequired,
  selectedCurrency: PropTypes.string.isRequired,
};

export default HeaderDetailPage;
