import { Text, View, Button } from 'react-native';
import React from 'react';

import styles from './styles';

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.content}>Home ...</Text>
      <Button
        title="Go to details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
};

export default Home;
