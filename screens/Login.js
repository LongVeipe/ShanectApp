import React from 'react';
import {TouchableOpacity, StyleSheet, Text, View} from 'react-native';
import {Image} from 'react-native-elements';
import {SafeAreaView} from 'react-native-safe-area-context';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {SIZES, images, COLORS, FONTS, icons} from '../constants';
import {Button} from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';

const Login = () => {
  const ButtonChooseLoginType = props => {
    return (
      <TouchableOpacity
        style={{
          ...styles.buttonChooseLoginType,
          ...styles.shadow,
          backgroundColor: props.backgroundColor,
        }}>
        <View style={{marginRight: SIZES.padding * 2}}>
          {props.icon === 'shanect' ? (
            <Image source={images.logo} style={{width: 20, height: 20}} />
          ) : (
            <FontAwesome
              name={props.icon}
              size={20}
              color={props.foregroundColor}
            />
          )}
        </View>
        <Text
          style={{
            ...FONTS.body4,
            fontWeight: 'bold',
            color: props.foregroundColor,
          }}>
          {props.title}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={[COLORS.primary, COLORS.lightGreen, COLORS.lightGreen]}
        style={styles.logoBox}>
        <Image style={styles.logo} source={images.logo2} />
        <Text
          style={{
            ...FONTS.logoName,
            color: COLORS.darkgray,
            marginTop: SIZES.padding,
          }}>
          SHANECT
        </Text>
      </LinearGradient>
      <View style={styles.loginBox}>
        <ButtonChooseLoginType
          backgroundColor={COLORS.lightGray}
          foregroundColor={COLORS.black}
          title="ĐĂNG NHẬP BẰNG TÀI KHOẢN SHANECT"
          icon="shanect"
        />
        <ButtonChooseLoginType
          backgroundColor={COLORS.accent}
          foregroundColor={COLORS.white}
          title="ĐĂNG NHẬP VỚI GOOGLE"
          icon="google"
        />
        <ButtonChooseLoginType
          backgroundColor={COLORS.blue}
          foregroundColor={COLORS.white}
          title="ĐĂNG NHẬP VỚI FACEBOOK"
          icon="facebook"
        />
      </View>
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
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
  },
  logoBox: {
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: SIZES.height * 0.2,
  },
  logo: {
    width: SIZES.width * 0.25,
    height: SIZES.width * 0.25,
  },
  loginBox: {
    paddingHorizontal: SIZES.padding * 2,
    paddingBottom: SIZES.height * 0.2,
  },
  buttonChooseLoginType: {
    borderRadius: SIZES.radius,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: SIZES.padding,
    paddingVertical: SIZES.padding2,
    marginVertical: SIZES.padding * 0.6,
  },
});
