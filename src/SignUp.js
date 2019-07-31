import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { login } from './actions'
import { connect } from 'react-redux'
import { Form, Button } from 'semantic-ui-react'

class SignUp extends React.Component {

  state = {

    username: "",
    password: "",
    passwordConfirmation: "",
    bio: "",
    avatar: "",
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  createUser = () => {
    const token = localStorage.getItem("token")
    fetch("http://localhost:3000/api/v1/users", {
			method: "POST",
			headers: {
        "Authorization": token,
				"Content-Type": "application/json",
				"Accepts": "application/json",
			},
			body: JSON.stringify(this.state)
		})
		.then(res => res.json())
		.then((response) => {
			if (response.errors){
				alert(response.errors)
			} else {
				localStorage.setItem("token", response.token)
				this.props.login(response.user)
        this.props.history.push("/profilepage")
				// this.props.history.push(`/users/${response.user.id}`)
			}
		})
	}

  handleSubmit = () => {
    if (this.state.password === this.state.passwordConfirmation) {
      this.createUser()
    } else {
      alert("The passwords do not match")
    }
  }

  render() {
    return(
      <Form onSubmit={this.handleSubmit}>
        <Form.Field>
		      <label>Username</label>
		      <input onChange={this.handleChange} value={this.state.username} name="username" placeholder='Username' />
        </Form.Field>
        <Form.Field>
		      <label>Password</label>
		      <input onChange={this.handleChange} value={this.state.password} name="password" placeholder='Password' />
       </Form.Field>
       <Form.Field>
		      <label>Confirm Password</label>
		      <input onChange={this.handleChange} value={this.state.passwordConfirmation} name="passwordConfirmation" placeholder='Confirm Password' />
       </Form.Field>
       <Form.Field>
         <label>Bio</label>
         <input onChange={this.handleChange} value={this.state.bio} name="bio" placeholder='Bio' />
      </Form.Field>
      <Form.Field>
        <label>Avatar</label>
        <input onChange={this.handleChange} value={this.state.avatar} name="avatar" placeholder='Avatar' />
     </Form.Field>
		    <Button type='submit'>Submit</Button>
		 </Form>
    )
  }

}

export default connect(null, { login })(SignUp);
