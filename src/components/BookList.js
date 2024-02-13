import { FlatList, View, Text } from 'react-native';
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

  return (
    <FlatList
      data={library}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => handlePressBook(item)}>
          <Book book={item} />
        </TouchableOpacity>
      )}
      keyExtractor={(item) => item.id}
    />
  );
};
