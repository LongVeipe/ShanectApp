import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Login, Splash } from './screens';

const Stack = createNativeStackNavigator();

const RootNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}
                initialRouteName={"Splash"}
            >
                <Stack.Screen name="Login" component={Login}/>
                <Stack.Screen name="Splash" component={Splash}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default RootNavigation

const styles = StyleSheet.create({})
