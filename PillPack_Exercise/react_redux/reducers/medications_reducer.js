import {RECEIVE_MEDICATIONS} from '../actions/medications_actions';

// Reducer function that returns the next state of the GET request for receiving medications
const medicationsReducer = (state = {}, action) => {

  // Freezes state ensuring it cannot be accidentally mutated
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_MEDICATIONS:
      return Object.assign({}, action.payload)
    default:
      return state;
  }
}

export default medicationsReducer;
