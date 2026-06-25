import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const Layout = () => {
  return (
    <Stack>
        <Stack.Screen name="index" options={{ title: "Home" }} />
        <Stack.Screen name='home-nested' options={{ title: "Home Nested" }} />
    </Stack>
  )
}

export default Layout;