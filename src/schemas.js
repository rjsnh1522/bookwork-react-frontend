import {schema} from 'normalizr';

export const bookSchema = new schema.Entity(
  "books",{},{"book_id":"id"}
)
