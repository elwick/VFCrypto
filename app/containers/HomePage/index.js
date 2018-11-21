/**
 *
 * HomePage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import injectSaga from 'utils/injectSaga';
import saga from './saga';
import { getCoins } from './actions';
import Header from '../../components/Header';
import { makeSelectLoading } from './selectors';
import Table from '../../components/Table';

/* eslint-disable react/prefer-stateless-function */
export class HomePage extends React.Component {
  componentDidMount() {
    this.props.getCoins();
  }

  render() {
    return (
      <div>
        <Header />
        <Table />
      </div>
    );
  }
}

HomePage.propTypes = {
  getCoins: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  loading: makeSelectLoading(),
});

function mapDispatchToProps(dispatch) {
  return {
    getCoins: evt => dispatch(getCoins(evt)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

// const withReducer = injectReducer({ key: 'homePage', reducer });
const withSaga = injectSaga({ key: 'homePage', saga });

export default compose(
  // withReducer,
  withSaga,
  withConnect,
)(HomePage);
