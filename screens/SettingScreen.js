import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

const SettingScreen = () => {
  return (
    <View style={styles.settingView}>
      <Pressable>
        <Text>ghjkl;</Text>
      </Pressable>
    </View>
  );
};

export default SettingScreen;

const styles = StyleSheet.create({
  settingView: {
    flex: 1,
  },
});
