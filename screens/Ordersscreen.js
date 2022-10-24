import { View, Text, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import Layout from '../components/Layout'
import Orderitem from '../components/Orderitem'

const Ordersscreen = ({navigation}) => {
  return (
    <Layout navigation={navigation}>
    <ScrollView style={styles.container}>
    <Text style={styles.heading}>Orders made</Text>
    <Orderitem/>
    <Orderitem/>
    <Orderitem/>
    <Orderitem/>
    </ScrollView>
    </Layout>
  )
}


const styles=StyleSheet.create({
  container:{
    // paddingVertical:30
  },
  heading:{
    textAlign:'center',
    fontSize:17,
    fontWeight:'600',
    paddingVertical:7,
    color:'#494949'
}
})


export default Ordersscreen