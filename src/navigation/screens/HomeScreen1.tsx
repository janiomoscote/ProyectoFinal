import { View, Text, Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'



const HomeScreen1 = () => {
  const navigation = useNavigation()
  return (
    <View>
      <Text>Este es el HomeScreen1</Text>
      <Button title="Ir a HomeScreen2" onPress={() => navigation.navigate('HomeScreen2')} /> 
    </View>
  )
}

export default HomeScreen1