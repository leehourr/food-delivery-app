import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import { NativeWindStyleSheet } from "nativewind";
import "react-native-url-polyfill/auto";
import RestaurentScreen from "./screens/RestaurentScreen";

NativeWindStyleSheet.setOutput({
  web: "css",
  default: "native",
});

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Restaurent"
          component={RestaurentScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
