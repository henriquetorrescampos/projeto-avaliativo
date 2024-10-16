import { Text, View, SafeAreaView, Image } from "react-native";
import styles from "./style";

export default function Header() {
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
