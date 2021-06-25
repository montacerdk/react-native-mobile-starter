import FontAwesome from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';
import Feather from 'react-native-vector-icons/Feather';
import * as Animatable from 'react-native-animatable';
import React from 'react';
import {
  TouchableOpacity,
  TextInput,
  StatusBar,
  View,
  Text,
} from 'react-native';

import { AuthContext } from '../../store/context';
import { VALID_USERS } from '../../common/contants';
import styles from './styles';

const SignIn = ({ navigation }) => {
  const [data, setData] = React.useState({
    check_textInputChange: false,
    secureTextEntry: true,
    isValidPassword: true,
    isValidUser: true,
    username: '',
    password: '',
  });

  const { signIn } = React.useContext(AuthContext);

  const handleEmailChange = val => {
    if (val.trim().length >= 4) {
      setData({
        ...data,
        username: val,
        check_textInputChange: true,
        isValidUser: true,
      });
    } else {
      setData({
        ...data,
        username: val,
        check_textInputChange: false,
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

  const loginHandle = (userName, password) => {
    const foundUser = VALID_USERS.filter(item => {
      return userName === item.username && password === item.password;
    });
    signIn(foundUser);
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#14174f" barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.text_header}>Welcome!</Text>
      </View>
      <Animatable.View animation="fadeInUpBig" style={styles.footer}>
        <Text style={styles.text_footer}>Email</Text>
        <View style={styles.action}>
          <FontAwesome name="user-o" color="#05375a" size={20} />
          <TextInput
            placeholder="Your Email"
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={value => handleEmailChange(value)}
          />
          {data.check_textInputChange ? (
            <Animatable.View animation={'bounceIn'}>
              <Feather name="check-circle" color="green" size={20} />
            </Animatable.View>
          ) : null}
        </View>
        <Text style={[styles.text_footer, { marginTop: 30 }]}>Password</Text>
        <View style={styles.action}>
          <Feather name="lock" color="#05375a" size={20} />
          <TextInput
            placeholder="Your Password"
            style={styles.textInput}
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
        <TouchableOpacity>
          <Text style={{ color: '#14174f', marginTop: 15 }}>
            Forgot password?
          </Text>
        </TouchableOpacity>
        <View style={styles.button}>
          <TouchableOpacity
            style={styles.signIn}
            onPress={() => loginHandle(data.username, data.password)}>
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
        </View>
      </Animatable.View>
    </View>
  );
};

export default SignIn;
