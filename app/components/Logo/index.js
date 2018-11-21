/**
 *
 * Logo
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import Wrapper from './Wrapper';

function Logo({ className }) {
  return (
    <Wrapper>
      <h2 className={className}>VF Crypto</h2>
    </Wrapper>
  );
}

Logo.propTypes = {
  className: PropTypes.string.isRequired,
};

export default Logo;
