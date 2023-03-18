import { View, Text, Image, TextInput } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  AdjustmentsHorizontalIcon,
  ChevronDoubleDownIcon,
  UserIcon,
} from "react-native-heroicons/outline";
import Category from "./Category";
// import { SearchBar } from "react-native-screens";
// import { SearchOutlined } from "@mui/icons-material";

const HomeScreen = () => {
  return (
    <SafeAreaView className="bg-white pt-5 pb-2">
      <View className="pb-3 flex-row items-center mx-4 space-x-2">
        <Image
          resizeMode={"cover"}
          className="h-7 w-7 mr-1 bg-gray-300 p-4 rounded-full"
          source={{ uri: "https://links.papareact.com/wru" }}
        />
        <View className="flex-1">
          <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
          <Text className="font-bold text-xl">
            Current Location
            <ChevronDoubleDownIcon size={20} color="#00CCBB" />
          </Text>
        </View>
        <UserIcon size={35} color="#00CCBB" />
      </View>
      <View className="flex-row items-center gap-2  mx-4 px-2 ">
        <TextInput
          className="flex-1 h-11 bg-gray-100 pl-2 rounded-md"
          placeholder="Search foods, drinks, snacks..."
        />
        <AdjustmentsHorizontalIcon color="#00CCBB" />
      </View>
      <Category />
    </SafeAreaView>
  );
};

export default HomeScreen;
