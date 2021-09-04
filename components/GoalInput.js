import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Modal } from "react-native";

const GoalInput = ({ onPressButton, visible, onPressCancel }) => {
  const [enterGoal, setEnterGoal] = useState("");

  const onTextChange = (event) => {
    return setEnterGoal(event);
  };
  const addGoalHandler = () => {
    onPressButton(enterGoal);
    setEnterGoal("");
  };

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="type your Goals here"
          style={styles.input}
          onChangeText={onTextChange}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="ADD" onPress={addGoalHandler} />
          </View>
          <View style={styles.button}>
            <Button title="CANCEL" color="red" onPress={onPressCancel} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    padding: 10,
    borderBottomColor: "black",
    borderWidth: 1,
    width: "80%",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "60%",
  },
  button: {
    width: "40%",
  },
});

export default GoalInput;
