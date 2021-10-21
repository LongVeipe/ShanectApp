import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {SIZES, images, COLORS, FONTS, icons} from '../../constants';
import LinearGradient from 'react-native-linear-gradient';

const IconBackground = () => {
  return (
    <LinearGradient
      colors={[COLORS.primary, COLORS.lightGreen, COLORS.lightGreen]}
      style={styles.container}>
      <Image style={styles.logo} source={images.logo2} />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        <Text
          style={{
            ...FONTS.logoName,
            color: COLORS.logoViolet,
            marginTop: SIZES.padding,
          }}>
          SHA
        </Text>
        <Text
          style={{
            ...FONTS.logoName,
            color: COLORS.logoPink,
            marginTop: SIZES.padding,
          }}>
          NECT
        </Text>
      </View>
    </LinearGradient>
  );
};

export default IconBackground;

const styles = StyleSheet.create({
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
  container: {
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: SIZES.height * 0.15,
  },
  logo: {
    width: SIZES.width * 0.25,
    height: SIZES.width * 0.25,
  },
});
