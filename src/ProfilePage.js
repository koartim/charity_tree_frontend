import React from 'react';
import { connect } from 'react-redux'
import { fetchCurrentUser } from './actions'
import { fetchCharity } from './actions'
import { fetchDonation } from './actions'
import { Route, Switch } from 'react-router-dom'
import { Card, Icon, Image, Grid } from 'semantic-ui-react'
import DonationForm from './DonationForm'

class ProfilePage extends React.Component {

  state = {
    donations: [],
    loading: true
  }

  componentDidMount() {
    fetch('http://localhost:3000/api/v1/donations')
      .then(rsp => rsp.json())
      .then(donations => {
        this.setState({
          donations: donations,
          loading: false
        })
    })
  }

  getNumberOfDonations = () => {
    return this.state.donations.reduce((acc, donation) => {
      if (donation.user_id === this.props.selectedUser.user.id) {}
    })
  }

  getTotalAmount = () => {
    return this.state.donations.reduce((acc, donation) => {
      if (donation.user_id === this.props.selectedUser.user.id) {
        return acc + donation.amount
      } else {
        return null
      }
    }, 0)
  }
  // if (this.state.donations.length > 0) {
  //   console.log(this.state.donations)
  render() {
    if (this.state.loading) {
      return(
        <img className="loader" src="https://www.macupdate.com/images/icons256/54019.png"/>
      )
    } else {
      return(
      <Card>
        <Image align="center" src={this.props.selectedUser.user.avatar}/>
          <Card.Header>{this.props.selectedUser.user.username}</Card.Header>
          <Card.Header>
            <Card.Description>{this.props.selectedUser.user.bio}</Card.Description>
          </Card.Header>
          <Card.Header> Total Donated:{this.getTotalAmount()} </Card.Header>
          <Card.Description>Estimated Deduction: ${(this.getTotalAmount() * 0.2).toFixed()}</Card.Description>
          <Card.Meta></Card.Meta>
            <Card.Header>Donations:</Card.Header>
          <Card.Description>
          {this.state.donations.map(donation => {
            if (donation.user_id === this.props.selectedUser.user.id) {
                return <Card.Meta>{donation.charity.name}: ${donation.amount}</Card.Meta>
            }
          })}
          </Card.Description>
      </Card>
      )
    }
  }
}

function mapStateToProps(state){
  return {
      charities: state.charities,
      selectedUser: state.selectedUser,
      selectedCharity: state.selectedCharity,
      fetchCharity: state.fetchCharity,
      fetchDonation: state.fetchDonation,
      selectedDonation: state.selectedDonation
  }
}

export default connect(mapStateToProps, {fetchCurrentUser, fetchCharity, fetchDonation}) (ProfilePage);
