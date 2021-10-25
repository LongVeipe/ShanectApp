import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {COLORS, FONTS, images, SIZES} from '../../constants';

const Header = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={{flex: 1, backgroundColor: 'blue'}}>
        {/* <Image source={images.loginBackground} style={styles.background} /> */}
      </View>
      {/* <Text style={{...FONTS.h4}}>ĐĂNG KÝ TÀI KHOẢN MỚI</Text>
      <TouchableOpacity style={styles.backButton}>
        <FontAwesome
          name="arrow-left"
          size={20}
          onPress={() => navigation.goBack()}
        />
      </TouchableOpacity> */}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  backButton: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: SIZES.padding * 2,
    borderRadius: SIZES.radius,
    borderColor: COLORS.black,
    borderWidth: 1,
    width: 40,
    height: 40,
    position: 'absolute',
    left: 0,
  },
  background: {
    resizeMode: 'contain',
  },
});
