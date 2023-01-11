import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import {
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ActivityIndicator,
} from "react-native";

import { auth } from "../FirebaseConfig";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState();
  const [loading, setLoading] = useState(false);

  const onLoginPress = async () => {
    try {
      setLoading(true);
      await signInWithEmailAndPassword(auth, email, password);
      setLoading(false);
      navigation.navigate("Home");
    } catch (err) {
      console.log("An error occurred");
    }
  };

  if (loading) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <ActivityIndicator size="large" color="#1e90ff" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          style={styles.logoImage}
          source={require("../images/lets-chat.png")}
        />
        <Text style={styles.appName}>Lets Chat</Text>
      </View>
      <Text style={styles.welcome}>Welcome Back</Text>

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.input}
      >
        <TextInput
          style={[styles.inputText, styles.emailInput]}
          placeholder="Enter Your Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          textContentType="emailAddress"
          keyboardType="email-address"
          // onSubmitEditing={}
          underlineColorAndroid={"transparent"}
          inlineImageLeft="email"
        />

        <TextInput
          style={styles.inputText}
          placeholder="PassWord"
          secureTextEntry={true}
          textContentType={"password"}
          value={password}
          onChangeText={(password) => setPassword(password)}
          inlineImageLeft="password"
        />
      </KeyboardAvoidingView>
      <Text style={styles.forgotPassword}>Forgot Password?</Text>
      <TouchableOpacity style={styles.loginButton} onPress={onLoginPress}>
        <Text style={styles.login}>LOGIN</Text>
      </TouchableOpacity>
      <Text style={styles.orText}>-OR-</Text>
      <Text style={styles.signIn}>Sign in with</Text>
      <View style={styles.signInOptions}>
        <TouchableOpacity style={styles.auth}>
          <Image
            style={styles.signWith}
            source={require("../images/google.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.auth}>
          <Image
            style={styles.signWith}
            source={require("../images/facebook.png")}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.haveAccount}>
        <Text style={styles.noAccount}>Don't have an account ?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Register")}>
          <Text style={styles.signUp}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    width: "100%",
    position: "relative",
    // backgroundColor: "#0437f2",
  },
  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 55,
  },
  logoImage: {
    width: 32,
    height: 32,
  },
  appName: {
    fontSize: 20,
    paddingLeft: 20,
  },
  welcome: {
    fontSize: 23,
    marginTop: 24,
    marginBottom: 19,
  },
  input: {
    width: "85%",
    // borderWidth: 1,
    // borderColor: "#111",
    justifyContent: "space-between",
  },
  inputText: {
    borderWidth: 1,
    borderColor: "#1e90ff",
    borderRadius: 5,
    fontSize: 18,
    padding: 5,
  },
  emailInput: {
    marginBottom: 25,
  },
  forgotPassword: {
    alignSelf: "flex-end",
    marginTop: 7,
    marginRight: 19,
    fontSize: 14,
  },
  loginButton: {
    marginTop: 21,
    marginBottom: 15,
    width: "85%",
    backgroundColor: "#1e90ff",
    borderRadius: 19,
    padding: 11,
  },
  login: {
    color: "#fff",
    fontSize: 19,
    textAlign: "center",
  },
  orText: {
    fontSize: 19,
    marginBottom: 10,
  },
  signIn: {
    fontSize: 16,
    // marginBottom: 12,
  },
  signInOptions: {
    flexDirection: "row",
  },
  auth: {
    width: 45,
    height: 45,
    borderColor: "#1e90ff",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    borderRadius: 45 / 2,
  },
  signWith: {
    width: 35,
    height: 35,
    borderRadius: 35 / 2,
  },
  haveAccount: {
    marginTop: 17,
    flexDirection: "row",
    alignItems: "center",
  },
  signUp: {
    fontSize: 20,
    marginLeft: 5,
    fontWeight: "600",
    color: "#1e90ff",
  },
  noAccount: {
    fontSize: 16,
  },
});
