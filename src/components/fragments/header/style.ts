import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
    container: {
        height: 'auto',
        paddingHorizontal: 20,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontSize: 30,
        height: 60,
        paddingHorizontal: 5,
    },
    title : {
        fontSize: 25,
        fontWeight: 'bold'
    },
    scrollContainer: {
        marginTop: 20,
        maxHeight: 40,
        flexDirection: 'row',
        paddingHorizontal: 10,
        borderBottomWidth: 1,
        borderColor: 'gray',
        paddingBottom: 5
    },
    itemContainer: {
        marginRight: 20,
    },
    itemText: {
        fontSize: 15,
        color: 'black',
    },
})