import { View, Text } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'


export default function App() {
  return (
    <View style={{backgroundColor:'white',flex:1
    }}>
      <AntDesign name={'eye'} size={60} color={'blue'} />
    </View>
  )
}