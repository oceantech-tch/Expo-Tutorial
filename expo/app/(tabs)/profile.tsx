import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const profile = () => {
  return (
    <View style={styles.container}>
      <Text>Welcome to your profile</Text>
      <Link href="/about" style={styles.button}>
      Go to about screen
      </Link>
    </View>
  )
}

export default profile

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    color: "#fff",
    fontSize: 20,
    textDecorationLine: "underline"
  }
})