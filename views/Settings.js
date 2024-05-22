import { View, Text } from "react-native";
import React, { useEffect } from "react";
import styles from "../styles/styles";

const Settings = () => {
  useEffect(() => {
    const fff = async () => {
      try {
        // Gets FirebaseApp and returns Auth object​
        const auth = getAuth(app); // Access to authentication service​
        onAuthStateChanged(auth, async (user) => {
          // Signin as anonymous​
          if (user === null) await signInAnonymously(auth);
          // Access to data that does not require personal authentication​
          getPublicData();
        });
      } catch (error) {
        console.log(error);
      }
    };

    fff();
  }, []);
  return (
    <View style={styles.container}>
      <Text>Settings</Text>
    </View>
  );
};

export default Settings;
