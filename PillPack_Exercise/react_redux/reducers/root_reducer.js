import {combineReducers} from 'redux';
import prescriptionsReducer from './prescriptions_reducer';
import medicationsReducer from './medications_reducer';

// Combining reducers into a single reducer to pass to the store
const rootReducer = combineReducers({
  prescriptions: prescriptionsReducer,
  medications: medicationsReducer
});

export default rootReducer;
