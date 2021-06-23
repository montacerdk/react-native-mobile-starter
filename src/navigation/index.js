import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

import DrawerContent from '../screens/drawer-content';
import RootStack from '../screens/root-stack';
import Bookmarks from '../screens/bookmarks';
import Settings from '../screens/settings';
import Details from '../screens/details';
import Explore from '../screens/explore';
import Profile from '../screens/profile';
import Main from '../screens/main';

const Drawer = createDrawerNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <RootStack />
      {/* <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
        <Drawer.Screen name="Main" component={Main} />
        <Drawer.Screen name="Explore" component={Explore} />
        <Drawer.Screen name="Profile" component={Profile} />
        <Drawer.Screen name="Details" component={Details} />
        <Drawer.Screen name="Settings" component={Settings} />
        <Drawer.Screen name="Bookmarks" component={Bookmarks} />
      </Drawer.Navigator> */}
    </NavigationContainer>
  );
};

export default Navigation;
