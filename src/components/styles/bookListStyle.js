import { StyleSheet } from 'react-native';

export const bookListStyle = StyleSheet.create({
  bookList: {
    width: '100%',
    height: '100%',
  },

  book: {
    borderColor: 'grey',
    borderWidth: 2,
    borderRadius: 20,
    marginBottom: 15,
    width: '65%',
    alignSelf: 'center',
  },

  button: {
    padding: 10,
    backgroundColor: '#2296f3',
    color: 'transparent',
    width: '100%',
    marginBottom: 10,
  },
  btnText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
