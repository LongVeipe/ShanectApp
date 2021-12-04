import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useTheme } from '@react-navigation/native'
import { FONTS, SIZES } from '../../constants'

const SupportListHeader = () => {
    const {
        primaryBackground,
        secondaryBackground,
        secondaryBackgroundLight,
        primaryBackgroundLight,
        primaryBackgroundDark,
        secondaryBackgroundDark,
        primaryText,
        primaryLight,
        primaryFaint,
        primary,
        primaryBold,
      } = useTheme().colors;

    return (
        <View style={{...styles.container, backgroundColor: primaryBackgroundLight}}>
            <View style={{flexDirection: 'row', paddingHorizontal: SIZES.padding, paddingVertical: SIZES.padding*2}}>
                <Text style={{...FONTS.h3, color: primaryText}}>Bài viết</Text>
            </View>
            <View>
                <TouchableOpacity style={{flexDirection: 'row'}}>
                   
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default SupportListHeader

const styles = StyleSheet.create({
    container:{
        marginTop: SIZES.padding,
        
    }
})
