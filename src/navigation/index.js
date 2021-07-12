import React, { useReducer, useEffect, useState } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import AsyncStorage from '@react-native-community/async-storage';
import { ActivityIndicator, View } from 'react-native';
import {
  NavigationContainer,
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme,
} from '@react-navigation/native';
import {
  DefaultTheme as PaperDefaultTheme,
  DarkTheme as PaperDarkTheme,
  Provider as PaperProvider,
} from 'react-native-paper';

import DrawerContent from '../screens/drawer-content';
import RootStack from '../screens/root-stack';
import Bookmarks from '../screens/bookmarks';
import Settings from '../screens/settings';
import { signInApi } from '../common/api';
import Details from '../screens/details';
import Explore from '../screens/explore';
import Profile from '../screens/profile';
import { AuthContext } from '../store';
import Main from '../screens/main';

const Drawer = createDrawerNavigator();

const Navigation = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const initialLoginState = {
    isLoading: true,
    userToken: null,
    email: null,
  };

  const CustomDefaultTheme = {
    ...NavigationDefaultTheme,
    ...PaperDefaultTheme,
    colors: {
      ...NavigationDefaultTheme.colors,
      ...PaperDefaultTheme.colors,
      background: '#ffffff',
      text: '#333333',
    },
  };

  const CustomDarkTheme = {
    ...NavigationDarkTheme,
    ...PaperDarkTheme,
    colors: {
      ...NavigationDarkTheme.colors,
      ...PaperDarkTheme.colors,
      background: '#333333',
      text: '#ffffff',
    },
  };

  const theme = isDarkTheme ? CustomDarkTheme : CustomDefaultTheme;

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
          email: action.id,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGOUT':
        return {
          ...prevState,
          email: null,
          userToken: null,
          isLoading: false,
        };
      case 'REGISTER':
        return {
          ...prevState,
          email: action.id,
          userToken: action.token,
          isLoading: false,
        };
    }
  };

  const [loginState, dispatch] = useReducer(loginReducer, initialLoginState);

  const authContext = {
    signIn: async (user, facebookData) => {
      if (facebookData && facebookData.fromFacebook) {
        await AsyncStorage.setItem('userToken', facebookData.facebookToken);
        dispatch({
          type: 'LOGIN',
          id: user.email,
          token: facebookData.facebookToken,
        });
      } else {
        signInApi(user.email, user.password)
          .then(async accessToken => {
            try {
              await AsyncStorage.setItem('userToken', accessToken);
              dispatch({ type: 'LOGIN', id: user.email, token: accessToken });
            } catch (e) {
              console.log(e);
            }
          })
          .catch(e => {
            console.log(e);
          });
      }
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
    toggleTheme: () => {
      setIsDarkTheme(isDarkTheme => !isDarkTheme);
    },
  };

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
    <PaperProvider theme={theme}>
      <AuthContext.Provider value={authContext}>
        <NavigationContainer theme={theme}>
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
    </PaperProvider>
  );
};

export default Navigation;
