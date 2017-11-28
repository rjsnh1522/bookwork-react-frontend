import React, { Component } from 'react';
import { Link } from 'react-router-dom';




class AllBooksPage  extends Component{
      constructor(props) {
          super(props)
          this.state = {

          };
      }

    render(){

      return(
      <div>
        <Link to="/books/new"> Add New Book </Link>
      </div>
      )
    }

}




export default AllBooksPage;
