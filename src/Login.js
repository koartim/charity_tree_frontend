import React from 'react'
import { login, fetchCurrentUser } from './actions'
import { connect } from 'react-redux'
import { Form, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { Route, Switch } from 'react-router-dom'

class Login extends React.Component {

  state = {
    username: "",
    password: ""
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
/// When a user signs in I want to set them state somehow as the current user,
/// then, with that user in state I want to show a profile page with all of their information.
/// I'm thinking that when I fetch to login a user I can set the user in the store state
/// Then I can connect to the store and access all of the information I need for the profile page.

  handleSubmit = (event) => {
    event.preventDefault()
    fetch("http://localhost:3000/api/v1/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(this.state)
    })
    .then(rsp => rsp.json())
    .then(rsp => {
      localStorage.setItem("token", rsp.token)
      this.props.login(rsp)
      this.props.fetchCurrentUser(rsp)
      this.props.history.push("/profilepage")
    })
  }

  render() {
    console.log(this.props)
    return(
      <Form slign="left" onSubmit={this.handleSubmit}>
		    <Form.Field>
		      <label>Username</label>
		      <input onChange={this.handleChange} name="username" value={this.state.username} placeholder='Username' />
		    </Form.Field>
		    <Form.Field>
		      <label>Password</label>
		      <input onChange={this.handleChange} type="password" name="password" value={this.state.password} placeholder='Password' />
		    </Form.Field>

		    <Button type='submit'>Submit</Button>


		  </Form>
    )
  }
}
function mapStateToProps(state) {
  return {
      selectedUser: state.selectedUser
  }

}

export default connect(mapStateToProps, { login, fetchCurrentUser }) (Login)
