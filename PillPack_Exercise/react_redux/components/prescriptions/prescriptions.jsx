import React from 'react';

class Prescriptions extends React.Component {
  constructor(props) {
    super(props);

    this.state = {updated: false, prescription_updates: []}
  }

  componentDidMount() {
    this.props.fetchPrescriptions();
    this.props.fetchMedications();
  }

  // Begin identifying all prescriptions that need a medication substitution after component receives API data
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.state.updated == false && this.props.medications.length !== 0 && this.props.prescriptions.length !== 0) {
      let rxcuiInitial = {}
      let rxcuiFinal = {}
      let presMedicIds = {}
      let rxcuiGenericsById = {}
      let rxcuiBrandsById = {}
      let rxcuiGenerics = {}
      let rxcuiBrands = {}

      // Iterating through the medications to check which have the same RxNorm Concept Unique Identifier
      this.props.medications.forEach(med => {
        if (rxcuiInitial[med.rxcui] > 0) {
          rxcuiInitial[med.rxcui] += 1
          if (rxcuiInitial[med.rxcui] > 1) {
            rxcuiFinal[med.rxcui] = true
            presMedicIds[med.id] = true
          }
        } else {
          rxcuiInitial[med.rxcui] = 1
        }
      })

      // Sorting the medications into generic and brand via iteration
      this.props.medications.forEach(med => {
        if (rxcuiFinal[med.rxcui] == true) {
          if (med.generic == true) {
            rxcuiGenericsById[med.id] = med
            rxcuiGenerics[med.rxcui] = med
          } else {
            rxcuiBrandsById[med.id] = med
            rxcuiBrands[med.rxcui] = med
          }
        }
      })

      let prescriptionsUpdates = []

      // Iterate through prescriptions checking if each patient is already receiving the generic medication
      this.props.prescriptions.forEach(pres => {
        if (presMedicIds[pres.medication_id] == true) {
          if (rxcuiGenericsById[pres.medication_id]) {
            "" // do nothing
          } else {
            let rxcuiEquivalent = rxcuiBrandsById[pres.medication_id].rxcui
            prescriptionsUpdates.push({"prescription_id": pres.id, "medication_id": rxcuiGenerics[rxcuiEquivalent].id})
          }
        }
      })

      // Setting local state in order to render a completed html page with JSON results
      // Ensuring the iteration process doesn't restart after the filtering is done
      this.setState({prescription_updates: prescriptionsUpdates})
      this.setState({updated: true})
    }
  }



  render() {
    if (this.state.prescription_updates.length == 0) {
      return ("")
    } else {
      return (
        <div>
          <h1>PillPack's coding challenge!</h1>
          <p>The list below displays the now updated prescriptions with the generic equivalent that need a medication substitution.</p>
          <div><pre>{JSON.stringify({"prescription_updates": this.state.prescription_updates}, null, 2) }</pre></div>
        </div>
      );
    }
  }
}

export default Prescriptions;
