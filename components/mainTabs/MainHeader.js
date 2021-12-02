import {useTheme, useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {BASE_URL, COLORS, DEFINES, images, SIZES} from '../../constants';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const MainHeader = () => {
  const navigation = useNavigation();
  const theme = useTheme();
  const [accountInfo, setAccountInfo] = useState(null);


  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getAccountInfo()
    });

    return () => {
      unsubscribe;
    };
  }, []);


  const getAccountInfo = async () => {
    let value = '';
    try {
      value = await AsyncStorage.getItem(DEFINES.AS_TOKEN);
    } catch (e) {
      console.log('error read AsyncStorage' + e);
    }
    if (value != '') {
      axios({
        method: 'GET',
        baseURL: BASE_URL,
        url: '/users/me',
        headers: {
          'shanect-access-token': `${value}`,
        },
      })
        .then(res => {
          setAccountInfo(res.data);
        })
        .catch(err =>
          console.log(
            'MainHeader: ',
            JSON.stringify(err.response.config.headers),
          ),
        );
    }
  };
  return (
    <LinearGradient
      style={{...styles.container}}
      colors={[COLORS.primary, COLORS.darkPink]}>
      <TouchableOpacity
        style={{...styles.avatarButton}}
        onPress={() => navigation.navigate('Profile', {accountInfo,})}>
        <Image
          source={{
            uri: accountInfo
              ? accountInfo.user.avatar
              : 'https://simg.nicepng.com/png/small/138-1388174_login-account-icon.png',
          }}
          style={{...styles.avatar}}
        />
      </TouchableOpacity>
      <View style={{...styles.appName}}>
        <Image
          source={images.logo_name}
          style={{flex: 1, resizeMode: 'center', height: null, width: null}}
        />
      </View>
      <TouchableOpacity style={{...styles.messageButton}}>
        <MaterialCommunityIcons
          name="message-processing"
          size={25}
          color={COLORS.primary}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={{...styles.messageButton, marginLeft: SIZES.padding}}>
        <Ionicons name="settings" size={25} color={COLORS.primary} />
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default MainHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 100,
    alignItems: 'center',
    padding: SIZES.padding * 2,
  },
  avatarButton: {
    height: 50,
    width: 50,
    borderRadius: 25,
  },
  avatar: {
    flex: 1,
    borderRadius: 25,
  },
  appName: {
    flex: 1,
    paddingHorizontal: SIZES.padding * 4,
  },
  messageButton: {
    width: 35,
    height: 35,
    backgroundColor: COLORS.white,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
