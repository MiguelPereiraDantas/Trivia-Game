import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

import { ASSERTIONS } from '../../helpers/constants';

import './Feedback.css';

// imported components
import Header from '../../components/Header/Header';
import { actionReset } from '../../redux/actions';

class Feedback extends Component {
  playAgain = () => {
    const { history, dispatchReset } = this.props;
    history.push('/');
    dispatchReset();
  }

  render() {
    const { assertions, score, history } = this.props;
    return (
      <>
        <Header />

        <p data-testid="feedback-text" className="feedback-text">
          {
            assertions >= ASSERTIONS ? 'Well Done!' : 'Could be better...'
          }
        </p>

        <section className="feedback-container">
          <p data-testid="feedback-total-score" className="feedback-points">
            Total score:
            <span className="score">{score}</span>
          </p>
          <p data-testid="feedback-total-question" className="feedback-points">
            Total assertions:
            <span className="score">{assertions}</span>
          </p>

          <button
            type="button"
            data-testid="btn-play-again"
            onClick={ this.playAgain }
            className="btn-next"
            style={ { background: '#05A196', color: 'white' } }
          >
            Play Again
          </button>

          <button
            type="button"
            data-testid="btn-ranking"
            onClick={ () => history.push('/ranking') }
            className="btn-next"
          >
            Ranking
          </button>
        </section>
      </>
    );
  }
}

const mapStateToProps = ({ player: { assertions, score } }) => ({
  assertions,
  score,
});
const mapDispatchToProps = (dispatch) => ({
  dispatchReset: () => dispatch(actionReset()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Feedback);

Feedback.propTypes = {
  assertions: propTypes.string,
}.isRequired;