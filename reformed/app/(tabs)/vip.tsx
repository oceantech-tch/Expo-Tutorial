import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Button from '@/components/Button';
import { Link } from 'expo-router';

const VipScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>VIP Screen {"\n"}</Text>
      <Link href="/modal" push asChild>
       <Button title="Open modal" color="black"/>
      </Link>
    </View>
  )
}

export default VipScreen;

const styles = StyleSheet.create({})