import React from "react";
import BootSplash from "react-native-bootsplash";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as Pages from "./screens";

const Stack = createNativeStackNavigator();

export const App = () => {
  React.useEffect(() => {
    BootSplash.hide({ fade: true });
  }, []);

  return (
    <SafeAreaProvider>
      <GestureHandlerRootView>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false, statusBarTranslucent: true, statusBarColor: "transparent", statusBarStyle: "dark" }}>
            <Stack.Screen name="Home" component={Pages.HomeScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}

export default App;