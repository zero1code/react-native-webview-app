import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Main from '../pages/Main';

const Home = createNativeStackNavigator();

const Routes: React.FC = () => (
  <Home.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <Home.Screen  name="main" component={Main} />
  </Home.Navigator>
);

export default Routes;