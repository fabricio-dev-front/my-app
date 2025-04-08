import { View, Text, TouchableOpacity } from "react-native";
import { style } from "./style";
import { colors } from "@/styles/colors";
import { AntDesign } from "@expo/vector-icons";

type linkProps = {
  name: string;
  url: string;
  onDetails: () => void;
};

export const Link = ({ name, url, onDetails }: linkProps) => {
  return (
    <View style={style.container}>
      <View style={style.details}>
        <Text style={style.name} numberOfLines={1}>
          {name}
        </Text>
        <Text style={style.url}>{url}</Text>
      </View>
      <TouchableOpacity onPress={onDetails}>
        <AntDesign name="link" color={colors.gray[600]} size={16} />
      </TouchableOpacity>
    </View>
  );
};
