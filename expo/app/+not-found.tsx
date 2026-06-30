import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link, Stack } from 'expo-router';

const NotFound = () => {
  return (
    <>
    <Stack.Screen options={{title: "Ops! Not Found"}} />
    <View style={styles.container}>
        <Link href="/" style={styles.button}>Go back home</Link>
    </View>
    </>
  )
}

export default NotFound;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#25292e",
        justifyContent: "center",
        alignItems: "center"
    },

    button: {
        fontSize: 20,
        textDecorationLine: "underline",
        color: "#fff"
    }
})