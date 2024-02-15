import React, { useEffect, useState, useContext } from 'react';
import { View } from 'react-native';
import { getAllBooks } from '../../api/getAllBooks';
import { BookList } from '../../components/BookList';
import { LibraryContext } from '../../context/LibraryContext';
import { homeScreenStyles } from './homeScreenStyle';

export const HomeScreen = () => {
  const { library, setLibrary } = useContext(LibraryContext);
  useEffect(() => {
    getAllBooks(setLibrary);
  }, []);

  return <BookList library={library} />;
};
