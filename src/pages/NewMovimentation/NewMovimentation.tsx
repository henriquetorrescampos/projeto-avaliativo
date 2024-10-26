import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import styles from "./style";
import RNPickerSelect from "react-native-picker-select";
import { useEffect, useState } from "react";
import axios from "axios";

export default function NewMovimentation({ navigation }) {
  const [origem, setOrigem] = useState("");
  const [destino, setDestino] = useState("");
  const [produtoDesejado, setProdutoDesejado] = useState("");
  const [quantidadeDesejada, setQuantidadeDesejada] = useState("");
  const [getBranch, setGetBranch] = useState([]);
  const [getProducts, setGetProducts] = useState([]);

  useEffect(() => {
    const fetchBranch = async () => {
      try {
        const response = await axios.get(
          `${process.env.EXPO_PUBLIC_API_URL}/branches/options`
        );

        setGetBranch(response.data);
      } catch (error) {
        console.log("Error getting branch", error);
      }
    };

    fetchBranch();
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          `${process.env.EXPO_PUBLIC_API_URL}/products/options`
        );

        setGetProducts(response.data);
      } catch (error) {
        console.log("Error getting products", error);
      }
    };

    fetchProducts();
  }, []);

  function handleCadastrar() {
    axios
      .post(`${process.env.EXPO_PUBLIC_API_URL}/movements`, {
        originBranchId: parseInt(origem),
        destinationBranchId: parseInt(destino),
        productId: parseInt(produtoDesejado),
        quantity: parseInt(quantidadeDesejada),
      })
      .catch((error) => {
        console.log("post on movement did not work", error);
      });
  }

  return (
    <SafeAreaView>
      <View style={styles.containerPicker}>
        <Text style={styles.textMovimentation}>Nova Movimentação</Text>

        <Text style={styles.textTitle}>Filial de origem</Text>
        <RNPickerSelect
          onValueChange={(value) => setOrigem(value)}
          items={getBranch.map((branch) => ({
            label: branch.name,
            value: branch.id,
          }))}
          style={{
            inputIOS: {
              width: 310,
              height: 45,
              borderColor: "gray",
              borderWidth: 0.5,
              padding: 10,
              borderRadius: 5,
              marginBottom: 2,
            },
          }}
          value={origem}
        />

        <Text style={styles.textTitle}>Filial de destino</Text>
        <RNPickerSelect
          onValueChange={(value) => setDestino(value)}
          items={getBranch
            .filter((branch) => branch.id !== origem)
            .map((branch) => ({
              label: branch.name,
              value: branch.id,
            }))}
          style={{
            inputIOS: {
              width: 310,
              height: 45,
              borderColor: "gray",
              borderWidth: 0.5,
              padding: 10,
              borderRadius: 5,
              marginBottom: 2,
            },
          }}
          value={destino}
        />

        <Text style={styles.textTitle}>Produto desejado</Text>
        <RNPickerSelect
          onValueChange={(value) => setProdutoDesejado(value)}
          items={getProducts.map((product) => ({
            label: product.product_name,
            value: product.product_id,
          }))}
          style={{
            inputIOS: {
              width: 310,
              height: 45,
              borderColor: "gray",
              borderWidth: 0.5,
              padding: 10,
              borderRadius: 5,
              marginBottom: 2,
            },
          }}
        />

        <Text style={styles.textTitle}>Quantidade desejada</Text>
        <View>
          <TextInput
            value={quantidadeDesejada}
            onChangeText={setQuantidadeDesejada}
            style={styles.textInputQtd}
          ></TextInput>

          {parseInt(quantidadeDesejada) > getProducts.quantity && (
            <Text>Quantidade maior que a disponível em estoque</Text>
          )}
        </View>

        <Text style={styles.textTitle}>Observações</Text>
        <View style={styles.containerTextInput}>
          <TextInput style={styles.textInput}></TextInput>
        </View>
      </View>

      <View style={styles.containerButton}>
        <TouchableOpacity onPress={handleCadastrar}>
          <Text style={styles.textButton}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
