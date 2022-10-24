import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Status = () => {
  return (
    <View style={styles.nav}/>
  )
}

const styles=StyleSheet.create({
    nav:{
        height:60,
        backgroundColor:'#D0C45E',
        position:'relative',
        zIndex:10,
        width:'100%',
        top:0,
        left:0
    }
})

export default Status