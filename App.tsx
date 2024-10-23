import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Login from "./src/pages/Login/Login";
import Home from "./src/pages/Home/Home";
import Users from "./src/pages/Users/Users";
import NewUser from "./src/pages/NewUser/NewUser";
import Inventories from "./src/pages/Inventories/Inventories";
import Movimentation from "./src/pages/Movimentation/Movimentation";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />

        <Stack.Screen name="Home" component={Home} />

        <Stack.Screen name="Users" component={Users} />

        <Stack.Screen name="New User" component={NewUser} />

        <Stack.Screen name="Inventories" component={Inventories} />

        <Stack.Screen name="Movimentation" component={Movimentation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
