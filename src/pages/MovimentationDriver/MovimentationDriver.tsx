import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import {
  View,
  Text,
  FlatList,
  Alert,
  ActivityIndicator,
  Image,
  TouchableOpacity,
} from "react-native";
import axios from "axios";
import * as ImagePicker from "expo-image-picker";
import { useNavigation } from "@react-navigation/native";
import styles from "./style";
import { NavigationProp } from "@react-navigation/native";

type RootStackParamList = {
  Login: undefined;
  Mapa: {
    origem: { latitude: number; longitude: number };
    destino: { latitude: number; longitude: number };
  };
};

export default function MovimentationDriver() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const handleLogout = () => {
    navigation.navigate("Login");
    Alert.alert("Logout", "Você foi desconectado com sucesso.");
  };
  const seeMap = (
    origem: { latitude: number; longitude: number },
    destino: { latitude: number; longitude: number }
  ) => {
    navigation.navigate("Mapa", { origem, destino });
  };

  const [movements, setMovements] = useState<Movement[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchMovements = async () => {
    try {
      const response = await axios.get(
        `${process.env.EXPO_PUBLIC_API_URL}/movements`
      );
      setMovements(response.data);
    } catch (error) {
      console.error(error);
      Alert.alert("Falha ao carregar dados.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovements();
  }, []);

  const startDelivery = async (movementId: string) => {
    try {
      const permissionResult =
        await ImagePicker.requestCameraPermissionsAsync();
      if (!permissionResult.granted) {
        Alert.alert("Permissão de câmera necessária!");
        return;
      }

      const result = await ImagePicker.launchCameraAsync();
      if (result.canceled || !result.assets?.length) return;

      const formData = new FormData();
      formData.append("file", {
        uri: result.assets[0].uri,
        name: "file.jpg",
        type: "image/jpeg",
      } as any);

      formData.append("motorista", "Nome do Motorista");

      try {
        await axios.put(
          `${process.env.EXPO_PUBLIC_API_URL}/movements/${movementId}/start`,
          formData
        );

        setMovements((movements) =>
          movements.map((movement) =>
            movement.id === movementId
              ? { ...movement, status: "em transito" }
              : movement
          )
        );
        Alert.alert("Entrega iniciada com sucesso!");
        fetchMovements();
      } catch (error) {
        console.error(error);
        Alert.alert("Erro ao iniciar entrega.");
      }
    } catch (error) {
      console.error("Erro ao solicitar permissão ou capturar imagem:", error);
      Alert.alert("Erro ao acessar a câmera.");
    }
  };

  const finishDelivery = async (movementId: string) => {
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();

    if (permissionResult.granted === false) {
      Alert.alert("Permissão de câmera necessária!");
      return;
    }

    const result = await ImagePicker.launchCameraAsync();

    if (result.canceled || !result.assets?.length) return;

    const formData = new FormData();
    formData.append("file", {
      uri: result.assets[0].uri,
      name: "photo.jpg",
      type: "image/jpeg",
    } as any);

    try {
      await axios.put(
        `${process.env.EXPO_PUBLIC_API_URL}/movements/${movementId}/end`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setMovements((movements) =>
        movements.map((movement) =>
          movement.id === movementId
            ? { ...movement, status: "Coleta finalizada" }
            : movement
        )
      );
      Alert.alert("Entrega finalizada com sucesso!");
      fetchMovements();
    } catch (error) {
      console.error(error);
      Alert.alert("Erro ao finalizar entrega.");
    }
  };

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  const renderItem = ({ item }: { item: Movement }) => {
    return (
      <View style={styles.movementCard}>
        <View style={styles.productInfo}>
          <Image
            source={{ uri: item.produto.imagem }}
            style={styles.productImage}
          />
          <View>
            <Text style={styles.movementText}>
              Produto: {item.produto.nome}
            </Text>
            <Text style={styles.observationText}>
              Quantidade: {item.quantidade}
            </Text>
            <Text style={styles.observationText}>
              Origem: {item.origem.nome}
            </Text>
            <Text style={styles.observationText}>
              Destino: {item.destino.nome}
            </Text>
            <Text style={styles.observationText}>Status: {item.status}</Text>
          </View>
        </View>
        {item.status === "created" && (
          <TouchableOpacity
            style={styles.button}
            onPress={() => startDelivery(item.id)}
          >
            <Text style={styles.buttonText}>Iniciar Entrega</Text>
          </TouchableOpacity>
        )}
        {item.status === "em transito" && (
          <>
            <TouchableOpacity
              style={styles.button}
              onPress={() => finishDelivery(item.id)}
            >
              <Text style={styles.buttonText}>Finalizar Entrega</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => seeMap(item.origem, item.destino)}
            >
              <Text style={styles.buttonText}>Ver Mapa</Text>
            </TouchableOpacity>
          </>
        )}
        {item.status === "collection finished" && (
          <>
            <TouchableOpacity
              style={styles.button}
              onPress={() => seeMap(item.origem, item.destino)}
            >
              <Text style={styles.buttonText}>Ver Mapa</Text>
            </TouchableOpacity>
          </>
        )}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Entregas disponíveis</Text>
      <StatusBar style="auto" />
      <FlatList
        data={movements}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
      <TouchableOpacity
        onPress={handleLogout}
        style={styles.logoutButton}
        activeOpacity={0.7}
      >
        <Text style={styles.logoutButtonText}>Sair</Text>
      </TouchableOpacity>
    </View>
  );
}

interface Movement {
  id: string;
  produto: { nome: string; imagem: string };
  quantidade: number;
  origem: { nome: string; latitude: number; longitude: number };
  destino: { nome: string; latitude: number; longitude: number };
  status: string;
}
