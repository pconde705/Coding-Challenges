import axios from 'axios';
import {API_URL, PROJECTS} from '../api/api';

export const RECEIVE_TASKS = "RECEIVE_TASKS";

const receiveTasks = tasks => ({
  type: RECEIVE_TASKS,
  tasks
});

export const getTasks = tasks => dispatch => (
  axios.get()
)
