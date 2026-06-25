import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";


export default function Layout() {
    return (
        <React.Fragment>
            <StatusBar style="auto" />
            <Stack screenOptions={{ animation: "ios_from_left"}}>
                <Stack.Screen name="index" options={{ title: "Second"}} />
                <Stack.Screen name="nested" options={{ title: "Second Nested" }} />
                <Stack.Screen name="also-nested" options={{ title: "Also nested"}}/>
            </Stack>
        </React.Fragment>
    )
}