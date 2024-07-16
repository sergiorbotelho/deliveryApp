import { ScrollView, View } from "react-native";
import Header from "../components/header";
import Constants from "expo-constants";

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
      </View>
    </ScrollView>
  );
}
