import { useState, useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import { LibraryContext } from '../../context/LibraryContext';
import { View, Button, Text } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { createNewBook } from '../../api/createNewBook';

export const NewBookScreen = () => {
  const navigation = useNavigation();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [editorial, setEditorial] = useState('');
  const [pages, setPages] = useState('');
  const [isbn13, setIsbn13] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const { setLibrary } = useContext(LibraryContext);

  const onCreate = async (e) => {
    e.preventDefault();

    if (!Number.isInteger(pages)) {
      return setErrorMessage('El número de páginas debe ser un número entero.');
    } else if (!title || !author || !editorial || !pages || !isbn13) {
      return setErrorMessage('Todos los campos son obligatorios. Por favor, rellene todos los campos.');
    } else {
      setErrorMessage('');
    }

    await createNewBook(title, author, editorial, pages, isbn13, setLibrary);
    navigation.navigate('Biblioteca');
  };

  const onCancel = () => {
    navigation.navigate('Biblioteca');
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

  return (
    <View>
      <View>
        <View>
          <TextInput placeholder="Título" value={title} onChangeText={handleTitleChange} />
        </View>

        <View>
          <TextInput placeholder="Autor" value={author} onChangeText={handleAuthorChange} />
        </View>

        <View>
          <TextInput placeholder="Editorial" value={editorial} onChangeText={handleEditorialChange} />
        </View>

        <View>
          <TextInput
            placeholder="Nº de páginas"
            value={pages}
            onChangeText={handlePagesChange}
            keyboardType="numeric"
          />
        </View>

        <View>
          <TextInput placeholder="ISBN-13" value={isbn13} onChangeText={handleIsbnChange} />
        </View>

        <View>{errorMessage != '' ? <Text>{errorMessage}</Text> : null}</View>

        <View style={{ marginTop: 10 }}>
          <Button title="Crear" onPress={onCreate} />
        </View>
      </View>
      <View>
        <Button title="Cancelar" onPress={onCancel} />
      </View>
    </View>
  );
};
