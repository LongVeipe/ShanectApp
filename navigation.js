import {NavigationContainer, DefaultTheme as NavigationDefaultTheme, DarkTheme as NavigationDarkTheme} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Login, Register, Splash, MainTabs, Profile} from './screens';
import configureStore from './redux/store';
import {Provider} from 'react-redux';
import Toast from 'react-native-toast-message'
import {Provider as PaperProvider, DarkTheme as PaperDarkTheme, DefaultTheme as PaperDefaultTheme} from 'react-native-paper';
import { COLORS, SIZES, DARK_THEME, LIGHT_THEME, COLOR_OPTIONS } from './constants';

const Stack = createNativeStackNavigator();
const store = configureStore();
const paperDefaultTheme ={
  ...PaperDefaultTheme,
  colors:{
    ...PaperDefaultTheme.colors,
    ...LIGHT_THEME,
    ...COLOR_OPTIONS.pink,
  },
  roundness: SIZES.radius,
}
const navigationDefaultTheme={
  ...NavigationDefaultTheme,
  colors:{
    ...NavigationDefaultTheme.colors,
    ...LIGHT_THEME,
    ...COLOR_OPTIONS.pink,
    background: LIGHT_THEME.primaryBackground,
    text: LIGHT_THEME.primaryText,
  },
}
const navigationDarkTheme={
  ...NavigationDarkTheme,
  colors:{
    ...NavigationDarkTheme.colors,
    ...DARK_THEME,
    ...COLOR_OPTIONS.pink,
    background: DARK_THEME.primaryBackground,
    text: DARK_THEME.primaryText,
  }
}

const RootNavigation = () => {
  return (
    <Provider store={store}>
      <PaperProvider theme={paperDefaultTheme}>
        <NavigationContainer theme={navigationDarkTheme}>
          <Stack.Navigator
            screenOptions={{
              gestureEnabled: true,
              headerShown: false,


            }}
            initialRouteName={'MainTabs'}>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Splash" component={Splash} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="MainTabs" component={MainTabs}/>
            <Stack.Screen name='Profile' component={Profile}/>
          </Stack.Navigator>
        </NavigationContainer>
        <Toast/>
      </PaperProvider>
    </Provider>
  );
};

export default RootNavigation;

const styles = StyleSheet.create({});
