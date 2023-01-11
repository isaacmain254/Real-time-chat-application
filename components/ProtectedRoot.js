import { useNavigation } from "@react-navigation/native";
import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const ProtectedRoot = ({ children }) => {
  const naigation = useNavigation();
  const { currentUser } = useContext(AuthContext);
  if (!currentUser) {
    navigation.navigate("Login");
  }
  return children;
};

export default ProtectedRoot;
