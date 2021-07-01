import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import React from 'react';

import Details from '../../components/details';
import styles from './styles';

const DetailsStack = createStackNavigator();

const DetailsStackScreen = ({ navigation }) => {
  return (
    <DetailsStack.Navigator screenOptions={styles.header}>
      <DetailsStack.Screen
        name="Details"
        component={Details}
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
    </DetailsStack.Navigator>
  );
};

export default DetailsStackScreen;
