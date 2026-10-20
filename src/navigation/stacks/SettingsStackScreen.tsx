import { View, Text } from 'react-native'
import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import SettingsScreen2 from '../screens/SettingsScreen2'
import SettingsScreen1 from '../screens/SettingsScreen1'

const SettingsStackScreen = () => {
const Settings = createStackNavigator()

  return (
    <Settings.Navigator>
      <Settings.Screen name='SettingsScreen1' component={SettingsScreen1} />
      <Settings.Screen name='SettingsScreen2' component={SettingsScreen2} />
    </Settings.Navigator>

    
  )
}

export default SettingsStackScreen