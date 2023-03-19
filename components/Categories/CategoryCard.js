import { Image, Text, TouchableOpacity, View } from "react-native";
import React from "react";
// import { ImgUrl } from "../../sanity";

const CategoryCard = ({ image, title }) => {
  return (
    <TouchableOpacity className="relactive mr-2">
      <Image source={{ uri: image }} className="w-20 h-20 rounded-lg" />
      <Text className="absolute bottom-1 left-1 text-white font-bold">
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;
