import { View, Text, TextInput } from "react-native";
import React from "react";
import styles from "../styles/styles";

const Input = ({ color, ola }) => {
  return (
    <TextInput
      style={styles.input}
      onChangeText={ola}
      value={color}
      placeholder="placeholder"
    />
  );
};

export default Input;
