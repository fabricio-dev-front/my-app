import { AntDesign } from "@expo/vector-icons";
import { colors } from "@/styles/colors";
import { Categories } from "@/components/categories";
import { styles } from "./styles";
import { View, Image, TouchableOpacity } from "react-native";
import { Link } from "@/components/link";
import { FlatList } from "react-native";

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

      <FlatList
        data={["1", "2", "3", "4", "5"]} // isso faz com que o FlatList renderize 5 vezes o mesmo item
        keyExtractor={(item) => item} // chave key
        renderItem={() => (
          <Link
            name="Portifolio"
            url="https://github.com/fabricio-dev-front"
            onDetails={() => console.log("Acessou!")}
          />
        )} // renderiza o componente Link de acordo com o data, do array
        style={styles.linkList}
        contentContainerStyle={styles.linkListContent}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
