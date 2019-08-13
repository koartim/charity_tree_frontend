import React from 'react';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { Button, Form } from 'semantic-ui-react'

class SearchBar extends React.Component {

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.history.push(`/charities?searchTerm=${this.props.filterValue}`)
  };

  handleChange = (event) => {
    this.props.setFilterValue(event.target.value)
  }

  render() {
    console.log(this.props)
    return(
      <div align="left">
      <div className="search-container">
        <div className="overlay"/>
          <Form className="search-form" onSubmit={this.handleSubmit}>
          <input
          name="filterValue"
          value={this.props.filterValue}
          onChange={this.handleChange}
          placeholder="Search charities"
          className="input"
        />
        <Button className="submit" type="submit">Submit</Button>
          <i className="fas fa-search icon" />
          </Form>
      </div>
      </div>
    )
  }
}

  function mapStateToProps(state) {
    return {
      charities: state.charities,
      filterValue: state.filterValue,
      setFilterValue: state.setFilterValue
    }
  }

  function mapDispatchToProps(dispatch) {
    return {
      setFilterValue: (filterValue) => {
        dispatch({type: "SET_FILTER_VALUE", payload: filterValue})
      }
    }
  }


export default connect(mapStateToProps, mapDispatchToProps) ((withRouter(SearchBar)));
