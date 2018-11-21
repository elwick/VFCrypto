import React from 'react';
import PropTypes from 'prop-types';
import Wrapper from './Wrapper';
import Rank from '../RankCard/Rank';
import InfoCard from '../InfoCard/index';
import WrapperRight from './WrapperRight';
import WrapperLeft from './WrapperLeft';

function HeaderDetailPage(props) {
  const { coinData, selectedCurrency } = props;
  return (
    <Wrapper>
      <WrapperLeft>
        <Rank rank={coinData.rank} />
      </WrapperLeft>

      <WrapperRight>
        {/* Render 4 'cards' with data passed through */}
        <InfoCard
          title={'Market Cap'}
          currency={selectedCurrency}
          figure={coinData[`market_cap_${selectedCurrency}`]}
        />
        <InfoCard
          title={'24H Volume'}
          currency={selectedCurrency}
          figure={coinData[`24h_volume_${selectedCurrency}`]}
        />
        <InfoCard
          title={'Circulating Supply'}
          figure={coinData.total_supply}
          symbol={coinData.symbol}
        />
        <InfoCard
          title={'Total Supply'}
          figure={coinData.max_supply}
          symbol={coinData.symbol}
        />
      </WrapperRight>
    </Wrapper>
  );
}

HeaderDetailPage.propTypes = {
  coinData: PropTypes.object.isRequired,
  selectedCurrency: PropTypes.string.isRequired,
};

export default HeaderDetailPage;
