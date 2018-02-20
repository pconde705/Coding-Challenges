import {RECEIVE_ERRORS} from '../actions/project_actions';

const projectErrorsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ERRORS:
      return action.errors;
    default:
      return state;
  }
}

export default projectErrorsReducer;
