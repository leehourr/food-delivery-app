import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestaurantCard from "../Restaurant/RestaurantCard";
import client from "../../sanity";

const FeatureGrow = ({ id, title, description }) => {
  const [restaurent, setRestaurent] = useState([]);
  // console.log("restaurant", id);

  useEffect(() => {
    client
      .fetch(
        `*[_type == 'featured' && _id=='${id}'] { ...,
          restaurants[]->{
             ...,dishes[]->,
                    type->{
                    title
                     }
                   }
                }`
      )
      .then((data) => {
        // console.log("restaurant", data[0]?.restaurants);
        setRestaurent(data[0]?.restaurants);
      });
  }, []);

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
        {restaurent.map((i) => (
          <RestaurantCard
            key={i._id}
            id={i._id}
            image={i.image}
            title={i.name}
            rating={`. ${i.rating}`}
            address={i.address}
            short_description={i.short_description}
            dishes={i.dishes}
            genre={i.type?.title}
            long={i.long}
            lat={i.lat}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default FeatureGrow;
