import { ScrollView, View } from "react-native";
import Constants from "expo-constants";

import Header from "../components/header";
import Banner from "../components/banner";
import Search from "../components/search";
import Section from "../components/section";

import TrendingFoods from "../trending";

const stausBarHeight = Constants.statusBarHeight;

export default function Index() {
  return (
    <ScrollView
      style={{ flex: 1 }}
      className=" bg-slate-200"
      showsVerticalScrollIndicator={false}
    >
      <View className="h-full px-4" style={{ marginTop: stausBarHeight + 8 }}>
        <Header />
        <Banner />
        <Search />
        <Section
          name="Comidas em altas"
          label="Veja mais"
          action={() => console.log("Clicou aqui")}
          size="text-2xl"
        />
        <TrendingFoods />
      </View>
    </ScrollView>
  );
}
