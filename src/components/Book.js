import { StyleSheet, View, Text } from 'react-native';

export const Book = ({ book }) => {
  return (
    <View style={styles.book}>
      <Text>Título: {book.title}</Text>
      <Text>Autor: {book.author}</Text>
      <Text>Nº de páginas: {book.pages}</Text>
      <Text>Editorial: {book.editorial}</Text>
      <Text>ISBN-13: {book.isbn13}</Text>
      <Text>ID: {book.id}</Text>
      <Text>
        Disponibilidad: {book.avaiable ? 'Diponible' : 'No disponible'}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  book: {
    display: 'flex',
    flex: 1,
    padding: 15,
  },
});
