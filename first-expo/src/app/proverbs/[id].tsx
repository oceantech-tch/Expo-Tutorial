// This screen will be a dynamic screen. We can configure the screen options right inside the screen, this way we can set the title of the screen based on data available in the incoming object e.g., source. This method overrides any duplicate layout ones.

import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack, useLocalSearchParams } from 'expo-router';

const proverbs = [
  {
    id: "1",
    proverb: "The only way to do great work is to love what you do.",
    source: "Steve Jobs"
  },
  {
    id: "2",
    proverb: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    source: "Winston Churchill"
  },
  {
    id: "3",
    proverb: "The future belongs to those who believe in the beauty of their dreams.",
    source: "Eleanor Roosevelt"
  },
  {
    id: "4",
    proverb: "Don't watch the clock; do what it does. Keep going.",
    source: "Sam Levenson"
  },
  {
    id: "5",
    proverb: "The only impossible journey is the one you never begin.",
    source: "Tony Robbins"
  },
  {
    id: "6",
    proverb: "You miss 100% of the shots you don't take.",
    source: "Wayne Gretzky"
  },
  {
    id: "7",
    proverb: "Believe you can and you're halfway there.",
    source: "Theodore Roosevelt"
  },
  {
    id: "8",
    proverb: "The best time to plant a tree was 20 years ago. The second best time is now.",
    source: "Chinese Proverb"
  },
  {
    id: "9",
    proverb: "Success usually comes to those who are too busy to be looking for it.",
    source: "Henry David Thoreau"
  },
  {
    id: "10",
    proverb: "Don't be afraid to give up the good to go for the great.",
    source: "John D. Rockefeller"
  }
];

const ProverbScreen = () => {
    //Get each proverb ids with useLocalSearchParams() hook
    const params = useLocalSearchParams<{ id: string}>();

    const proverb = proverbs.find((p) => p.id === params.id);
    if (!proverb) {
        return (
            <View style={styles.container}>
                <Text style={{ fontSize: 18}}>Proverb not found</Text>
            </View>
        )
    }
  return (
    <View style={styles.container}>
        <Stack.Screen options={{ title: proverb.source }} />
      <Text style={{ fontWeight: "700" }}>Proverbs</Text>
      <Text>Proverb: {proverb.proverb}</Text>
      <Text>- {proverb.source}</Text>
    </View>
  )
}

export default ProverbScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    }
})