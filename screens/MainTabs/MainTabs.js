import React, { useEffect, useState } from 'react';
import {SafeAreaView, StyleSheet, Animated} from 'react-native';
import {
  createBottomTabNavigator,
  BottomTabBar,
} from '@react-navigation/bottom-tabs';
import {useTheme} from '@react-navigation/native';
import Consult from './Consult';
import Support from './Support';
import Notification from './Notification';
import Covid from './Covid';
import {COLORS, SIZES, DEFINES} from '../../constants';
import {MainHeader, MainTabButton} from '../../components/mainTabs';
import { useSelector } from 'react-redux';

const Tab = createBottomTabNavigator();

const CustomTabBar = props => {
  return <BottomTabBar {...props.props} onPress={()=>console.log('ok')}/>;
};

const MainTabs = ({navigation}) => {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);
  const FILTER_HEIGHT = DEFINES.SUPPORT_FILTER_HEIGHT + SIZES.padding * 2;
  const theme = useTheme();
  const scrollY0 = useSelector(state=>state.supportReducer.scrollY)
  const scrollY1 = useSelector(state=>state.consultReducer.scrollY)
  const diffClampScrollY0 = Animated.diffClamp(scrollY0, 0, FILTER_HEIGHT);
  const diffClampScrollY1 = Animated.diffClamp(scrollY1, 0, FILTER_HEIGHT)
  const tabsTransInterpolate = {
    inputRange: [0, FILTER_HEIGHT],
    outputRange: [0, 100],
    extrapolate: 'clamp'
  }
  let tabsTrans = diffClampScrollY0.interpolate(tabsTransInterpolate)

  function onTabPress(index){
    scrollY0.setValue(0)
  }

  return (
    <SafeAreaView style={{...styles.container}}>
      
      <MainHeader />
      <Tab.Navigator
        screenListeners={{
          state: e=>{
            onTabPress(e.data.state.index)
          }
        }}
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
            backgroundColor: theme.colors.primaryBackgroundLight,
            height: 60,
            transform:[{translateY: tabsTrans}]
          },
        }}
        // tabBar={props => <CustomTabBar props={props} />}
        // tabBar={props=><MyTabBar {...props}/>}
        >
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
