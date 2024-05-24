import { View, Text, TextInput, Pressable } from "react-native";
import React, { useState, useContext } from "react";
import styles from "../styles/styles";
import { app } from "../config/firebase.config";
import {
  getAuth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async () => {
    try {
      const auth = getAuth(app);
      const userCred = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      sendEmailVerification(userCred.user);
      console.log(userCred);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View style={styles.container}>
      <Text>Register</Text>
      <TextInput
        value={email}
        onChangeText={setEmail}
        placeholder="Email"
        autoCapitalize="none"
        style={styles.input}
      />
      <TextInput
        value={password}
        onChangeText={setPassword}
        placeholder="Password"
        autoCapitalize="none"
        style={styles.input}
        secureTextEntry
      />
      <Pressable style={styles.btn} onPress={() => handleSignUp()}>
        <Text>Confirm</Text>
      </Pressable>
    </View>
  );
};

export default Register;
