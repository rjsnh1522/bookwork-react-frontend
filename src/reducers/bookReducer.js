import { createSelector } from 'reselect'

export default function bookReducer(state={},action={}){

  switch (action.type) {

    default:
      return state;

  }
}


// add Selectors
// it takes the current state from the reducer which u want to use ex bookReducer
export const booksSelector = state => state.bookReducer;

//createSelector is provided by library
// it takes any number of arguments first one is the selector which u want to use and 2nd one which u want to create the
// new selector

export const allBooksSelector = createSelector(
  booksSelector,
  booksHash => Object.values(booksHash)
)
