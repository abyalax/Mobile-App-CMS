import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
    },
    header: {
        backgroundColor: 'white',
        color: 'black',
        fontSize: 30,
        paddingHorizontal: 5,
    },
    scrollContainer: {
        marginTop: 20,
        height: 60,
        flexDirection: 'row',
        paddingHorizontal: 10,
        marginBottom: 6,
        borderBottomWidth: 1,
        borderColor: 'gray',
    },
    itemContainer: {
        marginRight: 20,
        marginBottom: 10,
    },
    itemText: {
        fontSize: 20,
        color: 'black',
    },
    bannerText: {
        fontSize: 20,
        marginVertical: 20,
        fontWeight: 'bold',
    },
});
export default styles