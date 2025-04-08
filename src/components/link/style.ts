import { StyleSheet } from "react-native";
import { colors } from "@/styles/colors";

export const style = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },

  details: {
    flex: 1,
    fontSize: 18,
  },

  name: {
    color: colors.gray[100],
    fontSize: 16,
    fontWeight: "600",
  },

  url: {
    color: colors.gray[400],
    fontSize: 14,
  },
});
