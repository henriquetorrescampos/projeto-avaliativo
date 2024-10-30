import {
  FlatList,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import styles from "./style";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Movimentation({ navigation }: { navigation: any }) {
  const [movimentation, setMovimentation] = useState<Movimentation[]>([]);
  const [branchName, setBranchName] = useState("");

  const navigateToNewMovimentation = () => {
    navigation.navigate("New Movimentation");
  };

  useEffect(() => {
    const getBranchName = async () => {
      try {
        const savedBranchName = await AsyncStorage.getItem("userBranchName");
        if (savedBranchName) {
          setBranchName(savedBranchName);
        }
      } catch (error) {
        console.log("Failed to retrieve branch name", error);
      }
    };

    const getData = async () => {
      try {
        const response = await axios.get(
          `${process.env.EXPO_PUBLIC_API_URL}/movements`
        );
        setMovimentation(response.data);
      } catch (error) {
        console.log("error getting data", error);
      }
    };

    getBranchName();
    getData();
  }, []);

  const renderMovimentation = ({ item }: { item: Movimentation }) => {
    return (
      <View style={styles.containerMovimentation}>
        <Text style={styles.fontSize}>
          <Text style={styles.titleBold}>Origem: </Text>
          {item.origem.nome}
        </Text>

        <Text style={styles.fontSize}>
          <Text style={styles.titleBold}>Destino: </Text>
          {item.destino.nome}
        </Text>

        <Text style={styles.fontSize}>
          <Text style={styles.titleBold}>Produto: </Text>
          {item.produto.nome}
        </Text>

        <Text style={styles.fontSize}>
          <Text style={styles.titleBold}>Status: </Text>
          {item.status}
        </Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <MaterialCommunityIcons name="home-city-outline" size={42} />
        <Text style={styles.textName}>Olá, {branchName}</Text>
      </View>

      <View style={styles.containerButton}>
        <TouchableOpacity onPress={navigateToNewMovimentation}>
          <Text style={styles.textButton}>Adicionar movimentação</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        nestedScrollEnabled={true}
        data={movimentation}
        keyExtractor={(user) => user.id.toString()}
        renderItem={renderMovimentation}
      ></FlatList>
    </SafeAreaView>
  );
}

interface Location {
  nome: string;
}

interface Produto {
  nome: string;
}

interface Movimentation {
  id: number;
  origem: Location;
  destino: Location;
  produto: Produto;
  status: string;
}
