import React,{Component} from 'react';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ConfirmEmailMessage from '../messages/ConfirmEmailMessage'
import {allBooksSelector} from '../../reducers/bookReducer'

import AddBookCTA from '../ctas/AddBookCTA'

class DashboardPage extends Component {

  render(){
    const {isConfirmed,books} = this.props;
    return (
      <div>
              {!isConfirmed && <ConfirmEmailMessage />}
              {books.length === 0 && <AddBookCTA />}

      </div>

    )
  }
}

DashboardPage.PropTypes = {
  isConfirmed:PropTypes.bool.isRequired,
  books:PropTypes.arrayOf(PropTypes.shape({
    title:PropTypes.string.isRequired,
  }).isRequired).isRequired

};

function mapStateToProps(state){

  return {
    isConfirmed: !!state.userReducer.token,
    books: allBooksSelector(state)

  }

}

export default connect(mapStateToProps)(DashboardPage);
