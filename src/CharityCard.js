import React from 'react';
import  { Card, Image, Icon, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class CharityCard extends React.Component{

  render() {
    return(
      <Card class="ui cards">
        <Card.Content class="ui card">
        <a href={this.props.charity.url}>Visit The {this.props.charity.name} website!</a>
          <Card.Content class="content">
            <div class="header">Cause Name: {this.props.charity.name} </div>
            <div class="meta">Category:{this.props.charity.category}</div>
            <div class="meta">Overall Rating: {this.props.charity.rating}</div>
            <div class="meta">Financial Rating: {this.props.charity.financial_rating}</div>
            <div class="meta">Accountability Rating: {this.props.charity.accountability_rating}</div>
            <div class="meta">Deductibility {this.props.charity.deductibility}</div>
            <div class="meta">State: {this.props.charity.state}</div>
            <Link to={
              {pathname: "/charities/" + this.props.charity.id}
            }>
            <Button>view</Button></Link>
          </Card.Content>
      </Card.Content>
    </Card>

    )
  }
}

function mapStateToProps(state) {
  return {
    selectedCharity: state.selectedCharity
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchCharity: (charity) => {
      dispatch({type: "FETCH_CHARITY", payload: charity})
    }
  }
}

export default CharityCard;
