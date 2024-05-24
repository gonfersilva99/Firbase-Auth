import { View, Text, TextInput, Pressable } from "react-native";
import React, { useState, useContext } from "react";
import styles from "../styles/styles";
import {
  collection,
  addDoc,
  doc,
  setDoc,
  updateDoc,
  serverTimestamp,
  deleteDoc,
  deleteField,
  getDoc,
  getDocs,
  query,
  where,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../config/firebase.config";
import { LoggedUserContext } from "../context/users";

const Profile = () => {
  const { loggedUser } = useContext(LoggedUserContext);
  const [animalName, setAnimalName] = useState("");
  const [animalColor, setAnimalColor] = useState("");
  console.log(loggedUser);

  const addAnimal = async () => {
    try {
      const docRef = await addDoc(collection(db, "Animals"), {
        name: animalName,
        color: animalColor,
      });

      console.log("ID do documento (automaticamente atribuído): ", docRef);
    } catch (e) {
      console.error("Error ao adicionar documento: ", e);
    }
  };

  const setAnimal = async () => {
    try {
      const setDoc = await setDoc(doc(db, "Animals", "lFeiCULpWNANQSEj7xri"), {
        name: animalName,
        color: animalColor,
      });

      console.log("ID do documento atualizado: ", setDoc);
    } catch (e) {
      console.error("Error ao adicionar documento: ", e);
    }
  };

  const updateAnimal = async () => {
    try {
      await updateDoc(doc(db, "Animals", "lFeiCULpWNANQSEj7xri"), {
        color: animalColor,
        timestamp: serverTimestamp(),
      });

      console.log("ID do documento atualizado: ");
    } catch (e) {
      console.error("Error ao adicionar documento: ", e);
    }
  };

  const deleteAnimal = async () => {
    try {
      const docRef = doc(db, "Animals", "lFeiCULpWNANQSEj7xri");
      // await updateDoc(doc(db, "Animals", "lFeiCULpWNANQSEj7xri"), {
      //   color: deleteField(),
      // });

      await deleteDoc(docRef);

      // console.log("Campo apagado!");
      console.log("Documento apagado!");
    } catch (e) {
      console.error("Error ao adicionar documento: ", e);
    }
  };

  const getAnimal = async () => {
    const docRef = doc(db, "Animals", "GoOIKC5NHJQbhGy7z7wW");

    const dog = await getDoc(docRef);

    if (dog.exists()) {
      console.log("Document data:", dog.data());
    } else {
      console.log("No such document!");
    }
  };

  const queryAnimal = async () => {
    const q = query(collection(db, "Animals"), where("age", "<=", 10));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots​
      console.log(doc.id, " => ", doc.data());
    });
  };

  const unsub = onSnapshot(
    doc(db, "Animals", "tPlrhyZMgrMGN3kU6EQg"),
    (doc) => {
      console.log("Current data: ", doc.data());
    }
  );

  return (
    <View style={styles.container}>
      <Text>Profile</Text>
      <Text>Adicionar novo animal</Text>
      <TextInput
        value={animalName}
        onChangeText={setAnimalName}
        placeholder="Animal"
        autoCapitalize="none"
        style={styles.input}
      />
      <TextInput
        value={animalColor}
        onChangeText={setAnimalColor}
        placeholder="Color"
        autoCapitalize="none"
        style={styles.input}
      />
      <Pressable style={styles.btn} onPress={() => updateAnimal()}>
        <Text>Confirm</Text>
      </Pressable>
      <Pressable style={styles.btn} onPress={() => deleteAnimal()}>
        <Text>DELETE</Text>
      </Pressable>
      <Pressable style={styles.btn} onPress={() => getAnimal()}>
        <Text>GET DOG</Text>
      </Pressable>
      <Pressable style={styles.btn} onPress={() => queryAnimal()}>
        <Text>query animal que tem cor castanha</Text>
      </Pressable>
    </View>
  );
};

export default Profile;
