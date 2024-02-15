import { FlatList, View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { getBook } from '../api/getBook';
import { Book } from './Book';
import { bookListStyle } from './styles/bookListStyle';

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
    <View style={bookListStyle.bookList}>
      <TouchableOpacity style={bookListStyle.button} onPress={handleNewBook}>
        <Text style={bookListStyle.btnText}> NUEVO LIBRO </Text>
      </TouchableOpacity>
      <FlatList
        data={library}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handlePressBook(item)} style={bookListStyle.book}>
            <Book book={item} />
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};
