import Icon from 'react-native-vector-icons/AntDesign';
import { TouchableOpacity, Text } from 'react-native';
import React, { useContext } from 'react';
import {
  GraphRequestManager,
  LoginManager,
  GraphRequest,
  AccessToken,
} from 'react-native-fbsdk-next';

import { Colors, Typography } from '../../styles';
import { AuthContext } from '../../store';
import styles from './styles';

const FacebookButton = () => {
  const { signIn } = useContext(AuthContext);

  const handleUserInfos = token => {
    const userParams = {
      fields: {
        string: 'id,name,first_name,last_name,picture,email',
      },
    };
    const userProfileRequest = new GraphRequest(
      '/me',
      { token, parameters: userParams },
      (error, user) => {
        if (error) {
          console.error('Handle user infos error: ', error);
        } else {
          signIn(user, { fromFacebook: true, facebookToken: token });
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
            const token = data.accessToken.toString();
            handleUserInfos(token);
          });
        }
      },
      error => {
        console.error('Handle Login with facebook error: ', error);
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

export default FacebookButton;
