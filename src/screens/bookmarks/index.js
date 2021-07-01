import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import React from 'react';

import Bookmarks from '../../components/bookmarks';
import styles from './styles';

const BookmarksStack = createStackNavigator();

const BookmarksStackScreen = ({ navigation }) => {
  return (
    <BookmarksStack.Navigator screenOptions={styles.header}>
      <BookmarksStack.Screen
        name="Bookmarks"
        component={Bookmarks}
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
    </BookmarksStack.Navigator>
  );
};

export default BookmarksStackScreen;
