import api from '../api'
import {BOOKS_FETCHED} from '../types';





export function booksFetched(data){
  const action = {  type: BOOKS_FETCHED,
    data
  }
  return action;
}

export const searchBookAction = (data) => {
  console.log(data)
}


export const saveNewBookAction = (data) => (dispath) =>
  api.book.saveNewBook(data).then(book => {
  });


export const fetchBooks = () => dispath =>
  api.book.fetchAll().then(books => dispath(booksFetched(normalize(books,[bookSchema]))));
