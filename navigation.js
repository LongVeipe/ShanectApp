import {NavigationContainer, DefaultTheme as NavigationDefaultTheme, DarkTheme as NavigationDarkTheme} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Login, Register, Splash, MainTabs} from './screens';
import configureStore from './redux/store';
import {Provider} from 'react-redux';
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
  },
}
const navigationDarkTheme={
  ...NavigationDarkTheme,
  colors:{
    ...NavigationDarkTheme.colors,
    ...DARK_THEME,
    ...COLOR_OPTIONS.pink,
  }
}

const RootNavigation = () => {
  return (
    <Provider store={store}>
      <PaperProvider theme={paperDefaultTheme}>
        <NavigationContainer theme={navigationDefaultTheme}>
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
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </Provider>
  );
};

export default RootNavigation;

const styles = StyleSheet.create({});
