import {NavigationContainer, DefaultTheme as NavigationDefaultTheme, DarkTheme as NavigationDarkTheme} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Login, Register, Splash} from './screens';
import configureStore from './redux/store';
import {Provider} from 'react-redux';
import {Provider as PaperProvider, DarkTheme as PaperDarkTheme, DefaultTheme as PaperDefaultTheme} from 'react-native-paper';
import { COLORS, SIZES } from './constants';

const Stack = createNativeStackNavigator();
const store = configureStore();
const paperDefaultTheme ={
  ...PaperDefaultTheme,
  colors:{
    ...PaperDefaultTheme.colors,
    primary: COLORS.primary,
    text: COLORS.black,
    background: COLORS.white,
    accent: COLORS.lightPink,
  },
  roundness: SIZES.radius,
}
const navigationDefaultTheme={
  ...NavigationDefaultTheme,
  colors:{
    ...NavigationDefaultTheme.colors,
    primary: COLORS.primary,
    text: COLORS.black,
    background: COLORS.white,
  },
}

const RootNavigation = () => {
  return (
    <Provider store={store}>
      <PaperProvider theme={paperDefaultTheme}>
        <NavigationContainer theme={navigationDefaultTheme}>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}
            initialRouteName={'Splash'}>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Splash" component={Splash} />
            <Stack.Screen name="Register" component={Register} />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </Provider>
  );
};

export default RootNavigation;

const styles = StyleSheet.create({});
