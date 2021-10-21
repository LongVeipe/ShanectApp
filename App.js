import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import RootNavigation from './navigation';
import {enableScreens} from 'react-native-screens';
import {Provider} from 'react-redux';

enableScreens();


const App = () => {
  return (
    <RootNavigation/>
  );
};
export default App;
