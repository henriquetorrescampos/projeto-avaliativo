import {
  Text,
  FlatList,
  View,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";
import { useState, useEffect } from "react";
import axios from "axios";
import styles from "./style";

export default function Users({ navigation }) {
  const handle = () => {
    console.log("te");
  };

  const [users, setUsers] = useState("");

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
    return <Text>{user.id}</Text>;
  };

  return (
    <View>
      <View style={styles.containerButton}>
        <TouchableHighlight onPress={handle}>
          <View style={styles.button}>
            <Text>Novo Usuário</Text>
          </View>
        </TouchableHighlight>
      </View>

      <View>
        <FlatList
          data={users}
          keyExtractor={(user) => user.id.toString()}
          renderItem={renderUsers}
        ></FlatList>
      </View>
    </View>
  );
}
