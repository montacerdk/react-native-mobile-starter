import { createDrawerNavigator } from '@react-navigation/drawer';
import AsyncStorage from '@react-native-community/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import React, { useReducer, useEffect, useMemo } from 'react';
import { ActivityIndicator, View } from 'react-native';

import DrawerContent from '../screens/drawer-content';
import { AuthContext } from '../store/context';
import RootStack from '../screens/root-stack';
import Bookmarks from '../screens/bookmarks';
import Settings from '../screens/settings';
import Details from '../screens/details';
import Explore from '../screens/explore';
import Profile from '../screens/profile';
import Main from '../screens/main';

const Drawer = createDrawerNavigator();

const Navigation = () => {
  const initialLoginState = {
    isLoading: true,
    userName: null,
    userToken: null,
  };

  const loginReducer = (prevState, action) => {
    switch (action.type) {
      case 'RETRIEVE_TOKEN':
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGIN':
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGOUT':
        return {
          ...prevState,
          userName: null,
          userToken: null,
          isLoading: false,
        };
      case 'REGISTER':
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
    }
  };

  const [loginState, dispatch] = useReducer(loginReducer, initialLoginState);

  const authContext = useMemo(
    () => ({
      signIn: async foundUser => {
        const userToken = String(foundUser[0].userToken);
        const userName = foundUser[0].username;
        try {
          await AsyncStorage.setItem('userToken', userToken);
        } catch (e) {
          console.log(e);
        }
        dispatch({ type: 'LOGIN', id: userName, token: userToken });
      },
      signOut: async () => {
        try {
          await AsyncStorage.removeItem('userToken');
        } catch (e) {
          console.log(e);
        }
        dispatch({ type: 'LOGOUT' });
      },
      signUp: () => {},
    }),
    [],
  );

  useEffect(() => {
    setTimeout(async () => {
      let userToken = null;
      try {
        userToken = await AsyncStorage.getItem('userToken');
      } catch (e) {
        console.log(e);
      }
      dispatch({ type: 'RETRIEVE_TOKEN', token: userToken });
    }, 1000);
  }, []);

  if (loginState.isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        {loginState.userToken !== null ? (
          <Drawer.Navigator
            drawerContent={props => <DrawerContent {...props} />}>
            <Drawer.Screen name="Main" component={Main} />
            <Drawer.Screen name="Explore" component={Explore} />
            <Drawer.Screen name="Profile" component={Profile} />
            <Drawer.Screen name="Details" component={Details} />
            <Drawer.Screen name="Settings" component={Settings} />
            <Drawer.Screen name="Bookmarks" component={Bookmarks} />
          </Drawer.Navigator>
        ) : (
          <RootStack />
        )}
      </NavigationContainer>
    </AuthContext.Provider>
  );
};

export default Navigation;
