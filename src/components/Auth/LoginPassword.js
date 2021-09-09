import React, { useContext, useEffect, useState } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { HeaderView, FullCenterContainer} from '../ui/Layouts'
import Button from '../ui/Button'
import Input from '../ui/Input'
import Label from '../ui/Label'
import BackButton from '../ui/BackButton'
import CheckBox from '../ui/CheckBox'
import { colors } from '../../config/consts'
import useToast from '../../hooks/useToast'
import { authContext } from '../../context/authContext'

const LoginPassword = ({route, navigation}) => {

    const { email } = route.params;
    const [remember, setRemember] = useState(false)
    const [password, setPassword] = useState('')
    const [ToastAlert, showToast] = useToast();
    const { handleSignIn, authError } = useContext(authContext)

    const handlePress = async () => {
      if(password.trim() === '') {
        showToast({msg: 'Write a password'})
        return;
      }

      handleSignIn({password})
    }

    useEffect(() => {
      if (authError) {
        showToast({msg: authError})
      }
    }, [authError])

    return (
      <>
        <ToastAlert />
        <HeaderView>
            <BackButton />
        </HeaderView>
        <FullCenterContainer>
            <Text style={styles.textEmail}>{email}</Text>
            <View style={{width: '100%', marginTop: 40, marginBottom: 60}}>
              <Label text="Password" />
               <Input 
                   secureTextEntry
                   maxLength = {20}
                   onChangeText = {(text) => setPassword(text)}
                   autoFocus = {true}
                   value={password}
               />
      
              <CheckBox 
                  style={{marginTop: 10}}
                  value={remember}
                  onPress = {() => setRemember(!remember)}
                  label="Remember me"
              />    
         
            </View>
            <Button text="SIGN IN" onPress={handlePress}/>
        </FullCenterContainer>
      </>
    )
}

export default LoginPassword;

const styles = StyleSheet.create({
    textEmail: {
      color: colors.darkOne,
      fontWeight: '600',
      fontSize: 15
    }
})