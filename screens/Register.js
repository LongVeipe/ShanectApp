import React, {useState} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Header} from '../components/register';
import {COLORS, FONTS, images, SIZES} from '../constants';
import Fontawesome from 'react-native-vector-icons/FontAwesome';
import {Checkbox, HelperText, RadioButton, TextInput} from 'react-native-paper';
import {useTheme} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';
import * as registerAction from '../redux/reducers/registerActions';

const Register = ({navigation}) => {
  const [isShowPass, setIsShowPass] = useState(false);
  const [isShowRepeatPass, setIsShowRepeatPass] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isEmptyFullname, setIsEmptyFullname] = useState(false);
  const [isEmptyUsername, setIsEmptyUsername] = useState(false);
  const [isEmptyPassword, setIsEmptyPassword] = useState(false);
  const [isValidRepeatPassword, setIsValidRepeatPassword] = useState(true);
  const theme = useTheme();
  const dispatch = useDispatch();
  const fullName = useSelector(state => state.registerReducer.fullName);
  const username = useSelector(state => state.registerReducer.username);
  const email = useSelector(state => state.registerReducer.email);
  const gender = useSelector(state => state.registerReducer.gender);
  const password = useSelector(state => state.registerReducer.password);

  const restrict = text =>
    text.replace(/[`~0-9!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '');
  const validateEmail = text => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (reg.test(text) === false) {
      setIsValidEmail(false);
    } else {
      setIsValidEmail(true);
    }
  };
  const checkEmpty = text => text.length == 0;

  const onChangeFullName = text => {
    text = text.trim();
    const newText = restrict(text);
    dispatch(registerAction.changeFullName(newText));
    newText.length == 0 ? setIsEmptyFullname(true) : setIsEmptyFullname(false);
  };

  const onChangeUsername = text => {
    text.trim();
    const newText = text.replace(
      /[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi,
      '',
    );
    dispatch(registerAction.changeUsername(newText));
    newText.length == 0 ? setIsEmptyUsername(true) : setIsEmptyUsername(false);
  };
  const onChangePassword = text => {
    text.trim();
    dispatch(registerAction.changePassword(text));
    text.length == 0 ? setIsEmptyPassword(true) : setIsEmptyPassword(false);
  };
  const onChangeRepeatPassword = text => {
    text === password
      ? setIsValidRepeatPassword(true)
      : setIsValidRepeatPassword(false);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.background}>
        <Image
          source={images.loginBackground}
          style={{flex: 1, height: null, width: null}}
        />
      </View>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}>
          <Fontawesome name="angle-left" color={COLORS.lightGray} size={30} />
        </TouchableOpacity>
        <Text style={{...FONTS.h3, color: COLORS.lightGray}}>
          Đăng ký tài khoản mới
        </Text>
      </View>
      <View
        style={{
          ...styles.form,
          backgroundColor: theme.colors.primaryBackground,
        }}>
        <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
          <TextInput
            mode="outlined"
            label="Họ và tên"
            value={fullName}
            onChangeText={text => onChangeFullName(text)}
            onKeyPress={text => handleKeyPress(text)}
            style={{
              ...styles.textInput,
              backgroundColor: theme.colors.primaryBackgroundLight,
            }}
            outlineColor={theme.colors.secondaryBackgroundLight}
            theme={{
              colors: {
                text: theme.colors.primaryTextLight,
                placeholder: theme.colors.primaryTextLight,
              },
            }}
          />
          {isEmptyFullname && (
            <HelperText type="error">Họ và tên không được để trống</HelperText>
          )}
          <TextInput
            mode="outlined"
            label="Tên đăng nhập"
            value={username}
            onChangeText={text => onChangeUsername(text)}
            error={isEmptyUsername}
            style={{
              ...styles.textInput,
              backgroundColor: theme.colors.primaryBackgroundLight,
            }}
            outlineColor={theme.colors.secondaryBackgroundLight}
            theme={{
              colors: {
                text: theme.colors.primaryTextLight,
                placeholder: theme.colors.primaryTextLight,
              },
            }}
          />
          {isEmptyUsername && (
            <HelperText type="error">
              Tên đăng nhập không được để trống
            </HelperText>
          )}
          <TextInput
            mode="outlined"
            label="Email"
            keyboardType="email-address"
            textContentType="emailAddress"
            autoCompleteType="email"
            onChangeText={text => validateEmail(text)}
            error={!isValidEmail}
            style={{
              ...styles.textInput,
              backgroundColor: theme.colors.primaryBackgroundLight,
            }}
            outlineColor={theme.colors.secondaryBackgroundLight}
            theme={{
              colors: {
                text: theme.colors.primaryTextLight,
                placeholder: theme.colors.primaryTextLight,
              },
            }}
          />
          {!isValidEmail && (
            <HelperText type="error">Email không hợp lệ</HelperText>
          )}
          <View style={{marginBottom: SIZES.padding}}>
            <Text
              style={{
                ...FONTS.body4,
                color: theme.colors.text,
                marginLeft: SIZES.padding,
              }}>
              Giới tính
            </Text>
            <RadioButton.Group
              value={gender}
              onValueChange={newValue =>
                dispatch(registerAction.chooseGender(newValue))
              }>
              <View style={styles.genderBox}>
                <View style={{...styles.maleBox, borderColor: theme.colors.secondaryBackgroundLight}}>
                  <RadioButton value={true} color={theme.colors.primary}/>
                  <Text style={{color: theme.colors.secondaryBackgroundLight}}>Nam</Text>
                </View>
                <View style={{...styles.maleBox, borderColor: theme.colors.secondaryBackgroundLight}}>
                  <RadioButton value={false} color={theme.colors.primary} />
                  <Text style={{color: theme.colors.secondaryBackgroundLight}}>Nữ</Text>
                </View>
              </View>
            </RadioButton.Group>
          </View>
          <TextInput
            mode="outlined"
            label="Mật khẩu"
            // right={
            //   <TextInput.Icon
            //     name={isShowPass ? 'eye-off' : 'eye'}
            //     onPress={() => setIsShowPass(!isShowPass)}
            //   />
            // }
            secureTextEntry={!isShowPass}
            onChangeText={text => onChangePassword(text)}
            error={isEmptyPassword}
            style={{
              ...styles.textInput,
              backgroundColor: theme.colors.primaryBackgroundLight,
            }}
            outlineColor={theme.colors.secondaryBackgroundLight}
            theme={{
              colors: {
                text: theme.colors.primaryTextLight,
                placeholder: theme.colors.primaryTextLight,
              },
            }}
          />
          {isEmptyPassword && (
            <HelperText type="error">Chưa điền mật khẩu</HelperText>
          )}
          <TextInput
            mode="outlined"
            label="Nhập lại mật khẩu"
            secureTextEntry={!isShowRepeatPass}
            error={!isValidRepeatPassword}
            onChangeText={text => onChangeRepeatPassword(text)}
            style={{
              ...styles.textInput,
              backgroundColor: theme.colors.primaryBackgroundLight,
            }}
            outlineColor={theme.colors.secondaryBackgroundLight}
            theme={{
              colors: {
                text: theme.colors.primaryTextLight,
                placeholder: theme.colors.primaryTextLight,
              },
            }}
          />
          {!isValidRepeatPassword && (
            <HelperText type="error">Nhập lại chưa chính xác</HelperText>
          )}
          <TouchableOpacity style={{...styles.loginButton, shadowColor: theme.colors.secondaryBackground, backgroundColor: theme.colors.primaryBackgroundLight}}>
            <Text style={{...styles.loginText, color: theme.colors.primaryTextLight}}>ĐĂNG KÝ</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  form: {
    borderTopLeftRadius: SIZES.radius,
    borderTopRightRadius: SIZES.radius,
    flex: 1,
    marginTop: SIZES.header,
    padding: SIZES.padding * 2,
  },
  textInput: {
    flex: 1,
    height: 40,
    marginVertical: SIZES.padding / 2,
  },
  genderBox: {
    flexDirection: 'row',
  },
  maleBox: {
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: SIZES.radius,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: SIZES.padding * 2,
    paddingRight: SIZES.padding,
  },
  loginButton: {
    borderRadius: SIZES.radius,
    paddingVertical: SIZES.padding,
    marginHorizontal: SIZES.padding * 2,
    marginVertical: SIZES.padding * 2,
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
});
