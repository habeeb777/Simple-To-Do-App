import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Modal,
  Image,
} from "react-native";
import React, { useState } from "react";

const GoalInput = (props) => {
  const [goalText, setGoalText] = useState("");
  const goalInputHandler = (text) => {
    setGoalText(text);
  };
  const addGoalHandler = () => {
    props.onAddGoal(goalText);
    props.onCloseModal();
  };

  return (
    <Modal visible={props.visible} animationType="fade">
      <View style={styles.inputContainer}>
        <Image
          source={require("../assets/images/Goal.png")}
          style={styles.image}
        />
        <TextInput
          onChangeText={goalInputHandler}
          placeholder="Type your Goal"
          style={styles.textInput}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              color="#f31282"
              title="Cancel"
              onPress={props.onCloseModal}
            />
          </View>
          <View style={styles.button}>
            <Button color="#5e0acc" onPress={addGoalHandler} title="Add Goal" />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    // paddingBottom: 25,
    borderBottomWidth: 1,
    borderColor: "#cccccc",
    flex: 1,
    padding: 16,
    backgroundColor: "#1A0037",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "100%",
    padding: 5,
    borderRadius: 6,
    backgroundColor: "#e4d0ff",
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 16,
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
  image: {
    width: 100,
    height: 100,
    margin: 30,
  },
});
