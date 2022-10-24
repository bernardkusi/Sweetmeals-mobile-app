import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import Layout from '../components/Layout'

const Profilescreen = ({navigation}) => {
  return (
    <Layout navigation={navigation}>
    <ScrollView>
    <Text>Profilescreen</Text>
    </ScrollView>
    </Layout>
  )
}

export default Profilescreen