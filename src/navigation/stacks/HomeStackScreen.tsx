import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen1 from '../screens/HomeScreen1'
import HomeScreeen2 from '../screens/HomeScreeen2'

const HomeStackScreen = () => {

    const HomeStack = createStackNavigator()

  return (
   <HomeStack.Navigator>
    <HomeStack.Screen name='HomeScreen1' component={HomeScreen1} />
    <HomeStack.Screen name='HomeScreeen2' component={HomeScreeen2} />
   </HomeStack.Navigator>
  )
}

export default HomeStackScreen