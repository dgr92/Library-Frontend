import { View, Text } from 'react-native';
import { bookStyle } from './styles/bookStyle';

export const Book = ({ book }) => {
  return (
    <View style={bookStyle.book}>
      <View>
        <Text style={bookStyle.name}>Título:</Text>
        <Text style={bookStyle.value}>{book.title}</Text>
      </View>
      <View>
        <Text style={bookStyle.name}>Autor:</Text>
        <Text style={bookStyle.value}>{book.author}</Text>
      </View>
      <View>
        <Text style={bookStyle.name}>Nº de páginas:</Text>
        <Text style={bookStyle.value}>{book.pages}</Text>
      </View>
      <View>
        <Text style={bookStyle.name}>Editorial:</Text>
        <Text style={bookStyle.value}>{book.editorial}</Text>
      </View>
      <View>
        <Text style={bookStyle.name}>ISBN-13:</Text>
        <Text style={bookStyle.value}>{book.isbn13}</Text>
      </View>
      <View>
        <Text style={bookStyle.name}>ID:</Text>
        <Text style={bookStyle.value}>{book.id}</Text>
      </View>
      <View>
        <Text style={bookStyle.name}>Disponibilidad:</Text>
        <Text style={bookStyle.value}>{book.avaiable ? 'Diponible' : 'No disponible'}</Text>
      </View>
    </View>
  );
};
