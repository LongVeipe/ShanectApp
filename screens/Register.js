import React from 'react';
import {Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Header} from '../components/register';
import {COLORS, FONTS, images, SIZES} from '../constants';
import Fontawesome from 'react-native-vector-icons/FontAwesome';

const Register = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.background}>
        <Image
          source={images.loginBackground}
          style={{flex: 1, height: null, width: null}}
        />
      </View>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={()=>navigation.goBack()}>
          <Fontawesome name="angle-left" color={COLORS.lightGray} size={30} />
        </TouchableOpacity>
        <Text style={{...FONTS.h3, color: COLORS.lightGray}}>Đăng ký tài khoản mới</Text>
      </View>
      <View style={styles.form}></View>
    </SafeAreaView>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  background: {
    flex: 1,
    flexDirection: 'row',
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
  },
  backButton: {
    margin: SIZES.padding * 2,
    borderRadius: SIZES.radius,
    borderWidth: 2,
    borderColor: COLORS.lightGray,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: 0,
  },
  header: {
    width: '100%',
    height: SIZES.header,
    position: 'absolute',
    top: 0,
    flexDirection: 'row',
    justifyContent:'center',
    alignItems: 'center',
  },
  form:{
      backgroundColor: COLORS.white,
      borderTopLeftRadius: SIZES.radius,
      borderTopRightRadius: SIZES.radius,   
      flex: 1,
      marginTop: SIZES.header,
  }
});
