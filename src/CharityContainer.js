import React from 'react';
import CharityCard from './CharityCard'

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

export default CharityContainer
