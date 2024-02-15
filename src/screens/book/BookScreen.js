import React from 'react';
import { Book } from '../../components/Book';
import { UpdateDeleteButtons } from '../../components/UpdateDeleteButtons';

export const BookScreen = (bookData) => {
  const book = bookData.route.params;
  return (
    <>
      <Book book={book} />
      <UpdateDeleteButtons book={book} />
    </>
  );
};
