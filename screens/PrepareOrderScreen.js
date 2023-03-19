import { View, Text, SafeAreaView } from "react-native";
import React, { useEffect } from "react";
import * as Animateble from "react-native-animatable";
import * as Progress from "react-native-progress";
import { useNavigation } from "@react-navigation/native";

const PrepareOrderScreen = () => {
  const navigate = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigate.navigate("Delivery");
    }, 8000);
  }, []);
  return (
    <SafeAreaView className="bg-[#00CCBB] flex-1 items-center justify-center">
      <Animateble.Image
        source={require("../assets/prepareOrder.gif")}
        animation="slideInUp"
        iterationCount={1}
        className="h-96 w-96"
      />
      <Animateble.Text
        animation="slideInUp"
        iterationCount={1}
        className="text-lg my-10 text-white font-bold text-center"
      >
        Waiting for Restaurent to accept your order!
      </Animateble.Text>
      <Progress.Circle size={60} indeterminate={true} color="white" />
    </SafeAreaView>
  );
};

export default PrepareOrderScreen;
