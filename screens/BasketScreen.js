import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import React, { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { selectRestaurent } from "../Store/restaurantSlice";
import { useNavigation } from "@react-navigation/native";
import {
  removeBasket,
  selectBasketItems,
  selectTotalItems,
} from "../Store/basketSlice";
import { XCircleIcon } from "react-native-heroicons/solid";
import { ImgUrl } from "../sanity";
import { StoreContext } from "nativewind/dist/style-sheet";
import { store } from "../Store/store";

const BasketScreen = () => {
  const navigate = useNavigation();
  const restaurent = useSelector(selectRestaurent);
  const items = useSelector(selectBasketItems);
  const total = useSelector(selectTotalItems);
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
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 bg-gray-100">
        <View className="p-5 border-b border-[#00CCBB] bg-white shadow-xs">
          <View>
            <Text className="text-lg font-bold text-center">Basket</Text>
            <Text className="text-center text-gray-400">
              {restaurent.title}
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              navigate.navigate("Restaurent", {
                ...restaurent,
              });
            }}
            className="rounded-full bg-gray-100 absolute top-2 right-2"
          >
            <XCircleIcon color="#00CCBB" height={50} width={50} />
          </TouchableOpacity>
        </View>
        <View className="flex-row items-center space-x-4 px-4 py-3 bg-white my-5">
          <Image
            source={{
              uri: "https://links.papareact.com/wru",
            }}
            className="w-7 h-7 bg-gray-300 p-4 rounded-full"
          />
          <Text className="flex-1">Deliver in 30-40 mins</Text>
          <TouchableOpacity>
            <Text className="text-[#00CCBB]">Change</Text>
          </TouchableOpacity>
        </View>
        <ScrollView className="divide-y divide-gray-200">
          {Object.entries(groupItem).map(([key, items]) => (
            <View
              key={key}
              className="flex-row items-center space-x-3 bg-white py-2 px-5"
            >
              <Text>{items.length} x</Text>
              <Image
                source={{ uri: ImgUrl(items[0]?.image).url() }}
                className="w-12 h-12 rounded-full"
              />
              <Text className="flex-1">{items[0]?.name}</Text>
              <Text className="text-gray-600">${items[0].price}</Text>
              <TouchableOpacity
                onPress={() => {
                  store.dispatch(removeBasket({ id: key }));
                }}
              >
                <Text className="text-[#00CCBB] text-xs">Remove</Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
        <View className="p-5 bg-white mt-5 space-y-4">
          <View className="flex-row justify-between">
            <Text className="text-gray-400">Subtotal</Text>
            <Text className="text-gray-400">${total}</Text>
          </View>

          <View className="flex-row justify-between">
            <Text className="text-gray-400">Delivery fee</Text>
            <Text className="text-gray-400">${2}</Text>
          </View>

          <View className="flex-row justify-between">
            <Text className="">Order Total</Text>
            <Text className="font-extrabold">${total + 2}</Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              navigate.navigate("PrepareOrderScreen");
            }}
            className="rounded-lg bg-[#00CCBB] p-4"
          >
            <Text className="text-center text-white texxt-lg font-bold ">
              Place Order
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default BasketScreen;
