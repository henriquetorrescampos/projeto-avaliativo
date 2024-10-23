import { Text, FlatList, View, TouchableOpacity, Switch } from "react-native";
import { useState, useEffect } from "react";
import axios from "axios";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import styles from "./style";

export default function Users({ navigation }) {
  const [users, setUsers] = useState("");
  const [isEnable, setIsEnable] = useState(false);

  const toggleSwitch = () => {
    setIsEnable((previousState) => !previousState);
  };

  const navigateToNewUser = () => {
    navigation.navigate("New User");
  };

  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await axios.get(
          process.env.EXPO_PUBLIC_API_URL + "/users"
        );

        setUsers(response.data);

        // console.log(users);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    getUsers();
  }, []);

  const renderUsers = ({ item: user, index }) => {
    return (
      <View style={styles.userContainer}>
        <Switch
          style={styles.switch}
          onValueChange={toggleSwitch}
          value={isEnable}
        ></Switch>
        <Text style={styles.userName}>{user.name}</Text>
      </View>
    );
  };

  return (
    <View>
      <View style={styles.containerButton}>
        <TouchableOpacity onPress={navigateToNewUser}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Novo Usuário</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View>
        <FlatList
          data={users}
          keyExtractor={(user) => user.id.toString()}
          renderItem={renderUsers}
          numColumns={2}
        ></FlatList>
      </View>
    </View>
  );
}
