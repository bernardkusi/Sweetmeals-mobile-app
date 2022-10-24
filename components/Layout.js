import { View, StyleSheet, SafeAreaView } from 'react-native'
import React from 'react'
import Status from './Status'

const Layout = ({children,navigation}) => {
  return (
    <SafeAreaView style={styles.page}>
    <Status/>
     {children}
   </SafeAreaView>
  )
}

const styles=StyleSheet.create({
    page:{
        flex:1,
        backgroundColor:"#fff"
    },
})

export default Layout