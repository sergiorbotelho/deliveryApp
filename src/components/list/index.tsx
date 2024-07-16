import { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";
import RestaurantItem from "./item";
export interface RestaurantsProps {
  id: string;
  name: string;
  image: string;
}
export default function RestaurantVerticalList() {
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
    <View className="px-4 flex-1 w-full h-full mb-11 gap-4">
      {restaurant.map((item) => (
        <RestaurantItem item={item} key={item.id} />
      ))}
    </View>
  );
}
