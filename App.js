/**
 * @format
 */

import React, {useEffect, useState} from 'react';
import {StyleSheet, FlatList, SafeAreaView, Text, View} from 'react-native';
import {getLibraryData} from './helpers';

function App() {
  const [library, setLibrary] = useState([]);

  useEffect(() => {
    getLibraryData(setLibrary);
  }, []);

  return (
    <View style={styles.container}>
      <Text>Hola</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'grey',
    flex: 1,
    padding:15
  }
});

export default App;
