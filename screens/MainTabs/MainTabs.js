import React from 'react';
import {SafeAreaView, StyleSheet, View, Animated} from 'react-native';
import {
  createBottomTabNavigator,
  BottomTabBar,
} from '@react-navigation/bottom-tabs';
import {useTheme} from '@react-navigation/native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Svg, {Path} from 'react-native-svg';
import Consult from './Consult';
import Support from './Support';
import Notification from './Notification';
import Covid from './Covid';
import {COLORS, SIZES, DEFINES} from '../../constants';
import {MainHeader, MainTabButton} from '../../components/mainTabs';
import LinearGradient from 'react-native-linear-gradient';
import { useSelector } from 'react-redux';

const Tab = createBottomTabNavigator();

const CustomTabBar = props => {
  return <BottomTabBar {...props.props} />;
};
const MainTabs = () => {
  const FILTER_HEIGHT = DEFINES.SUPPORT_FILTER_HEIGHT + SIZES.padding * 2;
  const theme = useTheme();
  const scrollY = useSelector(state=>state.supportReducer.scrollY)
  const diffClampScrollY = Animated.diffClamp(scrollY, 0, FILTER_HEIGHT);
  const tabsTrans = diffClampScrollY.interpolate({
    inputRange: [0, FILTER_HEIGHT],
    outputRange: [0, 100],
    extrapolate: 'clamp'
  })
  return (
    <SafeAreaView style={{...styles.container}}>
      
      <MainHeader />
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: {
            // shadowColor: 'transparent',
            elevation: 5,
            position: 'absolute',
            left: SIZES.padding * 2,
            right: SIZES.padding * 2,
            bottom: SIZES.padding*2,
            borderRadius: SIZES.radius,
            backgroundColor: theme.colors.background,
            height: 60,
            transform:[{translateY: tabsTrans}]
          },
        }}
        tabBar={props => <CustomTabBar props={props} />}>
        <Tab.Screen
          name="Suport"
          component={Support}
          options={{
            tabBarButton: props => (
              <MainTabButton
                {...props}
                label="Hỗ trợ"
                iconName="hands-helping"
              />
            ),
          }}
        />
        <Tab.Screen
          name="Consult"
          component={Consult}
          options={{
            tabBarButton: props => (
              <MainTabButton
                {...props}
                label="Tư vấn"
                iconName="hand-holding-medical"
              />
            ),
          }}
        />
        <Tab.Screen
          name="Notification"
          component={Notification}
          options={{
            tabBarButton: props => (
              <MainTabButton {...props} label="Thông báo" iconName="bell" />
            ),
          }}
        />
        <Tab.Screen
          name="Covid"
          component={Covid}
          options={{
            tabBarButton: props => (
              <MainTabButton {...props} label="Covid" iconName="lungs-virus" />
            ),
          }}
        />
      </Tab.Navigator>
    </SafeAreaView>
  );
};

export default MainTabs;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.darkPink,
  },
});
