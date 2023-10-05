import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { useAuth } from "./app/context/AuthContext";
import Home from "./screens/Home";
import Login from "./screens/Login";
import Profile from "./screens/Profile";
import Register from "./screens/Register";
import Stats from "./screens/Stats";
import Exercises from "./screens/Exercises";
import MyExercises from "./screens/MyExercises";
import BrowseExercises from "./screens/BrowseExercises";

const Drawer = createDrawerNavigator();

export const Layout = () => {
  const { authState } = useAuth();

  return (
    <NavigationContainer>
      <Drawer.Navigator>
        {authState?.authenticated ? (
          <>
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="Profile" component={Profile} />
            <Drawer.Screen name="Stats" component={Stats} />
            <Drawer.Screen
              name="Exercises"
              component={ExerciseStack}
              options={{
                headerShown:false,
              }}
            />
          </>
        ) : (
          <>
            <Drawer.Screen name="Login" component={Login} />
            <Drawer.Screen name="Register" component={Register} />
          </>
        )}
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

const ExerciseStack = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Exercises" component={Exercises} />
      <Drawer.Screen name="My Exercises" component={MyExercises} />
      <Drawer.Screen name="Browse Exercises" component={BrowseExercises} />
    </Drawer.Navigator>
  );
};
