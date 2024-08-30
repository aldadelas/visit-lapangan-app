import { useState } from "react";
import { FormModel, FormType } from "./FormModel";
import { TextInput, StyleSheet } from "react-native";

interface GeneralFormProps {
    formProps: FormModel;
}

export default function GeneralForm(props: GeneralFormProps) {
    const [ inputValue, setInputValue ] = useState(props.formProps.value);
    const onChangeText = (text: string) => {
        props.formProps.value = text;
        setInputValue(text);
    }
    if (props.formProps.type === FormType.TEXT) {
        return (
            <TextInput placeholder={props.formProps.placeholder} style={styles.textInput} onChangeText={onChangeText} value={inputValue}/>
        )
    } else if (props.formProps.type === FormType.TEXTAREA) {
        return (
            <TextInput multiline={true} placeholder={props.formProps.placeholder} style={styles.textInput} onChangeText={onChangeText} value={inputValue}/>
        )
    } else if (props.formProps.type === FormType.PASSWORD) {
        return (
            <TextInput secureTextEntry={true} placeholder={props.formProps.placeholder} style={styles.textInput} onChangeText={onChangeText} value={inputValue}/>
        )
    }
    
}

const styles = StyleSheet.create({
    textInput: {
        width: "auto",
        borderWidth: 1.5,
        borderColor: '#ccc',
        padding: 8,
        marginBottom: 16,
        borderRadius: 5,
        backgroundColor: '#fff',
      },
  });