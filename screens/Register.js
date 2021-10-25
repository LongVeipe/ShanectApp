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

  const onChangeFullName = text => {
    const newText = restrict(text);
    dispatch(registerAction.changeFullName(newText));
  };

  const onChangeUsername = text => {
    const newText = text.replace(
      /[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi,
      '',
    );
    dispatch(registerAction.changeUsername(newText));
  };

  const handleKeyPress = prop => {
    console.log(prop);
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
      <View style={{...styles.form, backgroundColor: theme.colors.background}}>
        <ScrollView style={{flex: 1}}>
          <TextInput
            mode="outlined"
            style={styles.textInput}
            label="Họ và tên"
            left={<TextInput.Icon name="account" />}
            value={fullName}
            onChangeText={text => onChangeFullName(text)}
            onKeyPress={text => handleKeyPress(text)}
          />
          <TextInput
            mode="outlined"
            style={styles.textInput}
            label="Tên đăng nhập"
            left={<TextInput.Icon name="account-tie" />}
            value={username}
            onChangeText={text => onChangeUsername(text)}
          />
          <TextInput
            mode="outlined"
            style={styles.textInput}
            label="Email"
            left={<TextInput.Icon name="email" />}
            keyboardType="email-address"
            textContentType="emailAddress"
            autoCompleteType="email"
            onChangeText={text=>validateEmail(text)}
            error={!isValidEmail}
          />
          <HelperText visible={!isValidEmail} type="error">
            Email không hợp lệ
          </HelperText>
          <View style={{marginVertical: SIZES.padding / 2}}>
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
                <View style={styles.maleBox}>
                  <RadioButton value={true} />
                  <Text>Nam</Text>
                </View>
                <View style={styles.maleBox}>
                  <RadioButton value={false} />
                  <Text>Nữ</Text>
                </View>
              </View>
            </RadioButton.Group>
          </View>
          <TextInput
            mode="outlined"
            style={styles.textInput}
            label="Mật khẩu"
            left={<TextInput.Icon name="lock" />}
            right={
              <TextInput.Icon
                name={isShowPass ? 'eye-off' : 'eye'}
                onPress={() => setIsShowPass(!isShowPass)}
              />
            }
            secureTextEntry={!isShowPass}
          />
          <TextInput
            mode="outlined"
            style={styles.textInput}
            label="Nhập lại mật khẩu"
            left={<TextInput.Icon name="lock-check" />}
            right={
              <TextInput.Icon
                name={isShowRepeatPass ? 'eye-off' : 'eye'}
                onPress={() => setIsShowRepeatPass(!isShowRepeatPass)}
              />
            }
            secureTextEntry={!isShowRepeatPass}
          />
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
});
