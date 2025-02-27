import React from "react";
import { Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const _layout = () => {
  return (
    <GestureHandlerRootView>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="notifications" options={{ headerShown: false }} />
        <Stack.Screen
          name="patient"
          options={{
            headerShown: false,
            headerTitle: "Create new patient",
            headerTitleAlign: "center",
          }}
        />
        <Stack.Screen name="patientDetails" options={{ headerShown: false }} />
      </Stack>
    </GestureHandlerRootView>
  );
};

export default _layout;