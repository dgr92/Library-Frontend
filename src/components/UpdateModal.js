import React, { useState, useContext } from 'react';
import { StyleSheet, Modal, View, Button, Text } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { Dropdown } from 'react-native-element-dropdown';
import { updateBook } from '../api/updateBook';
import { LibraryContext } from '../context/LibraryContext.js';

export const UpdateModal = ({ visible, book, onCancel }) => {
  const [title, setTitle] = useState(book.title);
  const [author, setAuthor] = useState(book.author);
  const [editorial, setEditorial] = useState(book.editorial);
  const [pages, setPages] = useState(book.pages);
  const [isbn13, setIsbn13] = useState(book.isbn13);
  const [availability, setAvailability] = useState(book.avaiable);
  const [errorMessage, setErrorMessage] = useState('');
  const { setLibrary } = useContext(LibraryContext);

  const dropdownData = [
    { label: 'Disponible', value: true },
    { label: 'No disponible', value: false },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!Number.isInteger(pages)) {
      return setErrorMessage('El número de páginas debe ser un número entero.');
    } else if (!title || !author || !editorial || !pages || !isbn13) {
      return setErrorMessage('Todos los campos son obligatorios. Por favor, rellene todos los campos.');
    } else {
      setErrorMessage('');
    }

    await updateBook(setLibrary, book.id, title, author, editorial, pages, isbn13, availability);
    onCancel();
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
    setPages(parseInt(value));
  };
  const handleIsbnChange = (value) => {
    setIsbn13(value);
  };
  const handleAvailability = (value) => {
    setAvailability(value);
  };

  return (
    <Modal animationType="slide" transparent={false} visible={visible} onRequestClose={onCancel}>
      <View>
        <View>
          <View>
            <Text>Título:</Text>
            <TextInput placeholder="Título" value={title} onChangeText={handleTitleChange} />
          </View>

          <View>
            <Text>Autor:</Text>
            <TextInput placeholder="Autor" value={author} onChangeText={handleAuthorChange} />
          </View>

          <View>
            <Text>Editorial:</Text>
            <TextInput placeholder="Editorial" value={editorial} onChangeText={handleEditorialChange} />
          </View>

          <View>
            <Text>Nº de páginas:</Text>
            <TextInput
              placeholder="Nº de páginas"
              value={pages}
              onChangeText={handlePagesChange}
              keyboardType="numeric"
            />
          </View>

          <View>
            <Text>ISBN-13:</Text>
            <TextInput placeholder="ISBN-13" value={isbn13} onChangeText={handleIsbnChange} />
          </View>

          <View>
            <Text>Disponibilidad:</Text>
            <Dropdown
              style={styles.dropdown}
              data={dropdownData}
              maxHeight={300}
              labelField="label"
              valueField="value"
              value={availability}
              onChange={(item) => {
                handleAvailability(item.value);
              }}
            />
          </View>

          <View>{errorMessage != '' ? <Text>{errorMessage}</Text> : null}</View>

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

const styles = StyleSheet.create({
  dropdown: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
});
