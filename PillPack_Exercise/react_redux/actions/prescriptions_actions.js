import axios from 'axios';

export const RECEIVE_PRESCRIPTIONS = 'RECEIVE_PRESCRIPTIONS';

// Action creator function for getting all prescriptions to be dispatched to the store
const receivePrescriptions = payload => ({
  type: RECEIVE_PRESCRIPTIONS,
  payload
})

// Launching the GET request to fetch all prescriptions from PillPack's API-Sandbox
export const fetchPrescriptions = () => dispatch => (
  axios.get(`${'https://cors-anywhere.herokuapp.com/'}http://api-sandbox.pillpack.com/prescriptions`)
  .then(response => dispatch(receivePrescriptions(response.data)))
  .catch(error => {
    console.log(error.response.data);
  })
)
