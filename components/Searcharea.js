import { View, Text,ImageBackground,StyleSheet,TextInput } from 'react-native'
import bacd from '../assets/pizza.jpg'
import React from 'react'
import Searchbar from './Searchbar'

const Searcharea = () => {
  return (
    <View>
      <View style={styles.overlay}/>
       <ImageBackground source={bacd}  style={styles.imagecontainer}>
       <Text style={styles.searchtext}>Search for Your meal here</Text>
      <Searchbar/>
       </ImageBackground>
    </View>
  )
}

const styles=StyleSheet.create({
  imagecontainer:{
      backgroundColor:'lightgrey',
      paddingTop:40,
      paddingBottom:40,
      paddingHorizontal:20,
      alignItems:'center',
      position:'relative',
  },
  overlay:{
    backgroundColor:'#000',
    // zIndex:1,
    width:'100%',
    height:'100%',
    position:'absolute',
    opacity:.6,
  }
  ,
  image:{
      width:'100%',
      height:'100%',
      position:'absolute'
  }
  ,
  searchtext:{
      fontSize:20,
      color:'#fff',
      fontWeight:'800'
  },
  search:{
      width:'85%',
      backgroundColor:'#fff',
      borderRadius:30,
      marginVertical:30,
      flexDirection:'row',
      alignItems:'center',
      paddingHorizontal:11,
      paddingVertical:4,
      position:'relative',
      shadowColor: "#000",
      shadowOffset:{
      width: 0,
      height: 1,
      },
      shadowOpacity: 0.20,
      shadowRadius: 1.41,
      elevation: 2,
      // zIndex:1,
  },
  searchinput:{
      paddingHorizontal:10,
      paddingVertical:5,
      flex:1,
      // backgroundColor:'red'
  }
})

export default Searcharea