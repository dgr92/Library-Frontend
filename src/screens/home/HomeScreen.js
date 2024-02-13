import React, { useEffect, useState, useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { getAllBooks } from '../../api/getAllBooks';
import { BookList } from '../../components/BookList';
import { LibraryContext } from '../../context/LibraryContext';

export const HomeScreen = () => {
  const { library, setLibrary } = useContext(LibraryContext);

  useEffect(() => {
    getAllBooks(setLibrary);
  }, []);

  return (
    <View>
      <BookList library={library} />
    </View>
  );
};
