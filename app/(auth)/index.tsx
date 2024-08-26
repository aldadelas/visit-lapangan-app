import { FormModel, FormType } from "@/components/form/FormModel";
import GeneralForm from "@/components/form/GeneralForm";
import { View, Text, TextInput, StyleSheet, Button } from "react-native";

export default function LoginScreen() {
  const loginForm: FormModel[] = [{
    type: FormType.TEXT,
    placeholder: "Username",
    value: ""
  }, {
    type: FormType.PASSWORD,
    placeholder: "Password",
    value: ""
  }]
  return (
    <View style={styles.flexContainer}>
      <Text style={styles.titleContainer}>LOGIN</Text>
      {loginForm.map((form, index) => (
        <GeneralForm key={"login-form-" + index} type={form.type} placeholder={form.placeholder} value={form.value} />
      ))}
      <Button title="Login" />
    </View>
  );
}

const styles = StyleSheet.create({
  flexContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleContainer: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  textInput: {
    width: 250,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginBottom: 16,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  button: {
    borderWidth: 3,
    borderColor: '#ccc',
  }
});