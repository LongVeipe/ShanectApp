import React from 'react';
import {useSelector} from 'react-redux';
import {TouchableOpacity, StyleSheet, Text, View, Image} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {COLORS, DEFINES} from '../constants';
import {
  LoginTypeBox,
  LoginBackground,
  ShanectLoginForm,
  Logo
} from '../components/login';
import { useTheme } from '@react-navigation/native';

const Login = ({navigation}) => {
  const theme = useTheme()
  const loginType = useSelector(state => state.loginReducer.loginType);
  const renderLoginForm = () => {
    if (loginType === DEFINES.APP_NAME) return <ShanectLoginForm navigation={navigation}/>;
    return <View />;
  };

  return (
    <SafeAreaView style={{...styles.container, backgroundColor: theme.colors.primaryBackground}}>
      <LoginBackground />
      <LoginTypeBox />
      {renderLoginForm()}
      <Logo/>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
});
