import {
    Platform,
    useColorScheme,
    Dimensions
  } from 'react-native';

  const {width, height} = Dimensions.get('screen');


export const isDarkMode =  () => {return useColorScheme() === 'dark'};
export const isIos = Platform.OS === 'ios';

export const colors = {
      darkOne: '#707070',
      darkTwo: '#888888',
      lightOne: '#fff',
      bgPic: '#E3E3E3',
      gray: '#ACACAC'
}

export const sizes = {
    paddingHorizontal: 28
}

export const screenWidth = Math.round(width);
export const screenHeight = Math.round(height);
export const relWidth = (n) => {
    return (screenWidth * n) / 100;
}
export const relHeight = (n) => {
    return (screenHeight * n) / 100;
}