import { Text, ScrollView } from "react-native";
import React from "react";
import CategoryCard from "./Categories/CategoryCard";

const Categories = () => {
  return (
    <ScrollView
      contentContainerStyle={{ paddingHorizontal: 8, paddingTop: 10 }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      <CategoryCard
        image="https://firebasestorage.googleapis.com/v0/b/food-delivery-app-c9d92.appspot.com/o/orderAgain%2FPizza-from-Scratch_EXPS_FT20_8621_F_0505_1_home.jpg?alt=media&token=9e088a4e-d147-431d-ad04-37b3a2b08e37"
        title="Pizza"
      />
      <CategoryCard
        image="https://firebasestorage.googleapis.com/v0/b/food-delivery-app-c9d92.appspot.com/o/orderAgain%2FPizza-from-Scratch_EXPS_FT20_8621_F_0505_1_home.jpg?alt=media&token=9e088a4e-d147-431d-ad04-37b3a2b08e37"
        title="Pizza"
      />
      <CategoryCard
        image="https://firebasestorage.googleapis.com/v0/b/food-delivery-app-c9d92.appspot.com/o/orderAgain%2FPizza-from-Scratch_EXPS_FT20_8621_F_0505_1_home.jpg?alt=media&token=9e088a4e-d147-431d-ad04-37b3a2b08e37"
        title="Pizza"
      />
      <CategoryCard
        image="https://firebasestorage.googleapis.com/v0/b/food-delivery-app-c9d92.appspot.com/o/orderAgain%2FPizza-from-Scratch_EXPS_FT20_8621_F_0505_1_home.jpg?alt=media&token=9e088a4e-d147-431d-ad04-37b3a2b08e37"
        title="Pizza"
      />
      <CategoryCard
        image="https://firebasestorage.googleapis.com/v0/b/food-delivery-app-c9d92.appspot.com/o/orderAgain%2FPizza-from-Scratch_EXPS_FT20_8621_F_0505_1_home.jpg?alt=media&token=9e088a4e-d147-431d-ad04-37b3a2b08e37"
        title="Pizza"
      />
      <CategoryCard
        image="https://firebasestorage.googleapis.com/v0/b/food-delivery-app-c9d92.appspot.com/o/orderAgain%2FPizza-from-Scratch_EXPS_FT20_8621_F_0505_1_home.jpg?alt=media&token=9e088a4e-d147-431d-ad04-37b3a2b08e37"
        title="Pizza"
      />
      <CategoryCard
        image="https://firebasestorage.googleapis.com/v0/b/food-delivery-app-c9d92.appspot.com/o/orderAgain%2FPizza-from-Scratch_EXPS_FT20_8621_F_0505_1_home.jpg?alt=media&token=9e088a4e-d147-431d-ad04-37b3a2b08e37"
        title="Pizza"
      />
    </ScrollView>
  );
};

export default Categories;

const menu = [
  {
    src: "https://firebasestorage.googleapis.com/v0/b/food-delivery-app-c9d92.appspot.com/o/orderAgain%2FPizza-from-Scratch_EXPS_FT20_8621_F_0505_1_home.jpg?alt=media&token=9e088a4e-d147-431d-ad04-37b3a2b08e37",
    title: "Pizza",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/food-delivery-app-c9d92.appspot.com/o/orderAgain%2FDouble-Double-Cheeseburger-with-Fries-Recipe-scaled.jpg?alt=media&token=24a08da8-7336-4660-9153-48ea6786bd6e",
    title: "Classic Burger",
  },
];
