import { View, Text } from "react-native";
import React, { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { selectRestaurent } from "../Store/restaurantSlice";
import { useNavigation } from "@react-navigation/native";
import { selectBasketItems } from "../Store/basketSlice";

const BasketScreen = () => {
  const navigate = useNavigation();
  const restaurent = useSelector(selectRestaurent);
  const items = useSelector(selectBasketItems);

  const [groupItem, setGroupItem] = useState([]);
  useMemo(() => {
    console.log("items", items);
    const groupItems = items.reduce((results, item) => {
      (results[item.id] = results[item.id] || []).push(item);
      return results;
    }, {});
    console.log("groupItems", groupItems);
    setGroupItem(groupItems);
  }, [items]);

  return (
    <View>
      <Text>asdfsaf</Text>
    </View>
  );
};

export default BasketScreen;
