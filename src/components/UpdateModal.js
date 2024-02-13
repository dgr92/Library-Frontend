import React, { useState } from 'react';
import { Modal, View, Button } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { updateBook } from '../api/updateBook';

export const UpdateModal = ({ visible, onCancel, book }) => {
  const [title, setTitle] = useState(book.title);
  const [author, setAuthor] = useState(book.author);
  const [editorial, setEditorial] = useState(book.editorial);
  const [pages, setPages] = useState(book.pages);
  const [isbn13, setIsbn13] = useState(book.isbn13);
  const [availability, setAvailability] = useState(book.avaiable);

  const handleSubmit = async (e) => {
    e.preventDefault();
    updateBook(title, author, editorial, pages, isbn13, availability);
  };

  const handleTitleChange = (value) => {
    setTitle(value);
  };

  const handleAuthorChange = (value) => {
    setAuthor(value);
  };

  const handleEditorialChange = (value) => {
    setEditorial(value);
  };

  const handlePagesChange = (value) => {
    setPages(value);
  };

  const handleIsbnChange = (value) => {
    setIsbn13(value);
  };

  const handleAvaiability = (value) => {
    setAvailability(value);
  };

  return (
    <Modal
      animationType="slide"
      transparent={false}
      visible={visible}
      onRequestClose={onCancel}>
      <View>
        <View>
          <TextInput
            placeholder="Título"
            value={title}
            onChangeText={handleTitleChange}
          />
          <TextInput
            placeholder="Autor"
            value={author}
            onChangeText={handleAuthorChange}
          />
          <TextInput
            placeholder="Editorial"
            value={editorial}
            onChangeText={handleEditorialChange}
          />
          <TextInput
            placeholder="Nº de páginas"
            value={pages}
            onChangeText={handlePagesChange}
          />
          <TextInput
            placeholder="ISBN-13"
            value={isbn13}
            onChangeText={handleIsbnChange}
          />
          <View style={{ marginTop: 10 }}>
            <Button title="Actualizar" onPress={handleSubmit} />
          </View>
        </View>
        <View>
          <Button title="Cancelar" onPress={onCancel} />
        </View>
      </View>
    </Modal>
  );
};
