import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import SignIn from '../sign-in';
import SignUp from '../sign-up';
import Splash from '../splash';

const RootStackNav = createStackNavigator();

const RootStack = () => {
  return (
    <RootStackNav.Navigator headerMode="none">
      <RootStackNav.Screen name="Splash" component={Splash} />
      <RootStackNav.Screen name="SignIn" component={SignIn} />
      <RootStackNav.Screen name="SignUp" component={SignUp} />
    </RootStackNav.Navigator>
  );
};

export default RootStack;
