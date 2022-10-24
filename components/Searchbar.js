import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons'; 


const Searchbar = () => {
  return (
    <View style={styles.search}>
        <FontAwesome name="search" size={19} color="grey" />
            <TextInput placeholder='search meal' style={styles.searchinput}/>
        </View>
  )
}


const styles=StyleSheet.create({
   
    search:{
        width:'85%',
        backgroundColor:'#fff',
        borderRadius:30,
        marginVertical:12,
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal:8,
        paddingVertical:2,
        position:'relative',
        borderWidth:1.4,
        borderColor:"lightgrey",
        shadowColor: "#000",
        // shadowOffset:{
        // width: 0,
        // height: 1,
        // },
        // shadowOpacity: 0.20,
        // shadowRadius: 1.41,
        // elevation: 2,
        // zIndex:1,
    },
    searchinput:{
        paddingHorizontal:10,
        paddingVertical:5,
        flex:1,
        // backgroundColor:'red'
    }
})
export default Searchbar