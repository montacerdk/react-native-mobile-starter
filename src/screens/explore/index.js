import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import React from 'react';

import Explore from '../../components/explore';
import styles from './styles';

const ExploreStack = createStackNavigator();

const ExploreStackScreen = ({ navigation }) => {
  return (
    <ExploreStack.Navigator screenOptions={styles.header}>
      <ExploreStack.Screen
        name="Explore"
        component={Explore}
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
    </ExploreStack.Navigator>
  );
};

export default ExploreStackScreen;
