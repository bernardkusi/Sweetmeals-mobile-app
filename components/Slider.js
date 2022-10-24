import { View, Text, StyleSheet, ScrollView } from "react-native";
import React, { useContext } from "react";
import Swiper from "react-native-swiper";
import Swiperitem from "./Swiperitem";
import { mealContext } from "../App";

const Slider = () => {
  const meals=useContext(mealContext)
  return (
    // <Swiper
    //   style={styles.wrapper}
    //   showsButtons={false}
    //   autoplay={true}
    //   showsPagination={false}
    //   // snapToInterval={80}
    //   snapToAlignment={"start"}
    //   decelerationRate={"fast"}
    //   containerStyle={{backgroundColor:"yellow"}}

    // >
    //   <Swiperitem width={120}/>
    //   <Swiperitem />
    //   <Swiperitem />
    //   <Swiperitem />
    // </Swiper>
    <ScrollView style={styles.scroll} horizontal={true} snapToInterval={160} showsHorizontalScrollIndicator={false}>
      {meals && meals.filter(meal=>meal.mealid<5).map((meal,index)=><Swiperitem key={index} meal={meal}/>)}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    height: 160,
    marginVertical: 15,
    marginHorizontal: 12,
    backgroundColor:"blue",
    borderColor:"#000",
    borderWidth:7,    
  },
  scroll:{
    // backgroundColor:"red",
    marginHorizontal:12,
    marginBottom: 15,
  }
});

export default Slider;
