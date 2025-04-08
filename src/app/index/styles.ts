import { StyleSheet } from "react-native";
import { colors } from "@/styles/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 30,
    paddingHorizontal: 24,
    height: "100%",
  },

  title: {
    color: colors.green[900],
    fontSize: 40,
  },

  header: {
    width: "100%",
    marginBottom: 24,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  logo: {
    height: 32,
    width: 38,
  },
});
