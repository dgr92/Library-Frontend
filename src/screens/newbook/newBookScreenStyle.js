import { StyleSheet } from 'react-native';

export const newBookScreeenStyle = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
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
    width:'75%'
  },
  buttons: {},
  error: {
    textAlign: 'center',
    color: 'red',
    fontWeight: 'bold',
    margin: -15,
    backgroundColor: '#f2f2f2',
  },
});
