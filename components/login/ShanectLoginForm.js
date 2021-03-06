import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as Keychain from 'react-native-keychain';
import {CheckBox, Input} from 'react-native-elements';
import {TextInput, HelperText} from 'react-native-paper';
import {COLORS, FONTS, SIZES, DEFINES} from '../../constants';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {
  rememberPassword,
  loginByShanect,
  changeUsername,
  changePassword,
} from '../../redux/reducers/loginActions';
import Animated, {interpolate, Extrapolate} from 'react-native-reanimated';
import {TapGestureHandler} from 'react-native-gesture-handler';
import axios from 'axios';
import Toast from 'react-native-toast-message';
import {useTheme} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ShanectLoginForm = ({navigation}) => {
  const theme = useTheme();
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const isRememberPassword = useSelector(
    state => state.loginReducer.isRememberPassword,
  );
  const errorLogin = useSelector(state => state.loginReducer.errorLogin);
  const loginResponse = useSelector(state => state.loginReducer.loginResponse);
  const username = useSelector(state => state.loginReducer.username);
  const password = useSelector(state => state.loginReducer.password);
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
  const onPressLogin = () => {
    dispatch(loginByShanect(username, password));
  };
  const onChangeUsername = text => {
    dispatch(changeUsername(text));
  };
  const onChangePassword = text => {
    dispatch(changePassword(text));
  };

  useEffect(() => {
    if (errorLogin) {
      Toast.show({
        type: 'error',
        text1: 'L???i ????ng nh???p',
        text2: 'Sai t??i kho???n ho???c m???t kh???u',
      });
    }
  }, [errorLogin]);

  useEffect(() => {
    if (loginResponse) {
      loginSuccess(loginResponse);
    }
  }, [loginResponse]);
  useEffect(() => {
    // async function getKeychainData() {
    //   try {
    //     // Retreive the credentials
    //     const credentials = await Keychain.getGenericPassword();
    //     if (credentials) {
    //       console.log(
    //         'Credentials successfully loaded for user ' + credentials.username, credentials.password,
    //       );
    //     } else {
    //       console.log('No credentials stored');
    //     }
    //   } catch (error) {
    //     console.log("Keychain couldn't be accessed!", error);
    //   }
    //   await Keychain.resetGenericPassword();
    // }
    // getKeychainData();
    async function getData(){
      try{
        const value = await AsyncStorage.getItem(DEFINES.AS_TOKEN)
        if(value){
          console.log(value)
        }
      }
      catch(e){
        console.log(e);
      }
    }
    getData();
  }, []);

  const loginSuccess = async res => {
    try {
      await AsyncStorage.setItem(
        DEFINES.AS_TOKEN,
        res.token
      );
      await Keychain.setGenericPassword(username, password);
      if (isRememberPassword) {
      }
      navigation.replace('MainTabs');
    } catch (err) {
      console.log(`error storing login response: ${err}`);
    }
  };

  return (
    <Animated.View
      style={{
        ...styles.container,
        backgroundColor: theme.colors.primaryBackground,
        zIndex: formZIndex,
        opacity: formOpacity,
        transform: [{translateY: formY}],
      }}>
      <TextInput
        mode="outlined"
        style={{
          ...styles.textInput,
          backgroundColor: theme.colors.primaryBackgroundLight,
        }}
        selectionColor={theme.colors.primaryTextLight}
        outlineColor={theme.colors.secondaryBackgroundLight}
        label="Email ho???c T??n ????ng nh???p"
        value={username}
        onChangeText={text => onChangeUsername(text)}
        theme={{
          colors: {
            text: theme.colors.primaryTextLight,
            placeholder: theme.colors.primaryTextLight,
          },
        }}
      />

      <TextInput
        mode="outlined"
        style={{
          ...styles.textInput,
          backgroundColor: theme.colors.primaryBackgroundLight,
        }}
        selectionColor={theme.colors.primaryTextLight}
        outlineColor={theme.colors.secondaryBackgroundLight}
        label="M???t kh???u"
        value={password}
        onChangeText={text => onChangePassword(text)}
        theme={{
          colors: {
            text: theme.colors.primaryTextLight,
            placeholder: theme.colors.primaryTextLight,
          },
        }}
      />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginBottom: SIZES.padding * 2,
        }}>
        <CheckBox
          title="Nh??? m???t kh???u"
          containerStyle={{
            ...styles.checkBox,
            backgroundColor: theme.colors.primaryBackground,
            borderColor: theme.colors.primaryBackground,
          }}
          textStyle={{
            fontWeight: isRememberPassword ? 'bold' : 'normal',
            color: theme.colors.primaryTextLight,
          }}
          checked={isRememberPassword}
          checkedColor={theme.colors.primary}
          onPress={() => dispatch(rememberPassword())}
        />
        <TouchableOpacity
          style={{position: 'absolute', right: 0, marginRight: SIZES.padding}}>
          <Text
            style={{...styles.forgotPassText, color: theme.colors.primaryText}}>
            Qu??n m???t kh???u?
          </Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={{
          ...styles.loginButton,
          backgroundColor: theme.colors.primaryBackgroundLight,
          shadowColor: theme.colors.secondaryBackgroundLight,
        }}
        onPress={() => onPressLogin()}>
        <Text
          style={{
            ...styles.loginText,
            color: theme.colors.secondaryBackgroundLight,
          }}>
          ????NG NH???P
        </Text>
      </TouchableOpacity>
      <View style={styles.register}>
        <Text style={{color: theme.colors.primaryText}}>
          B???n ch??a c?? t??i kho???n?
        </Text>
        <TouchableOpacity style={{marginLeft: SIZES.padding}}>
          <Text
            style={{
              textDecorationLine: 'underline',
              color: theme.colors.primaryText,
            }}
            onPress={() => navigation.navigate('Register')}>
            ????ng k??
          </Text>
        </TouchableOpacity>
      </View>
    </Animated.View>
  );
};

export default ShanectLoginForm;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: SIZES.padding * 2,
    // paddingTop: SIZES.padding * 2,
    paddingBottom: SIZES.padding * 4,
    position: 'absolute',
    left: 0,
    right: 0,
  },
  textInput: {
    borderRadius: SIZES.radius,
    marginVertical: SIZES.padding / 2,
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
  checkBox: {
    padding: 0,
  },
  loginButton: {
    borderRadius: SIZES.radius,
    paddingVertical: SIZES.padding,
    marginHorizontal: SIZES.padding * 2,
    alignItems: 'center',
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
