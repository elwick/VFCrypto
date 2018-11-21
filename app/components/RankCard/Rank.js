import React from 'react';
import PropTypes from 'prop-types';
import NumberWrapper from './NumberWrapper';
import RankNumberWrapper from './RankNumberWrapper';
// import styled from 'styled-components';

function Rank(props) {
  const { rank } = props;
  return (
    <div>
      <RankNumberWrapper> Rank</RankNumberWrapper>
      <NumberWrapper>{rank}</NumberWrapper>
    </div>
  );
}

Rank.propTypes = {
  rank: PropTypes.string.isRequired,
};

export default Rank;
