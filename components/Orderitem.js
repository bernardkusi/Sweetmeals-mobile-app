import { View, Text,TouchableOpacity,Image,StyleSheet } from 'react-native'
import React from 'react'
import pie from '../assets/pie.jpg'
import { FontAwesome } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 
const Orderitem = () => {
  return (
    <View style={styles.item}>
    <Image style={styles.image} source={pie}/>
    <View style={styles.details}>
      <View>
      <Text style={styles.name}>Jollof rice</Text>
      <View style={styles.stars}>
      <AntDesign name="star" size={14} style={styles.star} color="#D0C45E" />
      <AntDesign name="star" size={14} style={styles.star} color="#D0C45E" />
      <AntDesign name="star" size={14} style={styles.star} color="#D0C45E" />
      <AntDesign name="star" size={14} style={styles.star} color="#D0C45E" />
      <AntDesign name="star" size={14} style={styles.star} color="#D0C45E" />
      </View>
      <Text style={styles.price}>$12.00</Text>
      </View>
    </View>
      <View>
        <Text style={styles.status}>Delivered</Text>
        <Text style={styles.name}>24/10/2022</Text>
      </View>

  </View>
  )
}



const styles=StyleSheet.create({
    image:{
      width:110,
      height:'100%',
      borderRadius:17,
    },
    item:{
      width:'90%',
      height:90,
      backgroundColor:'#fff',
      marginHorizontal:'5%',
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center',
      borderRadius:17,
      overflow:'hidden',
      padding:4,
      paddingRight:20,
      marginVertical:10,
      shadowColor: "#000",
          shadowOffset:{
          width: 2,
          height: 2,
          },
          shadowOpacity: 0.23,
          shadowRadius: 2.62,
          elevation: 2,
    },
    details:{
      paddingHorizontal:6.6,
    //   paddingLeft:0,
      paddingVertical:8,
  },
  stars:{
    flexDirection:'row',
  },
  star:{
    paddingRight:2,
  },
  cart:{
    backgroundColor:'#D0C45E',
    paddingHorizontal:8,
    paddingVertical:6,
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
    status:{
    fontSize:14,
    color:'#D0C45E',
    fontWeight:'700'
    },
    price:{
        fontSize:13,
        color:'#494949'
    }
  })


export default Orderitem

