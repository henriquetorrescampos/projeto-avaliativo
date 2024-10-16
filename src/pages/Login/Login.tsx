import { Image, TextInput, Text, View, TouchableOpacity } from "react-native";
import styles from "./style";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import axios from "axios";

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function navigateToHome() {
    navigation.navigate("Home");
  }

  return (
    <SafeAreaView style={styles.safe}>
      <Image
        style={styles.image}
        source={require("../../../assets/logo.jpeg")}
      />

      <View style={styles.containerTextInput}>
        <Text style={styles.containerText}>Email</Text>

        <TextInput
          style={styles.textInput}
          value={email}
          onChangeText={setEmail}
          placeholder="Insira seu email"
        ></TextInput>

        <View style={styles.space}></View>

        <Text style={styles.containerText}>Senha</Text>
        <TextInput
          style={styles.textInput}
          value={password}
          onChangeText={setPassword}
          placeholder="Insira sua senha"
        ></TextInput>

        <TouchableOpacity onPress={navigateToHome} style={styles.button}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
