import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router';
import Button from '@/components/Button';
import { useAuthStore } from '@/utils/authStore';

const SignInScreen = () => {
  const { logIn, logInAsVip } = useAuthStore();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Sign In Screen</Text>
      <Button title="Sign In" onPress={logIn} />
      <Button title="Sign in as VIP 👑" color='black' onPress={logInAsVip} />
      <Link href="/modal" asChild push>
       <Button title="Open modal (disabled)" color='#dfdfdf' />
      </Link>
    </View>
  )
}

export default SignInScreen;

const styles = StyleSheet.create({})