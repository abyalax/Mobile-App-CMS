import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    scrollContainer: {
        padding: 20,
        backgroundColor: 'white',
    },
    author: {
        display: 'flex',
        flexDirection: 'row',
        gap: 5,
        marginVertical: 10
    },
    authorImage: {
        width: 25,
        height: 25,
        borderRadius: 50
    },
    content: {
        marginTop: 15
    },
    image: {
        flex: 1,
        justifyContent: 'center',
        zIndex: 9
    }
})