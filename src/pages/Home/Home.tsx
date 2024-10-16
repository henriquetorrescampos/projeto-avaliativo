import { Text, View, SafeAreaView, TouchableOpacity } from "react-native";
import styles from "./style";
import Header from "../../components/Header/Header";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function Home({ navigation }) {
  return (
    <SafeAreaView>
      <Header></Header>

      <View style={styles.containerButtons}>
        <TouchableOpacity style={styles.borderButton}>
          <Text>Estoque</Text>
        </TouchableOpacity>

        <View style={styles.spaceBetweenButtons}></View>

        <TouchableOpacity style={styles.borderButton}>
          <Text>Usuários</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
