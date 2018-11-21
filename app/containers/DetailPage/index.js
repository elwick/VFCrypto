/**
 *
 * DetailPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import injectSaga from 'utils/injectSaga';
import { createStructuredSelector } from 'reselect';
import saga from './saga';
import { getCoinDetailPage } from './actions';
import { makeSelectCoin, makeSelectLoading } from './selectors';
import HeaderDetailPage from '../../components/HeaderDetailPage';
import DetailPageInfo from '../../components/DetailPageInfo';
import { makeSelectCurrentCurrency } from '../HomePage/selectors';
import Loader from '../../components/Loader/Loader';

/* eslint-disable react/prefer-stateless-function */
export class DetailPage extends React.Component {
  componentDidMount() {
    this.props.getCoin(this.props.match.params.id);
  }

  render() {
    const { coin, selectedCurrency, loading } = this.props;
    const coinData = coin[0];

    const content =
      !coinData || loading ? (
        <Loader />
      ) : (
        <React.Fragment>
          <HeaderDetailPage
            selectedCurrency={selectedCurrency}
            coinData={coinData}
          />

          <DetailPageInfo
            selectedCurrency={selectedCurrency}
            coinData={coinData}
          />
        </React.Fragment>
      );

    return <React.Fragment>{content}</React.Fragment>;
  }
}

DetailPage.propTypes = {
  getCoin: PropTypes.func.isRequired,
  coin: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  match: PropTypes.object.isRequired,
  selectedCurrency: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
};

const mapStateToProps = createStructuredSelector({
  coin: makeSelectCoin(),
  selectedCurrency: makeSelectCurrentCurrency(),
  loading: makeSelectLoading(),
});

function mapDispatchToProps(dispatch) {
  return {
    getCoin: evt => dispatch(getCoinDetailPage(evt)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

// const withReducer = injectReducer({ key: 'detailPage', reducer });
const withSaga = injectSaga({ key: 'detailPage', saga });

export default compose(
  // withReducer,
  withSaga,
  withConnect,
)(DetailPage);
