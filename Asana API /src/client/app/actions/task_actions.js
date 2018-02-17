import axios from 'axios';
import {API_URL, PROJECTS} from '../api/api';

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

export const getTasks = project_id => dispatch => (
  axios.get(`${PROJECTS}/${project_id}/tasks`).then(
    response => dispatch(receiveTasks(response.data))
  ).catch(
    error => dispatch(receiveErrors(error.response.data))
  )
)
