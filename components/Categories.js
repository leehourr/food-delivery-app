import { Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import CategoryCard from "./Categories/CategoryCard";
import client, { ImgUrl } from "../sanity";

const Categories = () => {
  const [category, setategory] = useState([]);

  useEffect(() => {
    client
      .fetch(
        `*[_type == 'category'] { ...
                }`
      )
      .then((data) => {
        // console.log(data);
        setategory(data);
      });
  }, []);

  return (
    <ScrollView
      contentContainerStyle={{ paddingHorizontal: 8, paddingTop: 10 }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {category?.map((i) => (
        <CategoryCard
          key={i._id}
          image={ImgUrl(i.image).url()}
          title={i.title}
        />
      ))}
    </ScrollView>
  );
};

export default Categories;

// const menu = [
//   {
//     src: "https://firebasestorage.googleapis.com/v0/b/food-delivery-app-c9d92.appspot.com/o/orderAgain%2FPizza-from-Scratch_EXPS_FT20_8621_F_0505_1_home.jpg?alt=media&token=9e088a4e-d147-431d-ad04-37b3a2b08e37",
//     title: "Pizza",
//   },
//   {
//     src: "https://firebasestorage.googleapis.com/v0/b/food-delivery-app-c9d92.appspot.com/o/orderAgain%2FDouble-Double-Cheeseburger-with-Fries-Recipe-scaled.jpg?alt=media&token=24a08da8-7336-4660-9153-48ea6786bd6e",
//     title: "Classic Burger",
//   },
// ];
