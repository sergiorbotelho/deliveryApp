import { Feather } from "@expo/vector-icons";
import { TextInput, View } from "react-native";

export default function Search() {
  return (
    <View className="w-full flex-row border border-slate-500 h-14 rounded-full bg-transparent items-center gap-2 px-4">
      <Feather name="search" size={24} color={"#64748b"} />
      <TextInput
        placeholder="Procure sua comida..."
        className="w-full flex-1 h-full bg-transparent"
      />
    </View>
  );
}
