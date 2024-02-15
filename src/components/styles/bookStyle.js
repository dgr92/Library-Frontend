import { StyleSheet } from 'react-native';

export const bookStyle = StyleSheet.create({
  book: {
    display: 'flex',
    flex: 1,
    gap: 7,
    flexWrap: 'wrap',
    margin: 15,
    width: 250,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 17,
  },
  value: {
    marginLeft: 10,
    fontSize: 17,
  },
});
