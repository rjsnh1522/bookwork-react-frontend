import api from '../api'
import {BOOKS_FETCHED,BOOK_CREATED} from '../types';
import {normalize} from 'normalizr'
import {bookSchema} from '../schemas';



export function booksFetched(data){
  const action = {  type: BOOKS_FETCHED,
    data
  }
  return action;
}

export function bookCreated(data){
 const action = {
   type: BOOK_CREATED,
   data
 }
 return action;
}

export const searchBookAction = (data) => {
  console.log(data)
}


export const saveNewBookAction = (data) => (dispatch) =>
  api.book.saveNewBook(data).then(book => {
    dispatch(bookCreated(normalize(book,bookSchema)))
  });


export const fetchBooksAction = () => dispatch =>
  api.book.fetchAll().then(books => {
    dispatch(booksFetched(normalize(books,[bookSchema])))
  }

  );
