import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { selectBasketItems, selectTotalItems } from "../../Store/basketSlice";
import { useNavigation } from "@react-navigation/native";

const BastketIcon = () => {
  const navigate = useNavigation();
  const items = useSelector(selectBasketItems);
  const total = useSelector(selectTotalItems);

  if (items.length === 0) return null;
  return (
    <View className="absolute bottom-8 w-full z-50">
      <TouchableOpacity
        onPress={() => {
          navigate.navigate("Basket");
        }}
        className="flex-row items-center space-x-1 bg-[#00CCBB] p-4 rounded-lg mx-5"
      >
        <Text className="text-white font-extrabold text-lg bg-[#01A296] px-2 py-1">
          {items.length}
        </Text>
        <Text className="font-semibold text-lg text-white text-center flex-1 mr-1">
          View Basket
        </Text>
        <Text className="text-lg text-white font-semibold">${total}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BastketIcon;
