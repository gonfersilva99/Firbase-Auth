import { View, Text } from "react-native";
import React, { useState } from "react";
import Btn from "../components/Btn";
import styles from "../styles/styles";
import Input from "../components/Input";

const Teste = () => {
  const [color, setColor] = useState("White");
  return (
    <View style={styles.container}>
      <Btn name="Button" setColor={setColor} />
      <Input ola={setColor} />
      <Text>{color}</Text>
    </View>
  );
};

export default Teste;
