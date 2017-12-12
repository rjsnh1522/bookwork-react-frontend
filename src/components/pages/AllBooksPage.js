import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {fetchBooksAction} from '../../actions/books'
import ListOfBooks from './ListOfBooks'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {allBooksSelector} from '../../reducers/bookReducer'

class AllBooksPage  extends Component{

  state = {
    books:null
  }


  componentDidMount = () => this.onInit(this.props);



    onInit = props => props.fetchBooksAction();

    render(){
      const {books} = this.state;
      return(
      <div>

      </div>
      )
    }

}

function mapStateToProps(state){
  console.log(state)
  return {
    books: allBooksSelector(state)
  }

}



export default connect(mapStateToProps,{fetchBooksAction})(AllBooksPage);
