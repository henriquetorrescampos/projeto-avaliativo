import { Text, View, Image } from "react-native";
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styles from "./style";

export default function Header() {
  const [branchName, setBranchName] = useState("");

  const user = {
    name: "Henrique Torres",
    image: require("../../../assets/my-image.jpeg"),
  };

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={user.image} />
      <Text style={styles.textName}>Olá, {user.name} </Text>
    </View>
  );
}
