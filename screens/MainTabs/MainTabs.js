import React from 'react';
import {SafeAreaView, StyleSheet, View, TouchableOpacity} from 'react-native';
import {
  createBottomTabNavigator,
  BottomTabBar,
} from '@react-navigation/bottom-tabs';
import {useTheme} from '@react-navigation/native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Svg, {Path} from 'react-native-svg';
import Consult from './Consult';
import Support from './Support';
import Notification from './Notification'
import Covid from './Covid'
import {COLORS, SIZES} from '../../constants';
import {MainTabButton} from '../../components/mainTabs'

const Tab = createBottomTabNavigator();

const CustomTabBar = props => {
    return (
      <BottomTabBar {...props.props} />
    );
  };
const MainTabs = () => {
  const theme = useTheme();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          // shadowColor: 'transparent',
          elevation: 5,
          position: 'absolute',
          left: SIZES.padding*2,
          right: SIZES.padding*2,
          bottom: SIZES.padding,
          borderRadius: SIZES.radius,
          backgroundColor: theme.colors.background,
          height: 60,
        },
      }}
      tabBar={props =>  <CustomTabBar props={props} />}>
      <Tab.Screen
        name="Suport"
        component={Support}
        options={{
          tabBarButton: props=> <MainTabButton {...props} label='Hỗ trợ' iconName='hands-helping'/>,
        }}
      />
      <Tab.Screen
        name="Consult"
        component={Consult}
        options={{
          tabBarButton: props=> <MainTabButton {...props} label='Tư vấn' iconName='hand-holding-medical'/>,
        }}
      />
      <Tab.Screen
        name='Notification'
        component={Notification}
        options={{
          tabBarButton: props=> <MainTabButton {...props} label='Thông báo' iconName='bell'/>
        }}
      />
      <Tab.Screen
        name='Covid'
        component={Covid}
        options={{
          tabBarButton: props=><MainTabButton {...props} label='Covid' iconName='lungs-virus'/>
        }}
      />
    </Tab.Navigator>
  );
};

export default MainTabs;

const styles = StyleSheet.create({});
