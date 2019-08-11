import React from 'react';
import {connect} from 'react-redux'
import CharityPage from './CharityPage'
import CharityContainer from './CharityContainer'
import { Route, Switch } from 'react-router-dom'
import queryString from 'query-string'

class AllCharitiesPage extends React.Component {

  state = {
    loading: true
  }

  componentDidMount() {
    fetch('http://localhost:3000/api/v1/charities')
    .then(rsp => rsp.json())
    .then(data => {
      this.props.fetchCharities(data)
    })}


    getSearchedCharities = () => {
      if (this.props.filterValue) {
        return this.props.charities.filter(charity => {
          return charity.name.toLowerCase().includes(this.props.filterValue.toLowerCase())
        })
      } else {
        return this.props.charities
      }
    }

  render() {

  return (
    <Switch>
      <Route path="/charities/:id" render={routeProps => {
        const charityId = routeProps.match.params.id
        console.log(charityId)
          return (
            <CharityPage charityId={charityId} />
          )
      }}/>
    </Switch>,
    <CharityContainer charities={this.getSearchedCharities()}/>
   );
  }
}

function mapStateToProps(state){
  return {
    selectedUser: state.selectedUser,
    charities: state.charities,
    filterValue: state.filterValue,
    setFilterValue: state.setFilterValue
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchCharities: (charities) => {
      dispatch({type: "FETCH_ALL_CHARITIES", payload: charities})
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllCharitiesPage);
