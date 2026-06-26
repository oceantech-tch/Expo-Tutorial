// We keep this minimal. We parsed the params from the previous screen (index) and extract the values (category and id) using the useLocalSearchParams() hook. We then display them dynamically on the screen.

import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router';

const ProductScreen = () => {
    const params = useLocalSearchParams<{
        category: string;
        productId: string;
    }>();
  return (
    <View>
      <Text>Product Screen</Text>
      <Text>Category: {params.category}</Text>
      <Text>Product ID: {params.productId}</Text>
    </View>
  );
}

export default ProductScreen;

const styles = StyleSheet.create({})