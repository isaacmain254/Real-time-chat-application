import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, StatusBar } from "react-native";
import NetInfo from "@react-native-community/netinfo";

const NetworkCheck = () => {
  const [isConnected, setIsConnected] = useState(true);
  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      setIsConnected(state.isConnected);
    });

    return () => {
      unsubscribe();
    };
    console.log(isConnected);
  });

  const backgroundColor = isConnected ? "#fff" : "#222";
  const statusBar = (
    <StatusBar
      backgroundColor={backgroundColor}
      barStyle={isConnected ? "dark-content" : "light-content"}
      animated={false}
    />
  );
  return (
    <View style={styles.networkContainer} pointerEvents="none">
      {statusBar}
      {isConnected ? (
        ""
      ) : (
        <View style={styles.noInternet}>
          <Text style={styles.text}>You're not connected to a network</Text>
        </View>
      )}
    </View>
  );
};

export default NetworkCheck;

const styles = StyleSheet.create({
  networkContainer: {
    zIndex: 100,
    elevation: 100,
    position: "absolute",
    marginTop: 30,
    width: "100%",
  },
  noInternet: {
    width: "90%",
    height: 40,
    backgroundColor: "#222",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    borderRadius: 19,
  },
  text: {
    color: "white",
    fontSize: 18,
  },
});
