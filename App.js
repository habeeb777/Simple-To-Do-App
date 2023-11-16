import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Button,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import GoalItem from "./componenets/GoalItem";
import GoalInput from "./componenets/GoalInput";

export default function App() {
  const [goals, setGoals] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const addGoalHandler = (goalText) => {
    setGoals((currentGoals) => {
      return [...currentGoals, goalText];
    });
  };
  const startAddGoalhandler = () => {
    setIsModalVisible(true);
  };
  const closeAddGoalhandler = () => {
    setIsModalVisible(false);
  };
  const deleteItem = (index) => {
    const newGoals = goals.filter((el, i) => i != index);
    setGoals(newGoals);
  };

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button
          title="Add New goal"
          color="#A070D6"
          onPress={startAddGoalhandler}
        />
        {/* {isModalVisible && <GoalInput onAddGoal={addGoalHandler} />} */}
        <GoalInput
          visible={isModalVisible}
          onAddGoal={addGoalHandler}
          onCloseModal={closeAddGoalhandler}
        />
        <View style={styles.goalContainer}>
          <Text style={styles.goalList}>List of Goals:</Text>
          {/* using ScrollView Componenet, this will render everything 
        when we add so it affects the performance */}
          {/* <ScrollView>
          {goals.map((goal, index) => (
            // coding for both android and ios devices
            <View key={index} style={styles.goalItem}>
              <Text style={styles.goaltext}>{goal}</Text>
            </View>
          ))}
        </ScrollView> */}
          {/* in order to overcome the rendering problem,
         we can use FlatList component */}
          <FlatList
            data={goals}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  text={itemData.item}
                  onDelete={() => deleteItem(itemData.index)}
                />
              );
            }}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 15,
    backgroundColor: "#1A0037",
  },
  // inputContainer: {
  //   flexDirection: "row",
  //   justifyContent: "space-between",
  //   alignItems: "center",
  //   paddingBottom: 25,
  //   borderBottomWidth: 1,
  //   borderColor: "#cccccc",
  //   flex: 0.5,
  // },
  // textInput: {
  //   borderWidth: 1,
  //   borderColor: "#cccccc",
  //   width: "70%",
  //   marginRight: 10,
  //   padding: 5,
  // },
  goalContainer: {
    flex: 4,
  },
  goalList: {
    marginTop: 10,
    marginBottom: 10,
    padding: 8,
    backgroundColor: "#ff4dd2",
  },
  // goalItem: {
  //   padding: 5,
  //   margin: 5,
  //   borderRadius: 7,
  //   backgroundColor: "#5e0acc",
  //   color: "white",
  // },
  // goaltext: {
  //   color: "white",
  // },
});
