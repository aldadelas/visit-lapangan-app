import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        backgroundColor: 'white',
        padding: 16,
    },
    cardContainer: {
        padding: 16,
        backgroundColor: 'white',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        shadowRadius: 3,
        shadowColor: 'black',
        shadowOpacity: 0.2,
        shadowOffset: {
        width: 2,
        height: 1,
        },
    }
});