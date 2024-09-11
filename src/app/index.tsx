import { StyleSheet, View } from 'react-native'
import FormInput from '../components/Form';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import RegisterView from '../components/views/auth';
import HomeViews from '../components/views/home';

const index = () => {
    return (
        <LinearGradient
            colors={['blue', '#A25BCD']}
            start={{ x: 0, y: 1 }}
            end={{ x: 1, y: 0 }}
            style={styles.gradient}
        >
            <View>
                {/* <RegisterView/> */}
                <HomeViews/>
            </View>
        </LinearGradient>
    )
}
const styles = StyleSheet.create({
    gradient: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 8,
        padding: 20,
        backgroundColor: 'chocolate',
    },
});

export default index