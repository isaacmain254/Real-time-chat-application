import React, { useState } from "react";
import {
  Image,
  Text,
  TextInput,
  View,
  StyleSheet,
  KeyboardAvoidingView,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { Icon } from "@rneui/themed";

// custom header title component
export function ChatHeaderTitle() {
  return (
    <View style={styles.customTitle}>
      <Image
        source={require("../images/facebook.png")}
        style={styles.recepientImage}
      />
      <View style={styles.recepientInfo}>
        <Text style={styles.recepientName}>Isaac</Text>
        <Text style={styles.lastSeen}>Last seen ...</Text>
      </View>
    </View>
  );
}

const ChatScreen = () => {
  const [message, setMessage] = useState("");
  const sendButtonPress = () => {
    setMessage(message);
    setMessage("");
  };
  return (
    <View style={styles.chatContainer}>
      <ImageBackground
        source={require("../images/bg.jpg")}
        resizeMode="cover"
        style={styles.backgroundImage}
      >
        <View>
          <Text>chat Screen</Text>
          <Text>{message}</Text>
        </View>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.input}
        >
          <View style={styles.inputContainer}>
            <Icon name="happy-outline" type="ionicon" color="#444" size={26} />
            <TextInput
              style={styles.textInput}
              placeholder="Type your message..."
              underlineColorAndroid="transparent"
              multiline
              value={message}
              onChangeText={(text) => setMessage(text)}
            />

            <Icon name="attach-outline" type="ionicon" color="#444" size={28} />
          </View>
          <TouchableOpacity onPress={sendButtonPress}>
            {message !== "" ? (
              <Icon name="send" type="ionicon" color="#1e90ff" />
            ) : (
              <Icon name="mic" type="ionicon" color="#1e90ff" size={28} />
            )}
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </ImageBackground>
    </View>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  customTitle: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: -25,
  },
  recepientImage: {
    width: 45,
    height: 45,
    borderRadius: 50 / 2,
  },
  recepientInfo: {
    // justifyContent: "space-between",
    marginLeft: 9,
  },
  recepientName: {
    fontSize: 20,
    fontWeight: "600",
    color: "#fff",
  },
  lastSeen: {
    color: "#fff",
    fontSize: 14,
  },
  chatContainer: {
    flex: 1,
  },
  input: {
    flex: 1,
    flexDirection: "row",
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    bottom: 5,
    left: 0,
    right: 0,
  },
  inputContainer: {
    flexDirection: "row",
    margin: 8,
    borderColor: "#222",
    borderWidth: 1,
    borderRadius: 17,
    justifyContent: "space-evenly",
  },
  textInput: {
    width: "67%",
    // borderColor: "blue",
    // borderWidth: 1,
    marginLeft: 9,
    fontSize: 18,
    padding: 4,
  },
  backgroundImage: { flex: 1 },
});
