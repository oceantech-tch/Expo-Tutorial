import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Button from '@/components/Button';
import { Link } from 'expo-router';
import { useAuthStore } from '@/utils/authStore';

const OnboardingFirstScreen = () => {
    const { completeOnboarding } = useAuthStore();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <Text>Onboarding Screen 1 {"\n"}</Text>
    <Link href="/onboarding/final">
       <Button title="Go to screen 2" onPress={completeOnboarding} />
    </Link>
    </View>
  )
}

export default OnboardingFirstScreen;

const styles = StyleSheet.create({})