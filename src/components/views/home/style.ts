import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
    },
    banner: {
        marginVertical: 5
    },
    bannerImageContainer: {
        width: 366,
        height: 190,
        borderRadius: 20,
    },
    bannerImage: {
        width: 366,
        height: 190,
        borderRadius: 20,
    },
    bannerWrapper: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'flex-end',
        minHeight: 190
    },
    bannerContent: {
        display: 'flex',
        flexDirection: 'column',
    },
    bannerItem: {
        backgroundColor: 'white',
        padding: 4,
        paddingHorizontal: 8,
        borderRadius: 6
    },
    bannerItemText: {
        fontWeight: 'bold'
    },
    author: {
        display: 'flex',
        flexDirection: 'row',
        gap: 5,
        marginVertical: 10
    },
    authorImage: {
        width: 28,
        height: 28,
        borderRadius: 50
    },
    authorText: {
        textDecorationLine: 'underline',
        color: 'white'
    },
    bannerAction: {
        display: 'flex',
        flexDirection: 'column',
        gap: 4,
        marginBottom: 10
    }
});
export default styles