import React from 'react';
import  { Card, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class CharityCard extends React.Component{

  render() {
    return(
      <Card className="ui cards">
        <Card.Content className="ui card">
        <a href={this.props.charity.url}>Visit The {this.props.charity.name} website!</a>
          <Card.Content className="content">
            <div className="header">Cause Name: {this.props.charity.name} </div>
            <div className="meta">Category:{this.props.charity.category}</div>
            <div className="meta">Overall Rating: {this.props.charity.rating}</div>
            <div className="meta">Financial Rating: {this.props.charity.financial_rating}</div>
            <div className="meta">Accountability Rating: {this.props.charity.accountability_rating}</div>
            <div className="meta">Deductibility {this.props.charity.deductibility}</div>
            <div className="meta">State: {this.props.charity.state}</div>
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

export default CharityCard;
