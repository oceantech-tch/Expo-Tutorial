import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";

export const unstable_settings = {
    initialRoutesName: "(tabs)" // Any screen other than '(tabs)' gets opened first, Stack navigator should render tabs first  - anchor
}
export default function RootLayout() {
    return (
        <React.Fragment>
            <StatusBar style="auto"  />
            <Stack>
                <Stack.Screen name="(tabs)"
                options={{ headerShown: false }} />
                <Stack.Screen name="modal"
                options={{
                    presentation: "modal"
                }} 
                />
                <Stack.Screen name="modal-with-stack"
                options={{
                    presentation: "modal"
                }}
                />
            </Stack>
        </React.Fragment>
    )
}