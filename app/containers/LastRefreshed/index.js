import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import Wrapper from './Wrapper';
import Paragraph from './Paragraph';
import SpanWrapper from './SpanWrapper';

import { makeSelectLastRefreshed } from '../HomePage/selectors';

/* eslint-disable react/prefer-stateless-function */
export class LastRefreshed extends React.Component {
  render() {
    // Pulls last refreshed time through selector and displays
    return (
      <div>
        <Wrapper>
          <Paragraph>
            <SpanWrapper> Last Refresh:</SpanWrapper> {this.props.lastRefreshed}
          </Paragraph>
        </Wrapper>
      </div>
    );
  }
}

LastRefreshed.propTypes = {
  lastRefreshed: PropTypes.string.isRequired,
};

const mapStateToProps = createStructuredSelector({
  lastRefreshed: makeSelectLastRefreshed(),
});

const withConnect = connect(mapStateToProps);

export default compose(withConnect)(LastRefreshed);
