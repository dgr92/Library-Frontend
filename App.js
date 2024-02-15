/**
 * @format
 */
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { LibraryProviderContext } from './src/context/LibraryContext.js';
import { HomeScreen } from './src/screens/home/HomeScreen';
import { BookScreen } from './src/screens/book/BookScreen';
import { NewBookScreen } from './src/screens/newbook/NewBookScreen.js';

const Stack = createStackNavigator();

function App() {
  return (
    <LibraryProviderContext>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Biblioteca" component={HomeScreen} />
          <Stack.Screen name="Libro" component={BookScreen} />
          <Stack.Screen name="Registrar nuevo libro" component={NewBookScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </LibraryProviderContext>
  );
}

export default App;
