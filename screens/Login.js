import React from 'react';
import { useSelector } from 'react-redux';
import {TouchableOpacity, StyleSheet, Text, View} from 'react-native';
import {Image} from 'react-native-elements';
import {SafeAreaView} from 'react-native-safe-area-context';
import { COLORS, DEFINES } from '../constants'
import {LoginTypeBox, IconBackground, ShanectLoginForm} from '../components/login'


const Login = () => {
  const loginType = useSelector(state=>state.loginReducer.loginType);
  const renderLoginForm = () => {
    if(loginType === DEFINES.APP_NAME)
      return <ShanectLoginForm/>
    return <View/>
  }

  return (
    <SafeAreaView style={styles.container}>
      <IconBackground/>
      <LoginTypeBox/>
      {
        renderLoginForm()   
      }
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    justifyContent: 'flex-end',
  },
});
