import React from 'react'
import { Text, TouchableOpacity, StyleSheet, View } from 'react-native'
import { colors, relWidth } from '../../config/consts'

const Button = ({text, onPress, style}) => {
    return (
       <View style={{alignItems: 'center'}}>
            <TouchableOpacity onPress={onPress} style={[styles.button, style]} activeOpacity = {0.8}>
             <Text style={styles.text}>{text}</Text>
            </TouchableOpacity>
       </View>
    )
}

export default Button;

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.darkTwo,
        paddingVertical: 6,
        paddingHorizontal: 16,
        minWidth: 190,
        maxWidth: relWidth(90),
        borderRadius: 200,
    },
    text: {
        color: colors.lightOne,
        fontSize: 16,
        textTransform: 'uppercase',
        textAlign: 'center',
    }
})