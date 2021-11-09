import {useTheme} from '@react-navigation/native';
import React from 'react';
import {
  FlatList,
  ListView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {COLORS, FONTS, SIZES} from '../../constants';

const SupportCategories = () => {
  const theme = useTheme();
  const ButtonCategory = ({icon, label}) => (
    <TouchableOpacity
      style={{...styles.button, backgroundColor: theme.colors.accent}}>
      <Icon name={icon} size={20} />
      <Text
        style={{
          ...FONTS.body4,
          paddingLeft: SIZES.padding / 2,
          fontWeight: 'bold',
        }}>
        {label}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={{...styles.container}}>
      <ScrollView
        style={{flexDirection: 'row', borderRadius: SIZES.radius}}
        horizontal
        showsHorizontalScrollIndicator={false}>
        <ButtonCategory icon="rice" label="Thực phẩm" />
        <ButtonCategory icon="package-variant" label="Nhu yếu phẩm" />
        <ButtonCategory icon="medical-bag" label="Vật tư ý tế" />
      </ScrollView>
    </View>
  );
};

export default SupportCategories;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: SIZES.padding * 2,
    paddingBottom: SIZES.padding,
    alignItems: 'center',
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: SIZES.radius,
    padding: SIZES.padding,
    marginRight: SIZES.padding * 2,
  },
});
