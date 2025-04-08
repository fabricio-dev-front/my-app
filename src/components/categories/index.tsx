import { FlatList } from "react-native";
import { style } from "./style";
import { categories } from "@/utils/caterories";
import { Category } from "../category";

export function Categories() {
  return (
    <FlatList
      data={categories}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <Category text={item.name} icon={item.icon} isSelected={false} />
      )}
      horizontal
      style={style.container}
      contentContainerStyle={style.content}
    />
  );
}
