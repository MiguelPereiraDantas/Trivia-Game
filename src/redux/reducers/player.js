import { GET_LOGIN, RESET, SAVE_ASSERTIONS, SAVE_SCORE } from '../actions/types';

const INITIAL_STATE = {
  name: '',
  assertions: 0,
  score: 0,
  gravatarEmail: '',
};

const player = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
  case GET_LOGIN:
    return {
      ...state,
      name: payload.name,
      gravatarEmail: payload.gravatarEmail,
    };

  case SAVE_SCORE:
    return {
      ...state,
      score: payload + state.score,
    };

  case SAVE_ASSERTIONS:
    return {
      ...state,
      assertions: state.assertions + 1,
    };

  case RESET:
    return INITIAL_STATE;

  default:
    return state;
  }
};

export default player;