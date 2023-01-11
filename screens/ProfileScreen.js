import React, { useContext, useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { View, Text, StyleSheet } from "react-native";
import { Icon } from "@rneui/themed";
import * as ImagePicker from "expo-image-picker";
import { AuthContext } from "../context/AuthContext";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../FirebaseConfig";
import { updateProfile } from "firebase/auth";

const ProfileScreen = () => {
  const [userName, setUserName] = useState("");
  const [profileImage, setProfileImage] = useState();
  const currentUser = useContext(AuthContext);
  const [error, setError] = useState(null);

  // image picker
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    // console.log(result);
    if (!result.canceled) {
      setProfileImage(result.assets[0].uri);
    }
  };

  // update current user profile
  const updateUserProfile = async () => {
    try {
      await updateProfile(currentUser, {
        displayName: userName,
      });
      await setDoc(
        doc(db, "users", currentUser.uid),
        {
          displayName: userName,
        },
        { merge: true }
      );
    } catch (err) {
      setError(err.message);
    }
    setUserName("");
  };

  console.log(currentUser);
  return (
    <View style={styles.profileContainer}>
      <View style={styles.profileImage}>
        {profileImage && (
          <Image
            source={{ uri: profileImage }}
            resizeMode="contain"
            style={styles.image}
          />
        )}

        <TouchableOpacity style={styles.iconOutline}>
          <Icon name="camera" type="ionicon" color="#fff" onPress={pickImage} />
        </TouchableOpacity>
        <Text>{currentUser.displayName}</Text>
        {error && <Text>{error}</Text>}
      </View>

      <TextInput
        style={styles.nameInput}
        placeholder="Enter your user name"
        value={userName}
        onChangeText={(name) => setUserName(name)}
        underlineColorAndroid={"transparent"}
      />
      <View style={styles.save}>
        <TouchableOpacity style={styles.button} onPress={updateUserProfile}>
          <Text
            style={{
              fontSize: 20,
            }}
          >
            Save
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProfileScreen;
const dim1 = 120;
const dim2 = 40;

const styles = StyleSheet.create({
  profileContainer: {
    flex: 1,
  },
  profileImage: {
    backgroundColor: "#ebecf0",
    height: 200,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: dim1,
    height: dim1,
    borderRadius: dim1 / 2,
    borderColor: "#212121",
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  iconOutline: {
    width: dim2,
    height: dim2,
    backgroundColor: "#1e90ff",
    borderRadius: dim2 / 2,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 75,
    marginTop: -35,
  },
  nameInput: {
    marginHorizontal: 18,
    paddingHorizontal: 5,
    fontSize: 17,
    borderBottomColor: "#1e90ff",
    borderBottomWidth: 1,
  },
});
