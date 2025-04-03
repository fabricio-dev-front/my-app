import { FlatList } from "react-native";
import { styles } from "./styles";
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
      style={styles.container}
      contentContainerStyle={styles.content}
    />
  );
}
