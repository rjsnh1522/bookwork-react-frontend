import React,{Component} from 'react';
import {Route} from 'react-router-dom';
import PropTypes from 'prop-types';
import HomePage from './components/pages/HomePage'
import LoginPage from './components/pages/LoginPage'
import SignupPage from './components/pages/SignupPage'
import DashboardPage from './components/pages/DashboardPage'
import ConfirmationPage from './components/pages/ConfirmationPage'
import ForgotPassword from './components/pages/ForgotPassword'
import ResetPasswordPage from './components/pages/ResetPasswordPage'
import NewBookPage from './components/pages/NewBookPage'
import AllBooksPage from './components/pages/AllBooksPage'



import TopNavigation from './components/navigation/TopNavigation'
import { connect } from 'react-redux';

import UserRoute from './components/routes/UserRoute';
import GuestRoute from './components/routes/GuestRoute';



class App extends Component {

  render(){
    const {location,isAuthenticated}=this.props;
    return (
      <div className="ui container">
      {isAuthenticated && <TopNavigation />}
        <Route  location={location} path='/' exact component={HomePage}/>
        <Route  location={location} path='/confirmation/:token' exact component={ConfirmationPage}/>
        <GuestRoute location={location}  path='/login' exact component={LoginPage}/>
        <GuestRoute location={location}  path='/reset-password/:token' exact component={ResetPasswordPage}/>
        <GuestRoute location={location}  path='/signup' exact component={SignupPage}/>
        <GuestRoute location={location}  path='/forgot-password' exact component={ForgotPassword}/>
        <UserRoute location={location}  path='/dashboard' exact component={DashboardPage}/>
        <UserRoute location={location}  path='/books/new' exact component={NewBookPage}/>
        <UserRoute location={location}  path='/books/all' exact component={AllBooksPage}/>
      </div>

    )
  }
}


App.PropTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired,
  isAuthenticated:PropTypes.bool.isRequired
};

function mapStateToProps(state) {
  return{
    isAuthenticated: !!state.userReducer.token
  }
}

export default connect(mapStateToProps)(App);
