import {RECEIVE_ERRORS} from '../actions/task_actions';

const errorsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ERRORS:
      return action.errors;
    default:
      return state;
  }
}

export default errorsReducer;
