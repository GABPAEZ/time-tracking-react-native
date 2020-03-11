import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";

const TimerButton = ({ title, color, small, onPress }) => {
  return (
    <TouchableOpacity
      style={[styles.button, { borderColor: color }]}
      onPress={onPress}
    >
      <Text
        style={[
          styles.buttonText,
          { color },
          small ? styles.small : styles.large
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    marginTop: 10,
    minWidth: 100,
    borderWidth: 2,
    borderRadius: 3
  },
  small: {
    fontSize: 14,
    padding: 5
  },
  large: {
    fontSize: 16,
    padding: 10
  },
  buttonText: {
    textAlign: "center",
    fontWeight: "bold"
  },
  title: {
    fontSize: 14,
    fontWeight: "bold"
  },
  elapsedTime: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    paddingVertical: 10
  }
});
export default TimerButton;
