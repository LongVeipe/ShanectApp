import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import {SIZES, images, COLORS, FONTS, icons} from '../../constants';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const LoginTypeBox = () => {
  function onOpenLoginForm(type) {
    switch (type) {
      case 'shanect':
        break;
      case 'google':
        break;
      case 'facebook':
        break;
      default:
        break;
    }
  }

  const ButtonChooseLoginType = props => {
    return (
      <TouchableOpacity
        style={{
          ...styles.buttonChooseLoginType,
          ...styles.shadow,
          backgroundColor: props.backgroundColor,
        }}
        onPress={() => onOpenLoginForm(props.icon)}>
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
  );
};

export default LoginTypeBox;

const styles = StyleSheet.create({
  loginBox: {
    paddingHorizontal: SIZES.padding * 2,
    paddingBottom: SIZES.height * 0.15,
    position: 'absolute',
    left: 0,
    right: 0,
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
});
