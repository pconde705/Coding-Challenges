import { connect } from 'react-redux';
import Prescriptions from './prescriptions'

import {fetchPrescriptions} from '../../actions/prescriptions_actions';
import {fetchMedications} from '../../actions/medications_actions';

const mapStateToProps = state => ({
  // Returning the values of the object for ease of iteration over an array
  prescriptions: Object.values(state.prescriptions),
  medications: Object.values(state.medications)
});

const mapDispatchToProps = dispatch => ({
  fetchPrescriptions: () => dispatch(fetchPrescriptions()),
  fetchMedications: () => dispatch(fetchMedications()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Prescriptions);
