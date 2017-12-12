import React, { Component } from 'react';
import {Segment,Message,Icon} from 'semantic-ui-react'
import SearchBookForm from '../forms/SearchBookForm'
import BookForm from '../forms/BookForm'
import {saveNewBookAction} from '../../actions/books'
import {connect} from 'react-redux'
import PropTypes from 'prop-types';

class NewBookPage  extends Component{

    state = {
      book:null,
      success:false
    }

onBookSelect = (book) => {
  this.setState({book})
}

addBook = (data) =>  this.props.saveNewBookAction(data).then(() => this.props.history.push('/books/all'))


    render(){

      return(
        <Segment>
            <h1>Add book to you collection</h1>
            <SearchBookForm onBookSelect={this.onBookSelect}/>

            {this.state.book && (
              <BookForm submit={this.addBook} book={this.state.book}/>
            )}


        </Segment>
      )
    }

}


NewBookPage.PropTypes ={
  saveNewBookAction: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired
}



export default connect(null,{saveNewBookAction})(NewBookPage);
