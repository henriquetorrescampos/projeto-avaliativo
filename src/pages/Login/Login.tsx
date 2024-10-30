import { Image, TextInput, Text, View, TouchableOpacity } from "react-native";
import styles from "./style";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import axios from "axios";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [branchName, setBranchName] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const saveCredentials = async () => {
    try {
      await AsyncStorage.setItem("userEmail", email);
      await AsyncStorage.setItem("userPassword", password);
      await AsyncStorage.setItem("userBranchName", branchName);
      console.log("Deu certo");
    } catch (error) {
      console.log("Failed to save", error);
    }
  };

  const getCredentials = async () => {
    try {
      const savedEmail = await AsyncStorage.getItem("userEmail");
      const savedPassword = await AsyncStorage.getItem("userPassword");
      const savedBranchName = await AsyncStorage.getItem("userBranchName");
      if (savedEmail !== null && savedPassword !== null) {
        console.log("email", savedEmail);
        console.log("password", savedPassword);
        console.log("branchName", savedBranchName);
      }
    } catch (error) {
      console.log("failed to get credentials", error);
    }
  };

  function handleLogin() {
    axios
      .post(process.env.EXPO_PUBLIC_API_URL + "/login", {
        email: email.toLowerCase(),
        password: password,
      })
      .then((response) => {
        setBranchName(response.data.name);
        if (response.data.profile === "admin") {
          navigation.navigate("Home");
        } else if (response.data.profile === "subsidiary") {
          navigation.navigate("Movimentation");
        } else if (response.data.profile === "motorista") {
          navigation.navigate("MovimentationDriver");
        }
      })
      .catch((error) => {
        console.log("Did not found the credentials", error);
      });
  }

  const handlePress = async () => {
    await saveCredentials();
    await getCredentials();
    handleLogin();
  };

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
        <View style={styles.containerPassword}>
          <TextInput
            secureTextEntry={showPassword}
            style={styles.textInput}
            value={password}
            onChangeText={setPassword}
            placeholder="Insira sua senha"
          ></TextInput>

          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <MaterialCommunityIcons
              style={styles.eye}
              name={showPassword ? "eye-off" : "eye-outline"}
              size={30}
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={handlePress} style={styles.button}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
