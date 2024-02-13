/**
 * @format
 */
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { LibraryProviderContext } from './src/context/LibraryContext.js';
import { HomeScreen } from './src/screens/home/HomeScreen';
import { BookScreen } from './src/screens/book/BookScreen';

const Stack = createStackNavigator();

function App() {
  console.log('Todo bien'); //TODO: BORRAR
  return (
    <LibraryProviderContext>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Biblioteca" component={HomeScreen} />
          <Stack.Screen name="Libro" component={BookScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </LibraryProviderContext>
  );
}

export default App;
