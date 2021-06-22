import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

import Details from '../screens/details';
import Explore from '../screens/explore';
import Profile from '../screens/profile';
import Main from '../screens/main';

const Drawer = createDrawerNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={Main} />
        <Drawer.Screen name="Explore" component={Explore} />
        <Drawer.Screen name="Profile" component={Profile} />
        <Drawer.Screen name="Details" component={Details} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
