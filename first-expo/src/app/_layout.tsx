import { Stack, Tabs } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from 'react';
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

export default function RootLayout() {
  {/* return (
    <React.Fragment>
      <StatusBar style="auto" />
      <Stack>
        <Stack.Screen name="proverbs/[id]" options={{ animation: "default"}} />
      </Stack>
    </React.Fragment>
  ) */}

  return (
    <React.Fragment>
      <StatusBar style="auto" />
      <Tabs 
      screenOptions={{ tabBarActiveTintColor: "teal" }}
      backBehavior="order"
      >
        <Tabs.Screen name="(home)" 
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="numeric-1-box-outline" size={size} color={color} />
          )
        }} />
        <Tabs.Screen name="one" options={{
          title: "First",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="numeric-2-box-outline" size={size} color={color} />
          )
        }} />
        <Tabs.Screen name="second" options={{
          title: "Second",
          headerShown: false,
          popToTopOnBlur: true,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="numeric-3-box-outline" size={size} color={color} />
          )
        }} />
        <Tabs.Screen name="third" 
        options={{
          tabBarBadge: "2",
          tabBarBadgeStyle: { color: "white" },
          title: "Third",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="numeric-4-box-outline" size={size} color={color} />
          )
        }} />
        <Tabs.Screen name="proverbs/[id]" options={{
          href: null,
          tabBarIcon: ({ color, size }) => {
            <MaterialCommunityIcons name="numeric-5-box-outline" size={size} color={color} />
          }
        }} />
        <Tabs.Screen name="products/[category]/[productId]"
       options={{
        href: null, // hides a screen from the tab bar
          tabBarIcon: ({ color, size }) => {
            <MaterialCommunityIcons name="numeric-6-box-outline" size={size} color={color} />
          }
        }} />
      </Tabs>
    </React.Fragment>
  )
}

/**
 * A stack only displays the generic name for paths which can be unprofessional. We can customize it using the sceenOptions prop of the Stack component. We can specify the title, headerStyle, headerTintColor, etc. We have access to the route and we can set change the options prop to a function where we can set the screen names as the dynamic paths. Check proverbs/[id] for an example.
 */