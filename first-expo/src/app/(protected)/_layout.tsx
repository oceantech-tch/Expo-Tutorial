import { AuthContext } from "@/utils/authContext";
import { Redirect, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React, { useContext } from "react";

export const unstable_settings = {
    initialRoutesName: "(tabs)" // Any screen other than '(tabs)' gets opened first, Stack navigator should render tabs first  - anchor
}

export default function ProtectedLayout() {
    // Access auth context with useContext and use the loggedIn values from there
    const authState = useContext(AuthContext);

    console.log("isReady:", authState.isReady);
    console.log("isLoggedId:", authState.isLoggedIn);
    if (!authState.isReady) return null;
    if (!authState.isLoggedIn) return <Redirect href="/login" />
    return (
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
    )
}