import React, {useState} from 'react';
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
import {TapGestureHandler} from 'react-native-gesture-handler';

const ShanectLoginForm = ({navigation}) => {
  const [showPassword, setShowPassword] = useState(false);
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
        leftIcon={
          <FontAwesome name="user" size={20} style={{color: COLORS.darkPink}} />
        }
        inputStyle={{
          color: COLORS.black,
          ...FONTS.body3,
        }}
        style={{
          height: 20,
        }}
        renderErrorMessage={true}
        errorMessage="lỗi"
        containerStyle={styles.textInput}
      />
      <Input
        placeholder="Mật khẩu"
        secureTextEntry={showPassword}
        leftIcon={
          <FontAwesome name="lock" size={20} style={{color: COLORS.darkPink}} />
        }
        rightIcon={
          <TouchableOpacity>
            <FontAwesome
              name={showPassword? "eye":"eye-slash"}
              size={20}
              style={{color: COLORS.black}}
              onPress={() => setShowPassword(!showPassword)}
            />
          </TouchableOpacity>
        }
        inputStyle={{
          marginLeft: SIZES.padding,
          color: COLORS.black,
          ...FONTS.body3,
        }}
        containerStyle={styles.textInput}
        spellCheck={false}
      />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginBottom: SIZES.padding * 2,
        }}>
        <CheckBox
          title="Nhớ mật khẩu"
          containerStyle={{...styles.checkBox}}
          textStyle={{fontWeight: isRememberPassword? 'bold':'normal'}}
          checked={isRememberPassword}
          checkedColor={COLORS.darkPink}
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
      <View style={styles.register}>
        <Text>Bạn chưa có tài khoản?</Text>
        <TouchableOpacity style={{marginLeft: SIZES.padding}}>
          <Text style={{textDecorationLine: 'underline'}} onPress={() => navigation.navigate("Register")}>Đăng ký</Text>
        </TouchableOpacity>
      </View>
    </Animated.View>
  );
};

export default ShanectLoginForm;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    paddingHorizontal: SIZES.padding * 2,
    // paddingTop: SIZES.padding * 2,
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
    backgroundColor: COLORS.white,
    borderRadius: SIZES.radius,
    paddingVertical: SIZES.padding,
    marginHorizontal: SIZES.padding * 2,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
  },
  loginText: {
    ...FONTS.body3,
    color: COLORS.black,
    fontWeight: 'bold',
  },
  forgotPassText: {
    textDecorationLine: 'underline',
  },
  register: {
    flexDirection: 'row',
    marginTop: SIZES.padding * 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
