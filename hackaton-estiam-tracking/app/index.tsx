import { Text, View, TextInput, Button, Alert, StyleSheet } from "react-native";
import React, { useState } from "react";
import { useRouter, useFocusEffect } from 'expo-router';

export default function Index() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

    const handleLogin = () => {
    // Simple validation example
    if (!email || !password) {
      Alert.alert("Erreur", "Veuillez entrer votre email et mot de passe.");
      return;
    }
    // TODO: Replace with real authentication logic
     router.replace('/home/(tabs)/'); // Navigate to the home screen after login
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Connexion</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Mot de passe"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Se connecter" onPress={handleLogin} />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    marginBottom: 24,
    fontWeight: "bold",
  },
  input: {
    width: "100%",
    maxWidth: 300,
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 16,
    paddingHorizontal: 10,
    backgroundColor: "#f9f9f9",
  },
});