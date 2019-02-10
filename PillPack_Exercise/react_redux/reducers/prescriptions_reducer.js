import {RECEIVE_PRESCRIPTIONS} from '../actions/prescriptions_actions';

// Reducer function that returns the next state of the GET request for receiving prescriptions
const prescriptionsReducer = (state = {}, action) => {

  // Freezes state ensuring it cannot be accidentally mutated
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_PRESCRIPTIONS:
      return Object.assign({}, action.payload)
    default:
      return state;
  }
}

export default prescriptionsReducer;
