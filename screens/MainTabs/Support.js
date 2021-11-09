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
  const dispatch = useDispatch();
  const filterTrans = useSelector(state => state.supportReducer.filterTrans);
  const theme = useTheme();
  return (
    <View style={{...styles.container}}>
      <View
        style={{
          ...styles.scrollView,
          backgroundColor: theme.colors.background,
        }}>
        <SupportPosts style={{marginTop: 200}} />
        <Animated.View
          style={{
            ...styles.filter,
            transform: [{translateY: filterTrans}],
            backgroundColor: theme.colors.background,
          }}>
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
    paddingTop: SIZES.padding * 2,
  },
  filter: {
    position: 'absolute',
    top: SIZES.padding * 2,
  },
});
