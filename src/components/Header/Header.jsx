import React, { Component } from 'react';
import { connect } from 'react-redux';
import md5 from 'crypto-js/md5';
import PropTypes from 'prop-types';

import './Header.css';

import logo from '../../images/logo.png';

class Header extends Component {
  render() {
    const { name, gravatarEmail, score } = this.props;
    return (
      <header>
        <div className="player-content">
          <img
            src={ `https://www.gravatar.com/avatar/${md5(gravatarEmail).toString()}` }
            alt="profile-img"
            data-testid="header-profile-picture"
          />

          <h2 data-testid="header-player-name">{ name }</h2>
        </div>

        <img src={ logo } alt="logo" className="header-logo" />

        <span data-testid="header-score" className="score-container">
          Score:
          <span className="score">{score}</span>
        </span>
      </header>
    );
  }
}

const mapStateToProps = ({ player: { name, gravatarEmail, score } }) => ({
  name,
  gravatarEmail,
  score,
});

export default connect(mapStateToProps)(Header);

Header.propTypes = {
  email: PropTypes.string,
  gravatarEmail: PropTypes.string,
}.isRequired;