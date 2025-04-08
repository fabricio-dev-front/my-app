import React from "react";
import { Pressable, PressableProps, Text } from "react-native";
import { style } from "./style";
import { AntDesign } from "@expo/vector-icons";
import { colors } from "@/styles/colors";

type CategoryProps = PressableProps & {
  text: string;
  isSelected: boolean;
  icon: keyof typeof AntDesign.glyphMap;
};

export function Category({ text, icon, isSelected, ...rest }: CategoryProps) {
  const color = isSelected ? colors.green[300] : colors.gray[200];

  return (
    <Pressable style={style.container} {...rest}>
      <AntDesign name={icon} color={color} size={20} />
      <Text style={[style.text, { color }]}>{text}</Text>
    </Pressable>
  );
}
