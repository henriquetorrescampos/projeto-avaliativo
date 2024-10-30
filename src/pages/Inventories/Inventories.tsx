import { Text, View, FlatList, Image, TextInput } from "react-native";
import { useEffect, useState } from "react";
import styles from "./style";
import axios from "axios";

export default function Inventories() {
  const [products, setProducts] = useState([]);
  const [original, setOriginal] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get(`${process.env.EXPO_PUBLIC_API_URL}/products`)
      .then((response) => {
        setProducts(response.data);
        setOriginal(response.data);
      })
      .catch((error) => {
        console.log("Error loading data", error);
      });
  }, []);

  useEffect(() => {
    if (search === "") {
      setProducts(original);
    } else {
      const filterProduct = original.filter((product) =>
        product.product_name
          .toLocaleLowerCase()
          .includes(search.toLocaleLowerCase())
      );

      setProducts(filterProduct);
    }
  }, [search, original]);

  const renderProducts = ({ item: product, index }) => {
    return (
      <View style={styles.cardContainer}>
        <View style={styles.card}>
          <Image
            source={{ uri: product.image_url }}
            style={styles.productImage}
          />
          <Text style={styles.productName}>{product.product_name}</Text>

          <View style={styles.containerRow}>
            <Text style={styles.branchName}> {product.branch_name} </Text>

            <Text style={styles.branchName}>{product.quantity} Unidades</Text>
          </View>

          <Text style={styles.branchName}>{product.description}</Text>
        </View>
      </View>
    );
  };

  return (
    <View>
      <View style={styles.containerText}>
        <Text style={styles.text}>Qual produto está procurando ? </Text>
        <TextInput
          value={search}
          onChangeText={setSearch}
          style={styles.textInput}
          placeholder="Digite o nome do produto ou da filial"
        ></TextInput>
      </View>

      <FlatList data={products} renderItem={renderProducts}></FlatList>
    </View>
  );
}
