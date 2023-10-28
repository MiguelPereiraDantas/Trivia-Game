import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { saveToken } from '../../services/fetchApi';
import { actionLogin, actionSaveToken } from '../../redux/actions';

import './Login.css';

import logo from '../../images/logo.png';

class Login extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      gravatarEmail: '',
    };
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value }, this.validadeButton);
  }

  validadeButton = () => {
    const { name, gravatarEmail } = this.state;
    return name.length > 0 && gravatarEmail.length > 0;
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { dispatchSaveToken, history, dispatchLoginInfo } = this.props;
    saveToken().then(() => {
      dispatchSaveToken();
      dispatchLoginInfo(this.state);
      history.push('/home');
    });
  }

  render() {
    const { name, gravatarEmail } = this.state;

    return (
      <section className="login-section">

        <img src={ logo } alt="logo" className="logo" />

        <form onSubmit={ this.handleSubmit }>
          <input
            type="text"
            name="name"
            data-testid="input-player-name"
            placeholder="Nome"
            value={ name }
            onChange={ this.handleChange }
          />

          <input
            type="email"
            name="gravatarEmail"
            data-testid="input-gravatar-email"
            placeholder="Email"
            value={ gravatarEmail }
            onChange={ this.handleChange }
          />

          <button
            type="submit"
            data-testid="btn-play"
            disabled={ !this.validadeButton() }
            className="btn-submit"
          >
            Play
          </button>
        </form>

      </section>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  dispatchSaveToken: () => dispatch(actionSaveToken()),
  dispatchLoginInfo: (payload) => dispatch(actionLogin(payload)),
});

export default connect(null, mapDispatchToProps)(Login);

Login.propTypes = {
  dispatchSaveToken: PropTypes.func,
  history: PropTypes.string,
  dispatchLoginInfo: PropTypes.func,
}.isRequired;