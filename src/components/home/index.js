import { Text, View, Button, StatusBar } from 'react-native';
import { useTheme } from '@react-navigation/native';
import React from 'react';

import styles from './styles';

const Home = ({ navigation }) => {
  const theme = useTheme();

  return (
    <View style={styles.container}>
      <StatusBar barStyle={theme.dark ? 'light-content' : 'dark-content'} />
      <Text style={[styles.content, { color: theme.colors.text }]}>
        Home ...
      </Text>
      <Button
        title="Go to details"
        onPress={() => navigation.navigate('Details')}
      />
      <Button
        title="Go to explore"
        onPress={() => navigation.navigate('Explore')}
      />
      <Button
        title="Go to profile"
        onPress={() => navigation.navigate('Profile')}
      />
    </View>
  );
};

export default Home;
