import { View, Text } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'
import Button from '@/components/Button';

const one = () => {
  const router = useRouter();
  const canGoBack = router.canGoBack();

  return (
    <View>
      <Text>Screen One</Text>
      {canGoBack ? (
        <Button title="Back" onPress={() => router.back()} />
      ) : null}
    </View>
  )
}

export default one;