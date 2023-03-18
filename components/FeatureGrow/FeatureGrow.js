import { View, Text, ScrollView } from "react-native";
import React from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestaurantCard from "../Restaurant/RestaurantCard";

const FeatureGrow = ({ title, description, featureCategory }) => {
  return (
    <View className="bg-gray-100">
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon color="#00CCBB" />
      </View>
      <Text className="text-xs text-gray-500 px-4">{description}</Text>
      <ScrollView
        horizontal
        contentContainerStyle={{ paddingHorizontal: 9 }}
        showsHorizontalScrollIndicator={false}
        className="pt-4"
      >
        {/* Restaurant card */}
        <RestaurantCard
          id={123}
          image="https://firebasestorage.googleapis.com/v0/b/food-delivery-app-c9d92.appspot.com/o/orderAgain%2FPizza-from-Scratch_EXPS_FT20_8621_F_0505_1_home.jpg?alt=media&token=9e088a4e-d147-431d-ad04-37b3a2b08e37"
          title="Sushi"
          rating={5.2}
          genre="Jpanese"
          address="japan"
          short_description="Sushi handmade"
          dishes={[]}
          long={20}
          lat={10}
        />
        <RestaurantCard
          id={123}
          image="https://firebasestorage.googleapis.com/v0/b/food-delivery-app-c9d92.appspot.com/o/orderAgain%2FPizza-from-Scratch_EXPS_FT20_8621_F_0505_1_home.jpg?alt=media&token=9e088a4e-d147-431d-ad04-37b3a2b08e37"
          title="Sushi"
          rating={5.2}
          genre="Jpanese"
          address="japan"
          short_description="Sushi handmade"
          dishes={[]}
          long={20}
          lat={10}
        />
        <RestaurantCard
          id={123}
          image="https://firebasestorage.googleapis.com/v0/b/food-delivery-app-c9d92.appspot.com/o/orderAgain%2FPizza-from-Scratch_EXPS_FT20_8621_F_0505_1_home.jpg?alt=media&token=9e088a4e-d147-431d-ad04-37b3a2b08e37"
          title="Sushi"
          rating={5.2}
          genre="Jpanese"
          address="japan"
          short_description="Sushi handmade"
          dishes={[]}
          long={20}
          lat={10}
        />
        <RestaurantCard
          id={123}
          image="https://firebasestorage.googleapis.com/v0/b/food-delivery-app-c9d92.appspot.com/o/orderAgain%2FPizza-from-Scratch_EXPS_FT20_8621_F_0505_1_home.jpg?alt=media&token=9e088a4e-d147-431d-ad04-37b3a2b08e37"
          title="Sushi"
          rating={5.2}
          genre="Jpanese"
          address="japan"
          short_description="Sushi handmade"
          dishes={[]}
          long={20}
          lat={10}
        />
      </ScrollView>
    </View>
  );
};

export default FeatureGrow;
