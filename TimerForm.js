import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import TimerButton from "./TimerButton";

const TimerForm = ({ id, title, project, onFormClose }) => {

  const [estado, setEstado] = useState({
    title: id ? title : "",
    project: id ? project : ""
  });

  const handleTitleChange = title => setEstado({ title });
  const handleProjectChange = project => setEstado({ project });


  const handleSubmit = e => {
    e.preventDefault();
    console.log("hicistes click en en create");
  };

  const handleFormClose = e => {
    e.preventDefault();
    console.log("hicistes click en cancel");
  };

  const submitText = id ? "Updtated" : "Create";

  return (
    <View style={styles.formContainer}>
      <View style={styles.attributeContainer}>
        <Text style={styles.textInputTitle}> Title </Text>
        <View style={styles.textInputContainer}>
          <TextInput
            style={styles.textInput}
            underlineColorAndroid="transparent"
            value={estado.title}
            onChangeText={handleTitleChange}
          />
        </View>
      </View>
      <View style={styles.attributeContainer}>
        <Text style={styles.textInputTitle}> Project </Text>
        <View style={styles.textInputContainer}>
          <TextInput
            style={styles.textInput}
            underlineColorAndroid="transparent"
            value={estado.project}
            onChangeText={handleProjectChange}
          />
        </View>
      </View>
      <View style={styles.buttonGroup}>
        <TimerButton
          small
          color="#21BA45" // updated or create
          title={submitText}
          onPress={handleSubmit}
        />
        <TimerButton
          small
          color="#DB2828"
          title="Cancel"
          onPress={handleFormClose}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    backgroundColor: "white",
    borderColor: "#D6D7DA",
    borderWidth: 2,
    borderRadius: 10,
    padding: 15,
    margin: 15,
    marginBottom: 0
  },
  attributeContainer: {
    marginVertical: 8
  },
  textInputContainer: {
    borderColor: "#D6D7DA",
    borderRadius: 2,
    borderWidth: 1,
    marginBottom: 5
  },
  textInput: {
    height: 30,
    padding: 5,
    fontSize: 12
  },
  textInputTitle: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 5
  },
  buttonGroup: {
    flexDirection: "row",
    justifyContent: "space-between"
  }
});

export default TimerForm;
