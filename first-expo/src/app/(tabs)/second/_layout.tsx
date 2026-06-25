import { Stack, usePathname } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";


export default function Layout() {
    const pathname = usePathname();
    
    return (
        // Check and define the animation preferences based on the pathname
        <React.Fragment>
            <StatusBar style="auto" />
            <Stack screenOptions={{ animation: pathname.startsWith("/second") ? "ios_from_left" : "none" }}>
                <Stack.Screen name="index" options={{ title: "Second"}} />
                <Stack.Screen name="nested" options={{ title: "Second Nested" }} />
                <Stack.Screen name="also-nested" options={{ title: "Also nested"}}/>
            </Stack>
        </React.Fragment>
    )
}