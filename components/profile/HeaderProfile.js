import {useTheme} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {SIZES, images, FONTS, icons, BASE_URL, DEFINES} from '../../constants';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Divider} from 'react-native-elements';
import ImagePicker from 'react-native-image-crop-picker';
import axios from 'axios';
import Toast from 'react-native-toast-message';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useSelector, useDispatch } from 'react-redux';
import {changeAccountInfo} from '../../redux/reducers/profileActions'

const AVATAR_SIZE = SIZES.width / 2.5;
const HeaderProfile = () => {
  const dispatch = useDispatch();
  const accountInfo = useSelector(state=>state.profileReducer.accountInfo)
  // useEffect(() => {
  //   getAccountInfo();
  // }, []);
  const {
    primaryBackground,
    secondaryBackground,
    secondaryBackgroundLight,
    primaryBackgroundLight,
    primaryBackgroundDark,
    secondaryBackgroundDark,
    primaryText,
    primaryLight,
    primaryFaint,
    primary,
    primaryBold,
  } = useTheme().colors;

  // const getAccountInfo = async () => {
  //   let value = '';
  //   try {
  //     value = await AsyncStorage.getItem(DEFINES.AS_TOKEN);
  //   } catch (e) {
  //     console.log('error read AsyncStorage' + e);
  //   }
  //   if (value != '') {
  //     axios({
  //       method: 'GET',
  //       baseURL: BASE_URL,
  //       url: '/users/me',
  //       headers: {
  //         'shanect-access-token': `${value}`,
  //       },
  //     })
  //       .then(res => {
  //         setAccountInfo(res.data);
  //       })
  //       .catch(err =>
  //         console.log(
  //           'MainHeader: ',
  //           JSON.stringify(err.response.config.headers),
  //         ),
  //       );
  //   }
  // };
  async function fetchUserAvatar(avatar) {
    var formData = new FormData();
    const token = await AsyncStorage.getItem(DEFINES.AS_TOKEN);
    formData.append('avatar', {
      type: avatar.mime || 'image/jpeg',
      uri: avatar.path,
      name: new Date() + '_profile',
    });

    axios({
      method: 'PUT',
      baseURL: BASE_URL,
      url: '/users/avatar',
      headers: {
        'shanect-access-token': token,
        'Content-Type': 'multipart/form-data',
        // authentication: token,
      },
      data: formData,
    })
      .then(res => dispatch(changeAccountInfo(res.data)))
      .catch(err => {
        console.log('Profile Header: ', JSON.stringify(err));
        Toast.show({
          type: 'error',
          text1: 'L???i',
          text2: 'T???m th???i kh??ng th??? thay ?????i ???nh ?????i di???n',
        });
      });
  }
  function onSelectAvatar() {
    ImagePicker.openPicker({
      compressImageMaxHeight: 400,
      compressImageMaxHeight: 400,
      cropping: false,
      freeStyleCropEnabled: true,
      includeBase64: false,
    })
      .then(image => {
        fetchUserAvatar(image);
      })
      .catch(err => console.log('Profile Header: ', err));
  }
  const BasicInfoItem = ({icon, title, contain}) => {
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: SIZES.padding,
          paddingBottom: SIZES.padding,
        }}>
        <View
          style={{
            backgroundColor: primaryBackgroundDark,
            borderRadius: SIZES.radius * 2,
            padding: SIZES.padding,
          }}>
          <MaterialCommunityIcons name={icon} size={20} color={primaryText} />
        </View>
        <View style={{marginLeft: SIZES.padding, justifyContent: 'center'}}>
          <Text
            style={{...FONTS.body3, fontWeight: 'bold', color: primaryText}}>
            {contain}
          </Text>
          <Text style={{...FONTS.body5, color: primaryText}}>{title}</Text>
        </View>
      </View>
    );
  };
  return (
    <View
      style={{backgroundColor: primaryBackgroundLight}}
      pointerEvents="box-none">
      <View style={{...styles.cover}}>
        <TouchableOpacity style={{flex: 1}}>
          <Image
            source={images.loginBackground}
            style={{...styles.coverImage}}
            resizeMode="cover"
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            ...styles.changeImageButton,
            backgroundColor: primaryBackground,
          }}>
          <FontAwesome name="camera" size={20} color={secondaryBackground} />
        </TouchableOpacity>
      </View>
      <View
        style={{
          ...styles.avatarBox,
          borderColor: primaryBackgroundLight,
          backgroundColor: secondaryBackground,
        }}>
        <TouchableOpacity
          style={{
            ...styles.avatar,
            backgroundColor: secondaryBackgroundLight,
          }}>
          <Image
            source={{uri: accountInfo ? accountInfo.user.avatar : 'aaaa'}}
            style={{
              height: null,
              width: null,
              flex: 1,
              borderRadius: AVATAR_SIZE / 2,
            }}
            resizeMode="cover"
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            ...styles.changeImageButton,
            backgroundColor: primaryBackground,
            right: 0,
            bottom: 0,
          }}
          onPress={onSelectAvatar}>
          <FontAwesome name="camera" size={20} color={secondaryBackground} />
        </TouchableOpacity>
      </View>
      <Text
        style={{
          color: primaryText,
          ...FONTS.body1,
          ...styles.name,
          fontFamily: 'AntDesign',
        }}>
        Nguy???n Long
      </Text>
      <BasicInfoItem icon="phone" title="??i???n tho???i" contain="0334446955" />
      <BasicInfoItem icon="map-marker" title="?????a ch???" contain="Gia Lai" />
      <BasicInfoItem icon="cake" title="Sinh nh???t" contain="01/06/2000" />

      <TouchableOpacity
        style={{
          backgroundColor: primaryFaint,
          ...styles.changeInfoButton,
        }}>
        <Text
          style={{
            textAlign: 'center',
            color: primaryBold,
            fontWeight: 'bold',
            ...FONTS.body3,
          }}>
          Thay ?????i th??ng tin c?? nh??n
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default HeaderProfile;

const styles = StyleSheet.create({
  cover: {
    height: SIZES.height / 3,
  },
  coverImage: {
    flex: 1,
    height: null,
    width: null,
  },
  changeImageButton: {
    position: 'absolute',
    right: SIZES.padding,
    bottom: SIZES.padding,
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: SIZES.radius * 2,
  },
  avatarBox: {
    height: AVATAR_SIZE,
    width: AVATAR_SIZE,
    alignSelf: 'center',
    marginTop: -AVATAR_SIZE / 2,
    borderRadius: AVATAR_SIZE / 2,
    borderWidth: 5,
  },
  avatar: {
    flex: 1,
    borderRadius: AVATAR_SIZE / 2,
  },
  name: {
    textAlign: 'center',
    margin: SIZES.padding * 1.5,
  },
  messageButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  changeInfoButton: {
    padding: SIZES.padding,
    margin: SIZES.padding,
    borderRadius: SIZES.radius / 2,
  },
});
