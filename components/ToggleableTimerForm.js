import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import TimerForm from "../TimerForm";
import TimerButton from "../TimerButton";

const ToggleableTimerForm = ({handleFormClose}) => {

    const [isOpen, setIsOpen] = useState(false);

  const handleFormOpen = () => { setIsOpen(true) }

    
    console.log(isOpen);

  return (
    <View style={[styles.container, !isOpen && styles.buttonPadding]}>
      {isOpen ? <TimerForm /> : <TimerButton title="+" color="black"
              onPress={handleFormOpen} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10
  },
  buttonPadding: {
    paddingHorizontal: 15
  }
});

export default ToggleableTimerForm;
