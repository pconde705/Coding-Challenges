import axios from 'axios';
import {PROJECTS} from '../api/api';

export const RECEIVE_PROJECT = "RECEIVE_PROJECT";
export const RECEIVE_PROJECT_ERRORS = "RECEIVE_PROJECT_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";

const receiveProject = payload => ({
  type: RECEIVE_PROJECT,
  payload
})

const receiveErrors = errors => ({
  type: RECEIVE_PROJECT_ERRORS,
  errors
});

// Every time we successfully receive a project, and subsquently render
// we remove the visible error messages if there were any
const clearErrors = () => ({
  type: CLEAR_ERRORS,
});

// In order to get title of project we dispatch a GET request that
// includes the project id and the personal access token
export const getProject = (project_id, asana_token) => dispatch => (
  axios.get(`${PROJECTS}/${project_id}?access_token=${asana_token}`)
  .then(
    response => dispatch(receiveProject(response.data))
  ).then(
    response => dispatch(clearErrors())
  ).catch(
    error => dispatch(receiveErrors(error.response.data))
  )
);
