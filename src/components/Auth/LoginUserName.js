import React, { useState } from 'react'
import { View } from 'react-native'
import { FullCenterContainer } from '../ui/Layouts'
import Button from '../ui/Button'
import Input from '../ui/Input'
import Label from '../ui/Label'
import useToast from '../../hooks/useToast'
import axiosClient from '../../config/axiosClient'
import AsyncStorage from '@react-native-async-storage/async-storage'

const LoginUserName = ({navigation}) => {

  const [email, setEmail] = useState('');
  const [ToastAlert, showToast] = useToast();

  const isEmail = (text) => {
      const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
      return emailRegex.test(text);
  }

  const handleNext = async () => {
      if(email.trim() === '') {
        showToast({msg: 'Write your email'});
        return;
      };

      if(!isEmail(email)) {
        showToast({msg: 'Write a valid email '});
        return;
      };


      try {
        const res = await axiosClient.post('/login/email', {email});
        const token = res.data.result;

        await AsyncStorage.setItem('token', token)
      } catch (error) {
        showToast({msg: 'An error occurred please try again'});
      }
      navigation.navigate('LoginPassword', {email})
  }

    return (
      <>
      <ToastAlert />
          <FullCenterContainer>
            <View style={{width: '100%', marginBottom: 60}}>
              <Label text="Email" />
               <Input 
                    maxLength = {40}
                    onChangeText = {(text) => setEmail(text)}
                    autoFocus = {true}
                    value = {email}
               />
            </View>
            <Button text="Next" onPress={handleNext}/>
          </FullCenterContainer>
      </>
    )
}

export default LoginUserName;
