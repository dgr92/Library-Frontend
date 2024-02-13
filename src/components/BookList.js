import { FlatList, View, Text, Button } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import { getBook } from '../api/getBook';
import { Book } from './Book';

export const BookList = ({ library }) => {
  const navigation = useNavigation();

  const handlePressBook = async (book) => {
    const selectedBook = await getBook(book);
    navigation.navigate('Libro', selectedBook);
  };

  const handleNewBook = () => {
    navigation.navigate('Registrar nuevo libro');
  };

  return (
    <View>
      <Button title="Nuevo Libro" onPress={handleNewBook} />
      <FlatList
        data={library}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handlePressBook(item)}>
            <Book book={item} />
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};
