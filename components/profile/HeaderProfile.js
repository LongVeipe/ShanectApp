import {useTheme} from '@react-navigation/native';
import React, { useEffect } from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {SIZES, images, FONTS, icons} from '../../constants';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Divider} from 'react-native-elements';

const AVATAR_SIZE = SIZES.width / 2.5;
const HeaderProfile = () => {
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
    <View style={{backgroundColor: primaryBackgroundLight}} pointerEvents='box-none'>
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
            source={images.logo}
            style={{height: null, width: null, flex: 1}}
            resizeMode="cover"
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            ...styles.changeImageButton,
            backgroundColor: primaryBackground,
            right: 0,
            bottom: 0,
          }}>
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
        Nguyễn Long
      </Text>
      <BasicInfoItem icon="phone" title="Điện thoại" contain="0334446955" />
      <BasicInfoItem icon="map-marker" title="Địa chỉ" contain="Gia Lai" />
      <BasicInfoItem icon="cake" title="Sinh nhật" contain="01/06/2000" />

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
          Thay đổi thông tin cá nhân
        </Text>
      </TouchableOpacity>
      <Divider color={primaryText} />
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
