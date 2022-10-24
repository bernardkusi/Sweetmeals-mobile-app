import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import bacd from '../assets/pizza.jpg'
import { FontAwesome } from '@expo/vector-icons'; 
import Rating from './Rating';

const Swiperitem = ({meal}) => {
  return (
    <View style={styles.container}>
    <Image style={styles.image} source={meal.mealimage}/>
    <View style={styles.details}>
      <View>
      <Text style={styles.name}>{meal.mealname}</Text>
      <Rating rating={meal.mealrating}/>
      <Text style={styles.price}>${meal.mealprice}</Text>
      </View>
      <TouchableOpacity style={styles.cart}>
      <FontAwesome name="shopping-cart" size={22} color="#fff" />
      </TouchableOpacity>
  </View>
  </View>
  )
}

const styles=StyleSheet.create({
    container:{
        minWidth:140,
        // alignContent:"center",
        position:'relative',
        backgroundColor:'#fff',
        borderRadius:11,
        overflow:'hidden',
        marginVertical:3,
        shadowColor: "#000",
        marginHorizontal:10,
        shadowOffset:{
        width: 0,
        height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 2,
    },
    details:{
        paddingHorizontal:6.6,
        paddingVertical:8,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    }
    ,
    image:{
        width:'100%',
        // position:'absolute',
        height:80

    },
    cart:{
        backgroundColor:'#D0C45E',
        paddingHorizontal:5,
        paddingVertical:5,
        borderRadius:17,
        shadowColor: "#000",
        shadowOffset:{
        width: 2,
        height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 2,
    },
    name:{
        fontSize:13,
        color:'grey'
    },
    price:{
        fontSize:13,
        color:'#494949'
    }
})

export default Swiperitem