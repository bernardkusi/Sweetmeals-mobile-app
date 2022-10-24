import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Mealitem from './Mealitem'

const Mealcontainer = ({navigation,meals}) => {
  return (
    <View style={styles.container}>
      {meals && meals.filter((meal)=>meal.mealid>4).map(meal=><Mealitem key={meal.mealid} meal={meal} navigation={navigation}/> )}
    </View>
  )
}

const styles=StyleSheet.create({
    container:{
        marginHorizontal:6,
        // backgroundColor:'lightgrey',
        padding:5,
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'space-between'
    }
})

export default Mealcontainer