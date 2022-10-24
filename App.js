import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Homescreen from './screens/Homescreen';
import Mealscreen from './screens/Mealscreen';
import Cart from './screens/Cart';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import Menuscreen from './screens/Menuscreen';
import Profilescreen from './screens/Profilescreen';
import Ordersscreen from './screens/Ordersscreen';
import { createContext } from 'react';
import { meals } from './components/data';


export const mealContext=createContext([])
export default function App() {
  const Tab = createBottomTabNavigator();
  return (
    <mealContext.Provider value={meals}>
    <NavigationContainer >
    <Tab.Navigator initialRouteName="Home"
    screenOptions={({ route }) => ({
    tabBarIcon: ({ focused, color, size }) => {
      let iconName;

      if (route.name === 'Home') {
        iconName ='home';
      } else if (route.name === 'Cart') {
        iconName ='cart';
        return<Text style={styles.cart}> <Ionicons name={iconName} size={38} color={'#fff'} /></Text>;
      }else if (route.name === 'Menu') {
        iconName ='ios-list';
      }else if (route.name === 'Profile') {
        iconName ='person';
      }else if (route.name === 'Orders') {
        iconName ='book';
      }else if (route.name === 'Meal') {
        return
      }

      // You can return any component that you like here!
      return <Ionicons name={iconName} size={28} color={iconName = focused ?'#D0C45E':'grey'} />;
    },
    tabBarActiveTintColor: '#D0C45E',
    tabBarInactiveTintColor: 'gray',
    tabBarStyle: { height: 65,justifyContent:'center' },
    headerShown:false,
    tabBarHideOnKeyboard:true
    // tabBarShowLabel:false
  })}
  >
      <Tab.Screen name="Home" component={Homescreen} options={{meals:meals}}/>
      <Tab.Screen name="Menu" component={Menuscreen} />
      <Tab.Screen name="Meal" component={Mealscreen} options={{tabBarButton: () => ''}}/>
      <Tab.Screen name="Cart" component={Cart}/>
      <Tab.Screen name="Profile" component={Profilescreen}/>
      <Tab.Screen name="Orders" component={Ordersscreen}/>
    </Tab.Navigator>
    <StatusBar style='light'/>
  </NavigationContainer>
  </mealContext.Provider>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cart:{
    backgroundColor:'#D0C45E',
    borderRadius:50,
    width:60,
    height:60,
    marginBottom:7,
    paddingTop:10,
    paddingLeft:6,
    shadowColor: "#000",
    shadowOffset:{
    width: 2,
    height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 2,
}
   
});
