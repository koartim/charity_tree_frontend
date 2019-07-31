import React from 'react';
import { Link } from 'react-router-dom'
import ProfilePage from './ProfilePage'
import {Button} from 'semantic-ui-react'

const NavOptions = (props) => {
  return (
    <div align="center" className="options">
    <Link to="charities">
      <Button> charities </Button>
    </Link>
    <Link to="profilepage">
      <Button> profile </Button>
    </Link>
    <Link to="login">
      <Button> login </Button>
    </Link>
    <Link to="signup">
      <Button> signup </Button>
    </Link>
    </div>
  )
}

export default NavOptions
