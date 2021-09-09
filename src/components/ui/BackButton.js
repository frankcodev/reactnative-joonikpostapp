import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Arrow from '../../assets/svg/Arrow';

const BackButton = () => {

    const navigation = useNavigation();

    return (  
        <TouchableOpacity onPress={navigation.goBack} activeOpacity={0.5}>
            <Arrow />
        </TouchableOpacity>
    );
}
 
export default BackButton;