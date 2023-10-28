import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ButtonSettings extends Component {
handleClick = () => {
  const { history } = this.props;
  history.push('/settings');
};

render() {
  return (
    <button
      data-testid="btn-settings"
      type="button"
      onClick={ this.handleClick }
    >
      Configuração
    </button>
  );
}
}

export default ButtonSettings;

ButtonSettings.propTypes = {
  history: PropTypes.string,
}.isRequired;