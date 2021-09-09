import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import CheckIcon from '../../assets/svg/CheckIcon';
import { colors } from '../../config/consts';


const CheckBox = ({value, onPress, style, label}) => {
    return ( 
   <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
        <TouchableOpacity onPress={onPress} style={[styles.button, style]} activeOpacity={1}>
                {value &&
                    <CheckIcon />
                }
        </TouchableOpacity>
        <Text style={{marginLeft: 5, color: colors.darkTwo}}>{label}</Text>
     </View>
     );
}
 
export default CheckBox;

const styles = StyleSheet.create({
    button: {
        width: 20,
        height: 20,
        borderWidth: 1,
        borderColor: colors.gray,
        paddingLeft: 3,
        paddingTop: 2,
        borderRadius: 3,
    }
})