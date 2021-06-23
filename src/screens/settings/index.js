import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import React from 'react';

import Settings from '../../scenes/settings';
import styles from './styles';

const SettingsStack = createStackNavigator();

const SettingsStackScreen = ({ navigation }) => {
  return (
    <SettingsStack.Navigator screenOptions={styles.header}>
      <SettingsStack.Screen
        name="Settings"
        component={Settings}
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
    </SettingsStack.Navigator>
  );
};

export default SettingsStackScreen;
