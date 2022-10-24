import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { FontAwesome5 } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons';





const Navigation = ({navigation}) => {
  return (
    <View style={styles.navigation}>
      <View style={styles.navigationleft}>
        <TouchableOpacity>
        <FontAwesome5 style={styles.icon} name="home" size={26} color="black"  onPress={()=>{navigation.navigate('Home')}} />
        <Text style={styles.text}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity>
        <FontAwesome style={styles.icon} name="list-alt" size={26} color="black" />
        <Text style={styles.text}>Menu</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cartcontain}>
      <TouchableOpacity onPress={()=>{navigation.navigate('cart')}} style={styles.cart}>
      <FontAwesome name="shopping-cart" style={{...styles.icon,color:"#fff"}} size={30} color="#fff" />
      </TouchableOpacity>
      </View>
      
      <View style={styles.navigationright}>
        <TouchableOpacity>
        <FontAwesome style={styles.icon} name="user" size={26} color="black" />
        <Text style={styles.text}>Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity>
        <FontAwesome style={styles.icon} name="book" size={26} color="black" />
        <Text style={styles.text}>Orders</Text>
        </TouchableOpacity>      
      </View>
    </View>
  )
}

const styles=StyleSheet.create({
    navigation:{
        flexDirection:'row',
        paddingHorizontal:17,
        backgroundColor:'#fff',
        paddingVertical:11,
        justifyContent:'space-between',
        position:'relative',
        alignItems:'center',
        shadowColor: "#000",
        shadowOffset:{
        width: 0,
        height: 2,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
    },
    navigationleft:{
        flexDirection:'row',
        paddingRight:29
    },
    navigationright:{
        flexDirection:'row',
        paddingLeft:29
    },
    icon:{
        paddingHorizontal:18,
        color:'#D0C45E'
    },
    cartcontain:{
        width:20,
        height:20,
        position:'relative',
        display:'flex',
        justifyContent:'center'
    },
    cart:{
        backgroundColor:'#D0C45E',
        paddingVertical:16,
        borderRadius:50,
        width:60,
        height:60,
        alignSelf:'center',
        shadowColor: "#000",
        shadowOffset:{
        width: 2,
        height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 2,
    },
    text:{
        textAlign:'center',
        fontSize:12,
        color:'#D0C45E'
    }
})

export default Navigation