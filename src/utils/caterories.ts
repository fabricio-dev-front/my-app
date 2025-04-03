import { Category } from "@/components/category";
import { AntDesign } from "@expo/vector-icons";

type Category = {
  id: number;
  name: string;
  icon: keyof typeof AntDesign.glyphMap;
};

export const categories: Category[] = [
  { id: 0, name: "twitter", icon: "twitter" },
  { id: 1, name: "facebook", icon: "facebook-square" },
  { id: 2, name: "linkedin", icon: "linkedin-square" },
  { id: 3, name: "instagram", icon: "instagram" },
];
