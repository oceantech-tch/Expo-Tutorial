import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Button from '@/components/Button'
import { useRouter } from 'expo-router'
import { useAuthStore } from '@/utils/authStore'

const SettingsScreen = () => {
  // const router = useRouter();
  const { logOut } = useAuthStore();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings Screen {"\n"}</Text>
      <Button title="Log Out" onPress={logOut} />
    </View>
  )
}

export default SettingsScreen

const styles = StyleSheet.create({})