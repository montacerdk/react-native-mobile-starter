import FontAwesome from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';
import Feather from 'react-native-vector-icons/Feather';
import * as Animatable from 'react-native-animatable';
import { useTheme } from 'react-native-paper';
import React from 'react';
import {
  TouchableOpacity,
  TextInput,
  StatusBar,
  Alert,
  View,
  Text,
} from 'react-native';

import LoginFacebbok from '../../components/login-facebook';
import { VALID_USERS } from '../../common/contants';
import { AuthContext } from '../../store';

import styles from './styles';

const SignIn = ({ navigation }) => {
  const [data, setData] = React.useState({
    check_textInputChange: false,
    secureTextEntry: true,
    isValidPassword: true,
    isValidUser: true,
    password: '',
    email: '',
  });

  const { colors } = useTheme();

  const { signIn } = React.useContext(AuthContext);

  const handleEmailChange = val => {
    if (val.trim().length >= 4) {
      setData({
        ...data,
        email: val,
        check_textInputChange: true,
        isValidUser: true,
      });
    } else {
      setData({
        ...data,
        email: val,
        check_textInputChange: false,
        isValidUser: false,
      });
    }
  };

  const handleValidUser = val => {
    if (val.trim().length >= 4) {
      setData({
        ...data,
        isValidUser: true,
      });
    } else {
      setData({
        ...data,
        isValidUser: false,
      });
    }
  };

  const handlePasswordChange = val => {
    if (val.trim().length >= 8) {
      setData({
        ...data,
        password: val,
        isValidPassword: true,
      });
    } else {
      setData({
        ...data,
        password: val,
        isValidPassword: false,
      });
    }
  };

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  const handleLogin = (email, password) => {
    if (data.email.length === 0 || data.password.length === 0) {
      Alert.alert('Wrong Input!', 'Email or password field cannot be empty.', [
        { text: 'Okay' },
      ]);
      return;
    }
    signIn({ email, password });
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#14174f" barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.text_header}>Welcome!</Text>
      </View>
      <Animatable.View
        animation="fadeInUpBig"
        style={[styles.footer, { backgroundColor: colors.background }]}>
        <Text
          style={[
            styles.text_footer,
            {
              color: colors.text,
            },
          ]}>
          Email
        </Text>
        <View style={styles.action}>
          <FontAwesome name="user-o" color={colors.text} size={20} />
          <TextInput
            placeholder="Your Email"
            style={[
              styles.textInput,
              {
                color: colors.text,
              },
            ]}
            autoCapitalize="none"
            onChangeText={value => handleEmailChange(value)}
            onEndEditing={e => handleValidUser(e.nativeEvent.text)}
          />
          {data.check_textInputChange ? (
            <Animatable.View animation={'bounceIn'}>
              <Feather name="check-circle" color="green" size={20} />
            </Animatable.View>
          ) : null}
        </View>
        {data.isValidUser ? null : (
          <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>
              Email must be 4 characters long.
            </Text>
          </Animatable.View>
        )}
        <Text
          style={[
            styles.text_footer,
            {
              color: colors.text,
              marginTop: 35,
            },
          ]}>
          Password
        </Text>
        <View style={styles.action}>
          <Feather name="lock" color={colors.text} size={20} />
          <TextInput
            placeholder="Your Password"
            style={[
              styles.textInput,
              {
                color: colors.text,
              },
            ]}
            secureTextEntry={data.secureTextEntry}
            autoCapitalize="none"
            onChangeText={value => handlePasswordChange(value)}
          />
          <TouchableOpacity onPress={updateSecureTextEntry}>
            {data.secureTextEntry ? (
              <Feather name="eye-off" color="grey" size={20} />
            ) : (
              <Feather name="eye" color="grey" size={20} />
            )}
          </TouchableOpacity>
        </View>
        {data.isValidPassword ? null : (
          <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>
              Password must be 8 characters long.
            </Text>
          </Animatable.View>
        )}
        <TouchableOpacity>
          <Text style={{ color: '#14174f', marginTop: 15 }}>
            Forgot password?
          </Text>
        </TouchableOpacity>
        <View style={styles.button}>
          <TouchableOpacity
            style={styles.signIn}
            onPress={() => handleLogin(data.email, data.password)}>
            <LinearGradient
              colors={['#14179e', '#14174f']}
              style={styles.signIn}>
              <Text style={[styles.textSign, { color: '#fff' }]}>Sign In</Text>
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('SignUp')}
            style={[
              styles.signIn,
              { borderColor: '#14174f', borderWidth: 1, marginTop: 15 },
            ]}>
            <Text style={[styles.textSign, { color: '#14174f' }]}>Sign Up</Text>
          </TouchableOpacity>
          <Text style={{ marginTop: 20, marginBottom: 20 }}>Or</Text>
          <LoginFacebbok navigation={navigation} />
        </View>
      </Animatable.View>
    </View>
  );
};

export default SignIn;
