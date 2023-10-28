import React, { Component } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { actionReset } from '../../redux/actions';

import './Ranking.css';

class Ranking extends Component {
  constructor() {
    super();
    this.state = {
      ranking: [],
    };
  }

  componentDidMount() {
    this.loadRanking();
  }

  loadRanking = () => {
    const ranking = JSON.parse(localStorage.getItem('ranking'));
    this.setState({
      ranking,
    });
  }

  playAgain = () => {
    const { dispatchReset, history } = this.props;
    dispatchReset();
    history.push('/');
  }

  render() {
    const { ranking } = this.state;
    const orderedRanking = ranking.sort((a, b) => b.score - a.score);

    return (
      <div className="ranking-container">

        <h1 data-testid="ranking-title" className="title">Ranking page</h1>

        {orderedRanking.map((rank, index) => (
          <div key={ index } className="ranking-card">

            <div className="player-content">
              <img src={ rank.picture } alt="profile" />
              <p data-testid={ `player-name-${index}` }>{rank.name}</p>
            </div>

            <p data-testid={ `player-score-${index}` } className="score">{rank.score}</p>
          </div>
        ))}
        <button
          type="button"
          data-testid="btn-go-home"
          onClick={ this.playAgain }
          className="btn-next"
        >
          PlayAgain
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  dispatchReset: () => dispatch(actionReset()),
});

export default connect(null, mapDispatchToProps)(Ranking);

Ranking.propTypes = {
  history: propTypes.object,
}.idRequired;