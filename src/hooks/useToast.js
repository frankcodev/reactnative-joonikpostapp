import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { colors } from '../config/consts';

const useToast = () => {
    
    const [toast, setToast] = useState()

    useEffect(() => {
       if(toast){
            setTimeout(() => {
                setToast()
            }, 2000)
       }
    }, [toast])

    const ToastAlert = () => (
        <>
            {toast && 
                <View style={styles.container}>
                    <Text style={styles.text}>{toast.msg}</Text>
                </View>
            }
        </>
    )

    return [ToastAlert, setToast]
}
 
export default useToast;


const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        alignItems: 'center',
        padding: 10,
        zIndex: 8
    },
    text: {
        borderColor: 'red',
        borderWidth: 2,
        borderRadius: 20,
        paddingVertical: 4,
        paddingHorizontal: 20,
        color: colors.darkOne,
        fontWeight: '700',
        fontSize: 16,
        textAlign: 'center'
    }
})