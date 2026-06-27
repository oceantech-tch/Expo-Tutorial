import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Redirect } from 'expo-router';

// Declare check var
// const shouldCreateAccount = false;

const CreateAccountScreen = () => {
  /* if (!shouldCreateAccount) {
    return <Redirect href="/sign-in" />
  } */
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Create Account</Text>
    </View>
  )
}

export default CreateAccountScreen;

const styles = StyleSheet.create({})