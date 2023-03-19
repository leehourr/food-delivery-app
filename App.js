import { Modal, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import { NativeWindStyleSheet } from "nativewind";
import "react-native-url-polyfill/auto";
import RestaurentScreen from "./screens/RestaurentScreen";
import { Provider } from "react-redux";
import { store } from "./Store/store";
import BasketScreen from "./screens/BasketScreen";
import PrepareOrderScreen from "./screens/PrepareOrderScreen";

NativeWindStyleSheet.setOutput({
  web: "css",
  default: "native",
});

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
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
          <Stack.Screen
            name="Basket"
            component={BasketScreen}
            options={{ headerShown: false, presentation: "modal" }}
          />
          <Stack.Screen
            name="PrepareOrderScreen"
            component={PrepareOrderScreen}
            options={{ headerShown: false, presentation: "fullScreenModal" }}
          />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
}
