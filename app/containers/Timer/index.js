import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectCurrentCurrency } from '../HomePage/selectors';
import { getCoins } from '../HomePage/actions';
import Paragraph from './Paragraph';
import SpanWrapper from './SpanWrapper';
import { getCoinDetailPage } from '../DetailPage/actions';
import { makeSelectCoin } from '../DetailPage/selectors';

/* eslint-disable react/prefer-stateless-function */
export class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { seconds: 0 };
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  tick = () => {
    this.setState(prevState => ({
      seconds: prevState.seconds - 1,
    }));
  };

  refreshForTimer = () => {
    // When counter hits 0 - call API
    if (this.state.seconds === 0) {
      this.props.getCoins(this.props.currency);

      // Conditional call to the API depending on which page Timer is called in
      let URL = window.location.href;
      if (URL.includes('/coin')) {
        const coinName = this.props.coin[0].id;
        this.props.getCoin(coinName);
      } else {
        this.props.getCoins();
      }

      // Set state to alloted refresh time
      this.setState({
        seconds: 60,
      });
    }
    // Return component with coundown
    return (
      <div>
        <Paragraph>
          <SpanWrapper>Next Refresh :</SpanWrapper> {this.state.seconds} seconds
        </Paragraph>
      </div>
    );
  };

  render() {
    let content = this.refreshForTimer();
    return <React.Fragment>{content}</React.Fragment>;
  }
}

Timer.propTypes = {
  currency: PropTypes.string.isRequired,
  coin: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  getCoins: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  currency: makeSelectCurrentCurrency(),
  coin: makeSelectCoin(),
});

function mapDispatchToProps(dispatch) {
  return {
    getCoins: evt => dispatch(getCoins(evt)),
    getCoin: evt => dispatch(getCoinDetailPage(evt)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(Timer);
