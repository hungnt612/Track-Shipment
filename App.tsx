import React from 'react';
import {SafeAreaView, StatusBar, useColorScheme, View} from 'react-native';
import {WelcomeScreen, Home} from './src/screens';
const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View style={{flex: 1}}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Home />
    </View>
  );
};

export default App;
