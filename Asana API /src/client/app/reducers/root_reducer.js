import {combineReducers} from 'redux';
import errorsReducer from './error_reducer';
import tasksReducer from './tasks_reducer';

const rootReducer = combineReducers ({
  errors: errorsReducer,
  tasks: tasksReducer
});

export default rootReducer;
