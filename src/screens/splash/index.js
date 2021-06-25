import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { View, Text, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import * as Animatable from 'react-native-animatable';
import { useTheme } from '@react-navigation/native';
import React from 'react';

import styles from './styles';
import { color } from 'react-native-reanimated';

const Splash = ({ navigation }) => {
  const { colors } = useTheme();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Animatable.Image
          source={require('../../../assets/logo.png')}
          resizeMode="stretch"
          animation="bounceIn"
          style={styles.logo}
          duraton="1500"
        />
      </View>
      <Animatable.View
        animation="fadeInUpBig"
        style={[styles.footer, { backgroundColor: colors.background }]}>
        <Text style={[styles.title, { color: colors.text }]}>
          Welcome to Breakpoint Technology App
        </Text>
        <Text style={styles.text}>Sign in to your account</Text>
        <View style={styles.button}>
          <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
            <LinearGradient
              colors={['#14179e', '#14174f']}
              style={styles.signIn}>
              <Text style={styles.textSign}>Get Started</Text>
              <MaterialIcons name="navigate-next" color="#fff" size={20} />
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  );
};

export default Splash;
