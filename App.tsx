import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { useEffect, useState } from "react";

import Login from "./src/pages/Login/Login";
import Home from "./src/pages/Home/Home";
import Users from "./src/pages/Users/Users";
import NewUser from "./src/pages/NewUser/NewUser";
import Inventories from "./src/pages/Inventories/Inventories";
import Movimentation from "./src/pages/Movimentation/Movimentation";
import NewMovimentation from "./src/pages/NewMovimentation/NewMovimentation";
import MovimentationDriver from "./src/pages/MovimentationDriver/MovimentationDriver";
import Mapa from "./src/pages/Mapa/Mapa";
import Intro from "./src/components/Intro/Intro";

const Stack = createStackNavigator();

export default function App() {
  const [intro, setIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIntro(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      {intro ? (
        <Intro />
      ) : (
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Login">
            <Stack.Screen
              name="Login"
              component={Login}
              options={{
                headerShown: false,
                title: "",
              }}
            />

            <Stack.Screen
              name="Home"
              component={Home}
              options={{
                headerShown: true,
                title: "",
              }}
            />

            <Stack.Screen
              name="Users"
              component={Users}
              options={{
                headerShown: true,
                title: "",
              }}
            />

            <Stack.Screen
              name="New User"
              component={NewUser}
              options={{
                headerShown: true,
                title: "",
              }}
            />

            <Stack.Screen
              name="Inventories"
              component={Inventories}
              options={{
                headerShown: true,
                title: "",
              }}
            />

            <Stack.Screen
              name="Movimentation"
              component={Movimentation}
              options={{
                headerShown: true,
                title: "",
              }}
            />

            <Stack.Screen
              name="New Movimentation"
              component={NewMovimentation}
              options={{
                headerShown: true,
                title: "",
              }}
            />

            <Stack.Screen
              name="Movimentation Driver"
              component={MovimentationDriver}
              options={{
                headerShown: true,
                title: "",
              }}
            />

            <Stack.Screen
              name="Mapa"
              component={Mapa}
              options={{
                headerShown: true,
                title: "",
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      )}
    </>
  );
}
