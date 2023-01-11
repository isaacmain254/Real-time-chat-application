import React from "react";
import { SafeAreaView } from "react-native";

const StatusBar = () => {
  return (
    <SafeAreaView>
      <StatusBar animated={true} backgroundColor="#1e90ff" barStyle="#fff" />
    </SafeAreaView>
  );
};

export default StatusBar;
