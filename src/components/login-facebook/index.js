import Icon from 'react-native-vector-icons/AntDesign';
import { TouchableOpacity, Text } from 'react-native';
import {
  GraphRequestManager,
  LoginManager,
  GraphRequest,
  AccessToken,
} from 'react-native-fbsdk-next';
import React, { useContext } from 'react';

import { Colors, Typography } from '../../styles';
import { AuthContext } from '../../store/context';
import styles from './styles';

const LoginFacebbok = ({ navigation }) => {
  const { signIn } = useContext(AuthContext);

  const getUserInfos = token => {
    const PROFILE_REQUEST_PARAMS = {
      fields: {
        string: 'id,name,first_name,last_name,picture,email',
      },
    };
    const userProfileRequest = new GraphRequest(
      '/me',
      { token, parameters: PROFILE_REQUEST_PARAMS },
      (error, user) => {
        if (error) {
          console.log('login info has error: ' + error);
        } else {
          signIn({ user, fromFacebook: true }, navigation.navigate('Home'));
        }
      },
    );
    new GraphRequestManager().addRequest(userProfileRequest).start();
  };

  const handleLoginWithFacebook = () => {
    LoginManager.logInWithPermissions(['public_profile', 'email']).then(
      login => {
        if (login.isCancelled) {
          console.log('Login cancelled');
        } else {
          AccessToken.getCurrentAccessToken().then(data => {
            const accessToken = data.accessToken.toString();
            getUserInfos(accessToken);
          });
        }
      },
      error => {
        console.log('Login fail with error: ' + error);
      },
    );
  };

  return (
    <TouchableOpacity onPress={handleLoginWithFacebook} style={styles.fbButton}>
      <Icon
        size={Typography.FONT_SIZE_28}
        name="facebook-square"
        style={styles.fbIcon}
        color={Colors.WHITE}
      />
      <Text style={{ color: Colors.WHITE }}>Continue with Facebook</Text>
    </TouchableOpacity>
  );
};

export default LoginFacebbok;
