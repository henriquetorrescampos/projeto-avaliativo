import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import axios from "axios";

import styles from "./style";

export default function NewUser({ navigation }) {
  const [profile, setProfile] = useState("driver");
  const [name, setName] = useState("");
  const [document, setDocument] = useState("");
  const [fullAddress, setFullAddress] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const changeProfileDriver = () => {
    setProfile("driver");
  };

  const changeProfileSubsidiary = () => {
    setProfile("subsidiary");
  };

  function saveUser() {
    axios
      .post(process.env.EXPO_PUBLIC_API_URL + "/register", {
        profile: profile,
        name: name,
        document: document,
        full_address: fullAddress,
        email: email,
        password: password,
      })
      .then(() => {
        console.log("Deu certo");
      })
      .catch((error) => {
        console.log("deu erro", error);
      });
  }

  return (
    <SafeAreaView>
      <View style={styles.containerOptions}>
        <TouchableOpacity
          style={styles.optionProfile}
          onPress={changeProfileDriver}
        >
          <MaterialCommunityIcons
            name="motorbike-electric"
            size={40}
            color={profile === "driver" ? "#28B360" : "#000"}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.optionProfile}
          onPress={changeProfileSubsidiary}
        >
          <MaterialCommunityIcons
            name="home"
            size={40}
            color={profile === "subsidiary" ? "#28B360" : "#000"}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.containerForm}>
        <Text style={styles.containerText}>Nome Completo</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu nome completo"
          value={name}
          onChangeText={setName}
        ></TextInput>

        <Text style={[styles.containerText, styles.containerSpace]}>
          {profile === "driver" ? "CPF" : "CNPJ"}
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu documento"
          value={document}
          onChangeText={setDocument}
        ></TextInput>

        <Text style={[styles.containerText, styles.containerSpace]}>
          Endereço Completo
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu endereço"
          value={fullAddress}
          onChangeText={setFullAddress}
        ></TextInput>

        <View style={[styles.dadosLogin, styles.containerSpace]}>
          <MaterialCommunityIcons name="login" size={40} />
          <Text style={styles.containerText}>Dados de Login</Text>
        </View>

        <Text style={[styles.containerText, styles.containerSpace]}>Email</Text>
        <TextInput
          keyboardType="email-address"
          style={styles.input}
          placeholder="Digite seu email"
          value={email}
          onChangeText={setEmail}
        ></TextInput>

        <Text style={[styles.containerText, styles.containerSpace]}>Senha</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite sua senha"
          value={password}
          onChangeText={setPassword}
        ></TextInput>

        <TouchableOpacity style={styles.button} onPress={saveUser}>
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
