import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import React, { useContext } from 'react'
import Layout from '../components/Layout'
import image from '../assets/pizza.jpg'
import { AntDesign } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons'; 
import Mealcontainer from '../components/Mealcontainer';
import { mealContext } from '../App';


const Mealscreen = ({route,navigation}) => {

  const meals=useContext(mealContext)
  const meal=route.params

  return (
    <Layout>
      <ScrollView>
      <View>
        <Image style={styles.image} source={meal.mealimage}/>
      </View>
      <View style={styles.details}>
        <View>
        <View style={styles.stars}>
        <AntDesign name="star" size={19} style={styles.star} color="#D0C45E" />
        <AntDesign name="star" size={19} style={styles.star} color="#D0C45E" />
        <AntDesign name="star" size={19} style={styles.star} color="#D0C45E" />
        <AntDesign name="star" size={19} style={styles.star} color="#D0C45E" />
        <AntDesign name="star" size={19} style={styles.star} color="#D0C45E" />
        </View>
        <Text style={styles.name}>{meal.mealname} </Text>
        <Text style={styles.price}>${meal.mealprice}</Text>
        </View>
        <TouchableOpacity style={styles.cart}>
        <FontAwesome name="shopping-cart" size={27} color="#fff" />
        </TouchableOpacity>
    </View>
    <Text style={styles.heading}>Other Meals</Text>
    <Mealcontainer meals={meals} navigation={navigation}/>
    </ScrollView>

    </Layout>
  )
}

const styles=StyleSheet.create({
  image:{
    height:260,
    width:'100%',
    borderBottomRightRadius:30,
    borderBottomLeftRadius:30
  },
  details:{
    paddingHorizontal:25,
    paddingVertical:8,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
  },
  stars:{
      flexDirection:'row',
  },
  star:{
      paddingRight:6,
  },
  cart:{
    backgroundColor:'#D0C45E',
    paddingHorizontal:8,
    paddingVertical:7,
    borderRadius:25,
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
      fontSize:15,
      color:'grey'
  },
  price:{
      fontSize:14,
      color:'#494949',
      fontWeight:"700"
  },
  heading:{
    textAlign:'center',
    fontSize:17,
    fontWeight:'600',
    paddingVertical:7,
    color:'#494949'
}
})

export default Mealscreen