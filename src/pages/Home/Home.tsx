import { Text, View, SafeAreaView, TouchableOpacity } from "react-native";
import styles from "./style";
import Header from "../../components/Header";

export default function Home({ navigation }) {
  return (
    <SafeAreaView>
      <TouchableOpacity>
        <Text>Listagem de Produtos</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text>Gerenciamento de Usuários</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
