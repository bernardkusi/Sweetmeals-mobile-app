import { View, Text, StyleSheet, ImageBackground } from 'react-native'
import React from 'react'
import updateimage from '../assets/pie.jpg'

const Updates = () => {
  return (
    <ImageBackground source={updateimage} style={styles.container}>
      <View style={styles.overlay}>
        <Text style={styles.discount}>50% Discount</Text>
        <Text style={styles.text}>For your first order</Text>
      </View>
    </ImageBackground>
  )
}

const styles =StyleSheet.create({
    container:{
        marginHorizontal:12,
        backgroundColor:"lightgrey",
        height:130,
        marginBottom:10,
        position:'relative'
    },
    overlay:{
        backgroundColor:'rgba(0,0,0,.4)',
        position:'absolute',
        width:'100%',
        height:'100%',
        justifyContent:'center',
        paddingHorizontal:20
    },
    discount:{
        color:'#fff',
        fontSize:24,
        fontWeight:'800'
    },
    text:{
        color:'#fff',
        fontSize:13
    }

})

export default Updates