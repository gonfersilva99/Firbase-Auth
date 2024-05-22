import { View, Text, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import styles from "../styles/styles";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { app } from "../config/firebase.config";

const Home = ({ navigation }) => {
  const signOutNow = async () => {
    try {
      const auth = getAuth();
      await signOut(auth);
    } catch (error) {
      // An error happened.​
      const errCode = error.code;
      const errMessage = error.message;

      if (errCode === "auth/invalid-user-token") {
        console.log(errMessage);
      }
      if (errCode === "auth/user-tokenexpired") {
        console.log(errMessage);
      } // Token is no longer
      if (errCode === "auth/null-user") {
        console.log(errMessage);
      } // User is set to null
      if (errCode === "auth/tenant-id-mismatch") {
        console.log(errMessage);
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Text>Welcome user</Text>
      <Pressable onPress={() => signOutNow()} style={styles.btn}>
        <Text>Sign out</Text>
      </Pressable>
    </View>
  );
};

export default Home;
