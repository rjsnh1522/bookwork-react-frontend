import React,{Component} from 'react';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Button } from 'semantic-ui-react'
import {logoutAction} from '../../actions/auth';
import ConfirmEmailMessage from '../messages/ConfirmEmailMessage'


class DashboardPage extends Component {

  render(){
    const {isConfirmed} = this.props;
    return (
      <div>
              {!isConfirmed && <ConfirmEmailMessage />}


      </div>

    )
  }
}

DashboardPage.PropTypes = {
  isConfirmed:PropTypes.bool.isRequired
};

function mapStateToProps(state){

  return {
    isConfirmed: !!state.userReducer.confirmed

  }

}

export default connect(mapStateToProps)(DashboardPage);
