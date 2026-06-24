import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'

const fresh = () => {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Text style={{ fontWeight: "700" }}>Fresh Screen</Text>
      <Pressable onPress={() => router.replace("/")}>
        <Text>Go home</Text>
      </Pressable>
    </View>
  )
}

export default fresh

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});