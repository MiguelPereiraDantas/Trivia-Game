import { SAVE_TOKEN } from '../actions/types';

const INITIAL_STATE = '';

const reducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
  case SAVE_TOKEN:
    return payload;
  default:
    return state;
  }
};
export default reducer;