import {useTheme} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
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
import {useDispatch, useSelector} from 'react-redux';
import {
  fetchCategories,
  selectCategory,
} from '../../redux/reducers/supportActions';
import {COLORS, FONTS, SIZES} from '../../constants';

const SupportCategories = () => {
  const dispatch = useDispatch();
  const categories = useSelector(state => state.supportReducer.categories);
  const selectedCategory = useSelector(
    state => state.supportReducer.selectedCategory,
  );
  const theme = useTheme();
  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  function onSelectCategory(category) {
    dispatch(selectCategory(category));
  }
  const ButtonCategory = ({category}) => (
    <TouchableOpacity
      onPress={() => onSelectCategory(category)}
      style={{
        ...styles.button,
        backgroundColor:
          selectedCategory?._id == category._id && theme.colors.primaryFaint,
      }}>
      <View
        style={{
          backgroundColor:
            selectedCategory?._id == category._id &&
            theme.colors.primaryBackgroundLight,
          padding: SIZES.padding / 3,
          borderRadius: SIZES.radius,
        }}>
        <Icon
          name={category.icon}
          size={20}
          color={
            selectedCategory?._id == category._id && theme.colors.primaryBold
          }
        />
      </View>
      <Text
        style={{
          ...FONTS.body4,
          paddingLeft: SIZES.padding / 2,
          fontWeight: 'bold',
          color:
            selectedCategory?._id == category._id && theme.colors.primaryBold,
        }}>
        {category.name}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={{...styles.container}}>
      <ScrollView
        style={{flexDirection: 'row', borderRadius: SIZES.radius}}
        horizontal
        showsHorizontalScrollIndicator={false}>
        {categories.map(item => (
          <ButtonCategory key={item._id} category={item} />
        ))}
      </ScrollView>
    </View>
  );
};

export default SupportCategories;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingBottom: SIZES.padding,
    alignItems: 'center',
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: SIZES.radius * 2,
    padding: SIZES.padding / 2,
    marginRight: SIZES.padding,
  },
});
