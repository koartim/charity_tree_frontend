import React from 'react';
import SearchBar from './SearchBar'
import { connect } from 'react-redux'
import {Header} from 'semantic-ui-react'

class HomePage extends React.Component{

  render(){
    console.log(this.props)
    return(
      <div align="left" className="home-page">
      <h2>Search</h2>
          <SearchBar />
      </div>
    );
  }
}

  function mapStateToProps(state) {
    return {
      charities: state.charities
    }
  }

export default connect(mapStateToProps) (HomePage);
