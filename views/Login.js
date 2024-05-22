import { View, Text, Pressable, TextInput } from "react-native";
import React, { useState } from "react";
import styles from "../styles/styles";
import {
  getAuth,
  onAuthStateChanged,
  signInAnonymously,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { app } from "../config/firebase.config";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = async () => {
    try {
      const auth = getAuth(app);
      const userCred = await signInWithEmailAndPassword(auth, email, password);
      await auth.currentUser.reload();
      const user = userCred.user;
      if (user) {
        navigation.navigate("Tab", { screen: "Home" });
      }
    } catch (error) {
      const errCode = error.code;
      const errMessage = error.message;
      if (errCode === "auth/invalid-credential") {
        console.log("Invalid Credential");
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text>Login</Text>

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
      <Pressable style={styles.btn} onPress={() => handleSignIn()}>
        <Text>Confirm</Text>
      </Pressable>
      <Pressable
        onPress={() => navigation.navigate("Register")}
        style={styles.btn}
      >
        <Text>Register</Text>
      </Pressable>
      {/* <Pressable
        onPress={() => navigation.navigate("Tab", { screen: "Settings" })}
        style={styles.btn}
      >
        <Text>Settings</Text>
      </Pressable>
      <Pressable
        onPress={() => navigation.navigate("Tab", { screen: "Home" })}
        style={styles.btn}
      >
        <Text>Home</Text>
      </Pressable> */}
    </View>
  );
};

export default Login;
