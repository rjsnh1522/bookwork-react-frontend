import React, { Component } from 'react';
import {Form,Dropdown} from 'semantic-ui-react'
import axios from 'axios';
import {searchBookAction} from '../../actions/books'
import { connect } from 'react-redux';


class SearchBookForm  extends Component{

  state = {
    query: '',
    loading:false,
    options:[{
      key:1,
      value:'1',
      text:"asddsdd"
    },
    {
      key:2,
      value:'1',
      text:"adfsafsfgfszgf"
    }],
    books:{}
  }

  onSearchChange = (e, data) =>{
    clearTimeout(this.timer);
    this.setState({
      query:data.searchQuery
    });

    this.timer = setTimeout(this.fetchOptions,1000);

  }

  fetchOptions = () =>{
    if(!this.state.query) return;
    this.setState({loading:true});
    console.log(this.state.query)
    // this.props.searchBookAction(this.state.query)
    // this.props.searchBookAction
    axios.get(`/api/books/search?q=${this.state.query}`)
    .then(res => res.data.books)
  }

    render(){
      const {loading} = this.state;
      return(
      <Form>
        <Dropdown
          search
          fluid
          placeholder="Search for book"
          value={this.state.query}
          onSearchChange={this.onSearchChange}
          options={this.state.options}
          loading={loading}
        />
      </Form>
      )
    }

}




export default connect(null,{searchBookAction})(SearchBookForm);
