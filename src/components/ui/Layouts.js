
import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

export const CoverView = ({children, style}) => (
    <View style={[styles.cover, style]} >{children}</View>
)

export const FullCenterView = ({children, style}) => (
    <View style={[styles.fullCenter, style]} >{children}</View>
)

export const Row = ({children, style}) => (
    <View style={[styles.row, style]} >{children}</View>
)

export const HeaderView = ({children, style}) => (
    <View style={[styles.header, style]} >{children}</View>
)

export const Container = ({children, style}) => (
    <View style={[styles.container, style]} >{children}</View>
)

export const FullCenterContainer = ({children, style}) => (
    <View style={[styles.fullCenter, styles.container, style]} >{children}</View>
)


const styles = StyleSheet.create({
    cover: {flex: 1},
    fullCenter: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    row: {
        flexDirection: 'row',
        flex: 1,
    },
    header: {
        paddingVertical: 14,
        paddingHorizontal: 10,
    },
    container: {
        paddingHorizontal: 28
    }
})