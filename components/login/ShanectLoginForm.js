import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {bindActionCreators} from 'redux';
import {CheckBox, Input} from 'react-native-elements';
import {COLORS, FONTS, SIZES} from '../../constants';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {rememberPassword} from '../../redux/reducers/loginActions';
import Animated, {interpolate, Extrapolate} from 'react-native-reanimated';

const ShanectLoginForm = props => {
  const dispatch = useDispatch();
  const isRememberPassword = useSelector(state => {
    return state.loginReducer.isRememberPassword;
  });
  const buttonOpacity = useSelector(state => state.loginReducer.buttonOpacity);
  const formY = buttonOpacity.interpolate({
    inputRange: [0, 1],
    outputRange: [0, SIZES.height * 0.5],
    extrapolate: Extrapolate.CLAMP,
  });
  const formOpacity = buttonOpacity.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 0],
    extrapolate: Extrapolate.CLAMP,
  });
  const formZIndex = buttonOpacity.interpolate({
    inputRange: [0, 1],
    outputRange: [1, -1],
    extrapolate: Extrapolate.CLAMP,
  });

  return (
    <Animated.View
      style={{
        ...styles.container,
        zIndex: formZIndex,
        opacity: formOpacity,
        transform: [{translateY: formY}],
      }}>
      <Input
        placeholder="Tên đăng nhập"
        label="Tên đăng nhập"
        leftIcon={
          <FontAwesome name="user" size={24} style={{color: COLORS.black}} />
        }
        inputStyle={{
          color: COLORS.black,
        }}
        style={{
          height: 20,
        }}
      />
      <Input
        placeholder="Mật khẩu"
        label="Mật khẩu"
        secureTextEntry={true}
        leftIcon={
          <FontAwesome name="lock" size={24} style={{color: COLORS.black}} />
        }
        rightIcon={
          <FontAwesome name="eye" size={24} style={{color: COLORS.black}} />
        }
        inputStyle={{
          color: COLORS.black,
        }}
        containerStyle={styles.textInput}
      />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginBottom: SIZES.padding * 2,
        }}>
        <CheckBox
          title="Nhớ mật khẩu"
          containerStyle={styles.checkBox}
          checked={isRememberPassword}
          onPress={() => dispatch(rememberPassword())}
        />
        <TouchableOpacity
          style={{position: 'absolute', right: 0, marginRight: SIZES.padding}}>
          <Text style={styles.forgotPassText}>Quên mật khẩu?</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginText}>ĐĂNG NHẬP</Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

export default ShanectLoginForm;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    paddingHorizontal: SIZES.padding * 2,
    paddingTop: SIZES.padding * 2,
    paddingBottom: SIZES.padding * 4,
    position: 'absolute',
    left: 0,
    right: 0,
  },
  textInput: {},
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
  checkBox: {
    backgroundColor: COLORS.white,
    borderColor: COLORS.white,
    padding: 0,
  },
  loginButton: {
    borderRadius: SIZES.radius,
    borderColor: COLORS.black,
    borderWidth: 1,
    paddingVertical: SIZES.padding,
    marginHorizontal: SIZES.padding * 2,
    alignItems: 'center',
  },
  loginText: {
    ...FONTS.body3,
    color: COLORS.black,
    fontWeight: 'bold',
  },
  forgotPassText: {
    textDecorationLine: 'underline',
  },
});
