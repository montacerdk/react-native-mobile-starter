import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import React from 'react';

import Home from '../../components/home';
import styles from './styles';

const HomeStack = createStackNavigator();

const HomeStackScreen = ({ navigation }) => {
  return (
    <HomeStack.Navigator screenOptions={styles.header}>
      <HomeStack.Screen
        name="Home"
        component={Home}
        options={{
          headerLeft: () => (
            <Icon.Button
              onPress={() => {
                navigation.openDrawer();
              }}
              backgroundColor="#14174f"
              name="ios-menu"
              size={25}
            />
          ),
        }}
      />
    </HomeStack.Navigator>
  );
};

export default HomeStackScreen;
