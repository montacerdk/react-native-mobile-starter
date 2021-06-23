import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import React, { useState } from 'react';
import { View } from 'react-native';
import {
  TouchableRipple,
  Paragraph,
  Caption,
  Avatar,
  Switch,
  Drawer,
  Title,
  Text,
} from 'react-native-paper';

import styles from './styles';

const DrawerContent = props => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <View style={styles.drawerContent}>
      <DrawerContentScrollView>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View style={styles.user}>
              <Avatar.Image
                source={{
                  uri: 'https://avatars.githubusercontent.com/u/26897940?v=4',
                }}
                size={50}
              />
              <View style={styles.userName}>
                <Title style={styles.title}>Montacer Dkhilali</Title>
                <Caption style={styles.caption}>@montacerdk</Caption>
              </View>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.section}>
              <Paragraph style={[styles.paragraph, styles.caption]}>
                80
              </Paragraph>
              <Caption style={styles.caption}>Following</Caption>
            </View>
            <View style={styles.section}>
              <Paragraph style={[styles.paragraph, styles.caption]}>
                717
              </Paragraph>
              <Caption style={styles.caption}>Followers</Caption>
            </View>
          </View>
          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              label="Home"
              icon={({ color, size }) => (
                <Icon name="home-outline" color={color} size={size} />
              )}
              onPress={() => {
                props.navigation.navigate('Home');
              }}
            />
            <DrawerItem
              label="Profile"
              icon={({ color, size }) => (
                <Icon name="account-outline" color={color} size={size} />
              )}
              onPress={() => {
                props.navigation.navigate('Profile');
              }}
            />
            <DrawerItem
              label="Bookmarks"
              icon={({ color, size }) => (
                <Icon name="bookmark-outline" color={color} size={size} />
              )}
              onPress={() => {
                props.navigation.navigate('Bookmarks');
              }}
            />
            <DrawerItem
              label="Settings"
              icon={({ color, size }) => (
                <Ionicons name="settings-outline" color={color} size={size} />
              )}
              onPress={() => {
                props.navigation.navigate('Settings');
              }}
            />
          </Drawer.Section>
          <Drawer.Section title="Preferences">
            <TouchableRipple
              onPress={() => {
                toggleTheme();
              }}>
              <View style={styles.preference}>
                <Text>Dark Theme</Text>
                <View pointerEvents="none">
                  <Switch value={isDarkTheme} />
                </View>
              </View>
            </TouchableRipple>
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          label="Sign Out"
          icon={({ color, size }) => (
            <Icon name="exit-to-app" color={color} size={size} />
          )}
          onPress={() => {}}
        />
      </Drawer.Section>
    </View>
  );
};

export default DrawerContent;
