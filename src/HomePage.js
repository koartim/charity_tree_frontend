import React from 'react';
import SearchBar from './SearchBar'
import { connect } from 'react-redux'

class HomePage extends React.Component{

  render(){
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
