import {combineReducers} from 'redux';
import projectErrorsReducer from './project_errors_reducer';
import taskErrorsReducer from './task_errors_reducer';

// combine the two errors reducers into one
const errorsReducer = combineReducers ({
  project: projectErrorsReducer,
  task: taskErrorsReducer
})

export default errorsReducer;
