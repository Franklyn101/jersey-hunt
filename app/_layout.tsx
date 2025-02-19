import "@/components/sheets";
import "react-native-reanimated";
import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import React, { useEffect } from "react";
import { StatusBar } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import { SheetProvider } from "react-native-actions-sheet";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    GroteskLight: require("../assets/fonts/GroteskLight.otf"),
    Grotesk: require("../assets/fonts/Grotesk.otf"),
    GroteskMedium: require("../assets/fonts/GroteskMedium.otf"),
    GroteskSemibold: require("../assets/fonts/GroteskSemibold.otf"),
    GroteskBold: require("../assets/fonts/GroteskBold.otf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <>
      <SheetProvider>
        <Stack initialRouteName="(tabs)">
          <Stack.Screen name="(auth)" options={{ headerShown: false }} />
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="(shipping)" options={{ headerShown: false }} />
          <Stack.Screen name="index" options={{ headerShown: false }} />
        </Stack>
        <StatusBar barStyle={"dark-content"} />
      </SheetProvider>
    </>
  );
}
