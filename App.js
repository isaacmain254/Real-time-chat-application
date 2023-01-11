import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useContext, useEffect } from "react";
import { StyleSheet, Pressable } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import NetworkCheck from "./components/NetworkCheck";
import SettingScreen from "./screens/SettingScreen";
import AuthContextProvider from "./context/AuthContext";
import ChatScreen from "./screens/ChatScreen";
import { ChatHeaderTitle } from "./screens/ChatScreen";
import { Icon } from "@rneui/themed";
import ProfileScreen from "./screens/ProfileScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <NetworkCheck />

      <NavigationContainer>
        <AuthContextProvider>
          <Stack.Navigator
            initialRouteName="Login"
            screenOptions={{
              headerStyle: {
                backgroundColor: "#1e90ff",
              },
              headerTintColor: "#fff",
            }}
          >
            <Stack.Screen
              name="Login"
              component={LoginScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Register"
              component={RegisterScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{
                headerBackVisible: false,
                headerTitleAlign: "center",
                // headerRight: () => (
                //   <Icon type="ionicon" name="ellipsis-vertical-outline" />
                // ),
              }}
            />
            <Stack.Screen name="Settings" component={SettingScreen} />
            <Stack.Screen name="Profile" component={ProfileScreen} />
            <Stack.Screen
              name="ChatRoom"
              component={ChatScreen}
              options={{
                headerTitle: (props) => <ChatHeaderTitle {...props} />,
                headerRight: () => (
                  <Pressable>
                    <Icon
                      type="ionicon"
                      name="ellipsis-vertical-outline"
                      color="#fff"
                    />
                  </Pressable>
                ),
              }}
            />
          </Stack.Navigator>
        </AuthContextProvider>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
});
