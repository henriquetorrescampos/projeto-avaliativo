import { Text, FlatList, View, TouchableOpacity, Switch } from "react-native";
import { useState, useEffect } from "react";
import axios from "axios";
import styles from "./style";

export default function Users({ navigation }) {
  const [users, setUsers] = useState([]);
  const [isEnable, setIsEnable] = useState({});

  const toggleSwitch = async (id, currentStatus) => {
    const newStatus = !currentStatus;

    try {
      setIsEnable((prevState) => ({
        ...prevState,
        [id]: newStatus,
      }));

      await axios.patch(`${process.env.EXPO_PUBLIC_API_URL}/users/${id}`, {
        status: newStatus ? 1 : 0,
      });

      console.log(`Status updated for ${id}`);
    } catch (error) {
      console.log("Error updating status", error);
    }
  };

  const navigateToNewUser = () => {
    navigation.navigate("New User");
  };

  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await axios.get(
          `${process.env.EXPO_PUBLIC_API_URL}/users`
        );

        setUsers(response.data);

        const initialSwitchState = {};

        response.data.forEach((user) => {
          initialSwitchState[user.id] = user.status === 1;
        });

        setIsEnable(initialSwitchState);

        // console.log(users);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    getUsers();
  }, []);

  const renderUsers = ({ item: user }) => {
    return (
      <View
        style={[
          styles.userContainer,
          isEnable[user.id] ? styles.switchOn : styles.switchOff,
        ]}
      >
        <Switch
          style={styles.switch}
          onValueChange={() => toggleSwitch(user.id, isEnable[user.id])}
          value={isEnable[user.id]}
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
