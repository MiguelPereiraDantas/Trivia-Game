import React, { Component } from 'react';
import PropTypes from 'prop-types';

// imported components
import Header from '../../components/Header/Header';
import Questions from '../../components/Questions/Questions';

class Home extends Component {
  render() {
    const { history } = this.props;
    return (
      <>
        <Header />
        <Questions history={ history } />
      </>
    );
  }
}

export default Home;

Home.propTypes = {
  history: PropTypes.string,
}.isRequired;