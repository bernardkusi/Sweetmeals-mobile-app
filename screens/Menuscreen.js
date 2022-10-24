import { View, Text, TextInput, StyleSheet, ScrollView } from "react-native";
import React, { useContext, useState } from "react";
import Layout from "../components/Layout";
import Searchbar from "../components/Searchbar";
import Mealcontainer from "../components/Mealcontainer";
import { mealContext } from "../App";

const Menuscreen = ({ navigation }) => {
  const [categories, setcategories] = useState([
    "Breakfast",
    "Lunch",
    "Dinner",
    "Snacks",
    "Pastries",
  ]);

  let meals=useContext(mealContext)
  return (
    <Layout navigation={navigation}>
        <View style={styles.nav}>
        <View style={styles.searcharea}>
          <Searchbar />
        </View>
        <ScrollView
          contentContainerStyle={styles.menulist}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
          {categories &&
            categories.map((category,index) => (
              <Text key={index} style={styles.menuitem}>{category}</Text>
            ))}
        </ScrollView>
        </View>
      <ScrollView style={styles.container}>
        <Mealcontainer navigation={navigation} meals={meals}/>
        <Mealcontainer navigation={navigation} meals={meals}/>
        <Mealcontainer navigation={navigation} meals={meals}/>
      </ScrollView>
    </Layout>
  );
};

const styles = StyleSheet.create({
  nav:{
    position:"absolute",
    top:60,
    zIndex:11,
    backgroundColor:"#fff",
    shadowColor:"#000",
    shadowOffset:{
      width: 0,
      height: 1,
      },
      shadowOpacity: 0.20,
      shadowRadius: 1.41,
      elevation:2,
  },
  container: {
    position: "relative",
  },
  searcharea: {
    alignItems: "center",
  },
  menulist: {
    // flexDirection: "row",
    // justifyContent: "space-evenly",
    paddingHorizontal: "5%",
    height: 29,
    position: "relative",
    marginBottom:10,
    // backgroundColor:"#fff"
  },
  menuitem: {
    borderWidth: 1.5,
    paddingVertical: 4,
    paddingHorizontal: 11,
    borderRadius: 15,
    borderColor: "lightgrey",
    color: "lightgrey",
    height: 29,
    marginHorizontal: 7,
    // borderColor:"#D0C45E",
  },
  menutext: {},
});

export default Menuscreen;
