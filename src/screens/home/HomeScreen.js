import React, { useEffect, useContext } from 'react';
import { getAllBooks } from '../../api/getAllBooks';
import { BookList } from '../../components/BookList';
import { LibraryContext } from '../../context/LibraryContext';

export const HomeScreen = () => {
  const { library, setLibrary } = useContext(LibraryContext);
  useEffect(() => {
    getAllBooks(setLibrary);
  }, []);

  return <BookList library={library} />;
};
