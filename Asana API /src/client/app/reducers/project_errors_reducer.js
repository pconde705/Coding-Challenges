import {RECEIVE_PROJECT_ERRORS, CLEAR_ERRORS} from '../actions/project_actions';

const projectErrorsReducer = (state = [], action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_PROJECT_ERRORS:
      return action.errors;
    case CLEAR_ERRORS:
      return [];
    default:
      return state;
  }
}

export default projectErrorsReducer;
