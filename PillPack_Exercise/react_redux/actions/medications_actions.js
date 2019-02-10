import axios from 'axios';

export const RECEIVE_MEDICATIONS = 'RECEIVE_MEDICATIONS';

// Action creator function for getting all medications to be dispatched to the store
const receiveMedications = payload => ({
  type: RECEIVE_MEDICATIONS,
  payload
})

// Launching the GET request to fetch all medications from PillPack's API-Sandbox
export const fetchMedications = () => dispatch => (
  axios.get(`${'https://cors-anywhere.herokuapp.com/'}http://api-sandbox.pillpack.com/medications`)
  .then(response => dispatch(receiveMedications(response.data)))
  .catch(error => {
    console.log(error.response.data);
  })
)
