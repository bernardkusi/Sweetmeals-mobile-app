import { View, Text, StyleSheet, TextInput, Image, ScrollView } from 'react-native'
import React, { useContext } from 'react'
import Searcharea from '../components/Searcharea'
import Slider from '../components/Slider'
import Mealcontainer from '../components/Mealcontainer'
import Updates from '../components/Updates'
import Layout from '../components/Layout'
import { mealContext } from '../App'
// import { StatusBar } from 'expo-status-bar'

const Homescreen = ({navigation}) => {
  const meals = useContext(mealContext);
  return (
   
    <Layout navigation={navigation}>
    <ScrollView style={styles.container}>
    <Searcharea/>
    <Text style={styles.heading}>This week's Special</Text>
    <Slider/>
    <Updates/>
    <Text style={styles.heading}>Our Menu</Text>
    <Mealcontainer navigation={navigation} meals={meals}/>
    </ScrollView>
    </Layout>
   
  )
}

const styles=StyleSheet.create({
    page:{
        flex:1
    },
    container:{
        // paddingTop:60,
        position:'relative',
        paddingBottom:60
    },
    heading:{
        textAlign:'center',
        fontSize:17,
        fontWeight:'600',
        paddingVertical:7,
        color:'#494949'
    }
   
})

export default Homescreen