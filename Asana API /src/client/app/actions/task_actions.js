import axios from 'axios';
import {PROJECTS} from '../api/api';

export const RECEIVE_TASKS = "RECEIVE_TASKS";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

const receiveTasks = tasks => ({
  type: RECEIVE_TASKS,
  tasks
});

const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

// dispatches GET request to fetch list of tasks
// the project id and personal access token are required in the HTTPS request
export const getTasks = (project_id, asana_token) => dispatch => (
  axios.get(`${PROJECTS}/${project_id}/tasks?access_token=${asana_token}`)
  .then(
    response => dispatch(receiveTasks(response.data))
  ).catch(
    error => dispatch(receiveErrors(error.response.data))
  )
);
