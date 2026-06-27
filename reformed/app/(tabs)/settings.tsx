import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Button from '@/components/Button'

const SettingsScreen = () => {
  return (
    <View>
      <Text>Settings Screen</Text>
      <Button title="Log Out" />
    </View>
  )
}

export default SettingsScreen

const styles = StyleSheet.create({})