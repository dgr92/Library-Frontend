import { StyleSheet } from 'react-native';

export const updateModalStyle = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#f2f2f2'
  },
  form: {
    padding: 15,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  value: {
    marginLeft: 10,
    fontSize: 16,
    marginTop: -10,
    color: 'grey',
    borderBottomWidth: 1,
    borderColor: 'grey',
    paddingBottom: -5,
    marginBottom: 15,
    width: '75%',
  },

  error: {
    textAlign: 'center',
    color: 'red',
    fontWeight: 'bold',
    margin: -15,
    backgroundColor: '#f2f2f2',
  },
});
