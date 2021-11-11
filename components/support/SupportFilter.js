import {useTheme} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {TextInput, useTheme as useThemeRP} from 'react-native-paper';
import {COLORS, SIZES} from '../../constants';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const SupportFilter = () => {
  const themeRP = useThemeRP();
  const theme = useTheme();
  return (
    <View>
      <View style={{...styles.basicFilter}}>
        <TextInput
          mode="outlined"
          placeholder="Tìm kiếm người hỗ trợ..."
          style={{...styles.textInput}}
          left={<TextInput.Icon name="account-search" style={{opacity: 0.7}} />}
          right={<TextInput.Icon name="close" style={{opacity: 0.7}} />}
        />
        <TouchableOpacity style={{...styles.checkList}}>
          <MaterialCommunityIcons name="format-list-checks" size={30} />
        </TouchableOpacity>
      </View>
      
      <View style={{...styles.detailFilter}}></View>
    </View>
  );
};

export default SupportFilter;

const styles = StyleSheet.create({
  basicFilter: {
    flexDirection: 'row',
    paddingHorizontal: SIZES.padding,
    paddingBottom: SIZES.padding,
    alignItems: 'center',
  },
  textInput: {
    flex: 1,
    height: 40,
  },
  checkList: {
    marginLeft: SIZES.padding,
  },
  detailFilter: {
    
  },
});
