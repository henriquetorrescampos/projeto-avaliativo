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

export default function Movimentation({ navigation, id }) {
  const [movimentation, setMovimentation] = useState([]);

  const navigateToNewMovimentation = () => {
    navigation.navigate("New Movimentation");
  };

  useEffect(() => {
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

    getData();
  }, []);

  const renderMovimentation = ({ item }) => {
    return (
      <View style={styles.containerMovimentation}>
        <Text style={styles.movimentationId}> #{item.id} </Text>

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
    <SafeAreaView>
      <View style={styles.container}>
        <MaterialCommunityIcons name="home-city-outline" size={42} />
        <Text style={styles.textName}>Olá </Text>
      </View>

      <View style={styles.containerButton}>
        <TouchableOpacity onPress={navigateToNewMovimentation}>
          <Text style={styles.textButton}>Adicionar movimentação</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={movimentation}
        keyExtractor={(user) => user.id.toString()}
        renderItem={renderMovimentation}
      ></FlatList>
    </SafeAreaView>
  );
}
