import React from "react";
import { Image, Modal, View, Text, StyleSheet } from "react-native";

const ImageModal = ({ visible, onImageRequestClose }) => {
  return (
    <View style={styles.modalContainer}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={visible}
        onRequestClose={onImageRequestClose}
      >
        <View style={styles.modalView}>
          <Text>Isaac</Text>
          <Image
            source={require("../images/bg.jpg")}
            style={styles.userImage}
            resizeMode="contain"
          />
        </View>
      </Modal>
    </View>
  );
};

export default ImageModal;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    borderWidth: 1,
    borderColor: "red",
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    width: "80%",
    height: "40%",
    borderWidth: 1,
    borderColor: "red",
    alignSelf: "center",

    backgroundColor: "#fff",
  },
  userImage: {
    width: "100%",
    height: "90%",
  },
});
