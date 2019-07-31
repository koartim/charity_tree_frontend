import React from 'react'
import "./App.css";
import AllCharitiesPage from "./AllCharitiesPage";
import NavBar from "./NavBar"
import HomePage from './HomePage'
import ProfilePage from './ProfilePage'
import CharityPage from './CharityPage'
import DonationForm from './DonationForm'
import { Route, Switch } from 'react-router-dom'
import SignUp from './SignUp'
import Login from './Login'
import { connect } from 'react-redux'
import { login } from './actions'
import { Grid } from 'semantic-ui-react'

 class App extends React.Component {
   //
   // state = {
   //   donation: []
   // }
   //
   // componentDidMount() {
   //   fetch('http://localhost:3000/api/v1/donations')
   //     .then(rsp => rsp.json())
   //     .then(donations => {
   //       donations.map(donation => {
   //         this.setState({
   //           donations: donations
   //        })
   //       })
   //     })
   //   }

   render() {
     return(
       <Grid>
        <NavBar />
            <Grid.Row centered>
            <Switch>
              <Route path="/home" render={() => <HomePage /> }/>
              <Route path="/charities/:id" render={routeProps => <CharityPage {...routeProps} />}/>
              <Route path="/charities" render={() => <AllCharitiesPage />}/>
              <Route path="/signup" render={routeProps => <SignUp {...routeProps} />}/>
              <Route path="/login" render={routeProps => <Login{...routeProps}/>}/>
              <Route path="/profilepage" render={() => <ProfilePage />}/>
              <Route path="/donate" render={routeProps => <DonationForm {...routeProps} />}/>
            </Switch>
       </Grid.Row>
      </Grid>
     )
   }
 }

 function mapStateToProps(state) {
   return {
     charities: state.charities,
     fetchCharity: state.fetchCharity
   }
 }

 export default connect(mapStateToProps, { login }) (App);
