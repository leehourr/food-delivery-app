import { View, Text } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { selectBasketItems, selectTotalItems } from "../../Store/basketSlice";
import { useNavigation } from "@react-navigation/native";

const BastketIcon = () => {
  const navigate = useNavigation();
  const items = useSelector(selectBasketItems);
  const total = useSelector(selectTotalItems);

  return (
    <View>
      <Text>BastketIcon</Text>
    </View>
  );
};

export default BastketIcon;
