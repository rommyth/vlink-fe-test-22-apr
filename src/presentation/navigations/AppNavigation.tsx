import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AppNavigationParams } from './AppNavigationTypes';

import Splash from '../screens/Splash';
import Login from '../screens/Login';
import DetailUser from '../screens/DetailUser';
import Home from '../screens/Home';

const Stack = createNativeStackNavigator<AppNavigationParams>();

const AppNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="DetailUser" component={DetailUser} />
    </Stack.Navigator>
  );
};

export default AppNavigation;
