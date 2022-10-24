import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons'; 


const Rating = ({rating}) => {
    if(rating===5){
        return (
            <View style={styles.stars}>
              <AntDesign name="star" size={14} style={styles.star} color="#D0C45E" />
              <AntDesign name="star" size={14} style={styles.star} color="#D0C45E" />
              <AntDesign name="star" size={14} style={styles.star} color="#D0C45E" />
              <AntDesign name="star" size={14} style={styles.star} color="#D0C45E" />
              <AntDesign name="star" size={14} style={styles.star} color="#D0C45E" />
              </View>
          )
    }else if(rating===4){
        return (
            <View style={styles.stars}>
              <AntDesign name="star" size={14} style={styles.star} color="#D0C45E" />
              <AntDesign name="star" size={14} style={styles.star} color="#D0C45E" />
              <AntDesign name="star" size={14} style={styles.star} color="#D0C45E" />
              <AntDesign name="star" size={14} style={styles.star} color="#D0C45E" />
              <AntDesign name="star" size={14} style={styles.star} color="lightgrey" />
              </View>
          )
    }else if(rating===3){
        return (
            <View style={styles.stars}>
              <AntDesign name="star" size={14} style={styles.star} color="#D0C45E" />
              <AntDesign name="star" size={14} style={styles.star} color="#D0C45E" />
             <AntDesign name="star" size={14} style={styles.star} color="#D0C45E" />
              <AntDesign name="star" size={14} style={styles.star} color="lightgrey" />
              <AntDesign name="star" size={14} style={styles.star} color="lightgrey" />
              </View>
          )
    }else if(rating===2){
        return (
            <View style={styles.stars}>
              <AntDesign name="star" size={14} style={styles.star} color="#D0C45E" />
              <AntDesign name="star" size={14} style={styles.star} color="#D0C45E" />
              <AntDesign name="star" size={14} style={styles.star} color="lightgrey" />
              <AntDesign name="star" size={14} style={styles.star} color="lightgrey" />
              <AntDesign name="star" size={14} style={styles.star} color="lightgrey" />
              </View>
          )
    }else if(rating===1){
        return (
            <View style={styles.stars}>
              <AntDesign name="star" size={14} style={styles.star} color="#D0C45E" />
              <AntDesign name="star" size={14} style={styles.star} color="lightgrey" />
              <AntDesign name="star" size={14} style={styles.star} color="lightgrey" />
              <AntDesign name="star" size={14} style={styles.star} color="lightgrey" />
              <AntDesign name="star" size={14} style={styles.star} color="lightgrey" />
              </View>
          )
    }
  
}

const styles=StyleSheet.create({
    stars:{
        flexDirection:'row',
    },
    star:{
        paddingRight:2,
    },
})

export default Rating