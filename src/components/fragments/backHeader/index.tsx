import { View, Text, Platform, StyleSheet } from 'react-native'
import React from 'react'
import { Appbar, IconButton } from 'react-native-paper'

const HeaderBack = () => {

    const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';

    return (
        <View style={styles.container}>
            <View style={styles.wrapper}>
                <View style={styles.icon}>
                    <IconButton icon="arrow-left" onPress={() => { }} iconColor="white" />
                </View>
                <Text style={styles.text}>Continue Reading</Text>
                <View style={styles.icon}>
                    <IconButton icon={MORE_ICON} onPress={() => { }} iconColor='white' />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        minHeight: 54,
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 100,
        paddingTop: 30
    },
    wrapper: {
        flexDirection: 'row',
        gap: 60,
        alignItems: 'center',
    },
    icon: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 50,
        width: 40,
        height: 40
    },
    text: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold'
    }
})

export default HeaderBack