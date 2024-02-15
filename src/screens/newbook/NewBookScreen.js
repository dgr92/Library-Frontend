import { useState, useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import { LibraryContext } from '../../context/LibraryContext';
import { View, Button, Text } from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { createNewBook } from '../../api/createNewBook';
import { newBookScreeenStyle } from './newBookScreenStyle';

export const NewBookScreen = () => {
  const navigation = useNavigation();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [editorial, setEditorial] = useState('');
  const [pages, setPages] = useState(0);
  const [isbn13, setIsbn13] = useState('');
  const [errorMessage, setErrorMessage] = useState(' ');
  const { setLibrary } = useContext(LibraryContext);

  const onCreate = async (e) => {
    e.preventDefault();

    if (!title || !author || !editorial || !pages || !isbn13) {
      return setErrorMessage('Por favor, rellene todos los campos.');
    } else {
      setErrorMessage(' ');
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
    if (isNaN(value)) {
      setPages(0);
    } else {
      setPages(parseInt(value));
    }
  };
  const handleIsbnChange = (value) => {
    setIsbn13(value);
  };

  return (
    <View style={newBookScreeenStyle.container}>
      <ScrollView>
        <View style={newBookScreeenStyle.form}>
          <View>
            <Text style={newBookScreeenStyle.name}>Título:</Text>
            <TextInput
              placeholder="Título"
              value={title}
              onChangeText={handleTitleChange}
              style={newBookScreeenStyle.value}
            />
          </View>

          <View>
            <Text style={newBookScreeenStyle.name}>Autor:</Text>
            <TextInput
              placeholder="Autor"
              value={author}
              onChangeText={handleAuthorChange}
              style={newBookScreeenStyle.value}
            />
          </View>

          <View>
            <Text style={newBookScreeenStyle.name}>Editorial:</Text>
            <TextInput
              placeholder="Editorial"
              value={editorial}
              onChangeText={handleEditorialChange}
              style={newBookScreeenStyle.value}
            />
          </View>

          <View>
            <Text style={newBookScreeenStyle.name}>Nº de páginas:</Text>
            <TextInput
              placeholder="Nº de páginas"
              value={isNaN(pages) ? (value = 0) : pages.toString()}
              onChangeText={handlePagesChange}
              keyboardType="numeric"
              style={newBookScreeenStyle.value}
            />
          </View>

          <View>
            <Text style={newBookScreeenStyle.name}>ISBN-13:</Text>
            <TextInput
              placeholder="ISBN-13"
              value={isbn13}
              onChangeText={handleIsbnChange}
              style={newBookScreeenStyle.value}
            />
          </View>
        </View>
      </ScrollView>

      <View>
        <Text style={newBookScreeenStyle.error}>{errorMessage}</Text>
      </View>

      <View style={newBookScreeenStyle.buttons}>
        <View style={{ marginTop: 10 }}>
          <Button title="Crear" onPress={onCreate} />
        </View>
        <Button title="Cancelar" onPress={onCancel} />
      </View>
    </View>
  );
};
