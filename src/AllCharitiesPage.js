import React from 'react';
import {connect} from 'react-redux'
import CharityPage from './CharityPage'
import CharityContainer from './CharityContainer'
import { Route, Switch } from 'react-router-dom'
import { Image } from 'semantic-ui-react'


class AllCharitiesPage extends React.Component {

  state = {
    loading: true
  }

  componentDidMount() {
    fetch('http://localhost:3000/api/v1/charities')
    .then(rsp => rsp.json())
    .then(data => {
      this.props.fetchCharities(data)
      this.setState({
        loading: false
      })
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
    if (this.state.loading) {
      return (
        <Image className="loader" src="https://www.macupdate.com/images/icons256/54019.png"/>
      )
    } else {
      return (
        <Switch>
          <Route path="/charities/:id" render={routeProps => {
            const charityId = routeProps.match.params.id
              return (
                <CharityPage charityId={charityId} />
              )
          }}/>
        </Switch>,
        <CharityContainer charities={this.getSearchedCharities()}/>
       );
    }
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
