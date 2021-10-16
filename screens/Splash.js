import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import LottieView from 'lottie-react-native'
import {animations, COLORS} from '../constants';

const Splash = ({navigation}) => {
    return (
        <SafeAreaView style={styles.container}>
            <LottieView 
                source={animations.splash}
                loop={false}
                autoPlay
                onAnimationFinish={() => navigation.replace("Login")}
            />
        </SafeAreaView>
    )
}

export default Splash

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: COLORS.black,
    }
})
