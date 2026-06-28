import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Button from '@/components/Button';
import { Link } from 'expo-router';
import { useAuthStore } from '@/utils/authStore';

const OnboardingFinalScreen = () => {
    const { completeOnboarding } = useAuthStore();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Onboarding Screen 2 {"\n"}</Text>
       <Button title="Complete Onboarding" onPress={completeOnboarding} />
    </View>
  )
}

export default OnboardingFinalScreen;

const styles = StyleSheet.create({})