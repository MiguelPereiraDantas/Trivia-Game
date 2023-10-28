import React from 'react';
import PropTypes from 'prop-types';
import md5 from 'crypto-js/md5';
import { connect } from 'react-redux';
import { fetchQuestions, saveToken } from '../../services/fetchApi';
import { CODE_ERROR, LAST_QUESTION } from '../../helpers/constants';
import QuestionCard from '../QuestionCard/QuestionCard';

import './Questions.css';

class Questions extends React.Component {
  constructor() {
    super();
    this.state = {
      questions: [],
      currentQuestion: 0,
    };
  }

  componentDidMount() {
    this.loadQuestions();
  }

  loadQuestions = async () => {
    const response = await this.getQuestions();

    if (response.response_code !== CODE_ERROR) {
      this.setState({ questions: response.results });
    } else {
      saveToken().then(async () => {
        const newResponse = await this.getQuestions();
        this.setState({ questions: newResponse.results });
      });
    }
  }

  getQuestions = async () => {
    const token = localStorage.getItem('token');
    const response = await fetchQuestions(token);
    return response;
  }

  saveRanking = () => {
    const { name, score, gravatarEmail } = this.props;
    const previousRanking = JSON.parse(localStorage.getItem('ranking')) || [];
    const updatedRanking = [...previousRanking, {
      name,
      score,
      picture: `https://www.gravatar.com/avatar/${md5(gravatarEmail).toString()}`,
    }];
    localStorage.setItem('ranking', JSON.stringify(updatedRanking));
  }

  handleClick = () => {
    const { history } = this.props;
    const { currentQuestion } = this.state;
    if (currentQuestion === LAST_QUESTION) {
      history.push('/feedback');
      this.saveRanking();
    } else {
      this.setState((prevState) => ({
        currentQuestion: prevState.currentQuestion + 1,
      }));
    }
  }

  render() {
    const { questions, currentQuestion } = this.state;
    return (
      <div className="questions-container">
        <QuestionCard
          nextQuestions={ this.handleClick }
          data={ questions[currentQuestion] || {} }
        />
      </div>
    );
  }
}

const mapStateToProps = ({ player: { name, score, gravatarEmail } }) => ({
  name,
  score,
  gravatarEmail,
});

export default connect(mapStateToProps)(Questions);

Questions.propTypes = {
  history: PropTypes.object,
}.isRequired;