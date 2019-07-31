import React from 'react'
import { connect } from 'react-redux'
import { fetchCharity } from './actions'
import { Link } from 'react-router-dom'
import ProfilePage from './ProfilePage'
import {Card, Button, Image} from 'semantic-ui-react'
import DonationForm from './DonationForm'

class CharityPage extends React.Component {

  state = {
    charity: {}
  }

componentDidMount() {
    fetch(`http://localhost:3000/api/v1/charities/${this.props.match.params.id}`)
      .then(rsp => rsp.json())
      .then(charity => {
        this.setState({
          charity: Object.assign(charity, this.state.charity )
        })
        fetchCharity(charity)
      })
  }

  render() {
    console.log(this.props)
    return(
      <Card>
        <Card.Content class = "ui card">
        <h2>{this.state.charity.name}</h2>
        <Image src={this.state.charity.rating_image}/>
        <br></br>
        <a href={this.state.charity.url}>{this.state.charity.url}</a>
        <p>{this.state.charity.deductibility}</p>
        <p>Accountability: {this.state.charity.accountability_rating}</p>
        <p>Financial Security: {this.state.charity.financial_rating}</p>
        <Link to={ {pathname: "/donate/"} }><Button>donate</Button></Link>
        </Card.Content>
      </Card>
    )
  }
}

function mapStateToProps(state) {
  return {
    fetchCharity: state.charity
  }
}

export default connect(mapStateToProps, { fetchCharity })(CharityPage);
