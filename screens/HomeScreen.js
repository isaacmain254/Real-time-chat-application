import React, { useLayoutEffect, useState, useEffect, useContext } from "react";
import {
  Text,
  View,
  Alert,
  BackHandler,
  TouchableOpacity,
  Pressable,
  StyleSheet,
  Image,
} from "react-native";
import ModalMenu from "../components/ModalMenu";
import { Icon } from "@rneui/themed";
import { signOut } from "firebase/auth";
import { auth } from "../FirebaseConfig";
import ImageModal from "../components/ImageModal";
import { AuthContext } from "../context/AuthContext";

const HomeScreen = ({ navigation, route }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [imageModalVisible, setImageModalVisible] = useState(false);
  const { currentUser } = useContext(AuthContext);
  const onRequestClose = () => {
    setModalVisible(!modalVisible);
  };

  // navigate to setting screen from the modal component
  const navigateToSettingScreen = () => {
    navigation.navigate("Settings");
  };

  // navigate to setting screen from the modal component
  const navigateToProfileScreen = () => {
    navigation.navigate("Profile");
  };

  // logOut and redirect to login screen
  const logOut = () => {
    signOut(auth);
    navigation.navigate("Login");
  };
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <View>
          {modalVisible && (
            <ModalMenu
              visible={modalVisible}
              onRequestClose={onRequestClose}
              gotoSettings={navigateToSettingScreen}
              onLogOutPress={logOut}
              gotoProfile={navigateToProfileScreen}
            />
          )}
          <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
            <Icon
              type="ionicon"
              name="ellipsis-vertical-outline"
              color="#fff"
            />
          </TouchableOpacity>
        </View>
      ),
    });
  });
  // listening to backhandler press to exit app
  // useEffect(() => {
  //   const backAction = () => {
  //     if (route.name === "Home") {
  //       Alert.alert("Hold on!", "Are you sure you want to exit?", [
  //         {
  //           text: "Cancel",
  //           onPress: () => null,
  //           style: "cancel",
  //         },
  //         { text: "YES", onPress: () => BackHandler.exitApp() },
  //       ]);
  //     }

  //     return false;
  //   };

  //   const backHandler = BackHandler.addEventListener(
  //     "hardwareBackPress",
  //     backAction
  //   );

  //   return () => backHandler.remove();
  // }, []);
  return (
    <View style={styles.chatContainer}>
      <View style={styles.chat}>
        <View>
          {imageModalVisible && (
            <ImageModal
              visible={imageModalVisible}
              onImageRequestClose={() =>
                setImageModalVisible(!imageModalVisible)
              }
            />
          )}
          <TouchableOpacity
            style={styles.imageContainer}
            onPress={() => setImageModalVisible(!imageModalVisible)}
          >
            <Image
              style={styles.userImage}
              source={require("../images/facebook.png")}
            />
          </TouchableOpacity>
        </View>
        <Pressable
          style={styles.messageView}
          onPress={() => navigation.navigate("ChatRoom")}
        >
          <View style={styles.textView}>
            <Text style={styles.userName}>Isaac</Text>
            <Text
              style={styles.messageText}
              numberOfLines={1}
              ellipsizeMode="tail"
            >
              Hey, how are you??Hey, how are you?? Hey, how are you?? Hey, how
              are you?? Hey, how are you?? Hey, how are you??
            </Text>
          </View>
        </Pressable>
      </View>
      <Text>{typeof currentUser}</Text>
      <Text>{currentUser.email}</Text>

      <Text>{currentUser.uid}</Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  chatContainer: {
    flex: 1,
    backgroundColor: "#fff",
  },

  chat: {
    margin: 9,
    borderColor: "#808080",
    borderBottomWidth: 0.7,
    backgroundColor: "#fff",
    height: 55,
    justifyContent: "center",
    flexDirection: "row",
  },
  imageContainer: { flex: 1 },
  userImage: {
    width: 50,
    height: 50,
    borderColor: "#d3d3d3",
    borderWidth: 1,
    borderRadius: 50 / 2,
  },
  messageView: {
    flex: 4,
    marginLeft: 8,
  },
  textView: {
    flex: 1,
    justifyContent: "space-between",
    paddingBottom: 5,
  },
  messageText: {
    // overflow: "hidden",
    fontSize: 15,
    color: "#696969",
  },
  userName: {
    fontSize: 19,
    fontWeight: "600",
  },
});
