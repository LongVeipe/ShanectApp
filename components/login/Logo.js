import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import Animated, {
  interpolateNode,
  Extrapolate,
  interpolateColors,
} from 'react-native-reanimated';
import {useSelector} from 'react-redux';
import {COLORS, DEFINES, images, SIZES, FONTS} from '../../constants';

const Logo = () => {
  const buttonOpacity = useSelector(state => state.loginReducer.buttonOpacity);
  const logoColor = interpolateColors(buttonOpacity, {
    inputRange: [0, 1],
    outputColorRange: [COLORS.lightGray, COLORS.black],
    extrapolate: Extrapolate.CLAMP,
  });
  const logoLightOpacity = interpolateNode(buttonOpacity, {
    inputRange: [0, 1],
    outputRange: [1, 0],
    extrapolate: Extrapolate.CLAMP,
  });
  return (
    <View style={styles.container}>
      <Animated.Image style={{...styles.logo, opacity:buttonOpacity}} source={images.logo_50_opacity} />
      <Animated.Image style={{...styles.logoLight, opacity: logoLightOpacity}} source={images.logo_50_opacity_light} />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        <Animated.Text
          style={{
            ...FONTS.logoName,
            color: logoColor,
            marginTop: SIZES.padding,
            opacity: 0.5,
          }}>
          SH
        </Animated.Text>
        <Animated.Text
          style={{
            ...FONTS.logoName,
            color: logoColor,
            marginTop: SIZES.padding,
            opacity: 0.7,
          }}>
          ANE
        </Animated.Text>
        <Animated.Text
          style={{
            ...FONTS.logoName,
            color: logoColor,
            marginTop: SIZES.padding,
            opacity: 0.5,
          }}>
          CT
        </Animated.Text>
      </View>
    </View>
  );
};

export default Logo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: SIZES.width / 6,
  },
  logo: {
    width: SIZES.width * 0.3,
    height: SIZES.width * 0.3,
  },
  logoLight: {
    width: SIZES.width * 0.3,
    height: SIZES.width * 0.3,
    position: 'absolute',
    top: SIZES.width/6,
  },
});
