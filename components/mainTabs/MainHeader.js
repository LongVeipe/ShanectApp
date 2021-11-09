import {useTheme} from '@react-navigation/native';
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {COLORS, images, SIZES} from '../../constants';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

const MainHeader = () => {
  const theme = useTheme();
  return (
    <LinearGradient
      style={{...styles.container}}
      colors={[COLORS.primary, COLORS.darkPink]}>
      <TouchableOpacity style={{...styles.avatarButton}}>
        <Image
          source={{
            uri: 'https://reactnativecode.com/wp-content/uploads/2017/05/react_thumb_install.png',
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
    backgroundColor: 'red',
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
    paddingHorizontal: SIZES.padding*4
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
