import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";

export default function Layout() {
    return (
        <React.Fragment>
            <Stack>
                <Stack.Screen name="nested"
                options={{ headerShown: false }} />
            </Stack>
        </React.Fragment>
    )
}