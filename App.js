import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
//import "react-native-get-random-values";
import uuid from "uuid-random";

import EditableTimer from "./components/EditableTimer";
import ToggleableTimerForm from "./components/ToggleableTimerForm";

export default function App() {

  //console.log(uuid());

  const [timers, setTimers] = useState([
    {
      title: "Now the lawn",
      project: "House Chores",
      id: uuid(),
      elapsed: 5456099,
      isRunning: true,
    },
    {
      title: "Bake Squash",
      project: "Kitchen Chores",
      id: uuid(),
      elapsed: 1273998,
      isRunning: false,
    }
  ]);

 // console.log(timers);

  return (
    <View style={styles.appContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Timers</Text>
      </View>
      <ScrollView style={styles.timerList}>
        <ToggleableTimerForm />
        {timers.map(({ title, project, id, elapsed, isRunning }) => (
          <EditableTimer
            key={id}
            id={id}
            title={title}
            project={project}
            elapsed={elapsed}
            isRunning={isRunning}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1
  },
  titleContainer: {
    paddingTop: 35,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#D6D7DA"
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center"
  },
  timerList: {
    paddingBottom: 15
  }
});
