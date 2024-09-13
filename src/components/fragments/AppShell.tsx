import { View, StyleSheet, Text } from 'react-native';
import React from 'react';
import RegisterView from '../views/auth/register';
import LoginView from '../views/auth/login';
import HomeViews from '../views/home';
import Details from '../views/details';
import {
    useFonts,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold,
    Inter_900Black,
} from '@expo-google-fonts/inter';
import Navigation from './navigation';

const AppShell = () => {

    let [fontsLoaded] = useFonts({
        Inter_400Regular,
        Inter_500Medium,
        Inter_600SemiBold,
        Inter_700Bold,
        Inter_800ExtraBold,
        Inter_900Black,
    });
    if (fontsLoaded) {
        return (
            <View style={styles.container}>
                {/* <LoginView/> */}
                <RegisterView/>
                {/* <HomeViews /> */}
                {/* <Details/> */}
                {/* <Navigation /> */}
                {/* <Text style={{fontFamily: 'Inter_700Bold'}}>Inter_700Bold</Text>
                <Text style={{fontFamily: 'Inter_800ExtraBold'}}>Inter_800ExtraBold</Text>
                <Text style={{fontFamily: 'Inter_900Black'}}>Inter_900Black</Text> */}
            </View>
        );
    } else {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Loading...</Text>
            </View>
        )
    }
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default AppShell;
