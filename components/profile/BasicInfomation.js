import { useTheme } from '@react-navigation/native';
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const BasicInfomation = () => {
    
  const {
    primaryBackground,
    secondaryBackground,
    secondaryBackgroundLight,
    primaryBackgroundLight,
    primaryText,
  } = useTheme().colors;

    return (
        <View style={{...styles.container, backgroundColor: primaryBackgroundLight}}>
            <Text>BasicInfomation</Text>
        </View>
    )
}

export default BasicInfomation

const styles = StyleSheet.create({
    container:{

    }
})
