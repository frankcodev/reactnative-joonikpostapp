import React, {createContext, useReducer} from 'react'
import { LOGIN_FAILURE, LOGIN_SUCCESS, LOGOUT } from '../types';
import authReducer from './authReducer';
import { useNavigation } from '@react-navigation/native'
import tokenHeader from '../config/tokenHeader';
import axiosClient from '../config/axiosClient';

export const authContext = createContext();

const AuthState = ({children}) => {

    const initialState = {
        user: null,
        error: null,
    }

    const [state, dispatch] = useReducer(authReducer, initialState);

    const navigation = useNavigation();

    const handleSignIn = async ({password}) => {
        try {
          await tokenHeader();
          const res = await axiosClient.post('/login/password', {password});

          dispatch({type: LOGIN_SUCCESS, payload: res.data})
          navigation.navigate('PostsScreen')
         
        } catch (error) {
          if(error.response){
            const {response} = error;
            if (response) {
              if (response.status === 500)  
              dispatch({
                  type: LOGIN_FAILURE, 
                  payload: {error: 'An error occurred please try again'}
            })
            else dispatch({
                type: LOGIN_FAILURE, 
                payload: {error: response.data.error}
            })
            }
          }
          return;
        }
      }

      const handleLogout = () => {
        dispatch({type: LOGOUT})
    }

    return (  
        <authContext.Provider value = {{
            user: state.user,
            authError: state.error,
            handleSignIn,
            handleLogout,
            authDispatch: dispatch
        }}>
            {children}
        </authContext.Provider>
    );
}
 
export default AuthState;