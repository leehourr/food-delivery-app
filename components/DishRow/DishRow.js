import { Text, TouchableOpacity, Image, View } from "react-native";
import React, { useState } from "react";
import { ImgUrl } from "../../sanity";
import { MinusCircleIcon, PlusCircleIcon } from "react-native-heroicons/solid";
import { store } from "../../Store/store";
import {
  addBasket,
  removeBasket,
  selectBasketItems,
  selectSpecificItem,
} from "../../Store/basketSlice";
import { useSelector } from "react-redux";

const DishRow = ({ id, name, desc, price, image }) => {
  //   console.log(price);
  const [isClick, setIsClick] = useState(false);
  const items = useSelector((state) => selectSpecificItem(state, id));
  //   const items = useSelector((state) => state);

  //   console.log("basket", items);
  const addItemHandler = () => {
    store.dispatch(addBasket({ id, name, desc, price, image }));
  };

  const removeItemHandler = () => {
    if (items.length === 0) return;
    store.dispatch(removeBasket({ id }));
  };
  return (
    <>
      <TouchableOpacity
        onPress={() => {
          setIsClick((prev) => !prev);
        }}
        className="bg-white flex-row items-center py-4 px-4 border-t border-gray-200"
      >
        <View className="flex-1">
          <Text className="text-lg mb-1">{name}</Text>
          <Text className="text-gray-400 whitespace-pre-wrap mb-2">{desc}</Text>
          <Text className="text-gray-800">${price}</Text>
        </View>

        <Image
          style={{ borderWidth: 1, borderColor: "#F3F3F4" }}
          source={{ uri: ImgUrl(image).url() }}
          className="w-20 h-20 rounded-sm"
        />
      </TouchableOpacity>
      {isClick && (
        <View className="bg-white px-4">
          <View className="flex-row items-center space-x-2 pb-3">
            <TouchableOpacity onPress={removeItemHandler}>
              <MinusCircleIcon
                size={40}
                color={items.length > 0 ? "#00CCBB" : "gray"}
              />
            </TouchableOpacity>
            <Text>{items.length}</Text>
            <TouchableOpacity onPress={addItemHandler}>
              <PlusCircleIcon size={40} color="#00CCBB" />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );
};

export default DishRow;
