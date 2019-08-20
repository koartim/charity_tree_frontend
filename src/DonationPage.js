import React from 'react'
import { connect } from 'react-redux'
class DonationPage extends React.Component {

  render() {
    return(
      <div>
        <h1>Donation Page</h1>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    donations: state.donations,
    selectedUser: state.selectedUser,
    selectedCharity: state.selectedCharity,
    selectedDonation: state.selectedDonation
  }
}

function mapDispatchToProps(dispatch){
  return {
    fetchDonations: (donations) => {
      dispatch({type: "FETCH_ALL_DONATIONS", payload: donations})
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (DonationPage);
