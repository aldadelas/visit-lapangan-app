import { FormModel, FormType } from "@/components/form/FormModel";
import GeneralForm from "@/components/form/GeneralForm";
import { useState } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

export default function LoginScreen() {
  const forms: FormModel[] = [{
    type: FormType.TEXT,
    placeholder: "Username",
    value: ""
  }, {
    type: FormType.PASSWORD,
    placeholder: "Password",
    value: ""
  }];

  const onPressed = () => {
    console.log(forms)
  }

  return (
    <View style={styles.flexContainer}>
      <View style={styles.cardContainer}>
        <Text style={styles.titleContainer}>LOGIN</Text>
        {forms.map((form, index) => (
          <GeneralForm key={index} formProps={form} />
        ))}
        <Pressable style={styles.button} onPress={onPressed}>
          <Text style={styles.buttonText}>Login</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  flexContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardContainer: {
    width: 350,
    height: 250,
    padding: 16,
    backgroundColor: '#fff',
  },
  titleContainer: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  button: {
    width: 'auto',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: '#4B70F5',
    borderColor: '#4C3BCF',
    padding: 10,
  },
  buttonText: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
  }
});