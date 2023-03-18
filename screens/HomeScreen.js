import { View, Text, Image, TextInput, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  AdjustmentsHorizontalIcon,
  ChevronDoubleDownIcon,
  UserIcon,
} from "react-native-heroicons/outline";
import Categories from "../components/Categories";
import FeatureGrow from "../components/FeatureGrow/FeatureGrow";
import client from "../sanity";

const HomeScreen = () => {
  const [featuredCategory, setFeaturedCategory] = useState([]);

  useEffect(() => {
    client
      .fetch(
        `*[_type == 'featured'] { ...,
              restaurants[]->{
                 ...,dishes[]->,
                        type=>{
                        name
                         }
                       }
                    }`
      )
      .then((data) => {
        // console.log(data);
        setFeaturedCategory(data);
      });
  }, []);
  return (
    <SafeAreaView className="bg-white pt-5 pb-24">
      <View className="pb-3 flex-row items-center mx-2 justify-between">
        <View className=" flex-row items-center">
          <Image
            resizeMode={"cover"}
            className="h-7 w-7 mr-1 bg-gray-300 p-4 rounded-full"
            source={{ uri: "https://links.papareact.com/wru" }}
          />
          <View className="">
            <Text className="font-bold text-gray-400 text-xs">
              Deliver Now!
            </Text>
            <Text className="font-bold text-xl">
              Current Location
              <ChevronDoubleDownIcon size={20} color="#00CCBB" />
            </Text>
          </View>
        </View>
        <UserIcon size={35} color="#00CCBB" />
      </View>
      <View className="flex-row items-center mx-2 space-x-2">
        <TextInput
          className="flex-grow h-10 bg-gray-100 pl-2 rounded-md"
          placeholder="Search foods, drinks, snacks..."
        />
        <AdjustmentsHorizontalIcon color="#00CCBB" />
      </View>
      <ScrollView className="bg-gray-100 mt-2">
        <Categories />
        {/* FeatureGrow */}
        {featuredCategory?.map((i) => (
          <FeatureGrow
            key={i._id}
            id={i._id}
            title={i.name}
            description={i.short_description}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
