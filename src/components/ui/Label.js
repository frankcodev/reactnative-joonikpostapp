import React from 'react'
import { Text, StyleSheet } from 'react-native'
import { colors, relWidth } from '../../config/consts'

const Label = ({text, style}) => {
    return (  
        <Text style={[styles.text, style]}>{text}</Text>
    );
}
 
export default Label;

const styles = StyleSheet.create({
    text: {
        color: colors.darkOne,
        fontSize: 18,
        textTransform: 'uppercase',
        marginBottom: 10
    }
})