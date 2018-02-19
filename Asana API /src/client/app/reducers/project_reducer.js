import {RECEIVE_PROJECT} from '../actions/project_actions';

const projectReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_PROJECT:
      return action.payload.data.name;
    default:
      return state;
  }
}

export default projectReducer;
