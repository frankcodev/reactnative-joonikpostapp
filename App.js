/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React from 'react';

import { NavigationContainer } from '@react-navigation/native'
import AuthState from './src/context/authContext';
import StartNav from './src/navigation/StartNav';

const App = () => {
  return (
 
      <NavigationContainer >
           <AuthState>
              <StartNav />
          </AuthState>
      </NavigationContainer>
   
  );
};

export default App;
