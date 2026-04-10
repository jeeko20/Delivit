import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import store from './src/store/store';
import AppNavigator from './src/navigation/AppNavigator';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <AppNavigator />
        <StatusBar style="light" backgroundColor="#FF6B35" />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
