import React from 'react';
import CharityCard from './CharityCard'
import CharityPage from './CharityPage'
import { connect } from 'react-redux'
/// this isn't loading rn because auth is a bitch
class CharityContainer extends React.Component {

  render() {
    console.log(this.props)
    return (
      <div>
        {this.props.charities.map(charity => {
          return <CharityCard charity={charity} key={charity.id} />
        })}

      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    charities: state.charities
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchCharities: (charities) => {
      dispatch({type: "FETCH_ALL_CHARITIES", payload: charities})
    }
  }
}

export default CharityContainer
