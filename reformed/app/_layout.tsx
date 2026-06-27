import { Stack } from "expo-router";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { useAuthStore } from "@/utils/authStore";

// To ensure we protect a particular route, we add  as prop to the Stack.Protected component. Create a isLoggedIn var and set it as the 'guard' value

export default function RootLayout() {
  // We made use of 'guard' to ensure the screens nested inside it is protected

  // We added a Protected route to sign in and create..., this redirect users to create account or sign in if they dont need to

  // Delete hardcoded constants and import from authStore
  const { isLoggedIn, shouldCreateAccount } = useAuthStore();

  return (
    <React.Fragment>
      <StatusBar style="auto" />
      <Stack>
        <Stack.Protected guard={isLoggedIn}>
         <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="modal" options={{ presentation: "modal" }} />
        </Stack.Protected>

        <Stack.Protected guard={!isLoggedIn}>
          <Stack.Screen name="sign-in" />
         <Stack.Protected guard={shouldCreateAccount}>
          <Stack.Screen name="create-account" />
         </Stack.Protected>
        </Stack.Protected>
      </Stack>
    </React.Fragment>
  )
}