import AsyncStorage from "@react-native-async-storage/async-storage";
import { LOGIN_FAILURE, LOGIN_SUCCESS, LOGOUT } from "../types";

const setLocalSession = async (token, user) => {
    await AsyncStorage.setItem('token', token)
    await AsyncStorage.setItem('user', user)
}
const removeLocalSession = async () => {
    await AsyncStorage.removeItem('token')
    await AsyncStorage.removeItem('user')
}

export default (state, action) => {
    switch(action.type){
        case LOGIN_SUCCESS:
            const {token, name} = action.payload;
            setLocalSession(token, name)
            return {
                ...state,
                user: name
            }
        case LOGIN_FAILURE:
            return {
                ...state,
                user: null,
                error: action.payload.error
            }
        case LOGOUT:
            removeLocalSession();
            return {
                user: null,
                error: null
            }
    }
}