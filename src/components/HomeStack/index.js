import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from '../../screens/Home';

const Stack = createStackNavigator();

const HomeStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Home" component={HomeScreen} />
  </Stack.Navigator>
);

export default HomeStack;
