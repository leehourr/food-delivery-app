import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { ImgUrl } from "../sanity";
import {
  ArrowLeftIcon,
  ArrowsRightLeftIcon,
  ChevronDoubleRightIcon,
  MapPinIcon,
  QuestionMarkCircleIcon,
  StarIcon,
} from "react-native-heroicons/outline";
import DishRow from "../components/DishRow/DishRow";
import BastketIcon from "../components/BasketIcon/BastketIcon";

const RestaurentScreen = () => {
  const navigate = useNavigation();
  const {
    params: {
      id,
      image,
      title,
      rating,
      genre,
      address,
      short_description,
      dishes,
      long,
      lat,
    },
  } = useRoute();
  // console.log("params", dishes);
  return (
    <>
      <BastketIcon />
      <ScrollView>
        <View className="relative">
          <Image
            source={{ uri: ImgUrl(image).url() }}
            className="w-full h-56 bg-black"
          />
          <TouchableOpacity
            onPress={() => {
              navigate.navigate("Home");
            }}
            className="absolute top-10 left-2 bg-gray-100 rounded-full p-2"
          >
            <ArrowLeftIcon size={20} color="#00CCBB" />
          </TouchableOpacity>
        </View>
        <View className="bg-white flex pt-4 space-y-1">
          <View className="pl-4 pb-3">
            <Text className="font-bold text-3xl">{title}</Text>
            <View className="flex-row items-center space-x-2 text-gray-500">
              <StarIcon color="#00CCBB" />
              <Text className="text-[#00CCBB]">{rating}</Text>
              <Text className="text-gray-500">Offers</Text>
              <MapPinIcon color="#00CCBB" />
              <Text className="text-gray-500">Nearby -</Text>
              <Text className="text-gray-500">{address}</Text>
            </View>
            <Text className="text-gray-500">{short_description}</Text>
          </View>
          <TouchableOpacity className="flex-row items-center space-x-2 py-4 border-t px-4 border-y-gray-300">
            <QuestionMarkCircleIcon color="gray" opacity={0.6} size={20} />
            <Text className="flex-1 pl-2 text-md font-bold">
              Have a food allergy?
            </Text>
            <ChevronDoubleRightIcon color="#00CCBB" />
          </TouchableOpacity>
        </View>
        <View>
          <Text className="px-4 pt-4 mb-3 font-bold text-xl">Menu</Text>
          {dishes.map((i) => (
            <DishRow
              key={i._id}
              id={i._id}
              name={i.name}
              desc={i.short_description}
              price={i.Price}
              image={i.image}
            />
          ))}
        </View>
      </ScrollView>
    </>
  );
};

export default RestaurentScreen;
