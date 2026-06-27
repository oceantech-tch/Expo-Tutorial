import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Button from '@/components/Button'
import { useRouter } from "expo-router";

const modal = () => {
  const router = useRouter();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Modal Content</Text>
      <Button title='Close' onPress={() => router.back()} />
    </View>
  )
}

export default modal

const styles = StyleSheet.create({})