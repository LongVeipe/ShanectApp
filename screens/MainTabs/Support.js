import {useTheme} from '@react-navigation/native';
import React from 'react';
import {ScrollView, StyleSheet, Text, View, Animated} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {
  SupportCategories,
  SupportFilter,
  SupportPosts,
} from '../../components/support';
import {COLORS, SIZES, DEFINES} from '../../constants';

const Support = () => {
  const FILTER_HEIGHT = DEFINES.SUPPORT_FILTER_HEIGHT + SIZES.padding * 2;
  const dispatch = useDispatch();
  const scrollY = useSelector(state => state.supportReducer.scrollY);
  const diffClampScrollY = Animated.diffClamp(scrollY, 0, FILTER_HEIGHT);
  const filterTrans = diffClampScrollY.interpolate({
    inputRange: [0, FILTER_HEIGHT],
    outputRange: [0, -FILTER_HEIGHT],
    extrapolate: 'clamp',
  });
  const filterHeight = diffClampScrollY.interpolate({
    inputRange: [0, FILTER_HEIGHT],
    outputRange: [FILTER_HEIGHT, 0],
    extrapolate: 'clamp',
  });
  const theme = useTheme();
  return (
    <View style={{...styles.container}}>
      <View
        style={{
          ...styles.scrollView,
          backgroundColor: theme.colors.background,
        }}>
        <SupportPosts />
        <Animated.View style={{...styles.filter, backgroundColor: theme.colors.background, transform: [{translateY: filterTrans}]}}>
          <SupportCategories />
          <SupportFilter />
        </Animated.View>
      </View>
    </View>
  );
};

export default Support;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.darkPink,
  },
  scrollView: {
    flex: 1,
    borderTopLeftRadius: SIZES.radius,
    borderTopRightRadius: SIZES.radius,
    paddingTop: SIZES.padding ,
  },
  filter: {
    position: 'absolute',
    top: SIZES.padding,
    marginHorizontal: SIZES.padding,
  },
});
