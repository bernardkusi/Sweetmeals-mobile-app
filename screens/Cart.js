import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Layout from '../components/Layout'
import Cartitem from '../components/Cartitem'


const Cart = ({navigation}) => {
  return (
    <Layout navigation={navigation}>
    <ScrollView style={styles.container}>
    <Text style={styles.heading}>Meals To Order</Text>
    <Cartitem/>
    <Cartitem/>
    <Cartitem/>
    <Cartitem/>
    <Cartitem/>
    <Cartitem/>
    <Cartitem/>
    <Cartitem/>
    <Cartitem/>
    <Cartitem/>
    </ScrollView>
    </Layout>
  )
}

const styles=StyleSheet.create({
  container:{
    // paddingVertical:30,
    // paddingBottom:150
  },
  heading:{
    textAlign:'center',
    fontSize:17,
    fontWeight:'600',
    paddingVertical:7,
    color:'#494949'
}
})

export default Cart