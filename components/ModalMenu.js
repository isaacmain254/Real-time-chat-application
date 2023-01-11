import React from "react";
import {
  Text,
  Modal,
  View,
  StyleSheet,
  BackHandler,
  TouchableOpacity,
} from "react-native";

const ModalMenu = ({
  visible,
  onRequestClose,
  gotoSettings,
  onLogOutPress,
  gotoProfile,
}) => {
  return (
    <View style={styles.modalContainer}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={visible}
        onRequestClose={onRequestClose}
        statusBarTranslucent={true}
      >
        <View style={styles.modalView}>
          <TouchableOpacity
            style={styles.pressableButton}
            onPress={gotoProfile}
          >
            <Text style={styles.modalText}>Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.pressableButton}
            onPress={gotoSettings}
          >
            <Text style={styles.modalText}>Settings</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.pressableButton}
            onPress={onLogOutPress}
          >
            <Text style={styles.modalText}>Logout</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.pressableButton}
            onPress={() => BackHandler.exitApp()}
          >
            <Text style={[styles.modalText, styles.exitButton]}>Exit</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

export default ModalMenu;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    width: "60%",
  },
  modalView: {
    width: "60%",
    // borderColor: "grey",
    // borderWidth: 1,
    alignSelf: "flex-end",
    marginTop: 40,
    marginRight: 10,
    borderRadius: 5,
    overflow: "hidden",
    backgroundColor: "#ebecf0",
    // padding: 15,
  },
  pressableButton: {
    // width: "100%",
    // alignContent: "center",
    // borderColor: "red",
    // borderBottomWidth: 0.4,
  },
  modalText: {
    // textAlign: "center",
    fontSize: 15,
    color: "#212121",
    padding: 8,
  },
  exitButton: {
    paddingTop: 7,
  },
});
