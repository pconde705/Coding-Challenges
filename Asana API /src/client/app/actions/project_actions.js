import axios from 'axios';
import {PROJECTS} from '../api/api';

export const RECEIVE_PROJECT = "RECEIVE_PROJECT";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

const receiveProject = payload => ({
  type: RECEIVE_PROJECT,
  payload
})

const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

export const getProject = (project_id, asana_token) => dispatch => (
  axios.get(`${PROJECTS}/${project_id}?access_token=${asana_token}`)
  .then(
    response => dispatch(receiveProject(response.data))
  ).catch(
    error => dispatch(receiveErrors(error.response.data))
  )
);
