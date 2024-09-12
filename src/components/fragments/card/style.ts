import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
    card: {
        marginBottom: 20,
        borderRadius: 8,
        maxHeight: 70,
        overflow: 'hidden',
    },
    row: {
        flexDirection: 'row',
    },
    column: {
        flexDirection: 'column',
    },
    cardImage: {
        width: 70,
        height: 70,
        borderRadius: 8,
    },
    cardContent: {
        flex: 1,
        marginLeft: 10,
        justifyContent: 'center',
        alignContent: 'center',
        maxWidth: '90%',
    },
    author: {
        fontSize: 12,
        fontWeight: 'bold',
    },
    title: {
        fontSize: 15,
        fontWeight: 'bold',
    },
    textContent: {
        fontSize: 15,
    },
    btn: {
        justifyContent: 'center',
        alignItems: 'center',
        borderStyle: 'solid',
        borderWidth: 0.5,
        borderColor: 'gray',
        maxHeight: 30,
        paddingRight: 10,
        borderRadius: 20,
    },
    list: {
        paddingHorizontal: 10,
        paddingTop: 20,
    },
})