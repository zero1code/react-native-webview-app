import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  View,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native'

import Routes from './routes';

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar backgroundColor={'#ED6E2D'}/>
        <Routes />
      </SafeAreaView>
    </NavigationContainer>
    
  );
};

export default App;
