import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const Splash = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Text>SPLASH</Text>
        </SafeAreaView>
    )
}

export default Splash

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'red',
    }
})
