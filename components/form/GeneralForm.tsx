import { Text, TextInput, View } from "react-native";
import { FormModel, FormType } from "./FormModel";

export default function GeneralForm(formProps: FormModel) {
    if (formProps.type === FormType.TEXT) {
        return (
            <TextInput placeholder={formProps.placeholder} />
        )
    } else if (formProps.type === FormType.TEXTAREA) {
        return (
            <TextInput multiline={true} placeholder={formProps.placeholder} />
        )
    } else if (formProps.type === FormType.PASSWORD) {
        return (
            <TextInput secureTextEntry={true} placeholder={formProps.placeholder} />
        )
    }
    
}