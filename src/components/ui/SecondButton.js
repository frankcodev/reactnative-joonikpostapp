import React from 'react'
import { Text, TouchableOpacity, StyleSheet, View } from 'react-native'
import { colors, relWidth } from '../../config/consts'

const SecondButton = ({text, onPress}) => {
    return (
       <View style={{alignItems: 'center'}}>
            <TouchableOpacity onPress={onPress} style={styles.button} activeOpacity = {0.7}>
             <Text style={styles.text}>{text}</Text>
            </TouchableOpacity>
       </View>
    )
}

export default SecondButton;

const styles = StyleSheet.create({
    button: {
        borderWidth: 1,
        borderColor: colors.darkOne,
        paddingVertical: 4,
        paddingHorizontal: 14,
        minWidth: 160,
        maxWidth: relWidth(90),
        borderRadius: 9,
    },
    text: {
        color: colors.darkOne,
        fontSize: 16,
    }
})