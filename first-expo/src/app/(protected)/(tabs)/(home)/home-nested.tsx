import { View, Text } from 'react-native'
import React from 'react'
import Button from '@/components/Button';

const NestedHome = () => {
  return (
    <View>
      <Text>Nested Home Screen</Text>
      <Button title="Push to /home" />
    </View>
  )
}

export default NestedHome;