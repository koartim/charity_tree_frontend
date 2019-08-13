import React from 'react'
import NavOptions from "./NavOptions"
import { Link, withRouter } from 'react-router-dom'
import { Image } from 'semantic-ui-react'

class NavBar extends React.Component{
  render() {
    return(
      <div align="center" className="navbar">
        <Link to="/home">
          <Image className="logo"
            src="https://d1yn1kh78jj1rr.cloudfront.net/image/thumbnail/S_8nH6nemjib5tnnl/storyblocks-tree-logo-icon-design-template-vector-graphic_SGVBnQDAm_thumb.jpg"
            alt="logo"/>
        </Link>
        <h1 align="center">Charity Tree</h1>
            <NavOptions />
      </div>
    )
  }
}

export default withRouter(NavBar);
