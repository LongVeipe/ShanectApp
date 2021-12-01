import {useTheme} from '@react-navigation/native';
import React, {useState} from 'react';
import {Animated, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {TextInput, useTheme as useThemeRP} from 'react-native-paper';
import {COLORS, SIZES} from '../../constants';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useDispatch, useSelector} from 'react-redux';
import {CheckBox} from 'react-native-elements';
import DropDownPicker from 'react-native-dropdown-picker';
import {
  checkSubCategory,
  onClicDetailFilter,
} from '../../redux/reducers/supportActions';

const SupportFilter = () => {
  const theme = useTheme();
  const {
    primaryBackground,
    primaryBackgroundLight,
    secondaryBackgroundLight,
    primaryTextLight,
    primaryText,
  } = theme.colors;
  const dispatch = useDispatch();
  const selectedCategory = useSelector(
    state => state.supportReducer.selectedCategory,
  );
  const isVisibleDetailFilter = useSelector(
    state => state.supportReducer.isVisibleDetailFilter,
  );
  const checkedSubCategories = useSelector(
    state => state.supportReducer.checkedSubCategories,
  );

  // const [detailFilterHeight, setDetailFilterHeight] = useState(new Animated.Value(0))
  function onCheckSubCategory(id) {
    dispatch(checkSubCategory(id));
  }
  const onExpandFilter = () => {
    dispatch(onClicDetailFilter());
  };

  const SubCategoryCheckBox = ({sub}) => {
    return (
      <CheckBox
        theme={theme}
        containerStyle={{
          ...styles.checkBox,
          backgroundColor: theme.colors.background,
        }}
        title={sub.name}
        checked={sub.checked}
        onPress={() => onCheckSubCategory(sub.id)}
      />
    );
  };
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Tất cả', value: null},
    {label: 'Apple', value: 'apple'},
    {label: 'Banana', value: 'banana'},
  ]);
  return (
    <View>
      <View style={{...styles.basicFilter}}>
        <TextInput
          mode="outlined"
          placeholder="Tìm kiếm người hỗ trợ..."
          style={{...styles.textInput, backgroundColor: primaryBackgroundLight}}
          left={
            <TextInput.Icon
              name="account-search"
              style={{opacity: 0.7}}
              color={primaryTextLight}
            />
          }
          right={
            <TextInput.Icon
              name="close"
              style={{opacity: 0.7}}
              color={primaryTextLight}
            />
          }
          dense={true}
          outlineColor={secondaryBackgroundLight}
          theme={{
            colors: {
              text: theme.colors.primaryTextLight,
              placeholder: theme.colors.primaryTextLight,
            },
          }}
        />
        <TouchableOpacity
          style={{...styles.checkList}}
          onPress={onExpandFilter}>
          <MaterialCommunityIcons name="format-list-checks" size={30} color={primaryTextLight}/>
        </TouchableOpacity>
      </View>

      {isVisibleDetailFilter && (
        <View
          style={{
            marginBottom: SIZES.padding,
            marginHorizontal: SIZES.padding,
          }}>
          <View style={{...styles.detailFilter}}>
            {selectedCategory &&
              checkedSubCategories.map((item, index) => (
                <SubCategoryCheckBox key={index} sub={item} />
              ))}
          </View>
          <View style={{flexDirection: 'row'}}>
            <View style={{paddingRight: SIZES.padding, flex: 1}}>
              <DropDownPicker
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
                style={{backgroundColor: theme.colors.primaryBackgroundLight, borderWidth: 0,}}
                placeholder="Tỉnh, thành"
                labelStyle={{color: primaryText}}
                textStyle={{color: primaryText}}
                placeholderStyle={{color: primaryText}}
                arrowIconStyle={{tintColor: primaryText}}
                listItemContainerStyle={{backgroundColor: primaryBackgroundLight}}
                tickIconStyle={{tintColor: primaryText}}
              />
            </View>
            <View style={{flex: 1, paddingHorizontal: SIZES.padding / 2}}>
              <DropDownPicker
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
                style={{backgroundColor: primaryBackgroundLight, borderWidth: 0,}}
                placeholder="Quận, huyện"
                labelStyle={{color: primaryText}}
                textStyle={{color: primaryText}}
                placeholderStyle={{color: primaryText}}
                arrowIconStyle={{tintColor: primaryText}}
                listItemContainerStyle={{backgroundColor: primaryBackgroundLight}}
                tickIconStyle={{tintColor: primaryText}}
              />
            </View>
            <View style={{flex: 1, paddingLeft: SIZES.padding}}>
              <DropDownPicker
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
                style={{backgroundColor: primaryBackgroundLight, borderWidth: 0,}}
                placeholder={`Xã,\nPhường`}
                labelStyle={{color: primaryText}}
                textStyle={{color: primaryText}}
                placeholderStyle={{color: primaryText}}
                arrowIconStyle={{tintColor: primaryText}}
                listItemContainerStyle={{backgroundColor: primaryBackgroundLight}}
                tickIconStyle={{tintColor: primaryTextLight}}
              />
            </View>
          </View>
        </View>
      )}
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
  },
  checkList: {
    marginLeft: SIZES.padding,
  },
  detailFilter: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  checkBox: {
    padding: 0,
  },
});
