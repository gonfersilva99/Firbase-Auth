import { View, Text, Pressable } from "react-native";
import React from "react";
import styles from "../styles/styles";

const Btn = ({ name, setColor }) => {
  return (
    <Pressable
      onPress={() => {
        setColor("black");
      }}
      style={styles.btn}
    >
      <Text>{name}</Text>
    </Pressable>
  );
};

export default Btn;
