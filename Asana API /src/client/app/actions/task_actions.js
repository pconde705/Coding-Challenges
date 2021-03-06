import axios from 'axios';
import {PROJECTS} from '../api/api';

export const RECEIVE_TASKS = "RECEIVE_TASKS";
export const RECEIVE_TASK_ERRORS = "RECEIVE_TASK_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";

const receiveTasks = tasks => ({
  type: RECEIVE_TASKS,
  tasks
});

const receiveErrors = errors => ({
  type: RECEIVE_TASK_ERRORS,
  errors
});

// Every time we successfully receive a project, and subsquently render
// we remove the visible error messages if there were any 
const clearErrors = () => ({
  type: CLEAR_ERRORS,
});

// dispatches GET request to fetch list of tasks
// the project id and personal access token are required in the HTTPS request
export const getTasks = (project_id, asana_token) => dispatch => (
  axios.get(`${PROJECTS}/${project_id}/tasks?access_token=${asana_token}`)
  .then(
    response => dispatch(receiveTasks(response.data))
  ).then(
    response => dispatch(clearErrors())
  ).catch(
    error => dispatch(receiveErrors(error.response.data))
  )
);
