import React from 'react';
import { Text, TouchableOpacity, StyleSheet, View } from 'react-native';
import Arrow from '../../assets/svg/Arrow';
import { colors, relWidth } from '../../config/consts';

const Dropdown = ({children, onPress, text, open, dropStyle}) => {
    return ( 
    <View style={styles.container}>
        <TouchableOpacity 
            onPress={onPress} 
            style={styles.button} 
            activeOpacity={0.7}
        >
            <Text style={styles.text}>{text}</Text>
            <View style={{marginLeft: 12}}>
                <Arrow orientation={open ? 'top' : 'bottom'} size = {14}/>
            </View>
        </TouchableOpacity>
        {open &&
            <View style={[styles.drop, dropStyle]}>
                {children}
            </View>
        }
    </View>
     );
}
 
export default Dropdown;

const styles = StyleSheet.create({
    button: {
        flexDirection: 'row', 
        alignItems: 'center'
    },
    text: {
        fontSize: 18,
        lineHeight: 18,
        color: colors.darkOne,
        fontWeight: '500',
    },
    container: {
        position: 'relative'
    },
    drop: {
        position: 'absolute',
        top: 24,
        maxWidth: relWidth(60),
        zIndex: 5
    }
})
