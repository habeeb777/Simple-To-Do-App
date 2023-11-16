import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";

const GoalItem = (props) => {
  return (
    <View style={styles.goalItem}>
      <Pressable
        onPress={props.onDelete}
        // android_ripple={{ color: "#210466" }}
        // for using both android and ios
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goaltext}>{props.text}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  goalItem: {
    borderRadius: 7,
    backgroundColor: "#5e0acc",
    color: "white",
    marginTop: 10,
  },
  goaltext: {
    padding: 5,
    margin: 5,
    color: "white",
  },
  pressedItem: {
    opacity: 0.5,
  },
});

export default GoalItem;
