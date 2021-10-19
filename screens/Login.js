import React from 'react';
import {TouchableOpacity, StyleSheet, Text, View} from 'react-native';
import {Image} from 'react-native-elements';
import {SafeAreaView} from 'react-native-safe-area-context';
import { COLORS } from '../constants'
import {LoginTypeBox, IconBackground} from '../components/login'

const Login = () => {
  

  return (
    <SafeAreaView style={styles.container}>
      <IconBackground/>
      <LoginTypeBox/>
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
