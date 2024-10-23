import { Text, View, SafeAreaView, TouchableOpacity } from "react-native";
import styles from "./style";
import Header from "../../components/Header/Header";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function Home({ navigation }) {
  function navigateToUsers() {
    navigation.navigate("Users");
  }

  function navigateToInventories() {
    navigation.navigate("Inventories");
  }

  return (
    <SafeAreaView>
      <Header></Header>

      <View style={styles.containerButtons}>
        <TouchableOpacity
          style={styles.borderButton}
          onPress={navigateToInventories}
        >
          <View style={styles.containerContent}>
            <MaterialCommunityIcons name="store" size={40} />
            <Text style={styles.textButton}>Estoque</Text>
          </View>

          <View style={styles.containerTextGerenciar}>
            <Text style={styles.textGerenciar}>Gerenciar</Text>
          </View>
        </TouchableOpacity>

        <View style={styles.spaceBetweenButtons}></View>

        <TouchableOpacity onPress={navigateToUsers} style={styles.borderButton}>
          <View style={styles.containerContent}>
            <MaterialCommunityIcons name="account" size={40} />
            <Text style={styles.textButton}>Usuários</Text>
          </View>

          <View style={styles.containerTextGerenciar}>
            <Text style={styles.textGerenciar}>Gerenciar</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
