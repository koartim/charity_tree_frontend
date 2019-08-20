import React from 'react'
import {Button, Form} from 'semantic-ui-react'
import { connect } from 'react-redux'
import { fetchCharity } from './actions'

class DonationForm extends React.Component{

  state = {
    username: "",
    amount: 0,
    selectedCharity: ""
  }

    getSelectedCharity = (charityName) => {
      this.props.charities.map(charity => {
        if (charity.name === charityName) {
          this.props.fetchCharity(charity)
        }
      })
    }

    handleChange = (event) => {
        this.setState({
          [event.target.name]: event.target.value
        }, this.getSelectedCharity(event.target.value))
    }

    handleSubmit = (event) => {
      event.preventDefault()
        fetch('http://localhost:3000/api/v1/donations', {
          method: "POST",
          headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            username: this.props.selectedUser.name,
            amount: this.state.amount,
            user_id: this.props.selectedUser.user.id,
            charity_id: this.props.selectedCharity.id
          })
        })
          .then(rsp => rsp.json())
          .then(rsp => console.log(rsp))
          this.props.history.push("/profilepage")
    }

  render() {
    return(
      <Form onSubmit={this.handleSubmit} class="ui form">
    <div class="field">
      <label>Username</label>
      <input onChange={this.handleChange} value={this.state.username} name="username" placeholder="username" />
    </div>
    <div class="field">
      <label>Donation</label>
      <input onChange={this.handleChange} value={this.state.amount} name="amount" placeholder="amount" />
    </div>
      <select name="selectedCharity" onChange={this.handleChange}>
      {this.props.charities.map(charity => {
        return <option>{charity.name}</option>
      })}
      </select>
    <Button type="Submit" value="Submit" class="button">Submit</Button>
  </Form>
    )
  }
}

  function mapStateToProps(state) {
    return {
      charities: state.charities,
      selectedUser: state.selectedUser,
      selectedCharity: state.selectedCharity,
      fetchCharity: state.fetchCharity
    }
  }

export default connect(mapStateToProps, {fetchCharity}) (DonationForm);
