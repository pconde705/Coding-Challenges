import axios from 'axios';
import {PROJECTS} from '../api/api';

export const RECEIVE_PROJECT = "RECEIVE_PROJECT";
export const RECEIVE_PROJECT_ERRORS = "RECEIVE_PROJECT_ERRORS";

const receiveProject = payload => ({
  type: RECEIVE_PROJECT,
  payload
})

const receiveErrors = errors => ({
  type: RECEIVE_PROJECT_ERRORS,
  errors
});

// In order to get title of project we dispatch a GET request that
// includes the project id and the personal access token
export const getProject = (project_id, asana_token) => dispatch => (
  axios.get(`${PROJECTS}/${project_id}?access_token=${asana_token}`)
  .then(
    response => dispatch(receiveProject(response.data))
  ).catch(
    error => dispatch(receiveErrors(error.response.data))
  )
);
