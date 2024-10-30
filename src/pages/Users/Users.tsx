import { Text, FlatList, View, TouchableOpacity, Switch } from "react-native";
import { useState, useEffect } from "react";
import axios from "axios";
import styles from "./style";

// Define the User interface above the component
interface User {
  id: number;
  name: string;
  status: number; // Assuming status is either 1 or 0
}

export default function Users({ navigation }: { navigation: any }) {
  const [users, setUsers] = useState<User[]>([]);
  const [isEnable, setIsEnable] = useState<Record<number, boolean>>({});

  const toggleSwitch = async (id: number, currentStatus: boolean) => {
    const newStatus = !currentStatus;

    try {
      setIsEnable((prevState) => ({
        ...prevState,
        [id]: newStatus,
      }));

      await axios.patch(
        `${process.env.EXPO_PUBLIC_API_URL}/users/${id}/toggle-status`,
        {
          status: newStatus ? 1 : 0,
        }
      );

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
        const response = await axios.get<User[]>(
          `${process.env.EXPO_PUBLIC_API_URL}/users`
        );

        setUsers(response.data);

        const initialSwitchState: Record<number, boolean> = {};

        response.data.forEach((user) => {
          initialSwitchState[user.id] = user.status === 1;
        });

        setIsEnable(initialSwitchState);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    getUsers();
  }, []);

  const renderUsers = ({ item }: { item: User }) => {
    return (
      <View
        style={[
          styles.userContainer,
          isEnable[item.id] ? styles.switchOn : styles.switchOff,
        ]}
      >
        <Switch
          style={styles.switch}
          onValueChange={() => toggleSwitch(item.id, isEnable[item.id])}
          value={isEnable[item.id]}
        />
        <Text style={styles.userName}>{item.name}</Text>
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
        />
      </View>
    </View>
  );
}
