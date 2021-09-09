import React from 'react'
import { TextInput, StyleSheet } from 'react-native'
import { colors, relWidth } from '../../config/consts'

const Input = (props) => {
    const {style} = props;
    return (  
        <TextInput {...props} style={[styles.input, style]} />
    );
}
 
export default Input;

const styles = StyleSheet.create({
    input: {
        width: '100%',
        borderRadius: 200,
        borderWidth: 1,
        borderColor: colors.gray,
        height: 40,
        paddingHorizontal: 12,
        color: colors.darkOne
    }
})
