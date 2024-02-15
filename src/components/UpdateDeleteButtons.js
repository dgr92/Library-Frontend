import React, { useContext, useState } from 'react';
import { View, Button } from 'react-native';
import { LibraryContext } from '../context/LibraryContext.js';
import { useNavigation } from '@react-navigation/native';
import { deleteBook } from '../api/deleteBook';
import { DeleteModal } from './DeleteModal';
import { UpdateModal } from './UpdateModal.js';

export const UpdateDeleteButtons = ({ book }) => {
  const navigation = useNavigation();
  const { setLibrary } = useContext(LibraryContext);
  const [visibleDeleteModal, setVisibleDeleteModal] = useState(false);
  const [visibleUpdateModal, setVisibleUpdateModal] = useState(false);

  // Update book logic
  const handlePressCancelUpdate = () => {
    setVisibleUpdateModal(false);
  };

  // Delete book logic
  const handlePressDelete = async () => {
    setVisibleDeleteModal(false);
    await deleteBook(book.id, setLibrary);
    navigation.navigate('Biblioteca');
  };

  const handlePressCancelDelete = () => {
    setVisibleDeleteModal(false);
  };

  return (
    <View>
      <Button title="Actualizar Libro" onPress={() => setVisibleUpdateModal(true)} />
      <Button title="Borrar Libro" onPress={() => setVisibleDeleteModal(true)} />
      <DeleteModal visible={visibleDeleteModal} onCancel={handlePressCancelDelete} onDelete={handlePressDelete} />

      <UpdateModal visible={visibleUpdateModal} onCancel={handlePressCancelUpdate} book={book} />
    </View>
  );
};
