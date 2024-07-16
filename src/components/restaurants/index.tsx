import { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";
import RestaurantItem from "./horizontal";

export interface RestaurantsProps {
  id: string;
  name: string;
  image: string;
}
export default function Restaurants() {
  const [restaurant, setRestaurant] = useState<RestaurantsProps[]>([]);

  useEffect(() => {
    async function getFoods() {
      const response = await fetch("http://192.168.15.15:3000/restaurants");

      const data = await response.json();

      setRestaurant(data);
    }
    getFoods();
  }, []);
  return (
    <FlatList
      data={restaurant}
      renderItem={({ item }) => <RestaurantItem item={item} />}
      horizontal={true}
      contentContainerStyle={{ gap: 14, paddingLeft: 16, paddingRight: 16 }}
      showsHorizontalScrollIndicator={false}
    />
  );
}
