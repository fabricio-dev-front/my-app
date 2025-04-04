import { AntDesign } from "@expo/vector-icons";
import { colors } from "@/styles/colors";
import { Categories } from "@/components/categories";
import { styles } from "./styles";
import { View, Image, TouchableOpacity } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require("@/assets/logo.png")} style={styles.logo} />
        <TouchableOpacity>
          <AntDesign name="plus" size={32} color={colors.green[300]} />
        </TouchableOpacity>
      </View>

      <View>
        <Categories />
      </View>
    </View>
  );
}
