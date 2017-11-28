import React, { Component } from 'react';
import {Form,Dropdown} from 'semantic-ui-react'
import axios from 'axios';
import {searchBookAction} from '../../actions/books'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const url = `http://localhost:4000`;
class SearchBookForm  extends Component{

  state = {
    query: '',
    loading:false,
    options:[ ],
    books:{}
  }

  onSearchChange = (e, data) =>{
    clearTimeout(this.timer);
    this.setState({
      query:data.searchQuery
    });

    this.timer = setTimeout(this.fetchOptions,1000);

  }

  onChange = (e,data) =>{
    this.setState({query:data.value});
    this.props.onBookSelect(this.state.books[data.value]);
  }
  fetchOptions = () =>{
    if(!this.state.query) return;
    this.setState({loading:true});
    // this.props.searchBookAction(this.state.query)
    // this.props.searchBookAction
    const qr = this.state.query
    axios.get(url+'/books/search',{params:{
      qr:qr
    }})
    .then(res => res.data.all_books)
    .then(books => {
      const options = [];
      const booksHash ={};
      const len = Object.keys(books).length;

      books.forEach(book => {
        booksHash[book.book_id] = book;
        options.push({
          key: book.book_id,
          value: book.book_id,
          text: book.name
        })
      })
      this.setState({loading:false,options,books:booksHash})

    })


  }

    render(){

      return(
      <Form>
        <Dropdown
          search
          fluid
          placeholder="Search for book"
          value={this.state.query}
          onSearchChange={this.onSearchChange}
          options={this.state.options}
          loading={this.state.loading}
          onChange={this.onChange}
        />
      </Form>
      )
    }

}

SearchBookForm.PropTypes = {
  onBookSelect: PropTypes.func.isRequired
}


export default connect(null,{searchBookAction})(SearchBookForm);
