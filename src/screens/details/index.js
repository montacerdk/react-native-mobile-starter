import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import Details from '../../scenes/details';
import styles from './styles';

const DetailsStack = createStackNavigator();

const DetailsStackScreen = () => {
  return (
    <DetailsStack.Navigator screenOptions={styles.header}>
      <DetailsStack.Screen name="Details" component={Details} />
    </DetailsStack.Navigator>
  );
};

export default DetailsStackScreen;
