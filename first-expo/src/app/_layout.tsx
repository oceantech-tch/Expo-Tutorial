import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from 'react';

export default function RootLayout() {
  return (
    <React.Fragment>
      <StatusBar style="auto" />
      <Stack>
        <Stack.Screen name="proverbs/[id]" options={{ animation: "default"}} />
      </Stack>
    </React.Fragment>
  )
}

/**
 * A stack only displays the generic name for paths which can be unprofessional. We can customize it using the sceenOptions prop of the Stack component. We can specify the title, headerStyle, headerTintColor, etc. We have access to the route and we can set change the options prop to a function where we can set the screen names as the dynamic paths. Check proverbs/[id] for an example.
 */