import {combineReducers} from 'redux';
import errorsReducer from './error_reducer';
import tasksReducer from './tasks_reducer';
import projectReducer from './project_reducer';

const rootReducer = combineReducers ({
  errors: errorsReducer,
  tasks: tasksReducer,
  project: projectReducer
});

export default rootReducer;
