import axiosClient from './axiosClient'
import AsyncStorage from '@react-native-async-storage/async-storage';

const tokenHeader = async () => {

    const token = await AsyncStorage.getItem('token');
    
    if (token) {
        axiosClient.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else{
        delete axiosClient.defaults.headers.common['Authorization'];
    }
}

export default tokenHeader;