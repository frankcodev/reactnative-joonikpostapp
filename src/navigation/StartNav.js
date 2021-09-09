import React, {useContext, useEffect, useState} from 'react'
import { Animated, Easing } from 'react-native'
import { createStackNavigator, CardStyleInterpolators, TransitionPresets } from '@react-navigation/stack';
import LoginUserName from '../components/Auth/LoginUserName';
import LoginPassword from '../components/Auth/LoginPassword';
import PostsScreen from '../components/Posts/PostsScreen';
import { forSlide } from './navTransitions';
import { authContext } from '../context/authContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LOGIN_SUCCESS } from '../types';

const config = {
  duration: 700,
  easing: Easing.out(Easing.poly(4)),
  timing: Animated.timing,
  useNativeDriver: true,
}

const Stack = createStackNavigator();
const StartNav = () => {

  const { user, authDispatch } = useContext(authContext);
  const [load, setLoad] = useState(false)

  useEffect(async () => {
    const token = await AsyncStorage.getItem('token');
    const name = await AsyncStorage.getItem('user');

    if (token && name) {
      authDispatch({type: LOGIN_SUCCESS, payload: {token, name}})
    }

    setLoad(true)

  }, [])

   return load && (
     <Stack.Navigator
        screenOptions={{
            headerShown: false,
            gestureEnabled: true,
            gestureDirection: 'horizontal',
            cardStyle: {backgroundColor: '#fff'},
            cardStyleInterpolator: forSlide,
            transitionSpec: {
              open: {config},
              close: {config}
            },
        }}
     >
       {!user ? 
      <>
        <Stack.Screen 
        name="LoginUserName" 
        component={LoginUserName} 
      />
        <Stack.Screen 
        name="LoginPassword" 
        component={LoginPassword} 
        />
        </>
        :
        <Stack.Screen name="PostsScreen" component={PostsScreen} />
      }
      </Stack.Navigator>
    ) 
}

export default StartNav;