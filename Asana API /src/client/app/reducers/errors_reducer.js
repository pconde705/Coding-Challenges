import {combineReducers} from 'redux';
import projectErrorsReducer from './project_errors_reducer';
import taskErrorsReducer from './task_errors_reducer';

const errorsReducer = combineReducers ({
  project: projectErrorsReducer,
  task: taskErrorsReducer 
})

export default errorsReducer;
