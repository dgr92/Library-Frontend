import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
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
